# Max HP

## Calculation

This is an update on the work done by the [irowiki](https://irowiki.org/wiki/Max_HP) team. Requires further testing before can confirm that the below algorithm works.

See the iROWiki page for more information about modifiers. Note that, based on the updated algorithm below, the Max HP look up table is off.

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

## Sources
https://irowiki.org/wiki/Max_HP
