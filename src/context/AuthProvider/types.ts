export interface IUser {
    token?: string;
    id?: string;
    role?: string;
}

export interface IContext extends IUser {
    authenticate: (identifier: string, password: string) => Promise<void>
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element
}