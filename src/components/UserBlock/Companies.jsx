import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useCompanyStore } from "../../stores";

const Companies = observer(() => {
  const { companiesInfo, getCompaniesInfo } = useCompanyStore();

  useEffect(() => {
    getCompaniesInfo();
  }, [getCompaniesInfo]);

  return (
    <section className="hidden h-[63px] w-[175px] items-center self-center justify-between rounded-[5px] bg-[#D9D9D9] sm:flex">
      <div className="flex w-3/4 flex-col">
        <span className="default-text mb-[7px] text-right font-['Inter'] text-[10px] opacity-40">
          Использовано компаний
        </span>
        <span className="default-text text-right font-['Inter'] text-[10px] opacity-40">
          Лимит по компаниям
        </span>
      </div>
      <div className="flex flex-col items-center justify-center mr-4">
        <div className="text-sm font-bold">{companiesInfo.used}</div>
        <div className="text-sm font-bold text-[#8AC540]">
          {companiesInfo.limit}
        </div>
      </div>
    </section>
  );
});

export default Companies;
