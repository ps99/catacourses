import Course from '../Course/Course'

export const List = (props:any) => {
  const list = props.data.map((value:any) => {
    return <Course key={value.id} data={value} />;
  });

  return (
    <main className="wrap">
      <ul className="courses_list">{list}</ul>
    </main>
  )
}

export default List;