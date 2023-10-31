import useFetch from '../customHook/useFetch'

const Coordinates = () => {

    const {loading, coordinates} = useFetch("http://api.open-notify.org/iss-now.json")

  return <div className="coordinates">{loading ? "loading..." : coordinates.iss_position
.latitude}</div>;
};

export default Coordinates;
