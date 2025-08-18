import { useSearchStore } from "../../stores";
import api from "../../api/axios";

export const useGetHistograms = () => {
  const searchStore = useSearchStore();

  const fetchHistograms = async () => {
    searchStore.setState("isLoading", true);
    try {
			try {
				const response = await api
					.post("/api/v1/objectsearch/histograms", searchStore.searchParamsHistograms);
				console.log(response);
				if (response?.data?.data.length > 0) {
					const date = response.data.data[0].data.map((item) => item.date
						.substring(0, 10)
						.split("-")
						.join(".")
						.split(".")
						.reverse()
						.join("."));
					const total = response.data.data[0].data.map((item_1) => item_1.value);
					const risks = response.data.data[1].data.map((item_2) => item_2.value);

					searchStore.setState("summaryDates", date);
					searchStore.setState("summaryTotal", total);
					searchStore.setState("summaryRisks", risks);

					const totalSum = total.reduce((a, b) => a + b, 0);
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
