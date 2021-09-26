
import { useEffect, useState } from 'react';
import { apiStates, useApi } from '../../tools';
import Course from "../Course/Course";
import {CourseModel} from "../../mockfileModel"

const LIMIT_OF_ITEMS = 9;

export const Home = () => {
  const [dataToShow, setDataToShow] = useState<CourseModel | any>([]);
  const [pageCount, setPageCount] = useState(1);
  const [visibility, setVisisbility] = useState(true);
  const [query, setQuery] = useState('');

  const updateSearchString = (str: string) => {
    setQuery(str);
    // loadSearchResults(query);
  };


  // const loadSearchResults = (searchString: string): Promise<boolean> => {
  //   if (searchString === '') {
  //     return Promise.resolve(false);
  //   }

  //   return getSearchData(searchString)
  //     .then((data) => {
  //       setCoursesFound(data.map(dataToCourse));

  //       return true;
  //     })
  //     .catch(() => false)
  //     .finally(() => updateLoadingStatus(false));
  // };

  useEffect(() => {
    getDataByPage(pageCount).then(data => {
      setPageCount(pageCount + 1);
      collectCourse(data)
    })
  }, [])

  const collectCourse = (newData:any) => {
    setDataToShow([...dataToShow, ...newData]);
  }

  const handleClick = ():void => {
    setPageCount(pageCount + 1);
    getDataByPage(pageCount).then(data => {
      data.length < LIMIT_OF_ITEMS && setVisisbility(false);
      collectCourse(data)
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
        <div className="course_search">
          <input type="search" placeholder="Search a course..." />
        </div>
        <ul className="courses_list">{list}</ul>
        <div className="courses_showmore">
          <button onClick={handleClick}>Show More</button>
        </div>
        
      </main>
    )
  } else {
    return (
      <main>
        <div className="course_search">
          <input type="search" placeholder="Search a course..." />
        </div>
        <ul className="courses_list">{list}</ul>
      </main>
    )
  }
}

export default Home;
