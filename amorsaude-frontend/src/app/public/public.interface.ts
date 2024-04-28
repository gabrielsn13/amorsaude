export interface IUsuario{
    id?: number;
    email?: string;
    username?: string;
    password?: string;
  }
  
export interface ILoginResponse {
    access_token: string;
    token_Type: string;
    expires_in: number;
}

export interface IProduto{
  id?: number;
  email?: string;
  username?: string;
  password?: string;
}

export interface IEmpresa{
  id?: number;
  email?: string;
  username?: string;
  password?: string;
}