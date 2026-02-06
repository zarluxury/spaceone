import React from 'react'
import ViewProduct from '@/components/sections/ViewProduct'

interface PageProps {
  params: {
    category: string
    subcategory: string
    product: string
  }
}

const page = ({ params }: PageProps) => {
  return <ViewProduct />
}

export default page
