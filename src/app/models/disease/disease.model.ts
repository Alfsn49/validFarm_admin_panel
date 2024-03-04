export interface Disease {
    cod_cie: string,
    nombre:string,
    agente_etiolog:string,
    system:{
        aparato:string,
        imagen:string
    }
    reference:{
        instrum_sanitario:string,
        bibliografia:string
    }

}
