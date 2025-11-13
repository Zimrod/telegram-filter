import { createClient } from '@supabase/supabase-js'

// Create and export the supabase client directly
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function getAllProducts() {
  console.log('Fetching products from Supabase...')
  const { data, error } = await supabase
    .from('books')
    .select('*')
  
  if (error) {
    console.error('Supabase Error:', error)
    return []
  }
  
  console.log('Fetched products:', data.length)
  return data
}

export async function getProductByHandle(handle) {
  const { data, error } = await supabase
    .from('books')
    .select('*')
    .eq('handle', handle)
    .single()
  
  if (error) {
    console.error('Error fetching product:', error)
    return null
  }
  
  return data
}