import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-[#090909] py-3">
        <div className="flex justify-between items-center">
            <NavLink to="/">
                <div className="flex items-center gap-2.5 md:ml-5 ml-1">
                    <img className="invert w-9" src="logo.svg" alt="logo" />
                    <span className="font-black text-white text-2xl">Congreso</span>
                </div>
            </NavLink>
            
            <div className="md:mr-5 mr-1 flex gap-2">
                <NavLink to="/login">
                    <button className="md:py-1.5 py-0.5 px-2 rounded-md border-1 font-semibold cursor-pointer">Iniciar sesión</button>
                </NavLink>
                <NavLink to="/signup">
                    <button className="bg-white md:py-1.5 py-0.5 px-2 rounded-md font-semibold text-[#090909] cursor-pointer">Regístrate</button>
                </NavLink>
            </div>
        </div>
    </header>
  )
}
