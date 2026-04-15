import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} | Reina-Flor-Okori` : "Reina-Flor-Okori";
  }, [title]);
};

export default useDocumentTitle;
