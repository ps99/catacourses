import { useEffect, useState } from 'react';
import {useActions} from '../../hooks/useActions';

export const Search = () => {
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
  }, [query]);

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
