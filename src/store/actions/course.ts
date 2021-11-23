import {Dispatch} from 'redux';
import axios from 'axios';
import {CourseAction, CourseActionTypes} from '../../types/course';

export const fetchCourses = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<CourseAction>) => {
        try {
            dispatch({type: CourseActionTypes.FETCH_COURSES})
            const response = await axios.get('http://localhost:3000/courses', {
                params: {_page: page, _limit: limit}
            })
            setTimeout(() => {
                dispatch({type: CourseActionTypes.FETCH_COURSES_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: CourseActionTypes.FETCH_COURSES_ERROR,
                payload: 'Произошла ошибка при загрузке списка дел'
            })
        }
    }
}
// export function setTodoPage(page: number): CourseAction {
//     return {type: CourseActionTypes.SET_COURSE_PAGE, payload: page}
// }