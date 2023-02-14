import { FaSort } from 'react-icons/fa';

export default function ProductHead({ setSort }: { setSort: any }) {
  const handleSort = (property: string) => {
    // property to stort by
    // toggle determines wheter asc of desc
    setSort((s: { toggle: any }) => ({
      property: property,
      toggle: !s.toggle,
    }));
  };
  return (
    <thead className='text-xs max-[845px]:hidden bg-green-600 text-white  uppercase '>
      <tr>
        <th scope='col' className='px-6 py-3'>
          <span className='sr-only'>Image</span>
        </th>
        <th scope='col' className='px-6 py-3'>
          <button
            onClick={() => handleSort('title')}
            className='flex items-center'
          >
            Title
            <FaSort className='w-3 h-3 ml-1' />
          </button>
        </th>
        <th scope='col' className='px-6 py-3'>
          <div className='flex items-center'>Detail</div>
        </th>
        <th scope='col' className='px-6 py-3'>
          <div className='flex items-center'>Category</div>
        </th>
        <th scope='col' className='px-6 py-3'>
          <button
            onClick={() => handleSort('stock')}
            className='flex items-center'
          >
            Stock
            <FaSort className='w-3 h-3 ml-1' />
          </button>
        </th>
        <th scope='col' className='px-6 py-3'>
          <button
            onClick={() => handleSort('price')}
            className='flex items-center'
          >
            Price
            <FaSort className='w-3 h-3 ml-1' />
          </button>
        </th>
        <th scope='col' className='px-6 py-3'>
          <span className='sr-only'>Edit</span>
        </th>
      </tr>
    </thead>
  );
}
