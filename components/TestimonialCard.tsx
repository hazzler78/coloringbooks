interface TestimonialCardProps {
  quote: string
  author: string
  authorInitial: string
}

export default function TestimonialCard({ quote, author, authorInitial }: TestimonialCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <div className="flex text-emerald-300 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
      </div>
      <p className="text-lg italic text-emerald-50 mb-4">
        "{quote}"
      </p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center mr-3">
          <span className="text-emerald-800 font-bold">{authorInitial}</span>
        </div>
        <div>
          <div className="font-semibold text-white">{author}</div>
          <div className="text-sm text-emerald-200">Verified Purchase</div>
        </div>
      </div>
    </div>
  )
} 