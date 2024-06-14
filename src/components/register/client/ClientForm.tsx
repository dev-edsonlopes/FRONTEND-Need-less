import Progress from "../ProgressRegister";

export default function ClientForm() {
    const steps = [
        { number: 1, isActive: true, description: "Autenticação", bar: { isActive: false } },
        { number: 3, isActive: false, description: "Informação", bar: { isActive: false } },
        { number: 4, isActive: false, description: "Endereço", bar: { isActive: false } }
    ];

    return (
        <>
            <Progress steps={steps} />
            <form action="">
                <h1>Fomulario de Client</h1>
            </form>
        </>

    );
}