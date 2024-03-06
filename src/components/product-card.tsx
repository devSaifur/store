'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Expand, ShoppingCart } from 'lucide-react'
import { TProduct } from '../../types'

import IconButton from '@/components/ui/icon-button'
import Currency from '@/components/currency'

interface ProductCardProps {
  data: TProduct
}

export default function ProductCard({ data }: ProductCardProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/products/${data.id}`)
  }

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
    >
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          src={data.images?.[0].url}
          fill
          alt={data.name}
          className="aspect-square rounded-md object-cover"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton icon={<Expand size={20} className="text-gray-600" />} />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>

      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  )
}
