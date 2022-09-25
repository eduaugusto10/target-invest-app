import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successMessageChange = () => toast.success("Usuário alterado com sucesso", {
    theme: "colored"
});
export const successMessageCreate = () => toast.success("Usuário criado com sucesso", {
    theme: "colored"
});
export const successMessageDelete = () => toast.success("Usuário deletado com sucesso", {
    theme: "colored"
});
export const errorMessage = () => toast.error("Erro no sistema, tente mais tarde", {
    theme: "colored"
});
export const errorMessageDelete = () => toast.error("Erro ao deletar usuário", {
    theme: "colored"
});
export const errorSession = () => toast.error("Sessão expirada, faça login novamente", {
    theme: "colored"
});