
import { useState, useEffect} from 'react'

const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [coordinates, setCoordinates] = useState({});
  
    const getCoordinates = async () => {
      const response = await fetch(url);
      const issCoordinates = await response.json();
      setLoading(false);
      setCoordinates(issCoordinates);
    };
  
    useEffect(() => {
      getCoordinates();
    }, [url])

    return {coordinates, loading}

}

export default useFetch