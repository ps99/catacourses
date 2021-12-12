
import {useEffect, useState} from 'react';
import {apiStatesTypes, useApi} from '../../tools';
import Course from '../Course/Course';
import {CourseModel} from '../../Interface'
import {Search} from '../Search/Search'
import {getSearchData} from '../../services/Network.services'
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';

console.log(apiStatesTypes, useApi)

export const Home = () => {
  const {limit, courses, error, loading, isNotEmpty: isLoadMoreActive} = useTypedSelector(state => state.course)
  const {fetchCourses} = useActions()
  const [coursesFound, setCoursesFound] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [query, setQuery] = useState('');

  const updateSearchString = (str: string) => {
    setQuery(str);
    loadSearchResults(query);
  };

  const loadSearchResults = (searchString: string): Promise<boolean> => {
    if (searchString === '') {
      return Promise.resolve(false);
    }

    return getSearchData(searchString)
      .then((data) => {
        setCoursesFound(data.map(dataToCourse));

        return true;
      })
      .catch(() => false);
  };

  const dataToCourse = (course: any) => ({...course, date: new Date(course.date)} as CourseModel);

  useEffect(() => {
    fetchCourses(pageCount, limit)
  }, [pageCount])

  const handleClick = () => {
    setPageCount(pageCount + 1);
  }

  const list = courses.map((value:any, id:any) => {
    return <Course key={value.id.toString()} data={value} />;
  });

  if(isLoadMoreActive) {
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
