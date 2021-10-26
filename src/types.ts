export type VisualPingResponse  = {
    url: string,
    imagePath: string,
    brand: string,
    error?: string
}

export type Source = {
    url: string,
    brand: string
}

export enum RequestPreviewStatus {
    PENDING, READY, TERMINATED, OPEN
}

export type RequestPreviewResponse = {
    status: RequestPreviewStatus,
    uuid: string
}