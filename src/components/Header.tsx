interface HeaderProps {
    cartCount : number
}

function Header( { cartCount } : HeaderProps ) {
    return (
      <header className="w-full bg-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 ">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">My Store</h1>
            <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full hover:bg-indigo-500 transition-colors relative outline-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                    </svg>
                    
                    {cartCount > 0 ? (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {cartCount}
                    </span>
                    ) : (<></>)}
                    
                    <span className="sr-only">Cart</span>
                </button>
                </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;