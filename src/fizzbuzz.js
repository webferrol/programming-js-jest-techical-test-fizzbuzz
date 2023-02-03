export const fizzbuzz = numberValue => {
  if (typeof numberValue !== 'number') throw new Error(`"${numberValue}" not a number`)
  if (numberValue === 0) return numberValue
  if (numberValue % 3 === 0 && numberValue % 5 === 0) return 'fizzbuzz'
  if (numberValue % 3 === 0) return 'fizz'
  if (numberValue % 5 === 0) return 'buzz'
  return numberValue
}

export const printFizzbuzz = number => {
  for (let i = 0; i <= number; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`)
  }
}

// printFizzbuzz(100)
