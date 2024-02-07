import React from 'react'
import newCollections from '../data/new_collections'
import Item from './Item';

const NewCollections = () => {
  return (
    <div className="container m-auto flex flex-col items-center gap-4 mb-16 ">
      <h1 className="text-4xl lg:text-5xl ">NEW COLLECTIONS</h1>
      <hr className="w-36 border-2 lg:border-[3px] border-black rounded-full"/>
      <div className=" grid grid-cols-2 lg:grid-cols-4  mt-4 px-5 py-5 bg-slate-100 ">
        {newCollections.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              newPrice={item.new_price}
              oldPrice={item.old_price}
            />
          );
        })}
      </div>
    </div>
  )
}

export default NewCollections