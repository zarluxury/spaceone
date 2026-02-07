import React from 'react';
import Link from 'next/link';
import { Footer } from '../ui/Footer';

interface Product {
  id: number;
  name: string;
  slug: string;
  edition: string;
  isNew: boolean;
  image: string;
  category: string;
  subcategory: string;
}

interface ProductsProps {
  categories?: string[];
  subCategories?: { name: string; count: number }[];
  products?: Product[];
}

const Products = (props: ProductsProps) => {
  const {
    categories = ['Furniture', 'Surfaces', '(Un)Limited'],
    subCategories = [
      { name: 'Cabinets and Sideboards', count: 28 },
      { name: 'Bookcases', count: 6 },
      { name: 'Console', count: 6 },
      { name: 'Tables', count: 10 },
      { name: 'Seatings', count: 7 },
      { name: 'Coffee tables', count: 10 },
      { name: 'Dividers', count: 3 },
      { name: 'Lighting', count: 10 },
      { name: 'Mirrors', count: 5 },
      { name: 'Frames', count: 10 },
      { name: 'Pots', count: 13 },
      { name: 'Landscape', count: 3 },
    ],
    products = [
      {
        id: 1,
        name: 'Alchemy',
        slug: 'alchemy',
        edition: 'Iridium Edition',
        isNew: true,
        image: 'https://media.istockphoto.com/id/1398692686/photo/kitchen-and-living-room-interior-in-new-farmhouse-style-luxury-home-with-open-concept-floor.jpg?s=2048x2048&w=is&k=20&c=dsM5Ak5khqVWru8zFmJdf_l2sVxywQHFeRjcYXgwbKM=',
        category: 'furniture',
        subcategory: 'coffee-tables',
      },
      {
        id: 2,
        name: 'Elizabeth Console',
        slug: 'elizabeth-console',
        edition: 'Iridium Edition',
        isNew: true,
        image: 'https://media.istockphoto.com/id/1989640580/photo/a-technician-is-cutting-luxury-vinyl-floor-tiles-with-a-cutter-to-lay-the-floor-before.jpg?s=2048x2048&w=is&k=20&c=sB--ILudVWFExdvKDQNdNaDko3-7_lCA__pLAESanLw=',
        category: 'furniture',
        subcategory: 'console',
      },
      {
        id: 3,
        name: 'Marea Cabinet',
        slug: 'marea-cabinet',
        edition: 'Iridium Edition',
        isNew: true,
        image: 'https://cdn.pixabay.com/photo/2016/09/19/17/20/home-1680800_960_720.jpg',
        category: 'furniture',
        subcategory: 'cabinets-and-sideboards',
      },
      {
        id: 4,
        name: 'Pandora',
        slug: 'pandora',
        edition: 'Iridium Edition',
        isNew: true,
        image: 'https://media.istockphoto.com/id/1456467041/photo/beautiful-kitchen-in-new-farmhouse-style-luxury-home-with-island-pendant-lights-and-hardwood.jpg?s=2048x2048&w=is&k=20&c=rxv8Po-7IeNHSYgmhWBoFn1lN3GuDyRkK-t0CbkWtdY=',
        category: 'furniture',
        subcategory: 'dividers',
      },
      {
        id: 5,
        name: 'Celato',
        slug: 'celato',
        edition: 'Iridium Edition',
        isNew: true,
        image: 'https://media.istockphoto.com/id/1398692686/photo/kitchen-and-living-room-interior-in-new-farmhouse-style-luxury-home-with-open-concept-floor.jpg?s=2048x2048&w=is&k=20&c=dsM5Ak5khqVWru8zFmJdf_l2sVxywQHFeRjcYXgwbKM=',
        category: 'furniture',
        subcategory: 'cabinets-and-sideboards',
      },
      {
        id: 6,
        name: 'Elizabeth Console',
        slug: 'elizabeth-console-2',
        edition: 'Iridium Edition',
        isNew: true,
        image: 'https://media.istockphoto.com/id/1456467041/photo/beautiful-kitchen-in-new-farmhouse-style-luxury-home-with-island-pendant-lights-and-hardwood.jpg?s=2048x2048&w=is&k=20&c=rxv8Po-7IeNHSYgmhWBoFn1lN3GuDyRkK-t0CbkWtdY=',
        category: 'furniture',
        subcategory: 'console',
      },
      {
        id: 7,
        name: 'Marea Cabinet',
        slug: 'marea-cabinet-2',
        edition: 'Iridium Edition',
        isNew: true,
        image: 'https://media.istockphoto.com/id/1989640580/photo/a-technician-is-cutting-luxury-vinyl-floor-tiles-with-a-cutter-to-lay-the-floor-before.jpg?s=2048x2048&w=is&k=20&c=sB--ILudVWFExdvKDQNdNaDko3-7_lCA__pLAESanLw=',
        category: 'furniture',
        subcategory: 'cabinets-and-sideboards',
      },
      {
        id: 8,
        name: 'Pandora',
        slug: 'pandora-2',
        edition: 'Iridium Edition',
        isNew: true,
        image: 'https://media.istockphoto.com/id/1398692686/photo/kitchen-and-living-room-interior-in-new-farmhouse-style-luxury-home-with-open-concept-floor.jpg?s=2048x2048&w=is&k=20&c=dsM5Ak5khqVWru8zFmJdf_l2sVxywQHFeRjcYXgwbKM=',
        category: 'furniture',
        subcategory: 'dividers',
      },
    ],
  } = props;

  return (
    <>
    <div className="w-full bg-white font-sans text-[#333] px-6 py-12 lg:px-12 mt-30 ">
      {/* Header Navigation */}
      <div className="flex justify-center items-center gap-12 mb-8 font-gramatika">
        {categories.map((cat, idx) => (
          <button
            key={cat}
            className={`text-3xl md:text-5xl lg:text-6xl py-2 font-light tracking-tight transition-colors duration-300 tracking-wide cursor-pointer  ${
              idx === 0 ? 'text-[#1a1a1a]' : 'text-[#b0b0b0] hover:text-[#666]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Subcategories Filter */}
      <div className="max-w-6xl mx-auto mb-22 mt-[6rem] px-4 font-gramatika">
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11px] md:text-xl  text-[#999] leading-relaxed text-center">
          {subCategories.map((sub, index) => (
            <React.Fragment key={sub.name}>
              <span className="cursor-pointer hover:text-[#333] transition-colors">
                {sub.name} <sup className="text-[8px] -top-1">{sub.count}</sup>
              </span>
              {index < subCategories.length - 1 && <span>, </span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1600px] mx-auto">
        {products.map((product) => (
          <Link key={product.id} href={`/productview/${product.slug}`} className="group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden bg-[#f5f5f5] mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-baseline gap-1 text-[13px] text-[#333] font-gramatika">
              <span className="font-medium tracking-tight">{product.name} |</span>
              <span className="text-[#666]">{product.edition}</span>
              {product.isNew && (
                <span className="text-[10px] text-blue-500 font-semibold tracking-wider ml-1 uppercase">
                  NEW
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Products;