import Progress from '../ProgressRegister';

export default function CaregiverForm() {
    const steps = [
        { number: 1, isActive: true, description: "Autenticação", bar: { isActive: false } },
        { number: 2, isActive: false, description: "Tipo de Usuário", bar: { isActive: false } },
        { number: 3, isActive: false, description: "Informação", bar: { isActive: false } },
        { number: 4, isActive: false, description: "Endereço", bar: { isActive: false } },
        { number: 5, isActive: false, description: "Serviço", bar: { isActive: false } },
    ];

    return (
        <>
            <Progress steps={steps} />
            <form action="">
                <h1>Fomulario de Cuidador</h1>
            </form>
        </>

    );
}
