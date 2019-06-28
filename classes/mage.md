# Mage (매지션)

## Info

* When you're a Novice with job level 10, you can job change to mage. Go to the mage NPC in Izlude (iz_ac02 145 105).
* To learn the quest skills immediately, go to Mage Guild in Geffen (geffen 65 176).

## Job Level Status Increase (스테이터스 가중치)

| Level | STR | AGI | VIT | INT | DEX | LUK |
| --- | --- | --- | --- | --- | --- | --- |
| 50 | 0 | 4 | 0 | 8 | 3 | 3 |

## Skill Guide (스킬 안내)

### Increase SP Recovery (SP회복력 향상)

* Type: Passive
* Prerequisites: None
* Description: Increases the speed of natural SP recovery. When not moving, it regenerates once every ten seconds.

#### RO Zero Changes
* Doesn't increase effectiveness of Healing Items. Need to verify.

| Level (레벨) | SP Recovery Amount (SP회복량) | Max SP Recovery Bonus (MaxSP에 의한 추가 회복량) |
| --- | --- | --- |
| 1 | 3 | 0.20% |
| 2 | 6 | 0.40% |
| 3 | 9 | 0.60% |
| 4 | 12 | 0.80% |
| 5 | 15 | 1.00% |
| 6 | 18 | 1.20% |
| 7 | 21 | 1.40% |
| 8 | 24 | 1.60% |
| 9 | 27 | 1.80% |
| 10 | 30 | 2.00% |

### Napalm Beat (네이팜 비트)

* Type: Ghost Magic
* Prerequisites: None
* Description: Use psychokinetic energy to attack the enemies. The more enemies there are, the more damage is distributed.

#### RO Zero Changes

* Overall cast time (fixed + variable) has been lowered from 0.6 seconds (irowiki source) to 0.5 seconds.
* With skill cooldown at a fixed 0.7 seconds and cast delay at 0.3 seconds, overall cast delay is 1 second. This overall cast delay does not decrease with skill level as before where it went from 1 second down to 0.5 seconds (irowiki source).

| Level (레벨) | MATK | Area of Effect (효과 범위)  | Fixed Casting (고정 캐스팅) | Variable Casting (변동 캐스팅) | Skill Cooldown (스킬 쿨타임) | Cast Delay (스킬 후 딜레이) | SP Cost (소모 SP) | Range (사정거리) |
|----|------|--------|--------|--------|--------|----------|-------|------|
| 1  | 80%  | 3 x 3 cells | 0.1 secs | 0.4 secs | 0.7 secs | 0.3 secs | 9 | 9 cells |
| 2  | 90%  | 3 x 3 cells | 0.1 secs | 0.4 secs | 0.7 secs | 0.3 secs | 9 | 9 cells |
| 3  | 100% | 3 x 3 cells | 0.1 secs | 0.4 secs | 0.7 secs | 0.3 secs | 9 | 9 cells |
| 4  | 110% | 3 x 3 cells | 0.1 secs | 0.4 secs | 0.7 secs | 0.3 secs | 12 | 9 cells |
| 5  | 120% | 3 x 3 cells | 0.1 secs | 0.4 secs | 0.7 secs | 0.3 secs | 12 | 9 cells |
| 6  | 130% | 3 x 3 cells | 0.1 secs | 0.4 secs | 0.7 secs | 0.3 secs | 12 | 9 cells |
| 7  | 140% | 3 x 3 cells | 0.1 secs | 0.4 secs | 0.7 secs | 0.3 secs | 15 | 9 cells |
| 8  | 150% | 3 x 3 cells | 0.1 secs | 0.4 secs | 0.7 secs | 0.3 secs | 15 | 9 cells |
| 9  | 160% | 3 x 3 cells | 0.1 secs | 0.4 secs | 0.7 secs | 0.3 secs | 15 | 9 cells |
| 10 | 170% | 3 x 3 cells | 0.1 secs | 0.4 secs | 0.7 secs | 0.3 secs | 18 | 9 cells |

