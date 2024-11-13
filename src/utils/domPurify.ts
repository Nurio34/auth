import DOMPurify from "dompurify";

export const pure = (item: unknown) => {
    if (typeof item === "string") {
        return DOMPurify.sanitize(item);
    }
};
