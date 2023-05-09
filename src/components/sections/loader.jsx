import { useProgress } from '@react-three/drei'

const Loader = ({ setProgress } ) => {
  const { progress } = useProgress()
  setProgress(progress)
}

export default Loader;