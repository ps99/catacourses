import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';

export const NewCourse = () => {
  const {user, isLoggedIn} = useTypedSelector(state => state.auth);
  const {id} = useTypedSelector(state => state.course);
  const {addNewCourse, getCoursesLastId} = useActions();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const history = useHistory();
  const redirectToMain = () => history.push('/');

  if(!isLoggedIn) {
    redirectToMain();
  }

  useEffect(() => {
    if(id === 0) {
      getCoursesLastId();
    }
  }, [])

  const onSubmitClick = async (e:any) => {
    e.preventDefault();
    const authorId = user || 'N/A';
    const date = new Date();
    await addNewCourse({
      id,
      title,
      description,
      authorId,
      date
    });
    redirectToMain();
  };

  const onCancelClick = (e:any) => {
    e.preventDefault();
    redirectToMain();
  }

  return (
    <main>
      <div className="addNewCourseForm">
        <h1>Add New Course</h1>
        <form>
          <input
            className="form-control"
            type="text" autoComplete="off" placeholder="Course title"
            value={title} onChange={(e) => setTitle(e.target.value)}/>

            <textarea
              className="form-control" rows={3} placeholder="Course description"
              value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

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

export default NewCourse;
