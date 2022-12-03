import { useEffect } from "react";

const TitleHooks = (title) => {
  useEffect(() => {
    document.title = `${title}-skill develop`;
  }, [title]);
};

export default TitleHooks;
