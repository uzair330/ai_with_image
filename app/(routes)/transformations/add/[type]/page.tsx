import Header from '@/components/header'
import React from 'react'
import { transformationTypes } from '@/constants'
import TransformationForm from '@/components/TransformationForm'
import { auth } from '@clerk/nextjs'
import { getUserById } from '@/lib/actions/user.action'
import { redirect } from 'next/dist/server/api-utils'
const AddTransformationType = async ({params:{type}}:SearchParamProps) => {
  const {userId}=auth()
  const transformation = transformationTypes[type];
  if(userId) {

    var user = await getUserById(userId);
  }

  return (
    <div className='px-6 py-4 '>
      <Header
      
      title={transformation.title}
      subtitle={transformation.subTitle}
      
      />
      <TransformationForm
      action='Add'
      userId={userId}
      type={transformation.type as TransformationTypeKey}
      creditBalance={user.creditBalance}
      />
    </div>
  )
}

export default AddTransformationType
