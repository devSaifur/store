import Container from '@/components/ui/container'
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list'
import { getBillboardAction } from '@/actions/billboard-get'
import { getProductsAction } from '@/actions/products-get'

export default async function HomePage() {
  const products = await getProductsAction({ isFeatured: true })

  const billboard = await getBillboardAction(
    '86ea2d37-efad-4c8d-bf75-0c11357576f8'
  )

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}
