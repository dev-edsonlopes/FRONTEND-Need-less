import { Api } from "../../services/api"
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage() {
    const json = localStorage.getItem('u')

    if (!json) {
        return null;
    }

    const user = JSON.parse(json);

    return user ?? null;
}

export async function loginRequest(identifier: string, password: string): Promise<IUser | null> {
    try {
        const response = await Api.post("auth/sign-in", { identifier, password });
        return response.data;
    } catch (error) {
        console.error('Erro durante a solicitação de login:', error);
        return null;
    }
}