
import { useState } from "react";
import logoBlack from "../assets/image/logo-black.svg"
import CaregiverForm from "../components/register/caregiver/CaregiverForm";
import ClientForm from "../components/register/client/ClientForm";
import SelectOption from "../components/register/SelectOption";

export default function Register() {

    const [selectedForm, setSelectedForm] = useState("");

    const handleSelect = (value: string) => {
        setSelectedForm(value);
    };

    return (
        <div className="h-dvh w-dvw flex">

            <div className="w-2/5 h-full flex items-center justify-center bg-[#F2F2F2] shadow-md">
                <img src={logoBlack} alt="logo-black" className="w-3/5" />
            </div>

            <div className="w-3/4 h-full flex flex-col items-center">
                <h1 className="my-8 font-bold text-3xl">Cadastro</h1>

                {!selectedForm ? (
                    <SelectOption onSelect={handleSelect} />
                ) : selectedForm === "caregiver" ? (
                    <CaregiverForm />
                ) : (
                    <ClientForm />
                )}

            </div>


        </div>
    )
}