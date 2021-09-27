import { useState } from 'react';
import { useHistory } from 'react-router';
import { addCourse } from '../../services/Network.services';

export const AddNewCourse = (props:any) => {
  const {id, currentState} = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();
  const redirectToMain = () => history.push('/');
  if(!currentState) {
    redirectToMain();
  }

  const onSubmitClick = async () => {
    await addCourse({
      author: id,
      title,
      description,
      date: new Date(),
      id: -1,
      rating: -1
    });
    // redirectToMain();
  };

  const onCancelClick = () => redirectToMain();

  return (
    <main>
      <div className="addNewCourseForm">
        <h1>Add New Course</h1>
        <form>
          <input
            className="form-control"
            type="text"
            placeholder="Course title"
            value={title}
            autoComplete="off"
            onChange={(e) => setTitle(e.target.value)}/>

            <textarea
              className="form-control"
              rows={3}
              placeholder="Course description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}></textarea>

            <button
              className="btn btn-primary btn-lg"
              onClick={onSubmitClick}>Submit</button>

            <button
              className="btn btn-secondary btn-lg"
              onClick={onCancelClick}>Cancel</button>
        </form>
      </div>
    </main>
  );
}

export default AddNewCourse;
