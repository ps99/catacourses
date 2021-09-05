import { useState, useEffect } from 'react';

export const apiStates = { //enum type
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};


export const useApi = (pageCount:number) => {
  const url = `http://localhost:3000/courses?_page=${pageCount}&_limit=9`;
  const [data, setData] = useState({
    state: apiStates.LOADING,
    error: '',
    data: []
  });

  const setPartData = (partialData:any) => setData({ ...data, ...partialData });

  useEffect(() => {
    setPartData({
      state: apiStates.LOADING,
    });

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPartData({
          state: apiStates.SUCCESS,
          data
        });
      })
      .catch(() => {
        setPartData({
          state: apiStates.ERROR,
          error: 'fetch failed'
        });
      });
  }, []);

  return data;
};
