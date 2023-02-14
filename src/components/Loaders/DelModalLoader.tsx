export function DelModalLoader({ id }: { id: string }) {
  return (
    <div
      id={id}
      className='max-w-lg bg-white border-gray-300 w-[32rem] p-6 rounded-lg shadow-lg'
    >
      <div className='animate-pulse'>
        <div className='mx-auto mb-4  w-14 h-14 bg-slate-300 '>
          &nbsp;&nbsp;
        </div>
        <div className='my-12 w-full h-4 bg-slate-300'>&nbsp;&nbsp;</div>
        <div className='my-12 w-full h-4 bg-slate-300'>&nbsp;&nbsp;</div>
      </div>
    </div>
  );
}
