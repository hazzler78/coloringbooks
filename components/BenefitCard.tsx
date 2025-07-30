import { ReactNode } from 'react'

interface BenefitCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-lg">
      <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
        <div className="w-5 h-5 text-emerald-600">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-emerald-800">{title}</h3>
        <p className="text-emerald-700 text-sm">{description}</p>
      </div>
    </div>
  )
} 