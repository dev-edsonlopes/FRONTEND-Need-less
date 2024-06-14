import { useState } from "react";

interface SelectOptionProps {
    onSelect: (value: string) => void;
}

export default function SelectOption({ onSelect }: SelectOptionProps) {
    const [selectedRadios, setSelectedRadios] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRadios(event.target.value);
    };

    const handleSubmit = () => {
        onSelect(selectedRadios);
    };

    return (
        <form className="flex flex-col items-center justify-around h-full">
            <fieldset className="mb-5">
                <legend className="mb-5">Você é cuidador(a)?</legend>

                <div className="border-4 border-secondary-600 px-14 rounded-md mb-4">
                    <input
                        type="radio"
                        id="caregiver"
                        name="caregiver"
                        className="outline-none"
                        value="caregiver"
                        checked={selectedRadios === 'caregiver'}
                        onChange={handleChange} />
                    <label htmlFor="caregiver" className="font-bold ml-2">Sou cuidador</label>
                </div>

                <div className="border-4 border-secondary-600 px-14 rounded-md">
                    <input
                        type="radio"
                        id="notCaregiver"
                        name="caregiver"
                        className="outline-none"
                        value="notCaregiver"
                        checked={selectedRadios === 'notCaregiver'}
                        onChange={handleChange} />
                    <label htmlFor="notCaregiver" className="font-bold ml-2">Não sou cuidador</label>
                </div>
            </fieldset>
            <button
                type="button"
                onClick={handleSubmit}
                className="bg-secondary-600 text-[#f2f2f2] p-1 w-full font-bold rounded-md"
            >
                Confirmar
            </button>
        </form>
    );
}
