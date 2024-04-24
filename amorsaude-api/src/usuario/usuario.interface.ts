export interface IUsuario {
    id?: number;
    username?: string;
    email: string;
    password?: string;
};

export interface ILoginResponse{
    access_token: string;
    token_type: string;
    expire_in: number;
}