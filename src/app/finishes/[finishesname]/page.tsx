import Finishes from '@/components/sections/Finishes'
import React from 'react'

interface PageProps {
  params: Promise<{
    finishesname: string
  }>
}

const page = async ({ params }: PageProps) => {
  const { finishesname } = await params
  
  return (<>
    <Finishes finishName={finishesname} />
  </>)
}

export default page
