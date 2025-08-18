import axios from "axios";
import { makeAutoObservable } from "mobx";
import { API } from "../config";


class SearchStore {
	constructor() {
		makeAutoObservable(this);
	}

	searchFormChecks = {
		isFullness: false,
		isBusiness: false,
		isMainRole: false,
		isRisksOnly: false,
		isTechNews: false,
		isAnnouncement: false,
		isNews: false,
	};

	state = {
		isLoading: false,
		isDocumentLoading: false,
		isError: false,
		inn: null,
		tonality: "any",
		limit: 0,
		startDate: new Date(2025, 0, 1),
		endDate: new Date(),
		summaryDates: [],
		summaryTotal: [],
		summaryRisks: [],
		summaryAll: 0,
		IDs: {},
		document: [],
	};

	// Параметры запроса гистограмм
	searchParamsHistograms = {
		issueDateInterval: {
			startDate: this.state.startDate.toISOString().split('T')[0],
			endDate: this.state.endDate.toISOString().split('T')[0],
		},
		searchContext: {
			targetSearchEntitiesContext: {
				targetSearchEntities: [
					{
						type: "company",
						sparkId: null,
						entityId: null,
						inn: this.state.inn,
						maxFullness: this.searchFormChecks.isFullness,
						inBusinessNews: this.searchFormChecks.isBusiness,
					},
				],
				onlyMainRole: this.searchFormChecks.isMainRole,
				tonality: this.state.tonality,
				onlyWithRiskFactors: this.searchFormChecks.isRisksOnly,
				riskFactors: {
					and: [],
					or: [],
					not: [],
				},
				themes: {
					and: [],
					or: [],
					not: [],
				},
			},
			themesFilter: {
				and: [],
				or: [],
				not: [],
			},
		},
		searchArea: {
			includedSources: [],
			excludedSources: [],
			includedSourceGroups: [],
			excludedSourceGroups: [],
		},
		attributeFilters: {
			excludeTechNews: this.searchFormChecks.isTechNews,
			excludeAnnouncements: this.searchFormChecks.isAnnouncement,
			excludeDigests: this.searchFormChecks.isNews,
		},
		similarMode: "duplicates",
		limit: this.state.limit,
		sortType: "issueDate",
		sortDirectionType: "desc",
		intervalType: "month",
		histogramTypes: ["totalDocuments", "riskFactors"],
	}
	// Параметры запроса по ID документов
	searchParamsIdDocuments = {
		...this.searchParamsHistograms, attributeFilters: {
			excludeTechNews: this.searchFormChecks.isTechNews,
			excludeAnnouncements: this.searchFormChecks.isAnnouncement,
			excludeDigests: this.searchFormChecks.isNews,
		},
	}

	// Сеттер для состояний формы
	setState = (key, value) => {
		this.state[key] = value;
	};

	// Переключатель для чекбоксов
	toggleCheck = (type) => {
		this.searchFormChecks[type] = !this.searchFormChecks[type];
	};

	// Сброс чекбоксов
	resetChecks = () => {
		Object.keys(this.searchFormChecks).forEach(key => {
			this.searchFormChecks[key] = false;
		});
	};


	getIDs = () => {
		axios
			.post(API + `/api/v1/objectsearch`, this.searchParamsIdDocuments)
			.then((response) => {
				let docID = [];
				response.data.items.map((id) => {
					return docID.push(id.encodedId);
				});
				this.setState("docID", docID);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	getFirstDocuments = () => {
		axios
			.post(API + `/api/v1/documents`, {
				ids: this.state.IDs,
			})
			.then((response) => {
				this.setState("document", response.data);
				console.log(this.state.document)
			})
			.catch((err) => {
				console.log(err);
			});
	};

	getNextDocuments = (next) => {
		this.setState("isDocumentLoading", true);
		axios
			.post(API + `/api/v1/documents`, {
				ids: next,
			})
			.then((response) => {
				this.setState([...this.state.document, ...response.data]);
				this.setState("isDocumentLoading", false);
			})
			.catch((err) => {
				console.log(err);
				this.setState("isDocumentLoading", false);
			});
	};

}

const searchStore = new SearchStore();
export default searchStore;