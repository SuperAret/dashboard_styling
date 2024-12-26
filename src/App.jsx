import { useState } from 'react'


function App() {
const [open, setOpen] = useState(true);


  const Menus= [
    {title: 'Dashboard', icon: '/src/assets/DashboardIcon.png'},
    {title: 'Users', icon: '/src/assets/UsersIcon.png'},
    {title: 'Products', icon: '/src/assets/ProductsIcon.png', gap: true},
    {title: 'Orders', icon: '/src/assets/OrdersIcon.png'},
    {title: 'Invoices', icon: '/src/assets/InvoicesIcon.png'},
    {title: 'Messages', icon: '/src/assets/MessagesIcon.png'},
    {title: 'Analytics', icon: '/src/assets/AnalyticsIcon.png', gap: true},
    {title: 'Settings', icon: '/src/assets/SettingsIcon.png'},
]

  return (
    <div className='flex'>
        <div 
        className={`${open ? "w-72" : "w-20"} duration-300 min-h-screen bg-dark-purple relative p-2 pt-4`}>
          <img src='/src/assets/BackIcon.png' width={24} height={24}
          className={`absolute cursor-pointer top-9 -right-3 border-2 border-dark-purple rounded-full
            ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          />
         <div className='flex items-center gap-x-4'>
         <img src='/src/assets/Logo.png' width={24} height={24}
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
          <h1
            className={`text-white origin-left font-medium duration-300 text-lg ${!open && "scale-0"}`} 
          >Designer
          </h1>
         </div>
        
        <ul className='pt-6'>
          {Menus.map((menu, index)=> (
            <li key={index} className={`text-sm duration-300 flex items-center gap-x-4 text-gray-300
              p-2 hover:text-white hover:bg-light-white border-2 border-transparent
              ${menu.gap ? "mt-9" : "mt-2"}
              `}
              >
              <img src={menu.icon} width={24} height={24} className='mr-3' />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
                </span>
            </li>
          ))}
        </ul>
        </div>
       <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
        <h1>Home Page</h1>
       </div>
    </div>
   
  )
}

export default App
