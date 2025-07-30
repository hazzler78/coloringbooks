import Image from 'next/image'

interface ProductCardProps {
  title: string
  price: string
  imageUrl: string
  imageAlt: string
  amazonUrl: string
}

export default function ProductCard({ title, price, imageUrl, imageAlt, amazonUrl }: ProductCardProps) {
  return (
    <div className="text-center">
      <a href={amazonUrl} target="_blank" rel="noopener noreferrer" className="block">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4 hover:shadow-xl transition-shadow duration-300 h-full">
          <div className="relative w-full h-56 sm:h-64 md:h-72 mb-3 bg-gray-50 rounded-lg">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-contain sm:object-cover rounded-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={false}
            />
          </div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 font-semibold">{price}</p>
        </div>
      </a>
    </div>
  )
} 