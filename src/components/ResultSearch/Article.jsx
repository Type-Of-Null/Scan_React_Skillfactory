import React from 'react';
import { Link } from 'react-router-dom';
import noImage from '../../assets/img/svg/no-image.svg';

export default function Article(props) {
  let xmlImg;
  if (props.content.match(/https?:\/\/\S+"/g) === null) {
    xmlImg = noImage;
  } else {
    xmlImg = props.content
      .match(/https?:\/\/\S+"/g)
      .toString()
      .replace('"', '');
  }

  const cleanContent = (content) => {
    if (!content) return '';

    return (
      content
        .replace(/<[^>]*>/g, '')
        .replace(/&[a-z]+;/gi, '')
        .replace(/(https?:\/\/[^\s]+)/g, '')
        .substring(0, 400) + (content.length > 400 ? '...' : '')
    ); // Ограничиваем длину
  };

  return (
    <div className="m-0 mx-5 mb-10 grid w-[87%] rounded-[10px] p-[20px] px-[30px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)] max-md:w-full">
      <div className="flex flex-row">
        <p className="mr-[15px] text-base font-normal tracking-[0.32px] text-gray-500">
          {props.issueDate}
        </p>
        <Link
          className="mr-[15px] text-base font-normal tracking-[0.32px] text-gray-500"
          to={props.link}
          target={'_blank'}
        >
          {props.source}
        </Link>
      </div>
      <div className="relative">
        <h3 className="my-[15px] font-['Inter'] text-[26px] font-medium tracking-[0.52px] text-black">
          {props.title}
        </h3>
        {props.isTechNews && (
          <span className="absolute bottom-[-8px] rounded-[5px] bg-[var(--main-color-yellow)] p-1 px-4 text-center text-[12px] tracking-[0.24px]">
            Технические новости
          </span>
        )}
        {props.isAnnouncement && (
          <span className="absolute bottom-[-8px] rounded-[5px] bg-[var(--main-color-yellow)] p-1 px-4 text-center text-[12px] tracking-[0.24px]">
            Анонсы и события
          </span>
        )}
        {props.isDigest && (
          <span className="absolute bottom-[-8px] rounded-[5px] bg-[var(--main-color-yellow)] p-1 px-4 text-center text-[12px] tracking-[0.24px]">
            Сводки новостей
          </span>
        )}
      </div>
      <img
        className={`my-5 h-[158px] w-full rounded-[10px] ${xmlImg === noImage ? 'object-contain' : 'object-cover'}`}
        src={xmlImg}
        alt=""
      />
      <p className="h-[200px] overflow-hidden overflow-y-auto text-base font-normal tracking-[0.32px] text-black opacity-50">
        {cleanContent(props.content)}
      </p>
      <div className="mt-[30px] flex w-full items-end justify-between">
        <Link
          className="rounded-[5px] bg-[#7CE3E1] px-8 py-4 text-center text-base font-normal tracking-[0.32px] text-black no-underline transition-all duration-300 ease-in-out"
          to={props.link}
          target={'_blank'}
        >
          Читать в источнике
        </Link>
        <span className="ml-[15px] text-base font-normal tracking-[0.32px] text-gray-500">
          Слова: {props.wordCount}
        </span>
      </div>
    </div>
  );
}
