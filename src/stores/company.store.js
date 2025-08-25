import axios from "axios";
import { makeAutoObservable } from "mobx";
import { API } from "../config"
import authStore from "./auth.store";


class CompaniesStore {
	constructor() {
		makeAutoObservable(this);
	}

	isCompaniesLoading = false;
	setCompaniesLoading = bool => this.isCompaniesLoading = bool;

	companiesInfo = { used: 0, limit: 0 };
		setCompanyLimits = (used, limit) => {
		this.companiesInfo.used = used;
		this.companiesInfo.limit = limit;
	};

	getCompaniesInfo = () => {
		this.setCompaniesLoading(true);
		axios
			.get(API + `/api/v1/account/info`, {
				headers: {
					Authorization: `Bearer ${authStore.token}`,
				},
			})
			.then((response) => {
				this.setCompanyLimits(
					response.data.eventFiltersInfo.usedCompanyCount,
					response.data.eventFiltersInfo.companyLimit
				);
			})
			.catch(console.error)
			.finally(this.setCompaniesLoading(false));

	};
}

const compStore = new CompaniesStore()
export default compStore