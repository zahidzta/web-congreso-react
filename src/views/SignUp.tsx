import { useState } from "react"
import { Link } from "react-router-dom"
import { ExclamationCircleIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid'

export default function SignUp() {

  const [visiblePassword, setVisiblePassword] = useState({password: false, confirmPassword: false})
  const toggleVisibility = (field: keyof typeof visiblePassword) => {
    setVisiblePassword(prev => ({...prev, [field]: !prev[field]}))
  }

  return (
    <div className="h-screen w-full flex justify-center items-center" >
      <div className="flex flex-col items-center px-7 py-5 rounded-xl bg-[#111111]">
        <h4 className="text-3xl font-medium">
          Regístrate
        </h4>
        <form className="mt-7 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm" htmlFor="name">
                Nombre completo
              </label>
              <div className="relative">
                <input type="text" className="w-full pl-3 pr-10 py-2 bg-transparent text-sm border border-gray-200 rounded-md transition duration-300 ease focus:outline-none focus:border-gray-500 hover:border-gray-500 shadow-sm focus:shadow" id="name" />
              </div>
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm" htmlFor="email">
                Correo electrónico
              </label>
              <div className="relative">
                <input type="text" className="w-full pl-3 pr-10 py-2 bg-transparent text-sm border border-gray-200 rounded-md transition duration-300 ease focus:outline-none focus:border-gray-500 hover:border-gray-500 shadow-sm focus:shadow" id="email" />
              </div>
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm" htmlFor="password">
                Contraseña
              </label>
              <div className="relative">
                <input type={visiblePassword.password ? 'text' : 'password'} className="w-full pl-3 pr-3 py-2 bg-transparent text-sm border border-gray-200 rounded-md transition duration-300 ease focus:outline-none focus:border-gray-500 hover:border-gray-500 shadow-sm focus:shadow" id="password" />
                {visiblePassword.password ?
                  <EyeSlashIcon className="absolute w-5 h-5 top-2.5 right-2.5 cursor-pointer" onClick={() => toggleVisibility("password")} />
                  : <EyeIcon className="absolute w-5 h-5 top-2.5 right-2.5 cursor-pointer" onClick={() => toggleVisibility("password")} />}

              </div>
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm" htmlFor="confirmPassword">
                Comprobar contraseña
              </label>
              <div className="relative">
                <input type={visiblePassword.confirmPassword ? 'text' : 'password'} className="w-full pl-3 pr-3 py-2 bg-transparent text-sm border border-gray-200 rounded-md transition duration-300 ease focus:outline-none focus:border-gray-500 hover:border-gray-500 shadow-sm focus:shadow" id="confirmPassword" />
                {visiblePassword.confirmPassword ?
                  <EyeSlashIcon className="absolute w-5 h-5 top-2.5 right-2.5 cursor-pointer" onClick={() => toggleVisibility("confirmPassword")} />
                  : <EyeIcon className="absolute w-5 h-5 top-2.5 right-2.5 cursor-pointer" onClick={() => toggleVisibility("confirmPassword")} />}
                <p className="flex items-start mt-2 text-xs text-[#797979] font-semibold">
                  <ExclamationCircleIcon className="h-4 w-4 mr-1 text-[#797979]" />
                  Utilice al menos 8 caracteres, una mayúscula, una minúscula y un número.
                </p>
              </div>
            </div>
          </div>
          <button className="mt-4 w-full rounded-full bg-white py-2 px-4 border border-transparent cursor-pointer text-center font-semibold text-sm text-[#111111] transition-all shadow-md hover:shadow-lg focus:bg-gray-200 focus:shadow-none active:bg-gray-200 hover:bg-gray-200 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Crear cuenta
          </button>
          <p className="flex justify-center mt-6 text-sm ">
            ¿Ya tienes una cuenta?
            <Link to="/login" className="ml-1 text-sm font-semibold underline">
              Iniciar sesión
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
