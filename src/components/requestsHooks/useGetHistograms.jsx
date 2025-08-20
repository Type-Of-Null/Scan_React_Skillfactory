import { useSearchStore } from "../../stores";
import api from "../../api/axios";

export const useGetHistograms = () => {
  const searchStore = useSearchStore();

  const fetchHistograms = async () => {
    searchStore.setState("isLoading", true);
    try {
      try {
        const response = await api.post(
          "/api/v1/objectsearch/histograms",
          searchStore.searchParamsHistograms,
        );
        if (response?.data?.data.length > 0) {
          const totals = response.data.data[0].data.map(
            (item_1) => item_1.value,
          );
          const risks = response.data.data[1].data.map(
            (item_2) => item_2.value,
          );
          const dates = response.data.data[0].data.map((item) =>
            item.date
              .substring(0, 10)
              .split("-")
              .join(".")
              .split(".")
              .reverse()
              .join("."),
          );
          // Сохраняем значения полученные значения в едином объекте предварительно его оссортировав по дате
          const combinedResult = dates.map((dateItem, index) => [
            dateItem,
            totals[index],
            risks[index],
          ]);

          const sortedResult = combinedResult.sort((a, b) => {
            const date_a = parseInt(a[0].split(".").reverse().join(""));
            const date_b = parseInt(b[0].split(".").reverse().join(""));
            return date_a - date_b;
          });

					searchStore.setState("combinedResults", sortedResult)
					console.log(combinedResult)
					console.log(sortedResult)
					console.log(searchStore.state.combinedResults)
					// console.log(risks)


          const totalSum = totals.reduce((a, b) => a + b, 0);
          const risksSum = risks.reduce((a_1, b_1) => a_1 + b_1, 0);
          searchStore.setState("summaryAll", totalSum + risksSum);
        } else {
          searchStore.setState("isError", true);
        }
      } catch (err) {
        searchStore.setState("isError", true);
        console.log(err);
      }
    } finally {
      searchStore.setState("isLoading", false);
    }
  };

  return fetchHistograms;
};
