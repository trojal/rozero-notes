# July development contents guide

[ 2018.06.29 ]

Hi. Ragnarok Zero users. Ragnarok Zero team of RO1 studio. Today, we will show you what we're adding in July.

## 1. 전투 불능 상태 시 환경 변경

(NOTE: Google Translate had a tough time with this, so leaving in Korean for now.)

고객센터로 접수된 일부 중보스 소환 방식 관련 문의 내용을 전달받았습니다. "전투 불능 상태에서 일정 시간동안 전투 불능 상태가 해제되지 않으면 마을로 이동된다."던가 "전투 불능 상태가 되면 중보스 소환 방식의 방송 자체가 보이지 않게 해달라"는 문의였습니다.

대체로 매우 귀중한 아이템을 드랍하는 중보스가 등장하는 지역에 전투 불능인 상태의 캐릭터를 방치 후, 소환 단계에 따른 안내 방송을 확인하고 달려와 관련 몬스터만 잡고 간다는 것이었습니다.

소환 관련 안내 방송은 해당 맵에 처음 접근하는 유저로 하여금 맵에서 어떠한 일들이 일어나는지에 대한 정보 전달 및 맵 내 유저의 행동에 따른 맵의 변화를 시각적으로 알려주기 위하여 작동하고 있습니다.

이러한 기능을 일부 유저가 중보스를 잡지 못한다고 하여, 중보스 소환 조건에 대하여 안내하던 방송 자체를 제거하는 것은 처음 게임을 플레이하는 유저에게 그 맵에서 어떠한 일이 진행되고 있는지에 대한 정보를 제대로 전달해줄 수 없게 되어 또 다른 불편을 야기합니다.

다만 전투 불능 상태의 캐릭터를 방치하여 정보를 획득하는 행위를 하지 못하도록 전투 불능 상태가 될 경우, 문의 주신 의견을 참고하여 주변 몬스터의 정보가 보이지 않도록 변경하며, 해당 주요 지역의 방송을 전투 불능 상태에서는 보이지 않도록 수정하고 있습니다.

물론 주변 다른 “캐릭터”와 “NPC”의 경우에는 전투 불능 상태에서도 확인이 가능합니다. 이는 “전투 불능 상태”에 대한 재정의이기 때문에 별도 지역에서만 적용되는 것이 아닌 모든 지역에 공통으로 적용되며, 위험한 전투 지역에서 전투할 경우엔 반드시 전투 불능 상태 회복 능력을 가진 캐릭터와 함께 플레이해주시기 바랍니다.

![dead knight gif](http://imgc.gnjoy.com/ufile/common/2018/06/29/043528_bwAn1X98.gif)

< When a player is unable to battle (i.e. dead), nearby monsters will be hidden from view. >

![dead rogue with dancer looking](http://imgc.gnjoy.com/ufile/common/2018/06/29/043547_F3i5SXFO.png)
　　
< Even if the battle is disabled, you can see other nearby characters. >

## 2. Play Dead mechanics change

"Play Dead" skill is not considered combat status, so you will still be able to see nearby monsters. However, Play Dead mechanics have changed to the below:

1) Skill duration of 30 seconds is added.
2) Play Dead state is maintained until 30 seconds have elapsed (you can't release Play Dead until the duration is over).
3) 60 second cast time added.

![novice play dead](http://imgc.gnjoy.com/ufile/common/2018/06/29/043556_sVOFbMtu.png)

< Play Dead mechanics are changed >

## 3. Change enchantment method

After the secondary job enchantment that was added with the second job update, we received a request to add a new directional enchant.

A new secondary job essence enchant has been added through this update, and now there are 64 (?!) kinds of job enchants that have been added.

As a result, a middle enchantment slot has been added so that you can get an essence enchant in a slightly cheaper way.

기존 인챈트 방식에 비해 확정적으로 정수 인챈트가 부여되면서 가격도 그보다 저렴하도록 설정하였고(기존 인챈트 방식에서 모든 인챈트가 동일한 확률을 가지고 있지 않으며, 정수의 경우 확률이 낮게 설정 되어있었습니다.) 200만 ~ 600만 제니의 가격이 설정되었으며, 제니가 부족하지만 정수 인챈트를 원하시는 경우를 위해 젤스타를 통해 인챈트를 시도해볼 수 있도록 하였습니다. 그러나 유저 여러분의 문의를 확인한 결과, 한번에 소모되는 비용이 부담되기 때문에 해당 인챈트 방식을 수정하기로 결정하였습니다.

Here's how it's changed.

1) First Job Essence Enchant NPC
　
  * Enchantment NPC with a probability of adding first job essence enchant (1st - 2nd Lvl Essence) to +9 or higher armor (cost per enchant: 100,000 zeny)
  * ※ Expedition Armor (Grade II) 4th slot / Dispatching Armor (Grade III) 3rd slot / Conquering Armor (Grade IV) 2nd slot
  * ※ Enchanting method is the same as the existing enchantment method

2) Second Job Essence Enchant NPC
　
  * Enchantment NPC with a probability of adding secondary job essence enchant (1st - 2nd Lvl Essence) to +9 or higher armor (cost per enchant: 100,000 zeny)
  * ※ Expedition Armor (Grade II) 4th slot / Dispatching Armor (Grade III) 3rd slot / Conquering Armor 2nd slot
  * ※ Enchanting method is the same as the existing enchantment method

3) Ninja Essence Enchant NPC

  * Enchantment NPC with a probability of adding secondary job essence enchant (1st - 2nd Lvl Essence) to +9 or higher armor (cost per enchant: 100,000 zeny)
  * ※ Expedition Armor (Grade II) 4th slot / Dispatching Armor (Grade III) 3rd slot / Conquering Armor 2nd slot
  * ※ Enchanting method is the same as the existing enchantment method

추가로 NPC별로 직업군 정수의 숫자의 차이가 존재하기 때문에 인챈트 리스트에 정수의 숫자가 많을수록 정수 인챈트 자체가 붙을 확률은 높아지며, 종류가 적을수록 정수이외의 인챈트가 부여될 확률이 높아지게 됩니다. ex) 2차 정수 인챈트 NPC의 경우 기존 인챈트 협회 직원의 정수 인챈트 확률보다 높은 확률로 정수 인챈트가 부여됩니다.

As soon as this change is made, the service of the employees of the Intermediate Enchantment Association will be terminated.

That's it so far for July. If you have any questions or comments about the game, please contact us.

Thank you.

## Source

http://roz.gnjoy.com/news/devnote/View.asp?category=3&seq=790&curpage=1