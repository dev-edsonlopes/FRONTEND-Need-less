import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import logo from "../../assets/logo-full.svg";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";

export default function Sign() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [identifier, setidentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await auth.authenticate(identifier, password)


      if (auth.role === "caregiver") {
        navigate({ pathname: "cuidador" })
      } else if (auth.role === "client") {
        navigate({ pathname: "usuario" })
      };

    } catch (error) {
      console.error("Erro durante o login", error);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>Entrar</button>
      </Dialog.Trigger>

      <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-30">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center h-4/6 w-2/5">
          <Dialog.Title className="text-lg font-bold mb-4">
            <img src={logo} alt="logo-full" className="h-20" />
          </Dialog.Title>
          <div className="w-3/5">
            <form className="flex flex-col space-y-4 my-8" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="login" className="text-sm font-medium text-gray-700">Login</label>
                <input
                  type="text"
                  id="login"
                  value={identifier}
                  onChange={(e) => setidentifier(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">Senha</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="btn w-80 bg-secondary-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
