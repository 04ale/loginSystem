import React from "react";
import { useNavigate } from "react-router-dom";

function Back() {
  const nav = useNavigate();
  return (
    <div>
      <button
        className="rounded-md px-3 py-2 bg-blue-400 text-white cursor-pointer"
        onClick={() => nav(-1)}
      >
        Voltar
      </button>
    </div>
  );
}

export default Back;
