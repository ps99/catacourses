
import {useEffect} from 'react';
import Course from '../Course/Course';
import {Search} from '../Search/Search'
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';

export const Home = () => {
  const {limit, courses, page, error, isNotEmpty: isLoadMoreActive, isSearch, searchResult} = useTypedSelector(state => state.list);
  const {fetchCourses} = useActions();

  useEffect(() => {
    if(page === 0) fetchCourses(page, limit);
  }, [])

  const handleClick = () => {
    fetchCourses(page + 1,limit)
  }

  const list = courses.map((value:any) => {
    return <Course key={value.id.toString()} data={value} />;
  });

  const listSearch = searchResult.map((value:any) => {
    return <Course key={value.id.toString()} data={value} />;
  });

  return (
    <main>
      <Search />
      {isSearch && <ul className="search_list">{listSearch}</ul>}

      {!isSearch && <ul className="courses_list">{list}</ul>}
      {!isSearch && isLoadMoreActive && <div className="courses_showmore">
        <button
          className="btn btn-primary btn-lg"
          onClick={handleClick}>Show More</button>
      </div>}
    </main>
  )
}

export default Home;
