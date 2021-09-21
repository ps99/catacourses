
import { useEffect, useState } from 'react';
import { apiStates, useApi } from '../../tools';
import Course from "../Course/Course";

const LIMIT_OF_ITEMS = 9;
let currentData:any = [];

export const Home = () => {
  const [dataToShow, setDataToShow] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [visibility, setVisisbility] = useState(true);

  useEffect(() => {
    getDataByPage(pageCount).then(data => {
      setPageCount(pageCount + 1);
      loadData(data)
      return true;
    })
  }, [])

  const loadData = (newData:any) => {
    currentData = [...currentData, ...newData]
    setDataToShow(currentData)
  }

  const handleClick = ():void => {
    setPageCount(pageCount + 1);
    getDataByPage(pageCount).then(data => {
      data.length < LIMIT_OF_ITEMS && setVisisbility(false);
      loadData(data)
      return true;
    })
  }

  const getDataByPage = async (pageCount:number) => {
    const baseUrl = `http://localhost:3000/courses?_page=${pageCount}&_limit=${LIMIT_OF_ITEMS}`;
    const getJson = (resp: Response) => resp.json();
    return fetch(baseUrl).then(getJson);
  };

  const list = dataToShow.map((value:any, id:any) => {
    return <Course key={value.id.toString()} data={value} />;
  });

  if(visibility) {
    return (
      <main>
        <ul className="courses_list">{list}</ul>
        <div className="courses_showmore">
          <button onClick={handleClick}>Show More</button>
        </div>
        
      </main>
    )
  } else {
    return (
      <main>
        <ul className="courses_list">{list}</ul>
      </main>
    )
  }
}

export default Home;
