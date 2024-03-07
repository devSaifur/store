'use server'

import { TColor } from '../../types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

export async function getColorsAction(): Promise<TColor[]> {
  const res = await fetch(URL, { cache: 'no-store' })
  return res.json()
}
