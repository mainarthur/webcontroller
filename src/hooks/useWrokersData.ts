import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers'

const useWorkersData = () => useSelector((state: RootState) => state.worker)

export default useWorkersData
