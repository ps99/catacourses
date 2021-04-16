export const Course = (props:any) => {
  return (
    <li className="course_card__wrapper">
      <div className="course_card">
        <div className="course_card__title">
          {props.data.title}
          <em className="course_card__date">(Published on {props.data.date})</em>
        </div>
        <div className="course_card__description">{props.data.description}</div>
        <div className="course_card__author">{props.data.author}</div>
        <div className="course_card__rating">Rating: &#9733; {props.data.rating}</div>
      </div>
    </li>
  )
}

export default Course;