### Lightning Bolt (라이트닝 볼트)

* Type: Wind Magic
* Prerequisites: None
* Description: Attacks enemies with lightning. Each bolt deals 100% wind damage.

#### RO Zero Changes

* Skill cooldown has decreased from 0.8 seconds to 0.7 seconds, and cast delay is now a fixed 0.3 seconds instead of being `skill level * 0.2`. Thus, overall cast delay stays at a total of 1.0 second, no matter skill level. This is a change from renewal, where overall cast delay increased with level (irowiki).

| Level (레벨) | MATK | Fixed Casting (고정 캐스팅) | Variable Casting (변동 캐스팅) | Skill Cooldown (스킬 쿨타임) | Cast Delay (스킬 후 딜레이) | SP Cost (소모 SP) | Range (사정거리) |
|----|------|--------|--------|--------|--------|----------|-------|
| 1  | 100% | 0.16 secs | 0.64 secs | 0.7 secs | 0.3 secs | 12 | 9 cells |
| 2  | 200% | 0.24 secs | 0.96 secs | 0.7 secs | 0.3 secs | 14 | 9 cells |
| 3  | 300% | 0.32 secs | 1.28 secs | 0.7 secs | 0.3 secs | 16 | 9 cells |
| 4  | 400% | 0.40 secs | 1.60 secs | 0.7 secs | 0.3 secs | 18 | 9 cells |
| 5  | 500% | 0.48 secs | 1.92 secs | 0.7 secs | 0.3 secs | 20 | 9 cells |
| 6  | 600% | 0.56 secs | 2.10 secs | 0.7 secs | 0.3 secs | 22 | 9 cells |
| 7  | 700% | 0.64 secs | 2.56 secs | 0.7 secs | 0.3 secs | 24 | 9 cells |
| 8  | 800% | 0.72 secs | 2.88 secs | 0.7 secs | 0.3 secs | 26 | 9 cells |
| 9  | 900% | 0.80 secs | 3.20 secs | 0.7 secs | 0.3 secs | 28 | 9 cells |
| 10 | 1000% | 0.88 secs | 3.52 secs | 0.7 secs | 0.3 secs | 30 | 9 cells |

### Sight (사이트)

* Type: Active
* Prerequisites: None
* Description: Find enemies hidden in the vicinity

| Level (레벨) | Area of Effect (효과 범위) | Speed Time (속시간) | SP Cost (소모 SP) |
|------------|------------------------|----------------|-----------------|
| 1          | 7 X 7 cells            | 10 secs        | 10              |

### Thunderstorm (선더 스톰)

* Type: Wind Magic
* Prerequisites: Lightning Bolt Level 4 (라이트닝 볼트 4LV)
* Description: Drops a lightning bolt at a specified location, causing wind damage to nearby enemies.

| Level (레벨) | MATK | Fixed Casting (고정 캐스팅) | Variable Casting (변동 캐스팅) | Skill Cooldown (스킬 쿨타임) | Cast Delay (스킬 후 딜레이) | SP Cost (소모 SP) | Range (사정거리) | Area of Effect (효과 범위) |
|----|------|--------|--------|--------|--------|----------|-------|------|
| 1  | 100% | 0.16 secs | 0.64 secs | 1.7 secs | 0.3 secs | 29 | 9 cells | 5 x 5 cells |
| 2  | 200% | 0.32 secs | 1.28 secs | 1.7 secs | 0.3 secs | 34 | 9 cells | 5 x 5 cells |
| 3  | 300% | 0.48 secs | 1.92 secs | 1.7 secs | 0.3 secs | 39 | 9 cells | 5 x 5 cells |
| 4  | 400% | 0.64 secs | 2.56 secs | 1.7 secs | 0.3 secs | 44 | 9 cells | 5 x 5 cells |
| 5  | 500% | 0.80 secs | 3.20 secs | 1.7 secs | 0.3 secs | 49 | 9 cells | 5 x 5 cells |
| 6  | 600% | 0.96 secs | 3.84 secs | 1.7 secs | 0.3 secs | 54 | 9 cells | 5 x 5 cells |
| 7  | 700% | 1.12 secs | 4.48 secs | 1.7 secs | 0.3 secs | 59 | 9 cells | 5 x 5 cells |
| 8  | 800% | 1.28 secs | 5.12 secs | 1.7 secs | 0.3 secs | 64 | 9 cells | 5 x 5 cells |
| 9  | 900% | 1.44 secs | 5.76 secs | 1.7 secs | 0.3 secs | 69 | 9 cells | 5 x 5 cells |
| 10 | 1000% | 1.60 secs | 6.40 secs | 1.7 secs | 0.3 secs | 74 | 9 cells | 5 x 5 cells |

