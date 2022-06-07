import axios from "axios";
import { useState, useEffect } from "react";
import { getLocation } from "../getLocation";

function useFetchPubList() {
  const [pubList, setPubList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function 맥주집가져오기(keyword, regionBase = false) {
    const { x, y } = await getLocation();
    const params = regionBase
      ? { query: keyword + " " + "맥주" }
      : { x, y, radius: 1000, query: "맥주" };

    const { data } = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword",
      {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_APP_KEY}`,
        },
        params,
      }
    );
    setPubList(data.documents);
  }

  const fetch = async (keyword, regionBase = false) => {
    setIsLoading(true);
    await 맥주집가져오기(keyword, regionBase);
    setIsLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return [pubList, isLoading, { fetch }];
}

export default useFetchPubList;
