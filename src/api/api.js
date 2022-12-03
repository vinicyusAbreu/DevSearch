import axios from 'axios';

export const Api = axios.create({
    baseURL: 'https://api.github.com/users/',
});


export const User = async (url, setGit, setStar, setRepo, setGitNotFound) => {
    try {
        const user = await Api.get(`${url}?client_id=11a69958d4359ed96584&client_secret=1941e1c396a1572c925bd9cb80e55c6c152a8d4`);
        const star = await Api.get(`${url}/starred?client_id=11a69958d4359ed96584&client_secret=1941e1c396a1572c925bd9cb80e55c6c152a8d4`);
        const repos = await Api.get(`${url}/repos?per_page=''&sort=created:asc&client_id=11a69958d4359ed96584&client_secret=1941e1c396a1572c925bd9cb80e55c6c152a8d4`);


        setGit(user.data);
        setStar(star.data);
        setRepo(repos.data);
        setGitNotFound(false);
    } catch (error) {
        setGitNotFound(true);
    }


}