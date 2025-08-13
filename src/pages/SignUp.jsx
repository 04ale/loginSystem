import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/FirebaseConfig";
import Back from "../components/Back";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const handleSignUp = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      alert("Usuário registrado", user.user);
      nav("/signin");
    } catch (erro) {
      console.error("Erro de registro", erro);
      alert("Erro no registro, tente novamente");
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
            <h1 className="font-bold text-lg">Registre-se</h1>
            <form
              onSubmit={handleSignUp}
              className="flex flex-col gap-3 justify-center items-center"
            >
              <div className="flex flex-row gap-3">
                <label htmlFor="">E-mail:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  className="border-1 border-gray-300 rounded-2xl pl-3"
                />
              </div>
              <div className="flex flex-row gap-3">
                <label htmlFor="">Senha: </label>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                  className="border-1 border-gray-300 rounded-2xl pl-3"
                />
              </div>
              <button
                type="submit"
                className="border-1 border-blue-400 cursor-pointer bg-blue-400 rounded-md w-1/2 text-white"
              >
                Salvar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default SignUp;
