import React from 'react'
import ViewProduct from '@/components/sections/ViewProduct'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params

  return <ViewProduct slug={slug} />
}

export default Page