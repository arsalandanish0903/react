import React from 'react'

function List({items}) {
  return (
    <ul className='flex'>
        {items.map((item, index)=>(
            <li key={index} className='px-5'>{item}</li>
        ))}
    </ul>
  );
}

export default List

// import React from 'react';

// function List({ items }) {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// }

// export default List;
