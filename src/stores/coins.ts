import { writable } from 'svelte/store'
import { COINS } from '@/Mock/coins'
import { get } from 'svelte/store'
const defaultCoins = COINS.slice(0, 10)

export const coins = writable([...defaultCoins])
export const searchTerm = writable('')
export const selectedCoins = writable([...defaultCoins])

const filterCoins = (term) => {
  if (term === '' && get(selectedCoins).length === 0) {
    return COINS.slice(0, 10)
  } else if (term === '' && get(selectedCoins).length > 0) {
    return get(selectedCoins)
  }

  return get(coins).filter((coin) => coin.name.toLowerCase().includes(term.toLowerCase()))
}

searchTerm.subscribe((value) => {
  coins.set(filterCoins(value))
})
