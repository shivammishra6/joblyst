import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddJob from "./pages/AddJob";
import JobDetails from "./pages/JobDetails";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

function App() {
  return (
    <>
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
          >
            <Search size={28} strokeWidth={2.5} />
          </Link>
          <Link
            to="/"
            className="text-2xl ml-4 font-bold text-blue-600 hover:text-blue-800 transition duration-300"
          >
            JobLyst
          </Link>
        </div>

        {/* Post Job Button */}
        <div>
          <Link
            to="/add-job"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Post Job
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>

      
      <footer className="bg-white text-center text-gray-600 text-sm py-4 mt-8 border-t">
        Created with 💖 by Shivam
      </footer>
    </>
  );
}

export default App;
