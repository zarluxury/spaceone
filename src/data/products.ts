export interface Product {
  id: string
  name: string
  slug: string
  category: string
  subcategory: string
  description: string
  details: string
  designer: string
  heroImage: string
  sliderImages: string[]
  colors: Color[]
  suggestProduct: SuggestProduct[]
}

export interface Color {
  id: number
  name: string
  code: string
  category: 'classic' | 'plate' | 'weave'
  image: string
}

export interface SuggestProduct {
  src: string
  name: string
}

export interface AffinityImage {
  src: string
  name: string
}

// Sample product data
export const products: Product[] = [
  {
    id: '1',
    name: 'Lithe | Veneer Edition',
    slug: 'lithe-veneer-edition',
    category: 'furniture',
    subcategory: 'tables',
    description: 'Imagine the luxurious look and feel of faux leather combined with the durability and affordability of laminate. Introducing our revolutionary leather laminate! It has a realistic leather texture, stain resistance, water repellency and ease of maintenance.',
    details: 'We offer the look and feel of real leather without the associated high cost and maintenance. With a wide range of 45 varieties, it is popularly used in wardrobe internals, wall paneling, shutters etc.',
    designer: 'R&D SpaceOne',
    heroImage: '/images/product/hero/hero.png',
    sliderImages: [
      '/images/product/slider/1.png',
      '/images/product/slider/2.png',
      '/images/product/slider/3.png'
    ],
    colors: [
      { id: 1, name: "Classic Dove", code: "#F8F9FA", category: "classic", image: "/images/product/Classic/dove-01.jpg" },
      { id: 2, name: "Classic Verona", code: "#FFFFF0", category: "classic", image: "/images/product/Classic/verona-02.jpg" },
      { id: 3, name: "Classic Sand", code: "#F4E4C1", category: "classic", image: "/images/product/Classic/camelcoat-03.jpg" },
      { id: 4, name: "Plate Dove", code: "#C0C0C0", category: "plate", image: "/images/product/Plate/dove-01.jpg" },
      { id: 5, name: "Plate Verona", code: "#CD7F32", category: "plate", image: "/images/product/Plate/verona-02.jpg" },
      { id: 6, name: "Plate Black", code: "#2C2C2C", category: "plate", image: "/images/product/Plate/camelcoat-03.jpg" },
      { id: 7, name: "Weave Dove", code: "#D2B48C", category: "weave", image: "/images/product/Weave/dove-01.jpg" },
      { id: 8, name: "Weave Verona", code: "#36454F", category: "weave", image: "/images/product/Weave/verona-02.jpg" },
      { id: 9, name: "Weave Gold", code: "#FFD700", category: "weave", image: "/images/product/Weave/camelcoat-03.jpg" }
    ],
    suggestProduct: [
      {
        src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        name: 'Cipher'
      },
      {
        src: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        name: 'Stripid'
      },
      {
        src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        name: 'DeErosion'
      }
    ]
  },
  {
    id: '2',
    name: 'Celato | Iridium Edition',
    slug: 'celato-iridium-edition',
    category: 'furniture',
    subcategory: 'chairs',
    description: 'Celesto is a reference to what is concealed to keep a memory intact; it\'s an archetype in which beauty is revealed in stages. A monolithic appearance makes Celato a contemporary memoir, like a legend that tells of magnificent treasures safeguarded below sacred stones.',
    details: 'At Milan Design Week 2023, De Castelli presents Iridium Edition: a selection of the brand\'s iconic furniture which fully expresses its aesthetic. The unique cobalt blue lacquer on the inside combined with the new Delirium finish transforms each piece into a presence with intense, vibrant character.',
    designer: 'R&D De Castelli',
    heroImage: '/images/product/hero/hero.png',
    sliderImages: [
      '/images/product/slider/1.png',
      '/images/product/slider/2.png',
      '/images/product/slider/3.png'
    ],
    colors: [
      { id: 4, name: "Classic Dove", code: "#F8F9FA", category: "classic", image: "/images/product/Classic/dove-01.jpg" },
      { id: 5, name: "Classic Verona", code: "#FFFFF0", category: "classic", image: "/images/product/Classic/verona-02.jpg" },
      { id: 6, name: "Classic Sand", code: "#F4E4C1", category: "classic", image: "/images/product/Classic/camelcoat-03.jpg" }
    ],
    suggestProduct: [
      {
        src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        name: 'Cipher'
      },
      {
        src: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        name: 'Stripid'
      }
    ]
  }
]

// Function to get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug)
}

// Function to get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category)
}

// Function to get all products
export function getAllProducts(): Product[] {
  return products
}

// Function to get color by name
export function getColorByName(name: string): Color | undefined {
  const allColors = products.flatMap(product => product.colors)
  return allColors.find(color => color.name.replace(/\s+/g, '-') === name)
}

// Function to get all colors by category
export function getColorsByCategory(category: 'classic' | 'plate' | 'weave'): Color[] {
  const allColors = products.flatMap(product => product.colors)
  return allColors.filter(color => color.category === category)
}
