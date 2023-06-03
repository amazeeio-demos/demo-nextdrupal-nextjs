import * as React from "react"
import Image from 'next/image'

export function Logo({ ...props }) {
  return (
    <Image src="/logo.png" width={247} height={193} alt="The composable umami logo" />
  )
}
