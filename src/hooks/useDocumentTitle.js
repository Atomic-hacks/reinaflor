import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title
      ? `${title} | Reina-Flo-Okori`
      : "Reina-Flo-Okori";
  }, [title]);
};

export default useDocumentTitle;
