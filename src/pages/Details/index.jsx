import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Perfil, Repository, Dados, Social, CardDetails, CardDetailsItem, BoxRepo, InfoRepo, Circle, PerfilMobile, ContainerMenu } from "./style";
import { BsPeople, BsHeart, BsStar, BsBuilding, BsGeoAlt, BsEnvelope, BsLink45Deg, BsGithub } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Button from "../../components/Button";
import { User } from '../../api/api';
import Error from '../../components/Error';
import Loader from '../../components/Loader';


const Details = () => {
    const [menu, setMenu] = useState(false);
    const [git, setGit] = useState({});
    const [repo, setRepo] = useState([]);
    const [star, setStar] = useState([]);
    const [gitNotFound, setGitNotFound] = useState(false);
    const [loading, setLoading] = useState(true);


    const { id } = useParams();

    function getGithubData() {
        User(id, setGit, setStar, setRepo, setGitNotFound);
    }




    useEffect(() => {
        let timer = setTimeout(() => {
            getGithubData();
            setLoading(false);

        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [id]);




    function openMenu() {
        setMenu(!menu);
    }

    return (
        <>
            {loading && <Loader />}
            {!loading && (
                gitNotFound ? (
                    <Error />
                ) : (
                    <Container>

                        <Perfil className={
                            menu ? "active" : ''
                        }>
                            <AiOutlineCloseCircle onClick={openMenu} className="close" />
                            <img src={git.avatar_url} alt={git.name} />

                            <Dados>
                                <h2>{git.name}</h2>
                                <small>@{git.login}</small>
                                <p>{git.bio}</p>
                            </Dados>

                            <Social>
                                <span><BsPeople size={18} />{git.followers} followers</span>
                                <span><BsHeart size={18} /> {git.following} following</span>
                                <span><BsStar size={18} /> {star.length} Stars</span>
                            </Social>

                            <CardDetails>
                                <CardDetailsItem>
                                    <BsBuilding size={36} />
                                    {git.company}
                                </CardDetailsItem>
                                <CardDetailsItem>
                                    <BsGeoAlt size={26} />
                                    {git.location}
                                </CardDetailsItem>
                                <CardDetailsItem>
                                    <BsEnvelope size={26} />
                                    {git.email}
                                </CardDetailsItem>
                                <CardDetailsItem>
                                    <BsLink45Deg size={26} />
                                    {git.blog}
                                </CardDetailsItem>
                                <CardDetailsItem>
                                    <FiTwitter size={26} />
                                    {git.twitter_username}
                                </CardDetailsItem>
                            </CardDetails>

                            <Button />

                        </Perfil>

                        <PerfilMobile>
                            <ContainerMenu onClick={openMenu}>
                                <BsGithub size={36} />
                                <span>Perfil</span>
                            </ContainerMenu>
                        </PerfilMobile>

                        <Repository>

                            {repo.map(repo => (
                                <BoxRepo rel="noopener noreferrer" href={`${repo.html_url}`} target="_blank"
                                    key={repo.id}
                                >
                                    <h3>{
                                        repo.name.replace('-', ' ').replace('_', ' ')
                                    }</h3>
                                    <p>{repo.description}</p>
                                    <InfoRepo>
                                        <span><BsStar size={18} /> {repo.stargazers_count} Stars</span>
                                        <Circle />
                                        <span>
                                            {

                                                new Date(repo.updated_at).toLocaleDateString()
                                            }
                                        </span>
                                    </InfoRepo>
                                </BoxRepo>
                            ))}

                        </Repository>
                    </Container>
                )

            )}
        </>
    )

}

export default Details;