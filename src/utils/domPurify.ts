import DOMPurify from "dompurify";

export const pure = (item: any) => {
    return DOMPurify.sanitize(item);
};
