import useFetch from '../customHook/useFetch'

const Coordinates = () => {

    const {loading, data} = useFetch("http://api.open-notify.org/iss-now.json")

  return <div className="coordinates">{loading ? "loading..." : data.iss_position
.latitude}</div>;
};

export default Coordinates;
