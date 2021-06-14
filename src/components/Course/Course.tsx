export const Course = (props:any) => {
  const {title, date, description, author, rating} = props.data;
  return (
    <li className="course_card__wrapper">
      <div className="course_card">
        <div className="course_card__title">
          {title}
          <em className="course_card__date">(Published on {new Date(date).toDateString()})</em>
        </div>
        <div className="course_card__description">{description}</div>
        <div className="course_card__author">{author}</div>
        <div className="course_card__rating">Rating: &#9733; {rating}</div>
      </div>
    </li>
  )
}

export default Course;