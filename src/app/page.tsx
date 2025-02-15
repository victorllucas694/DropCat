"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "aaa@gmail.com" && password === "123456") {
      const user = {
        id: "1",
        name: "Usuário Teste",
        email,
      };

      localStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
    } else {
      alert("Credenciais inválidas!");
    }
  };
  return (
    <div className="flex justify-center min-h-screen bg-almost-black">
      <div className="bg-almost-black p-8 mt-32 rounded-lg w-full max-w-md">
        <h1 className="text-3xl text-white text-center mb-6">DropCat</h1>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label htmlFor="email" className="text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-almost-black border-2 border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-white">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="***********"
              name="password"
              className="w-full p-3 bg-almost-black border-2 border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-4 flex justify-between text-gray-400">
            <p className="hover:text-white cursor-pointer">Esqueci minha senha</p>
            <p className="hover:text-white cursor-pointer">Criar conta</p>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-20 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
