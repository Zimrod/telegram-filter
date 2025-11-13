// pages/catalogue.js
import ProductListings from '@/components/ProductListings'
import Layout from '@/components/Layout'
import { getAllProducts } from '@/lib/supabase'

export default function ContactPage({ products }) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Catalogue
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            View Our Catalogue
          </p>
        </div>
        <ProductListings products={products} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const products = await getAllProducts()

  return {
    props: {
      products
    },
    revalidate: 60 // Optional: ISR every 60 seconds
  }
}