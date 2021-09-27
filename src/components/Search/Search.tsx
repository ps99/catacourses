import { useEffect, useState } from 'react';

type SearchFieldProps = {updateSearchString: (searchString: string) => void};
type SearchFieldState = {searchString: string};

export const Search = (props:any) => {
  const [query, setQuery] = useState('');
  let timerId:any = null;

  useEffect(() => {
    timerId = setTimeout(() => {
      props.updateSearchString(query);
    }, 1000)

    return () => clearTimeout(timerId);
  }, [query])

  return (
    <div className="course_search">
      <input
        id="query"
        type="search"
        placeholder="Search a course..."
        value={query}
        onChange={e => setQuery(e.target.value)} />
    </div>
  )
}
