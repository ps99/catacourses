import Course from "../Course/Course";

export const Home = (props:any) => {
  const list = props.data.map((value:any) => {
    return <Course key={value.id.toString()} data={value} />;
  });

  return (
    <main>
      <ul className="courses_list">{list}</ul>
    </main>
  )
}

export default Home;
