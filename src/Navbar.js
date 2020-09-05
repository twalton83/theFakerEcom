import React from 'react'

export default function Navbar() {
    return (
            <nav class="flex items-center justify-between flex-wrap bg-green-700 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-2xl tracking-tight">Shop.Me</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 text-lg">
        Products
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0  hover:text-white text-lg">
        Blog
      </a>
    </div>
    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0  hover:text-white text-lg">
        Cart
      </a>
  </div>
</nav>
    )
}
