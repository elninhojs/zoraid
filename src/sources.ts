import { Source } from "./types";

const sources:Array<Source> = [
    {url: "https://www.google.com/search?q=", brand: 'google'},
    {url: "https://www.bing.com/search?q=", brand: 'bing'},
    {url: "https://yandex.com/search/?text=", brand: 'yandex'},
    {url: "https://duckduckgo.com/?q=", brand: 'duckduckgo'}
] 

export const getSources = async (): Promise<Array<Source>> => {
    return sources;
}