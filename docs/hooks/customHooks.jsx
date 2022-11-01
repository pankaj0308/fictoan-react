import { useEffect } from "react";

export const useScrollToTop = (dependency = []) => {
    useEffect(() => {
        try {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    }, dependency);
};

export const useDocumentTitle = (title = "") => {
    useEffect(() => {
        document.title = title;
    }, []);
};
