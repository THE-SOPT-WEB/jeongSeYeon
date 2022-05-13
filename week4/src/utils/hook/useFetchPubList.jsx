import React, { useState, useEffect } from "react";
import axios from "axios";
import { getLocation } from "../getLocation";

function useFetchPubList() {
  const [pubList, setPubList] = useState([]);

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

    setPubList(data);
  }

  const mutate = async (keyword, regionBase = false) => {
    맥주집가져오기(keyword, regionBase);
  };

  useEffect(() => {
    맥주집가져오기();
  }, []);

  return [pubList, mutate];
}

export default useFetchPubList;
