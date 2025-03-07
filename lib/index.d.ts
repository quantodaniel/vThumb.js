export declare const importFileandPreview: (file: File, revoke?: boolean) => Promise<string>;
export declare const generateVideoThumbnails: (videoFile: File, numberOfThumbnails: number, type: string, cb?: ((thumbnail: string, index: number) => void) | undefined) => Promise<string[]>;
export declare const getVideoCover: (urlOfFIle: string, seekTo?: number) => Promise<string>;
export declare const generateVideoThumbnailViaUrl: (urlOfFIle: string, videoTimeInSeconds: number) => Promise<string>;
export declare const getVideoDurationFromVideoFile: (videoFile: File | string) => Promise<number>;
