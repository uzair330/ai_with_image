import React from 'react'

const Header = ({title,subtitle}:{title:string,subtitle?:string}) => {
  return (
    <div className=' '>
        <div className="flex ">

{/* <Image /> */}
      <h2 className='font-extrabold text-4xl text-blue-600'>
          {title}
          </h2>
        </div>
        {
            subtitle && <p className='py-1 text-muted-foreground'>{subtitle}</p>
        }
    </div>
  )
}

export default Header
