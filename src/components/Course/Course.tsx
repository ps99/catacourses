export const Course = (props:any) => {
  const {title, date, description, author, rating} = props.data;
  const ratingText = rating ? `Rating: \u2605 ${rating}` : null
  return (
    <li className="course_card__wrapper">
      <div className="course_card">
        <div className="course_card__title">{title}</div>
        <div className="course_card__date">(Published on {new Date(date).toDateString()})</div>
        <div className="course_card__description">{description}</div>
        <div className="course_card__author">{author}</div>
        <div className="course_card__rating">{ratingText}</div>

      </div>
    </li>
  )
}

export default Course;