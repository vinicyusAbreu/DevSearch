import { Container, ContainerErro } from "./style";
import Button from "../Button";
const Error = () => {
    return (
        <Container>
            <ContainerErro>
                <h1>Error 404</h1>
            </ContainerErro>
            <Button />
        </Container>
    );
}

export default Error;