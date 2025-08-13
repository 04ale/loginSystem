import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col border-1 py-4 mt-3 bg-white rounded-lg shadow-lg border-gray-300 w-29/30 justify-center items-center gap-3">
        <h1 className="font-bold text-lg">Home</h1>
        <Link to="/signin">
          <button className="p-3 text-white rounded-md bg-blue-400 cursor-pointer">
            Fazer Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="p-3 text-white rounded-md bg-blue-400 cursor-pointer">
            Registrar-se
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
