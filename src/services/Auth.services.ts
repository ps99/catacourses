const baseUrl = 'http://localhost:3000/';
const getJson = (resp: Response) => resp.json();

export interface IUser {
  id: string;
  name: string;
  password: string;
}

export const AuthManager = () => {
  const getUserById = async (id:string):Promise<IUser | null> => {
    return fetch(`${baseUrl}users?id=${id}`)
      .then(getJson)
      .then((users: IUser[]) => (users.length > 0 ? users[0] : null));
  }

  const getAuth = async (login: string, password: string): Promise<IUser | null> => {
    const user = await getUserById(login);

    return user?.password === password ? user : null;
  }

  return {
    getUserById,
    getAuth
  }
}
