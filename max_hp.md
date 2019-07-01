# Max HP

## Calculation

This is an update on the work done by the [irowiki](https://irowiki.org/wiki/Max_HP) team. Currently has only been confirmed in kRO with a Novice without any equipment modifiers.

See the iROWiki page for more information about modifiers. Note that, based on the updated algorithm below, the Max HP look up table is off. Updated Novice values provided below. Further testing needed to verify other classes and equipment.

Updated Max HP algorithm for calculating Max HP. Using a level 13 Novice with 2 VIT as an example.

```javascript
// Define variables
const vit = 2;
const baseLevel = 13;
const jobModifier = 0;
const additionalJobModifier = 5;
const transMod = 1;
const sumOfAdditiveModifiers = 0;
const sumOfMultiplicativeModifiers = 0;

// Calculate base HP
let baseHp = 5 + (vit * 0.01);
baseHp = Math.floor(baseHp + (baseLevel * additionalJobModifier))

for (let i = 2; i <= baseLevel; i++) {
  baseHp += Math.round(jobModifier * i);
}

// Calculate max HP
let maxHp = baseHp;
maxHp = Math.floor(maxHp * (1 + vit * 0.01) * transMod);
maxHp += sumOfAdditiveModifiers;
maxHp = Math.floor(maxHp * (1 + sumOfMultiplicativeModifiers * 0.01));

return maxHp // This example, maxHp = 70
```

### Novice, no equipment Max HP

| Level | Novice Max HP |
|---|---|
| 1 | 10 |
| 2 | 15 |
| 3 | 20 |
| 4 | 25 |
| 5 | 30 |
| 6 | 35 |
| 7 | 40 |
| 8 | 45 |
| 9 | 50 |
| 10 | 55 |
| 11 | 60 |
| 12 | 65 |
| 13 | 70 |
| 14 | 75 |
| 15 | 80 |
| 16 | 85 |
| 17 | 90 |
| 18 | 95 |
| 19 | 101 |
| 20 | 106 |
| 21 | 111 |
| 22 | 116 |
| 23 | 121 |
| 24 | 126 |
| 25 | 131 |
| 26 | 136 |
| 27 | 141 |
| 28 | 146 |
| 29 | 151 |
| 30 | 156 |
| 31 | 161 |
| 32 | 166 |
| 33 | 171 |
| 34 | 176 |
| 35 | 181 |
| 36 | 186 |
| 37 | 191 |
| 38 | 196 |
| 39 | 202 |
| 40 | 207 |
| 41 | 212 |
| 42 | 217 |
| 43 | 222 |
| 44 | 227 |
| 45 | 232 |
| 46 | 237 |
| 47 | 242 |
| 48 | 247 |
| 49 | 252 |
| 50 | 257 |
| 51 | 262 |
| 52 | 267 |
| 53 | 272 |
| 54 | 277 |
| 55 | 282 |
| 56 | 287 |
| 57 | 292 |
| 58 | 297 |
| 59 | 303 |
| 60 | 308 |
| 61 | 313 |
| 62 | 318 |
| 63 | 323 |
| 64 | 328 |
| 65 | 333 |
| 66 | 338 |
| 67 | 343 |
| 68 | 348 |
| 69 | 353 |
| 70 | 358 |
| 71 | 363 |
| 72 | 368 |
| 73 | 373 |
| 74 | 378 |
| 75 | 383 |
| 76 | 388 |
| 77 | 393 |
| 78 | 398 |
| 79 | 404 |
| 80 | 409 |
| 81 | 414 |
| 82 | 419 |
| 83 | 424 |
| 84 | 429 |
| 85 | 434 |
| 86 | 439 |
| 87 | 444 |
| 88 | 449 |
| 89 | 454 |
| 90 | 459 |
| 91 | 464 |
| 92 | 469 |
| 93 | 474 |
| 94 | 479 |
| 95 | 484 |
| 96 | 489 |
| 97 | 494 |
| 98 | 499 |
| 99 | 505 |
