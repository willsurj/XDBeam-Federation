import {
    writable,
    derived
} from 'svelte/store';

export const loggedIn = writable(false);

export const logInKey = writable("");

export const txPopupActive = writable(false);

export const apiData = writable({});

export const apiDataTransactions = writable({});

export const apiLoading = writable(true);

export const balances = derived(apiData, $apiData => $apiData.balances)

export const apiRequest = async () => {
    apiLoading.set(true);
    let key;
    logInKey.subscribe(value => {
        key = value;
    })
    let url = "https://frontier.testnet.digitalbits.io/accounts/" + key;
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            apiData.set(data);
        }).catch(error => {
            console.log(error);
            apiLoading.set(false);
            return {};
        })
    url = "https://frontier.testnet.digitalbits.io/accounts/" + key + "/transactions?limit=5";
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            apiDataTransactions.set(data._embedded.records);
            apiLoading.set(false);
        }).catch(error => {
            console.log(error);
            apiLoading.set(false);
            return {};
        })
}

export const accountTest = async () => {
    let key;
    logInKey.subscribe(value => {
        key = value;
    })
    let url = "https://frontier.testnet.digitalbits.io/accounts/" + key;
    return await fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status !== undefined) {
                throw Error(data)
            } else {
                console.log(data);
                return true;
            }
        }).catch(error => {
            console.log(error);
            return false;
        })
}