import * as Dialog from "@radix-ui/react-dialog";
import logo from "../../assets/logo-full.svg";

export default function Sign() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>Entrar</button>
      </Dialog.Trigger>
      <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-30">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center w-80">
          <Dialog.Title className="text-lg font-bold mb-4"><img src={logo} alt="logo-full" className="h-12" /></Dialog.Title>
          <Dialog.Description className="text-2xl text-gray-700 mb-4">Entrar</Dialog.Description>
          <div className="w-full">
            <form className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">Senha</label>
                <input type="password" id="password" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500" />
              </div>
            </form>
            <div className="mt-4">
              <Dialog.Close asChild>
                <button className=" w-full bg-backgroundHeader-900 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500">Entrar</button>
              </Dialog.Close>
            </div>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
