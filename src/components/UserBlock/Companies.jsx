import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useCompanyStore } from '../../stores';
import { useGetCompany } from '../requestsHooks/useGetCompany';
import Loader from '../Loader';

const Companies = observer(() => {
  const [initialLoadDone, setInitialLoadDone] = useState(false);
  const { companiesInfo, isCompaniesLoading } = useCompanyStore();
  const fetchCompanyInfo = useGetCompany();

  useEffect(() => {
    if (!initialLoadDone) {
      fetchCompanyInfo();
    }
    setInitialLoadDone(true);
  }, [initialLoadDone, fetchCompanyInfo]);

  return (
    <section className="hidden h-[63px] w-[175px] items-center justify-center self-center rounded-[5px] bg-[#D9D9D9] sm:flex">
      {isCompaniesLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex w-3/4 flex-col">
            <span className="default-text mb-[7px] text-right font-['Inter'] text-[10px] opacity-40">
              Использовано компаний
            </span>
            <span className="default-text text-right font-['Inter'] text-[10px] opacity-40">
              Лимит по компаниям
            </span>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <div className="text-sm font-bold">{companiesInfo.used}</div>
            <div className="text-sm font-bold text-[#8AC540]">
              {companiesInfo.limit}
            </div>
          </div>
        </>
      )}
    </section>
  );
});

export default Companies;
