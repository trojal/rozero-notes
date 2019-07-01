// See https://irowiki.org/wiki/Max_HP for more about modifiers
function calc_maxhp({
  vit,
  baseLevel,
  jobModifier = 0,
  additionalJobModifier = 5,
  transModifier = 1,
  sumOfAdditiveModifiers = 0,
  sumOfMultiplicativeModifiers = 0,
}) {
  let baseHp = 5 + (vit * 0.01);
  baseHp = Math.floor(baseHp + (baseLevel * additionalJobModifier))
  for (let i = 2; i <= baseLevel; i++) {
    baseHp += Math.round(jobModifier * i);
  }

  let maxHp = baseHp;
  maxHp = Math.floor(maxHp * (1 + vit * 0.01) * transModifier);
  maxHp += sumOfAdditiveModifiers;
  maxHp = Math.floor(maxHp * (1 + sumOfMultiplicativeModifiers * 0.01));

  return maxHp;
}

// Novice w/o equipment
// Max HP from 1 - 99
for (let i = 1; i <= 99; i++) {
  const maxHp = calc_maxhp({ vit: 1, baseLevel: i })
  console.log(`| ${i} | ${maxHp} |`)
}