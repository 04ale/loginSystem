import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Back from "../components/Back";
import { auth } from "../services/FirebaseConfig";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const handleSignIn = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      alert("Login realizado");
      nav("/dashboard");
    } catch (erro) {
      alert("Erro no login, tente novamente");
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <h1 className="justify-center items-center flex">Carregando...</h1>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col border-1 py-4 mt-3 bg-white rounded-lg shadow-lg border-gray-300 w-29/30 justify-center items-center gap-3">
            <div className="absolute left-6 top-6">
              <Back />
            </div>

            <h1 className="font-bold text-lg">Sistema de Login</h1>
            <form
              onSubmit={handleSignIn}
              className="flex flex-col gap-3 justify-center items-center"
            >
              <div className="flex flex-row gap-3">
                <label htmlFor="email">E-mail: </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  required
                  className="border-1 border-gray-300 rounded-2xl pl-3"
                />
              </div>
              <div className="flex flex-row gap-3">
                <label htmlFor="password">Senha: </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                  required
                  className="border-1 border-gray-300 rounded-2xl pl-3"
                />
              </div>
              <button
                type="submit"
                className="border-1 border-blue-400 cursor-pointer bg-blue-400 rounded-md w-1/2 text-white"
              >
                Fazer login
              </button>
            </form>
            <p className="flex gap-2">
              Ainda não tem conta?
              <Link to="/signup" className="text-blue-400">
                Registre-se clicando aqui!
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIn;
