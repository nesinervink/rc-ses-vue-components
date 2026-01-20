import { FileUploadOptions } from 'vue3-dropzone';

export type FileDropzoneProps = Partial<FileUploadOptions> & {
    name?: string;
    error?: string;
    contentDescription?: string;
    capture?: boolean | 'user' | 'environment' | undefined;
    webkitdirectory?: boolean;
};
