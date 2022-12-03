import { useState } from "react";
import { ContainerHome, H1, Form, Input, Submit } from "./style";
import { CgSearch } from 'react-icons/cg'

const Home = () => {
    const [search, setSearch] = useState("");

    function handleInputChange(e) {
        setSearch(e.target.value);
    }
    function handleForm(params) {
        params.preventDefault();
        window.location.href = `/DevSearch/#/details/${search}`;

    }
    return (
        <ContainerHome>
            <H1>Search Devs</H1>

            <Form onSubmit={handleForm}>
                <Input type="text" placeholder="Type the username here..."
                    value={search} onChange={handleInputChange}
                />
                <Submit to={`details/${search}`}>
                    <CgSearch size={30} color={"#ECEFF4"} />
                    Buscar</Submit>
            </Form>

        </ContainerHome>

    );
}

export default Home;