### Safety Wall (세이프티 월)

* Type: Active
* Prerequisites: Napalm Beat Level 7 (네이팜 비트 7LV), Soul Strike Level 5 (소울 스트라이크 5LV)
* Description: Creates a magical defense wall that blocks enemy attacks a certain number of times at a specified location. Only prevents physical attacks. Blue gemstone is consumed each time skill is cast. When number of blocking attacks or durability reaches zero, wall disappears. Total durability = `((INT + Base Level) * 65) + Max SP + Basic durability)`. If character receives close physical damage greater than the remaining durability, they will receive damage reduced by durability. Safety Wall will always block at least one hit, even if that hit completely uses up the wall's durability.

#### RO Zero Changes

* Durability formula has changed from the one on irowiki.

| Level (레벨) | Durability (내구도) | Hits Blocked (차단 횟수) | Duration (지속시간) | Fixed Casting (고정 캐스팅) | Variable Casting (변동 캐스팅) | Skill Cooldown (스킬 쿨타임) | Cast Delay (스킬 후 딜레이) | SP Cost (소모 SP) | Range (사정거리) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 300 | 2x | 5 secs | 0.8 secs | 3.20 secs | - | - | 30 | 9 cells |
| 2 | 600 | 3x | 10 secs | 0.72 secs | 2.88 secs | - | - | 30 | 9 cells |
| 3 | 900 | 4x | 15 secs | 0.64 secs | 2.56 secs | - | - | 30 | 9 cells |
| 4 | 1200 | 5x | 20 secs | 0.56 secs | 2.24 secs | - | - | 35 | 9 cells |
| 5 | 1500 | 6x | 25 secs | 0.48 secs | 1.92 secs | - | - | 35 | 9 cells |
| 6 | 1800 | 7x | 30 secs | 0.40 secs | 1.60 secs | - | - | 35 | 9 cells |
| 7 | 2100 | 8x | 35 secs | 0.32 secs | 1.28 secs | - | - | 40 | 9 cells |
| 8 | 2400 | 9x | 40 secs | 0.24 secs | 0.96 secs | - | - | 40 | 9 cells |
| 9 | 2700 | 10x | 45 secs | 0.16 secs | 0.64 secs | - | - | 40 | 9 cells |
| 10 | 3000 | 11x | 50 secs | 0.08 secs | 0.32 secs | - | - | 40 | 9 cells |

### Soul Strike (소울 스트라이크)

Type: Ghost Magic
Prerequisites: Napalm Beat Level 4 (네이팜 비트 4LV)
Description: Summons an ancient holy spirit and inflicts magic damage on the enemy. Adds additional damage to ghost enemies.

#### RO Zero Changes

* Total cast delay (i.e. Skill Cooldown + Cast Delay) stays at 1.2 seconds, instead of increasing as skill level increases (1.2 seconds to 2.7 seconds).

