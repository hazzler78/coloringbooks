import { ReactNode } from 'react'

interface BenefitCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex items-start space-x-4 p-4 bg-[#F2EAE3] rounded-lg">
      <div className="flex-shrink-0 w-8 h-8 bg-pantone7542/30 rounded-full flex items-center justify-center">
        <div className="w-5 h-5 text-pantone8021">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-pantone8021">{title}</h3>
        <p className="text-[#6F5220] text-sm">{description}</p>
      </div>
    </div>
  )
} 