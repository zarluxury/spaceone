import React from 'react'
import ViewProduct from '@/components/sections/ViewProduct'

interface PageProps {
  params: {
    id: string
  }
}

const page = ({ params }: PageProps) => {
  return <ViewProduct  />
}

export default page