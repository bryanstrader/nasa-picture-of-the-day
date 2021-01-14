import { NASA } from '../config/config';

export async function fetchPod() {
    const { url, apiKey } = NASA;
    let picDate = new Date();
    picDate = `${picDate.getFullYear()}-${picDate.getMonth()+1}-${picDate.getDate()}`;
    const response = await fetch(`${url}/planetary/apod?api_key=${apiKey}&date=${picDate}`);
    return response;
}