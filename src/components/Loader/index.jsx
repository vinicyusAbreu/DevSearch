import { ContainerLoader } from './style';
import ReactLoading from "react-loading";
const Loader = () => {
    return (
        <ContainerLoader>
            <ReactLoading type="spin" color="#47525E" />
        </ContainerLoader>
    );
}

export default Loader;