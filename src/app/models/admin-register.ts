export interface AdminRegister {
    nombres: string;
    apellidos: string;
    cedula: string;
    credential: {
        email: string;
        password: string;
    };
}
