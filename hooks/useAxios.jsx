/** @format */

import { useContext } from "react";
import axios from "axios";
import AuthContext from "../pages/auth/AuthContext";
import API_URL from "../utils/url";

const url = API_URL + "/admin";

export default function useAxios() {
	const [auth] = useContext(AuthContext);

	const apiClient = axios.create({
		baseURL: url,
	});

	apiClient.interceptors.request.use(function (config) {
		const token = auth.token;
		config.headers.Authorization = token ? `Bearer ${token}` : "";
		return config;
	});

	return apiClient;
}
