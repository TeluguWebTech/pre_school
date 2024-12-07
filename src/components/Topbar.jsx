import React from 'react'

const Topbar = () => {
  return (
    <div className='topBarSection'>
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex items-center justify-between p-4 h-20">
    <a className="flex title-font font-medium items-center text-gray-900">
     <img src="/ld.jpg" alt="" style={{width:"100px"}}/>
      <span className="ml-3 text-xl">Little Darlings</span>
    </a>
    
    <nav className="flex space-x-5">
      <a className="hover:text-gray-900">First Link</a>
      <a className="hover:text-gray-900">Second Link</a>
      <a className="hover:text-gray-900">Third Link</a>
      <a className="hover:text-gray-900">Fourth Link</a>
    </nav>

    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">
      Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>

    </div>
  )
}

export default Topbar