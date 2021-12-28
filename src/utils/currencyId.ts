import { Currency, CBNB, Token } from 'pizzaswap-sdk'

export function currencyId(currency: Currency): string {
  if (currency === CBNB) return 'AVAX'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
