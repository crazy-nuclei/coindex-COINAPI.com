export const handleErrors = (error) => {
    if (error.response.status === 401) {
        throw new Error('Your API key is invalid - Go to https://cryptocointracker.com/')
    }  else if (err.response.status === 404) {
        throw new Error('Your API is not responding');
    } else {
        throw new Error('Something is not working');
    }
}