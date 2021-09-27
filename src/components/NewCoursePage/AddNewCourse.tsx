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
    <>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Course title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Course description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-link"
            onClick={onSubmitClick}>Submit</button>
        </div>
        <div className="control">
          <button
            className="button is-link is-light"
            onClick={onCancelClick}>Cancel</button>
        </div>
      </div>
    </>
  );
}

export default AddNewCourse;
