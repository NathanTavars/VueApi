import { http } from "./config";

export default {
    listar:() => {
        return http.get('roupas')
    },

    salvar:(roupa) => {
        return http.post('roupas', roupa)
    },

    atualizar: (roupa) => {    
        return http.put(`roupas/${roupa.roupaId}`, roupa);
    },

    apagar: (roupa) => {    
        return http.delete(`roupas/${roupa.roupaId}`, roupa);
    }
    
}