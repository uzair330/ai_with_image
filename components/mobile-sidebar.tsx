"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Sidebar from '@/components/sidebar'

const MobileSidebar = () => {
    const [Mounted,setMounted]=useState(false)
    useEffect(()=>{
        setMounted(true)
    },[])

    if(!setMounted){
        return null
    }
  return (
    <div>
        
{/* <Sheet>
  <SheetTrigger>
  <Button variant={'ghost'} size={'icon'} className='md:hidden'>
        <Menu/>
      </Button>
  </SheetTrigger>
  <SheetContent side="left" className='p-0'>
    <Sidebar/>
  </SheetContent >
</Sheet> */}

<Sheet>
      <SheetTrigger>
        <Button variant={'ghost'} size={'icon'} className='md:hidden'>
          <Menu/>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className='p-0'>
        <Sidebar/>
      </SheetContent>
    </Sheet>


    </div>
  )
}

export default MobileSidebar
