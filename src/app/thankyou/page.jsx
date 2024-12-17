import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { ExclamationTriangleIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { InstButton } from '@/components/shared/NavButton'
import { PartAvailability } from '@/components/Thankyou'

export default function Thankyou() {
  return (
    <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
      <FadeIn className="flex max-w-xl flex-col items-center pt-20 text-center sm:mb-20 sm:pb-0 sm:pt-0">
        <ExclamationTriangleIcon className="h-12 animate-wiggle text-orange-400 sm:hidden" />
        <p className="font-semibold sm:text-2xl my-10 sm:hidden">
          Please enter a valid phone number to view price or give us a call to know the price
        </p>
        <h3 className="font-display text-2xl font-semibold sm:mt-36 sm:text-5xl">
          Part is Available
        </h3>
        <PartAvailability />
        <div className="mt-8 flex h-20 flex-col items-center sm:hidden">
          <h1 className="font-display text-lg font-semibold sm:text-2xl">
            GET 25% OFF ONLY ON CALL NOW
          </h1>
        </div>
        <InstButton />
      </FadeIn>
    </Container>
  )
}