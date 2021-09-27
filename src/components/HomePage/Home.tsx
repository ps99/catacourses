
import { useEffect, useState } from 'react';
import { apiStates, useApi } from '../../tools';
import Course from "../Course/Course";
import { CourseModel } from "../../Interface"
import { Search } from "../Search/Search"
import { getPageData, getSearchData } from "../../services/Network.services"

const LIMIT_OF_ITEMS = 9;

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [dataToShow, setDataToShow] = useState<CourseModel | any>([]);
  const [coursesFound, setCoursesFound] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [visibility, setVisisbility] = useState(true);
  const [query, setQuery] = useState('');

  const updateSearchString = (str: string) => {
    setQuery(str);
    loadSearchResults(query);
  };

  const updateLoadingStatus = (isLoading: boolean) => setLoading(isLoading);

  const loadSearchResults = (searchString: string): Promise<boolean> => {
    if (searchString === '') {
      return Promise.resolve(false);
    }

    return getSearchData(searchString)
      .then((data) => {
        setCoursesFound(data.map(dataToCourse));

        return true;
      })
      .catch(() => false)
      .finally(() => updateLoadingStatus(false));
  };

  const dataToCourse = (course: any) => ({...course, date: new Date(course.date)} as CourseModel);

  useEffect(() => {
    getPageData(pageCount).then(data => {
      setPageCount(pageCount + 1);
      collectCourse(data)
    })
  }, [])

  const collectCourse = (newData:any) => {
    setDataToShow([...dataToShow, ...newData]);
  }

  const handleClick = async () => {
    setPageCount(pageCount + 1);
    const data = await getPageData(pageCount);
    data.length < LIMIT_OF_ITEMS && setVisisbility(false);
    collectCourse(data);
  }

  const list = dataToShow.map((value:any, id:any) => {
    return <Course key={value.id.toString()} data={value} />;
  });

  if(visibility) {
    return (
      <main>
        <Search updateSearchString={updateSearchString}/>
        <ul className="courses_list">{list}</ul>
        <div className="courses_showmore">
          <button
            className="btn btn-primary btn-lg"
            onClick={handleClick}>Show More</button>
        </div>
        
      </main>
    )
  } else {
    return (
      <main>
        <Search updateSearchString={updateSearchString}/>
        <ul className="courses_list">{list}</ul>
      </main>
    )
  }
}

export default Home;
