import * as React from "react"
import Image from 'next/image'

export function Logo({ ...props }) {
  return (
    <Image src="/logo.png" width={491} height={111} alt="The composable umami logo" />
  )
}
