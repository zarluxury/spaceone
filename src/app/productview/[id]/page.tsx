import React from 'react'
import ViewProduct from '@/components/sections/ViewProduct'
import { getProductBySlug } from '@/data/products'

interface PageProps {
  params: {
    id: string
  }
}

const page = async ({ params }: PageProps) => {
  const { id } = await params
  const product = getProductBySlug(id)
  
  if (!product) {
    return <div>Product not found</div>
  }
  
  return <ViewProduct product={product} />
}

export default page