| Level (레벨) | MATK | Undead MATK Bonus (불사 속성) | 추가 데미지) Fixed Casting (고정 캐스팅) | Variable Casting (변동 캐스팅) | Skill Cooldown (스킬 쿨타임) | Cast Delay (스킬 후 딜레이) | SP Cost (소모 SP) | Range (사정거리) |
|----|------|------|--------|--------|--------|--------|----------|-------|
| 1  | 100% | 5% | 0.1 sec | 0.4 secs | 0.9 secs | 0.3 secs | 18 | 9 cells |
| 2  | 100% | 10% | 0.1 sec | 0.4 secs | 0.9 secs | 0.3 secs | 14 | 9 cells |
| 3  | 200% | 15% | 0.1 sec | 0.4 secs | 0.9 secs | 0.3 secs | 24 | 9 cells |
| 4  | 200% | 20% | 0.1 sec | 0.4 secs | 0.9 secs | 0.3 secs | 20 | 9 cells |
| 5  | 300% | 25% | 0.1 sec | 0.4 secs | 0.9 secs | 0.3 secs | 30 | 9 cells |
| 6  | 300% | 30% | 0.1 sec | 0.4 secs | 0.9 secs | 0.3 secs | 26 | 9 cells |
| 7  | 400% | 35% | 0.1 sec | 0.4 secs | 0.9 secs | 0.3 secs | 36 | 9 cells |
| 8  | 400% | 40% | 0.1 sec | 0.4 secs | 0.9 secs | 0.3 secs | 32 | 9 cells |
| 9  | 500% | 45% | 0.1 sec | 0.4 secs | 0.9 secs | 0.3 secs | 42 | 9 cells |
| 10 | 500% | 50% | 0.1 sec | 0.4 secs | 0.9 secs | 0.3 secs | 38 | 9 cells |

### Stone Curse (스톤 커스)

* Type: Active
* Prerequisites: None
* Description: Curse the enemy and turn them into stone. If the skill is not over level six and the enemy fails to petrify, a Red Gemstone is consumed. If skill is successful, the target will not be able to attack and can only move, and it will become harder and harder to move. Also, their HP decreases by 1% every 5 seconds.

#### RO Zero Changes

* Cast time is lowered from 1.2 seconds (irowiki) to 1 second.

| Level (레벨) | Petrification Probability (석화 확률) | Duration (지속시간) | Fixed Casting (고정 캐스팅) | Variable Casting (변동 캐스팅) | Skill Cooldown (스킬 쿨타임) | Cast Delay (스킬 후 딜레이) | SP Cost (소모 SP) | Range (사정거리) |
|----|---|---|--------|--------|--------|----------|-------|-----|
| 1  | 24% | 20 secs | 0.2 secs | 0.8 secs | - | - | 25 | 2 cells |
| 2  | 28% | 20 secs | 0.2 secs | 0.8 secs | - | - | 24 | 2 cells |
| 3  | 32% | 20 secs | 0.2 secs | 0.8 secs | - | - | 23 | 2 cells |
| 4  | 36% | 20 secs | 0.2 secs | 0.8 secs | - | - | 22 | 2 cells |
| 5  | 40% | 20 secs | 0.2 secs | 0.8 secs | - | - | 21 | 2 cells |
| 6  | 44% | 20 secs | 0.2 secs | 0.8 secs | - | - | 20 | 2 cells |
| 7  | 48% | 20 secs | 0.2 secs | 0.8 secs | - | - | 19 | 2 cells |
| 8  | 52% | 20 secs | 0.2 secs | 0.8 secs | - | - | 18 | 2 cells |
| 9  | 56% | 20 secs | 0.2 secs | 0.8 secs | - | - | 17 | 2 cells |
| 10 | 60% | 20 secs | 0.2 secs | 0.8 secs | - | - | 16 | 2 cells |

### Energy Coat (에너지 코트)

### Cold Bolt (콜드 볼트)

### Frost Diver (프로스트 다이버)

### Fire Ball (화이어 볼)

### Fire Wall (화이어 월)

### Fire Bolt (화이어 볼트)

## Credits
http://roz.gnjoy.com/news/update/View.asp?BBSMode=10016&seq=24