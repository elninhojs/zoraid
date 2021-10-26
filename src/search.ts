import {visitAndPrint} from './browser'
import {getSources} from './sources';
import { Source } from './types';
export const search = async (app: any) => {
    const sources: Array<Source> = await getSources();
    app.get('/search', async (request, response) => {
        const result = await visitAndPrint(sources, request.query.q);
        response.status(200).json(result);
    }
    );
}