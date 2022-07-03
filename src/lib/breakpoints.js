/*
TODO: This needs refactoring, simplify to just 0-399, 400-799, LG?

*/

const maxSM = 375
const maxMD = 600
const maxLG = 900

const minSM = 375
const minMD = 500
const minLG = 800

export const bpMaxSM = `@media (max-width: ${maxSM}px)`
export const bpMaxMD = `@media (max-width: ${maxMD}px)`
export const bpMaxLG = `@media (max-width: ${maxLG}px)`

export const bpMinSM = `@media (min-width: ${minSM}px)`
export const bpMinMD = `@media (min-width: ${minMD}px)`
export const bpMinLG = `@media (min-width: ${minLG}px)`
