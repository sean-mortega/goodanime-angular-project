import { Component, OnInit, HostListener, Injectable } from '@angular/core';
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { AppService } from '../../services/app.service';

declare var Hammer: any;

export class MyHammerConfig extends HammerGestureConfig {
  @Injectable()
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_HORIZONTAL },
  };
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
})
export class HomepageComponent implements OnInit {
  @HostListener('swipeleft', ['$event'])
  onSwipeLeft(event: any): void {
    // Handle the swipe left event here
    this.toggleVisibility();
    console.log('Swiped left!');
  }

  animeData: any = [];
  isExpanded = false;

  constructor(private dataService: AppService) {}

  trackByFn(index: number, item: any): number {
    return item.id;
  }

  get visibleCards() {
    return !this.isExpanded
      ? this.animeData
      : this.animeData.slice(3, this.animeData.length);
  }

  toggleVisibility() {
    console.log('CLICKED!');
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
    // this.dataService.getData().subscribe( (response)=> {

    //   let { data } = response;
    //   this.animeData = data;
    //   console.log(this.animeData)

    // })

    this.animeData = [
      {
        _id: '5114',
        title: 'Fullmetal Alchemist: Brotherhood',
        alternativeTitles: [
          'Hagane no Renkinjutsushi: Fullmetal Alchemist',
          'Fullmetal Alchemist (2009)',
          'FMA',
          'FMAB',
          '鋼の錬金術師 FULLMETAL ALCHEMIST',
          'Fullmetal Alchemist: Brotherhood',
          'Fullmetal Alchemist Brotherhood',
        ],
        ranking: 1,
        genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
        episodes: 64,
        hasEpisode: true,
        hasRanking: true,
        image: 'https://cdn.myanimelist.net/images/anime/1208/94745.webp',
        link: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
        status: 'Finished Airing',
        synopsis:
          'After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse\'s body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse\'s soul in the physical realm by binding it to a hulking suit of armor.\n\nThe brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing "automail," a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher\'s Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.\n\nAs Edward becomes an infamous alchemist and gains the nickname "Fullmetal," the boys\' journey embroils them in a growing conspiracy that threatens the fate of the world.\n\n[Written by MAL Rewrite]',
        thumb:
          'https://cdn.myanimelist.net/r/50x70/images/anime/1208/94745.webp?s=f286786e3bc43d6dc5b4478a1762224b',
        type: 'TV',
      },
      {
        _id: '9253',
        title: 'Steins;Gate',
        alternativeTitles: ['STEINS;GATE', 'Steins;Gate'],
        ranking: 2,
        genres: ['Drama', 'Sci-Fi', 'Suspense'],
        episodes: 24,
        hasEpisode: true,
        hasRanking: true,
        image: 'https://cdn.myanimelist.net/images/anime/1935/127974.webp',
        link: 'https://myanimelist.net/anime/9253/Steins_Gate',
        status: 'Finished Airing',
        synopsis:
          'Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and his roommate Itaru Hashida, Rintarou founds the Future Gadget Laboratory in the hopes of creating technological innovations that baffle the human psyche. Despite claims of grandeur, the only notable "gadget" the trio have created is a microwave that has the mystifying power to turn bananas into green goo.\n\nHowever, when Rintarou decides to attend neuroscientist Kurisu Makise\'s conference on time travel, he experiences a series of strange events that lead him to believe that there is more to the "Phone Microwave" gadget than meets the eye. Apparently able to send text messages into the past using the microwave, Rintarou dabbles further with the "time machine," attracting the ire and attention of the mysterious organization SERN.\n\nDue to the novel discovery, Rintarou and his friends find themselves in an ever-present danger. As he works to mitigate the damage his invention has caused to the timeline, he is not only fighting a battle to save his loved ones, but also one against his degrading sanity.\n\n[Written by MAL Rewrite]',
        thumb:
          'https://cdn.myanimelist.net/r/50x70/images/anime/1935/127974.webp?s=983a0b526d944e68a933acca0a7db043',
        type: 'TV',
      },
      {
        _id: '41467',
        title: 'Bleach: Sennen Kessen-hen',
        alternativeTitles: [
          'Bleach: Thousand-Year Blood War Arc',
          'BLEACH 千年血戦篇',
          'Bleach: Thousand-Year Blood War',
        ],
        ranking: 3,
        genres: ['Action', 'Adventure', 'Fantasy'],
        episodes: 13,
        hasEpisode: true,
        hasRanking: true,
        image: 'https://cdn.myanimelist.net/images/anime/1908/135431.webp',
        link: 'https://myanimelist.net/anime/41467/Bleach__Sennen_Kessen-hen',
        status: 'Finished Airing',
        synopsis:
          "Substitute Soul Reaper Ichigo Kurosaki spends his days fighting against Hollows, dangerous evil spirits that threaten Karakura Town. Ichigo carries out his quest with his closest allies: Orihime Inoue, his childhood friend with a talent for healing; Yasutora Sado, his high school classmate with superhuman strength; and Uryuu Ishida, Ichigo's Quincy rival.\n\nIchigo's vigilante routine is disrupted by the sudden appearance of Asguiaro Ebern, a dangerous Arrancar who heralds the return of Yhwach, an ancient Quincy king. Yhwach seeks to reignite the historic blood feud between Soul Reaper and Quincy, and he sets his sights on erasing both the human world and the Soul Society for good.\n\nYhwach launches a two-pronged invasion into both the Soul Society and Hueco Mundo, the home of Hollows and Arrancar. In retaliation, Ichigo and his friends must fight alongside old allies and enemies alike to end Yhwach's campaign of carnage before the world itself comes to an end.\n\n[Written by MAL Rewrite]",
        thumb:
          'https://cdn.myanimelist.net/r/50x70/images/anime/1908/135431.webp?s=6c10634de66fc83aa64471795de02461',
        type: 'TV',
      },
      {
        _id: '28977',
        title: 'Gintama°',
        alternativeTitles: [
          "Gintama' (2015)",
          '銀魂°',
          'Gintama Season 4',
          'Gintama Season 4',
          'Gintama Temporada 4',
          'Gintama Saison 4',
        ],
        ranking: 4,
        genres: ['Action', 'Comedy', 'Sci-Fi'],
        episodes: 51,
        hasEpisode: true,
        hasRanking: true,
        image: 'https://cdn.myanimelist.net/images/anime/3/72078.webp',
        link: 'https://myanimelist.net/anime/28977/Gintama%C2%B0',
        status: 'Finished Airing',
        synopsis:
          "Gintoki, Shinpachi, and Kagura return as the fun-loving but broke members of the Yorozuya team! Living in an alternate-reality Edo, where swords are prohibited and alien overlords have conquered Japan, they try to thrive on doing whatever work they can get their hands on. However, Shinpachi and Kagura still haven't been paid... Does Gin-chan really spend all that cash playing pachinko?\n\nMeanwhile, when Gintoki drunkenly staggers home one night, an alien spaceship crashes nearby. A fatally injured crew member emerges from the ship and gives Gintoki a strange, clock-shaped device, warning him that it is incredibly powerful and must be safeguarded. Mistaking it for his alarm clock, Gintoki proceeds to smash the device the next morning and suddenly discovers that the world outside his apartment has come to a standstill. With Kagura and Shinpachi at his side, he sets off to get the device fixed; though, as usual, nothing is ever that simple for the Yorozuya team.\n\nFilled with tongue-in-cheek humor and moments of heartfelt emotion, Gintama's fourth season finds Gintoki and his friends facing both their most hilarious misadventures and most dangerous crises yet.\n\n[Written by MAL Rewrite]",
        thumb:
          'https://cdn.myanimelist.net/r/50x70/images/anime/3/72078.webp?s=3c2861f116759641d5bffb941a86ffab',
        type: 'TV',
      },
      {
        _id: '38524',
        title: 'Shingeki no Kyojin Season 3 Part 2',
        alternativeTitles: [
          '進撃の巨人 Season3 Part.2',
          'Attack on Titan Season 3 Part 2',
          'Attack on Titan Staffel 3 Teil 2',
          'Ataque a los Titanes Temporada 3 Parte 2',
          "L'Attaque des Titans Saison 3 Partie 2",
        ],
        ranking: 5,
        genres: ['Action', 'Drama'],
        episodes: 10,
        hasEpisode: true,
        hasRanking: true,
        image: 'https://cdn.myanimelist.net/images/anime/1517/100633.webp',
        link: 'https://myanimelist.net/anime/38524/Shingeki_no_Kyojin_Season_3_Part_2',
        status: 'Finished Airing',
        synopsis:
          "Seeking to restore humanity's diminishing hope, the Survey Corps embark on a mission to retake Wall Maria, where the battle against the merciless \"Titans\" takes the stage once again.\n\nReturning to the tattered Shiganshina District that was once his home, Eren Yeager and the Corps find the town oddly unoccupied by Titans. Even after the outer gate is plugged, they strangely encounter no opposition. The mission progresses smoothly until Armin Arlert, highly suspicious of the enemy's absence, discovers distressing signs of a potential scheme against them. \n\nShingeki no Kyojin Season 3 Part 2 follows Eren as he vows to take back everything that was once his. Alongside him, the Survey Corps strive—through countless sacrifices—to carve a path towards victory and uncover the secrets locked away in the Yeager family's basement.\n\n[Written by MAL Rewrite]",
        thumb:
          'https://cdn.myanimelist.net/r/50x70/images/anime/1517/100633.webp?s=8ec097bf576c27c478e96097a85a6232',
        type: 'TV',
      },
      {
        _id: '9969',
        title: "Gintama'",
        alternativeTitles: [
          'Gintama (2011)',
          "銀魂'",
          'Gintama Season 2',
          'Gintama Staffel 2',
          'Gintama Temporada 2',
          'Gintama Saison 2',
        ],
        ranking: 6,
        genres: ['Action', 'Comedy', 'Sci-Fi'],
        episodes: 51,
        hasEpisode: true,
        hasRanking: true,
        image: 'https://cdn.myanimelist.net/images/anime/4/50361.webp',
        link: 'https://myanimelist.net/anime/9969/Gintama',
        status: 'Finished Airing',
        synopsis:
          "After a one-year hiatus, Shinpachi Shimura returns to Edo, only to stumble upon a shocking surprise: Gintoki and Kagura, his fellow Yorozuya members, have become completely different characters! Fleeing from the Yorozuya headquarters in confusion, Shinpachi finds that all the denizens of Edo have undergone impossibly extreme changes, in both appearance and personality. Most unbelievably, his sister Otae has married the Shinsengumi chief and shameless stalker Isao Kondou and is pregnant with their first child.\n\nBewildered, Shinpachi agrees to join the Shinsengumi at Otae and Kondou's request and finds even more startling transformations afoot both in and out of the ranks of the the organization. However, discovering that Vice Chief Toushirou Hijikata has remained unchanged, Shinpachi and his unlikely Shinsengumi ally set out to return the city of Edo to how they remember it.\n\nWith even more dirty jokes, tongue-in-cheek parodies, and shameless references, Gintama' follows the Yorozuya team through more of their misadventures in the vibrant, alien-filled world of Edo.\n\n[Written by MAL Rewrite]",
        thumb:
          'https://cdn.myanimelist.net/r/50x70/images/anime/4/50361.webp?s=125342fa40b162d49da3f052ea2f34b3',
        type: 'TV',
      },
      {
        _id: '39486',
        title: 'Gintama: The Final',
        alternativeTitles: ['銀魂 THE FINAL', 'Gintama: The Very Final', 'N/A'],
        ranking: 7,
        genres: ['Action', 'Comedy', 'Drama', 'Sci-Fi'],
        episodes: 1,
        hasEpisode: true,
        hasRanking: true,
        image: 'https://cdn.myanimelist.net/images/anime/1245/116760.webp',
        link: 'https://myanimelist.net/anime/39486/Gintama__The_Final',
        status: 'Finished Airing',
        synopsis:
          "Two years have passed following the Tendoshuu's invasion of the O-Edo Central Terminal. Since then, the Yorozuya have gone their separate ways. Foreseeing Utsuro's return, Gintoki Sakata begins surveying Earth's ley lines for traces of the other man's Altana. After an encounter with the remnants of the Tendoshuu—who continue to press on in search of immortality—Gintoki returns to Edo.\n\nLater, the regrouped Shinsengumi and Yorozuya begin an attack on the occupied Central Terminal. With the Altana harvested by the wreckage of the Tendoshuu's ship in danger of detonating, the Yorozuya and their allies fight their enemies while the safety of Edo—and the rest of the world—hangs in the balance. Fulfilling the wishes of their teacher, Shouyou Yoshida's former students unite and relive their pasts one final time in an attempt to save their futures.\n\n[Written by MAL Rewrite]\n",
        thumb:
          'https://cdn.myanimelist.net/r/50x70/images/anime/1245/116760.webp?s=f51738ce5277b7dbc661e5afe900f684',
        type: 'Movie',
      },
      {
        _id: '11061',
        title: 'Hunter x Hunter (2011)',
        alternativeTitles: [
          'HxH (2011)',
          'HUNTER×HUNTER（ハンター×ハンター）',
          'Hunter x Hunter',
          'Hunter x Hunter',
          'Hunter x Hunter',
          'Hunter X Hunter',
        ],
        ranking: 8,
        genres: ['Action', 'Adventure', 'Fantasy'],
        episodes: 148,
        hasEpisode: true,
        hasRanking: true,
        image: 'https://cdn.myanimelist.net/images/anime/1337/99013.webp',
        link: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
        status: 'Finished Airing',
        synopsis:
          "Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased.\n\nAmbitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father and a Hunter himself. Believing that he will meet his father by becoming a Hunter, Gon takes the first step to walk the same path.\n\nDuring the Hunter Examination, Gon befriends the medical student Leorio Paladiknight, the vindictive Kurapika, and ex-assassin Killua Zoldyck. While their motives vastly differ from each other, they band together for a common goal and begin to venture into a perilous world.\n\n[Written by MAL Rewrite]",
        thumb:
          'https://cdn.myanimelist.net/r/50x70/images/anime/1337/99013.webp?s=e05aa402158661b59d14b9da6e917559',
        type: 'TV',
      },
      {
        _id: '43608',
        title: 'Kaguya-sama wa Kokurasetai: Ultra Romantic',
        alternativeTitles: [
          'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen 3rd Season',
          'Kaguya-sama: Love is War Season 3rd Season',
          'かぐや様は告らせたい-ウルトラロマンティック-',
          'Kaguya-sama: Love is War - Ultra Romantic',
        ],
        ranking: 9,
        genres: ['Comedy', 'Romance'],
        episodes: 13,
        hasEpisode: true,
        hasRanking: true,
        image: 'https://cdn.myanimelist.net/images/anime/1160/122627.webp',
        link: 'https://myanimelist.net/anime/43608/Kaguya-sama_wa_Kokurasetai__Ultra_Romantic',
        status: 'Finished Airing',
        synopsis:
          "The elite members of Shuchiin Academy's student council continue their competitive day-to-day antics. Council president Miyuki Shirogane clashes daily against vice-president Kaguya Shinomiya, each fighting tooth and nail to trick the other into confessing their romantic love. Kaguya struggles within the strict confines of her wealthy, uptight family, rebelling against her cold default demeanor as she warms to Shirogane and the rest of her friends.\n\nMeanwhile, council treasurer Yuu Ishigami suffers under the weight of his hopeless crush on Tsubame Koyasu, a popular upperclassman who helps to instill a new confidence in him. Miko Iino, the newest student council member, grows closer to the rule-breaking Ishigami while striving to overcome her own authoritarian moral code.\n\nAs love further blooms at Shuchiin Academy, the student council officers drag their outsider friends into increasingly comedic conflicts.\n\n[Written by MAL Rewrite]\n",
        thumb:
          'https://cdn.myanimelist.net/r/50x70/images/anime/1160/122627.webp?s=46750589d84c99f93ce6fec83d691766',
        type: 'TV',
      },
      {
        _id: '15417',
        title: "Gintama': Enchousen",
        alternativeTitles: [
          "Gintama' (2012)",
          "Gintama' Overdrive",
          'Kintama',
          "銀魂' 延長戦",
          'Gintama: Enchousen',
        ],
        ranking: 10,
        genres: ['Action', 'Comedy', 'Sci-Fi'],
        episodes: 13,
        hasEpisode: true,
        hasRanking: true,
        image: 'https://cdn.myanimelist.net/images/anime/1452/123686.webp',
        link: 'https://myanimelist.net/anime/15417/Gintama__Enchousen',
        status: 'Finished Airing',
        synopsis:
          "While Gintoki Sakata was away, the Yorozuya found themselves a new leader: Kintoki, Gintoki's golden-haired doppelganger. In order to regain his former position, Gintoki will need the help of those around him, a troubling feat when no one can remember him! Between Kintoki and Gintoki, who will claim the throne as the main character?\n\nIn addition, Yorozuya make a trip back down to red-light district of Yoshiwara to aid an elderly courtesan in her search for her long-lost lover. Although the district is no longer in chains beneath the earth's surface, the trio soon learn of the tragic backstories of Yoshiwara's inhabitants that still haunt them. With flashback after flashback, this quest has Yorozuya witnessing everlasting love and protecting it as best they can with their hearts and souls.\n\n[Written by MAL Rewrite]",
        thumb:
          'https://cdn.myanimelist.net/r/50x70/images/anime/1452/123686.webp?s=bb0e9115397babdacd79295ed33cf8b2',
        type: 'TV',
      },
    ];
  }
}
