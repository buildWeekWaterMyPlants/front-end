export const CHECK_AUTHORIZATION = "CHECK_AUTHORIZATION";
export const checkAuth = (authenticated) => ({
    type: CHECK_AUTHORIZATION, 
    payload: authenticated
})