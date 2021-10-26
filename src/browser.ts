import {chromium} from 'playwright';
import {VisualPingResponse, Source, RequestPreviewResponse, RequestPreviewStatus} from './types';
import { v4 as uuidv4 } from 'uuid';

export const visitAndPrint = async (urls: Array<Source>, query) : Promise<Array<VisualPingResponse>> => {
    const uuid = uuidv4() ;
    const browser = await chromium.launch();
    const result: Array<VisualPingResponse> = [];
    const page = await browser.newPage();
    for(const s of urls){
        const completedUrl = `${s.url}${query}`;
        await page.goto(completedUrl);
        const imagePath = `./img/${s.brand}${uuid}.png`;
        await page.screenshot({ path: imagePath });
        result.push({imagePath, url:completedUrl, brand: s.brand});
    }
    await browser.close();
    return result;
}

export const requestPreview = async (urls: Array<Source>, query) : Promise<RequestPreviewResponse> => {
    const uuid = uuidv4();
    return {
        status: RequestPreviewStatus.OPEN,
        uuid
    }
}