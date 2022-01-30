import { useActions } from "../../hooks/useActions";

export const Course = (props:any) => {
  const {updateCourseRating} = useActions();
  const user = props.user;
  const {
    title,
    date,
    description,
    authorId,
    rating
  } = props.data;
  let targetCourse:any = {...props.data};

  const objToMap = (o:any) => new Map(Object.entries(o));
  const mapToObj = (m:any) => [...m].reduce((o,v)=>{o[v[0]] = v[1]; return o;},{});


  const handleClick = (event:any) => {
    const newRatingValue = targetCourse.rating = Number(event.target.value);
    const ratingMap = objToMap(targetCourse.ratingCollection);
    ratingMap.set(user, newRatingValue);
    let sum = 0;
    ratingMap.forEach((value:any) => value = sum += value);
    targetCourse.rating = sum / ratingMap.size;
    targetCourse.ratingCollection = mapToObj(ratingMap);
    updateCourseRating(targetCourse);
  }

  const ratingRange = [1,2,3,4,5];
  const ratingButtons = ratingRange.map(item => {
    return <button key={item} onClick={handleClick} value={item}>&#9733; {item}</button>
  })

  return (
    <li className="course_card__wrapper">
      <div className="course_card">
        <div className="course_card__title">{title}</div>
        <div className="course_card__date">(Published on {new Date(date).toDateString()})</div>
        <div className="course_card__description">{description}</div>
        <div className="course_card__author">{authorId}</div>
        <div className="course_card__rating">{ratingButtons}</div>
        {rating ? (
            <div className="course_card__rating">Rating: &#9733; {rating}</div>
          ) : (
            <div className="course_card__rating">Unknown Rating</div>
          )}
      </div>
    </li>
  )
}

export default Course;