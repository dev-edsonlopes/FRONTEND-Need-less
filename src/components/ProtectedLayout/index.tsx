import { useAuth } from "../../context/AuthProvider/useAuth"

export const ProtectedLayout = ({ children, requiredRole }: { children: JSX.Element, requiredRole: string }) => {
    const auth = useAuth();

    if (!auth.id || auth.role !== requiredRole) {
        return <h1>Você não tem acesso a essa página</h1>;
    }

    return children;
};