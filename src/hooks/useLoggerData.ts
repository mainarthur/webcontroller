import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers'

const useLoggerData = () => useSelector((state: RootState) => state.logs)

export default useLoggerData
