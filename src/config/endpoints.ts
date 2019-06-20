/**
 * Authorization/authentication
 */
const startURL = process.env.NODE_ENV === "production" ? "/api" : "";
const authRoute = "auth";
export const SING_UP_ENDPOINT = `${startURL}/${authRoute}/signup`;
export const SING_IN_ENDPOINT = `${startURL}/${authRoute}/login`;
export const RESTORE_PASSWORD_ENDPOINT = `${startURL}/${authRoute}/resetpassword`;
export const REFRESH_ENDPOINT = `${startURL}/${authRoute}/refresh`;

/**
 * Initial data
 */
export const INITIAL_DATA_ENDPOINT = `${startURL}/initial-data`;

/**
 * Observations
 */
const observationRoute = "observations";
export const OBSERVATIONS_ENDPOINT = `${startURL}/${observationRoute}`;
export const OBSERVATIONS_FILTERS_ENDPOINT = `${startURL}/${observationRoute}/aggregations`;
const exportRoute = "export";
export const OBSERVATIONS_DOWNLOAD_EXCEL_TEMPLATE = `${startURL}/${observationRoute}/${exportRoute}/template`;
export const OBSERVATIONS_SET_VERIFICATION = `${startURL}/${observationRoute}/set-verification`;

/**
 * Birds
 */
const birdRoute = "rings-by";
export const BIRDS_ENDPOINT = `${startURL}/${birdRoute}`;
export const BIRDS_FILTERS_ENDPOINT = `${startURL}/${birdRoute}/aggregations`;
