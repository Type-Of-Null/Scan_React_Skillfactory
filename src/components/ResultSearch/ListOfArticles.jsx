import React, { useEffect, useState, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { useGetArticle } from "../requestsHooks/useGetArticle";
import Article from "./Article";
import searchStore from "../../stores/search.store";
import Loader from "../Loader";

const ListOfArticles = observer(() => {
  const [displayedCount, setDisplayedCount] = useState(10);
  const [initialLoadDone, setInitialLoadDone] = useState(false);
  const fetchArticle = useGetArticle();

  const { IDs, document, isDocumentLoading } = searchStore.state;

  // Загрузка первых 10 статей при монтировании
  useEffect(() => {
    if (IDs.length > 0 && !initialLoadDone && document.length === 0) {
      const loadInitialArticles = async () => {
        const initialIDs = IDs.slice(0, 10);
        await fetchArticle(initialIDs);
        setInitialLoadDone(true);
      };
      loadInitialArticles();
    }
  }, [IDs, initialLoadDone, document.length, fetchArticle]);

  // Проверка, можно ли показать еще статьи
  const canShowMore = displayedCount < IDs.length;

  const showMore = useCallback(async () => {
    if (!canShowMore) return;

		// Следйющие 10 статей
    const nextBatch = IDs.slice(displayedCount, displayedCount + 10);
    setDisplayedCount((prev) => prev + nextBatch.length);

    // Если следующие статьи еще не загружены
    if (displayedCount + nextBatch.length > document.length) {
      await fetchArticle(nextBatch);
    }
  }, [canShowMore, displayedCount, IDs, document.length, fetchArticle]);

  // Отображаемые статьи (максимум 10 за раз)
  const displayedArticles = document.slice(0, displayedCount);
	console.log(displayedArticles)

  // Если нет документов и загрузка завершена
  if (initialLoadDone && document.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="search-result__error search-result-error__info">
          Что-то пошло не так :( <br />
          Попробуйте <Link to="/search">изменить параметры поиска</Link>
        </p>
      </div>
    );
  }

  // Если еще идет первоначальная загрузка
  if (!initialLoadDone && document.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader />
        <p className="ml-4">Загрузка документов...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <h3 className=" font-['Ferry'] leading-none font-black tracking-[0.28px] text-black mb-[58px] max-sm:mb-[34px]
			max-lg:mt-[57px] mt-[107px]">
        Список документов
      </h3>

      <div className="grid grid-cols-2 justify-center max-lg:grid-cols-1">
        {displayedArticles.map((el) => (
          <Article
            key={el.ok.encodedId}
            issueDate={el.ok.issueDate
              .substring(0, 10)
              .split("-")
              .join(".")
              .split(".")
              .reverse()
              .join(".")}
            source={el.ok.source.name}
            title={el.ok.title.text}
            isTechNews={el.ok.attributes.isTechNews}
            isAnnouncement={el.ok.attributes.isAnnouncement}
            isDigest={el.ok.attributes.isDigest}
            content={el.ok.content.markup}
            link={el.ok.url}
            wordCount={el.ok.attributes.wordCount}
          />
        ))}
      </div>

      {canShowMore && !isDocumentLoading && (
        <div className="flex justify-center mb-4">
          <button
            className="bg-[#5970FF]  h-[60px] w-[300px] max-sm:w-[335px] cursor-pointer self-center rounded-[5px] border-none font-['Inter'] text-[22px] max-sm:text-[22px] tracking-[0.88px] text-white"
            onClick={showMore}
          >
            Показать больше
          </button>
        </div>
      )}
    </div>
  );
});

export default ListOfArticles;
