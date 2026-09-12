import './App.css'

function App() {


  return (
    <>
      <section className="shadow-sm">


        <div className="navbar bg-base-100  max-w-8/12 mx-auto">
          <div className="navbar-start ">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a className="text-[#D91B7E]">Home</a></li>
                <li><a>Technologies</a></li>
                <li><a>Projects</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
            <div>
              <img src="../public/logo-text.png" alt="React Logo" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a className="text-[#D91B7E]">Home</a></li>
              <li><a>Technologies</a></li>
              <li><a>Projects</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <div className="navbar-end gap-5">
            <a className="btn bg-[#ffff] text-black rounded-full hover:bg-[#D91B7E] hover:text-white">Sign in</a>
            <a className="btn bg-[#D91B7E] text-white rounded-full hover:bg-white hover:text-black">Sign up</a>
          </div>
        </div>
      </section>

      {/* hero section */}
      <section className="max-w-8/12 mx-auto pt-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-10 items-center">
          {/* hero content  */}
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
              <a className="btn border-none bg-linear-to-r from-[#F97316] to-[#EC4899] text-white rounded-lg px-6  shadow-md hover:opacity-90">
                Explore Technologies
              </a>
              <a className="w-42.5 btn bg-white border border-gray-300 text-black rounded-lg px-6 hover:bg-gray-100">
                Learn More
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center items-end">
            <img src="../public/banner-stack.png" alt="Hero Image" />
          </div>

        </div>

      </section>

    </>
  )
}

export default App
