
import { useEffect, useState } from 'react';
import {apiStates, useApi} from '../../tools';
import Course from "../Course/Course";

export const Home = (props:any) => {
  const [pageCount, setPageCount] = useState(1);
  let { state, error, data } = useApi(pageCount);
  console.log(data)

  const list = data.map((value:any) => {
    return <Course key={value.id.toString()} data={value} />;
  });


  let prevData = {};
  const handleClick = ():void => {
    setPageCount(pageCount + 1);
    prevData = {...prevData, ...data}
    console.log(pageCount)
  }

  useEffect(() => {
  }, [pageCount])

  switch(state) {
    case apiStates.ERROR:
      return <div>ERROR: {error || 'General error'}</div>;
    case apiStates.SUCCESS:
      return (
        <main>
          <ul className="courses_list">{list}</ul>
          <div className="courses_showmore">
            <button onClick={handleClick}>Show More</button>
          </div>
        </main>
      )
  case apiStates.LOADING:
    default:
      return <div>loading..</div>;
  };
}

export default Home;
