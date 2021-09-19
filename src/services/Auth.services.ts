const baseUrl = 'http://localhost:3000/';
const getJson = (resp: Response) => resp.json();

export interface IUser {
  login: string;
  password: string;
  name: string;
}

export const AuthManager = () => {
  const ITEM_NAME = 'user';

  const getUserById = async (id:string):Promise<IUser | null> => {
    const user = await fetch(`${baseUrl}users?id=${id}`)
      .then(getJson)
      .then((users: IUser[]) => (users.length > 0 ? users[0] : null));

    return user;
  }

  const login = async (id: string, password: string): Promise<IUser | null> => {
    const user = await getUserById(id);

    if(user?.password === password) {
      saveUserToLocalStorage(user);
      return user;
    }

    eraseUserFromLocalStorage();
    return null;
  }

  const checkAuthorization = async (): Promise<JsonWebKey | null> => {
    return loadUserFromLocalStorage();
  }

  const logout = (): void => {
    eraseUserFromLocalStorage();
  }

  const saveUserToLocalStorage = (data:IUser):void => {
    localStorage.setItem(ITEM_NAME, JSON.stringify(data))
  }

  const loadUserFromLocalStorage = ():JsonWebKey | null => {
    const item_string = localStorage.getItem(ITEM_NAME) || 'null';
    return JSON.parse(item_string);
  }

  const eraseUserFromLocalStorage = ():void => {
    localStorage.removeItem(ITEM_NAME);
  }

  return {
    getUser: getUserById,
    login,
    logout,
    check: checkAuthorization,
  }
}

export default AuthManager;
