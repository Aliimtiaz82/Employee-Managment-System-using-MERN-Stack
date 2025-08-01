
const Header = ({data , logout }) => {
  return (
    <div className='flex justify-between p-6 '>
        <div className=' gap-3'>
            <p className='text-yellow-300 text-3xl font-semibold'>Hello</p>
            <p className='text-stone-700 text-5xl font-semibold'>{data ? data.firstName : "Admin"}  <i className="fa-regular fa-hand-wave text-yellow-400 animate-bounce mt-5"></i></p>
        </div>
        <div>
            <a href="" onClick={logout} className='bg-red-600 hidden md:block p-3 rounded-lg text-white font-bold hover:bg-red-700'><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout</a>
            <a href="" onClick={logout} className='bg-red-600 md:hidden  p-3 rounded-lg text-white font-bold hover:bg-red-700'><i className="fa-solid fa-arrow-right-from-bracket"></i></a>
        </div>
    </div>
  )
} 

export default Header
