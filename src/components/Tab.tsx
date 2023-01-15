const Tab = ({ dish }: { dish: { img: string; name: string } }) => {
  return (
    <button className='group bg-btnOverlay hover:bg-green-500 focus:bg-green-500 focus:animate-[wiggle_150ms_linear] w-24 min-w-[6rem] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all  ease-out'>
      <div className='w-10 h-10 rounded-full bg-green-500 group-hover:bg-stone-200 group-focus:bg-stone-200  flex items-center justify-center'>
        <span className='group-hover:text-black group-focus:text-black text-slate-100 text-lg'>
          {dish.img}
        </span>
      </div>
      <p className='text-base text-textColor group-hover:text-white group-focus:text-white'>
        {dish.name}
      </p>
    </button>
  )
}

export default Tab
