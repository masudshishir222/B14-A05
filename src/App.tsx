import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

interface User {
  id: number;
  name: string;
  description: string;
  category: string;
  difficulty: string;
  rating: number;
  badge: string;
  icon: string;
}


function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const [addedStack, setAddedStack] = useState(() => {
    const savedStack = localStorage.getItem("devStack");
    return savedStack ? JSON.parse(savedStack) : [];
  });

  const usersFetch = async () => {
    try {
      const response = await fetch('/cart.json');
      const data = await response.json();


      setTimeout(() => {
        setUsers(data);
        setLoading(false);
      }, 2000);

    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    usersFetch();
  }, []);

  useEffect(() => {
    localStorage.setItem("devStack", JSON.stringify(addedStack));
  }, [addedStack]);

  const handleAddToStack = (user: User) => {
    console.log("Clicked User Data:", user);

    if (!addedStack.some((item: any) => item.id === user.id)) {
      setAddedStack([...addedStack, user]);
      toast.success(`${user.name} added to stack!`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const handleRemoveFromStack = (user: User) => {
    setAddedStack(addedStack.filter((item: any) => item.id !== user.id));
    toast.error(`${user.name} removed from stack!`, {
      position: "top-right",
      autoClose: 1000,
    });
  };

  const handleRemoveAll = () => {
    setAddedStack([]);
    toast.warn("All technologies removed!", {
      position: "top-right",
      autoClose: 5000,
    });
  };

  return (
    <>
      <ToastContainer />
      {/* Navbar Section */}
      <section className="shadow-sm sticky top-0 z-50 bg-white">
        <div className="navbar bg-base-100 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1 sm:p-2">
                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow border border-gray-100">
                <li><a className="text-[#D91B7E]">Home</a></li>
                <li><a>Technologies</a></li>
                <li><a>Projects</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
            <div className="flex items-center ml-2 lg:ml-0">
              <img src="../public/logo-text.png" alt="React Logo" className="h-7 sm:h-8 w-auto object-contain" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex font-bold">
            <ul className="menu menu-horizontal px-1">
              <li><a className="text-[#D91B7E]">Home</a></li>
              <li><a>Technologies</a></li>
              <li><a>Projects</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            <a className="btn btn-sm sm:btn-md bg-[#ffff] text-black rounded-full hover:bg-[#D91B7E] hover:text-white">Sign in</a>
            <a className="btn btn-sm sm:btn-md bg-[#D91B7E] text-white rounded-full hover:bg-white hover:text-black">Sign up</a>
          </div>
        </div>
      </section>

      {/* Hero section */}
      <section className="max-w-8/12 mx-auto pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-10 items-center">
          <div>
            <h1 className="text-6xl font-bold">
              Build Your Ideal <br />
              <span className="text-6xl font-extrabold tracking-tight bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            <p className="py-6 text-lg">
              Explore frontend, backend, database, and tooling options, <br />
              compare them side by side, and put together the stack that fits your <br />
              next project.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <p className="btn border-none bg-linear-to-r from-[#F97316] to-[#EC4899] text-white rounded-lg px-6 shadow-md hover:opacity-90">
                Explore Technologies
              </p>
              <p className="w-42.5 btn bg-white border border-gray-300 text-black rounded-lg px-6 hover:bg-gray-100">
                Learn More
              </p>
            </div>
          </div>
          <div className="flex justify-center items-end">
            <img src="../public/banner-stack.png" alt="Hero Image" />
          </div>
        </div>
      </section>

      <section className="max-w-8/12 mx-auto py-12">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold">
            Explore the <span className="bg-linear-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-500 mt-2">Pick one technology per category to build your ideal stack.</p>
        </div>

        {/* Cards and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          <div className="lg:col-span-3">
            {/* Loading */}
            {loading ? (
              <div className="col-span-3 flex flex-col items-center justify-center py-24 bg-white border border-gray-200 rounded-2xl">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-pink-500 border-t-transparent"></div>
                <p className="text-gray-500 mt-4 font-medium">Loading...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {users.map(user => {
                  const isAdded = addedStack.some((item: any) => item.id === user.id);
                  return (
                    <div key={user.id} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <img src={user.icon} alt={user.name} className="w-10 h-10" />
                          <span className="text-xs bg-sky-50 text-sky-600 px-2.5 py-1 rounded-full font-medium">
                            {user.badge}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-1">{user.name}</h3>
                        <p className="text-sm text-gray-500 mb-4">
                          {user.description}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <span className="bg-gray-100 px-2 py-1 rounded">{user.category}</span>
                          <span> {user.difficulty}</span>
                          <span className="text-amber-500 font-medium">⭐ {user.rating}</span>
                        </div>
                        <button
                          onClick={() => handleAddToStack(user)}
                          disabled={isAdded}
                          className={`w-full py-2.5 rounded-xl font-medium transition ${isAdded
                            ? "bg-[#DB2777] text-white cursor-default"
                            : "bg-[#0F172A] text-white hover:bg-black cursor-pointer"
                            }`}>
                          {isAdded ? "Added" : "Add to Stack"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Side */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-5 sticky top-6">
              <h3 className="font-bold text-lg mb-1">Your Stack</h3>
              <p className="text-xs text-gray-400 mb-4">
                {addedStack.length} {addedStack.length === 1 ? "Technology Selected" : "Technologies Selected"}
              </p>

              {addedStack.length === 0 ? (
                <>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center text-sm text-gray-400 mt-2">
                    Your stack is empty.
                  </div>
                </>
              ) : (
                <div className="space-y-3 mt-2">
                  {addedStack.map((item: any) => (
                    <div key={item.id} className="flex items-center justify-between bg-white border border-gray-200 p-3 rounded-xl shadow-xs">

                      <div className="flex items-center gap-3">
                        <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                        <div>
                          <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                          <span className="text-[11px] text-gray-400 block font-medium">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleRemoveFromStack(item)}
                        className="text-gray-400 hover:text-red-500 font-bold p-1 cursor-pointer transition-colors"
                        title="Remove"
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={handleRemoveAll}
                    className="w-full mt-4 py-2.5 border border-red-200 text-red-500 font-medium text-sm rounded-xl hover:bg-red-50 transition cursor-pointer"
                  >
                    Remove All
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-8/12 mx-auto px-4 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            <div className="col-span-5 space-y-4">
              <span className="flex items-center gap-2 ">
                <img src="../public/logo-text.png" alt="React Logo" />
              </span>
              <p className="text-sm text-gray-500 max-w-sm">
                Curated tools, technologies, and resources for developers building modern software.
              </p>
              <div>
                <ul className="flex space-x-6 pt-2 text-sm font-medium text-gray-800">
                  <li className="hover:text-pink-600 transition-colors">GitHub</li>
                  <li className="hover:text-pink-600 transition-colors">Twitter</li>
                  <li className="hover:text-pink-600 transition-colors">LinkedIn</li>
                </ul>
              </div>
            </div>

            <div className="col-span-7 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-xs font-bold tracking-wider text-gray-900 uppercase mb-4">PRODUCT</h3>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="hover:text-gray-900 transition-colors">Home</li>
                  <li className="hover:text-gray-900 transition-colors">Technologies</li>
                  <li className="hover:text-gray-900 transition-colors">Projects</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-wider text-gray-900 uppercase mb-4">COMPANY</h3>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="hover:text-gray-900 transition-colors">About</li>
                  <li className="hover:text-gray-900 transition-colors">Contact</li>
                  <li className="hover:text-gray-900 transition-colors">Careers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-wider text-gray-900 uppercase mb-4">LEGAL</h3>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="hover:text-gray-900 transition-colors">Privacy Policy</li>
                  <li className="hover:text-gray-900 transition-colors">Terms of Service</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div>
              <ul className="flex space-x-6 mt-4 sm:mt-0">
                <li className="hover:text-gray-600 transition-colors">Privacy</li>
                <li className="hover:text-gray-600 transition-colors">Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default App