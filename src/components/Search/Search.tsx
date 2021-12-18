import { useEffect, useState } from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';

export const Search = () => {
  const {courses, error} = useTypedSelector(state => state.list);
  const {searchCourses, searchPrevent} = useActions();
  const [query, setQuery] = useState('');

  let timerId: any;

  useEffect(() => {
    if(query === '') {
      searchPrevent();
      return
    }

    timerId = setTimeout(() => {
      searchCourses(query);
    }, 1000)

    return () => clearTimeout(timerId);
  }, [query])

  const handleChange = (e: any) => {
    // searchCourses(e.target.value)
    searchCourses(query);
  }

  return (
    <div className="course_search">
      <input
        id="query"
        type="search"
        placeholder="Search a course..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} />
    </div>
  )
}
