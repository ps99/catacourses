import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import RootAction from '../store/actions/rootAction'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(RootAction, dispatch)
}