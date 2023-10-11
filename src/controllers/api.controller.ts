/* eslint-disable prettier/prettier */
class API {
    private url: string;
    private token: string;

    constructor(url: string, token: string) {
        this.url = url;
        this.token = token;
    }

public async get(): Promise<any> {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
    };

    const options = {
        headers,
        method: 'GET',
    };

    const response = await fetch(this.url, options);
    const data = await response.json();
    return data;
}

public async post(data: any): Promise<any> {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
    };

    const options = {
        headers,
        method: 'POST',
        body: JSON.stringify(data),
    };

    const response = await fetch(this.url, options);

    return await response.json();
}
}

export default API;