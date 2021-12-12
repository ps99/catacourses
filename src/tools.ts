import { useState, useEffect } from 'react';

export enum apiStatesTypes {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
};


export const useApi = (pageCount:number) => {
  const url = `http://localhost:3000/courses?_page=${pageCount}&_limit=9`;
  const [data, setData] = useState({
    state: apiStatesTypes.LOADING,
    error: '',
    data: []
  });

  const setPartData = (partialData:any) => setData({ ...data, ...partialData });

  useEffect(() => {
    setPartData({
      state: apiStatesTypes.LOADING,
    });

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPartData({
          state: apiStatesTypes.SUCCESS,
          data
        });
      })
      .catch(() => {
        setPartData({
          state: apiStatesTypes.ERROR,
          error: 'fetch failed'
        });
      });
  }, []);

  return data;
};
