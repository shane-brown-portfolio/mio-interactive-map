// Marker + category data extracted from the interactive map
const MAP_DATA = {
  "title": "Mio: Memories In Orbit",
  "image": "map.png",
  "categories": [
    {
      "uid": "Mkkrx6dizm1q8i",
      "label": "Locations",
      "types": [
        {
          "uid": "Mkkrxcctlrtd2qa",
          "label": "Attune Station",
          "icon": "icons/attune-station.svg"
        },
        {
          "uid": "Mkkrxjyx2fo5gm9",
          "label": "Elevator",
          "icon": "icons/elevator.svg"
        }
      ]
    },
    {
      "uid": "Mkkrxx7795r4vrc",
      "label": "Upgrades",
      "types": [
        {
          "uid": "Mkkry1hb53dx6a",
          "label": "Ability",
          "icon": "icons/ability.svg"
        },
        {
          "uid": "Mkkryd8c84zyyw9",
          "label": "Modifier",
          "icon": "icons/modifier.svg"
        },
        {
          "uid": "Mkkryr9tzh06ueq",
          "label": "Damage Upgrade",
          "icon": "icons/damage-upgrade.svg"
        },
        {
          "uid": "Mklo7etaznf2qu",
          "label": "Coating Component",
          "icon": "icons/coating-component.svg"
        }
      ]
    },
    {
      "uid": "Mkkrz7h2prr93b",
      "label": "Collectibles",
      "types": [
        {
          "uid": "Mkkrzfr5b2v5bpj",
          "label": "Junk Pile",
          "icon": "icons/junk-pile.svg"
        },
        {
          "uid": "Mkkrzn92hipumfv",
          "label": "Crystallized Nacre",
          "icon": "icons/crystallized-nacre.svg"
        },
        {
          "uid": "Mkks00cdtqeamel",
          "label": "Old Core",
          "icon": "icons/old-core.svg"
        },
        {
          "uid": "Mkks0setaahiv85",
          "label": "Candle",
          "icon": "icons/candle.svg"
        },
        {
          "uid": "Mkks11mxe0y1rxo",
          "label": "Letter From Tomo",
          "icon": "icons/letter-from-tomo.svg"
        },
        {
          "uid": "Mkks1dwxeuo4x2s",
          "label": "Pearl Record",
          "icon": "icons/pearl-record.svg"
        }
      ]
    },
    {
      "uid": "Mkks2lhfl96wp5",
      "label": "Enemies",
      "types": [
        {
          "uid": "Mkks2qeldcqyaeu",
          "label": "Bosses",
          "icon": "icons/bosses.svg"
        }
      ]
    },
    {
      "uid": "Mkks3fef6ptno8",
      "label": "Misc",
      "types": [
        {
          "uid": "Mkks3hlp29dyho",
          "label": "Key",
          "icon": "icons/key.svg"
        },
        {
          "uid": "Mkks3yer4zvdfpn",
          "label": "Locked Door",
          "icon": "icons/locked-door.svg"
        },
        {
          "uid": "Mkks46bz1m9o43",
          "label": "Switch",
          "icon": "icons/switch.svg"
        },
        {
          "uid": "Mkks4lifcmich7k",
          "label": "NPC",
          "icon": "icons/npc.svg"
        },
        {
          "uid": "Mkks51x9f031zjt",
          "label": "Missing Shop NPC",
          "icon": "icons/missing-shop-npc.svg"
        },
        {
          "uid": "Mkks5pmnv7r87cp",
          "label": "Misc",
          "icon": "icons/misc.svg"
        },
        {
          "uid": "Mklonkcrqpz0ly",
          "label": "Crystallizer",
          "icon": "icons/crystallizer.svg"
        },
        {
          "uid": "Mklovgt3gcykgro",
          "label": "Nacre Basin",
          "icon": "icons/nacre-basin.svg"
        },
        {
          "uid": "Mklp5xwbuhc529o",
          "label": "Torn Overseer",
          "icon": "icons/torn-overseer.svg"
        },
        {
          "uid": "Mklphh28hvj1f6l",
          "label": "Traveller's Log",
          "icon": "icons/traveller-s-log.svg"
        }
      ]
    }
  ],
  "markers": [
    {
      "id": "Mklpt36dd25j7r",
      "x": 0.504316,
      "y": 0.121808,
      "type": "Mkks5pmnv7r87cp",
      "title": "Stargazing Point",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklptn142wri5e",
      "x": 0.501796,
      "y": 0.152949,
      "type": "Mkks1dwxeuo4x2s",
      "title": "Pearl Record",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklpu6ri4h6upcj",
      "x": 0.660793,
      "y": 0.258513,
      "type": "Mkks5pmnv7r87cp",
      "title": "Planet Analysis",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklptwf0wgt3r39",
      "x": 0.672812,
      "y": 0.261009,
      "type": "Mkks1dwxeuo4x2s",
      "title": "Pearl Record",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklpuhjcobhv37",
      "x": 0.685352,
      "y": 0.286750,
      "type": "Mkkrxjyx2fo5gm9",
      "title": "Elevator",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mklpuynqfb1tbm",
      "x": 0.696195,
      "y": 0.303913,
      "type": "Mkks5pmnv7r87cp",
      "title": "Weird Curio",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklq0qhnveqn5a",
      "x": 0.744856,
      "y": 0.317195,
      "type": "Mkks5pmnv7r87cp",
      "title": "Library Overview",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklq0137tj758af",
      "x": 0.735569,
      "y": 0.317575,
      "type": "Mkks5pmnv7r87cp",
      "title": "Flash Memory",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkw0elwczjsl4i",
      "x": 0.578665,
      "y": 0.323261,
      "type": "Mkkryd8c84zyyw9",
      "title": "Sunsail",
      "desc": "<p><em>Increases gliding speed while using the Sail ability but also increases the energy consumption.</em></p><p><br></p><ul><li>Requires 30 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkkxdlqn01ejzra",
      "x": 0.744788,
      "y": 0.325678,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Library",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mklm4hwrbfd9q9p",
      "x": 0.495053,
      "y": 0.330812,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 180.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1jw2vk6hnmq",
      "x": 0.533716,
      "y": 0.334879,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklm6idkctl8mqm",
      "x": 0.577875,
      "y": 0.343512,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 240.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklpznkaotrw19pi",
      "x": 0.738048,
      "y": 0.366030,
      "type": "Mkks5pmnv7r87cp",
      "title": "Flash Memory",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklmfxcy7hxk79",
      "x": 0.735701,
      "y": 0.366056,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 480.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklmblh2ikjrfco",
      "x": 0.633052,
      "y": 0.376802,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 320.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl052ql43v4vs",
      "x": 0.609218,
      "y": 0.380408,
      "type": "Mkks11mxe0y1rxo",
      "title": "Letter From Tomo",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkwrg20eceubn",
      "x": 0.598094,
      "y": 0.380657,
      "type": "Mkkry1hb53dx6a",
      "title": "Sail",
      "desc": "<p><em>Allows Mio to glide.</em></p>",
      "color": "#593f62"
    },
    {
      "id": "Mkkx9j89s0h69be",
      "x": 0.719153,
      "y": 0.390399,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Canopy",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkl0qh5gduokzhk",
      "x": 0.735017,
      "y": 0.391057,
      "type": "Mkks4lifcmich7k",
      "title": "Selene",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkua0jpll4pn2r",
      "x": 0.618257,
      "y": 0.393240,
      "type": "Mkkryd8c84zyyw9",
      "title": "Firefly",
      "desc": "<p><em>Generates a small electric cloud around Mio when using the Sail ability.</em></p><p><br></p><ul><li>Requires 40 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklp1ysewhb19ksz",
      "x": 0.643045,
      "y": 0.400041,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkln955pesua5t",
      "x": 0.649266,
      "y": 0.400588,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklocejs7x6pqnm",
      "x": 0.599149,
      "y": 0.401088,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "<p>Use glide to reach the platform.</p>",
      "color": "#593f62"
    },
    {
      "id": "Mklmd65ofpb0v5n",
      "x": 0.739950,
      "y": 0.404633,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 40.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkln8sj7r0w38ua",
      "x": 0.684305,
      "y": 0.405521,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkloytof20sxeilh",
      "x": 0.617371,
      "y": 0.406477,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl1neu3f8daqcn",
      "x": 0.708624,
      "y": 0.417348,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Use the flowers and grapple points to reach the area above.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1mnyjykg4aya",
      "x": 0.674050,
      "y": 0.418037,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklmcp9al5fcck",
      "x": 0.692256,
      "y": 0.419224,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 100.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklosob5k6o40a5h",
      "x": 0.735619,
      "y": 0.419394,
      "type": "Mklonkcrqpz0ly",
      "title": "Crystallizer",
      "desc": "<ul><li>Turns Nacre Droplets into Crystallized Nacre.</li></ul>",
      "color": "#926c15"
    },
    {
      "id": "Mkln9gq56juizv9",
      "x": 0.728268,
      "y": 0.419554,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklmv968i21197g",
      "x": 0.644260,
      "y": 0.420730,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkllsj46irr51pg",
      "x": 0.572465,
      "y": 0.426975,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 20.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklmvt8570nfuyq",
      "x": 0.631250,
      "y": 0.430051,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "<p>Reach by gliding from the top branch.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkllqecq20uk40v",
      "x": 0.625701,
      "y": 0.431189,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Found above the Crystallizer on a branch. Contains 480.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklpdrrryfquals",
      "x": 0.754613,
      "y": 0.431526,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklmdpnkn04lrv",
      "x": 0.760774,
      "y": 0.433123,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 40.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl0su6yxg4euze",
      "x": 0.637158,
      "y": 0.433376,
      "type": "Mkks4lifcmich7k",
      "title": "Xelato",
      "desc": "<p>Offers an item in exchange for 10,000 Nacre.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkkw48mrpz6yfqa",
      "x": 0.558804,
      "y": 0.434252,
      "type": "Mkkryd8c84zyyw9",
      "title": "Wildcat",
      "desc": "<p><em>After using the Hairpin ability, the next attack will be a heavy strike that deals a lot more damage to enemies.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklorihl1mxebms",
      "x": 0.626878,
      "y": 0.435055,
      "type": "Mklonkcrqpz0ly",
      "title": "Crystallizer",
      "desc": "<ul><li>Turns Nacre Droplets into Crystallized Nacre.</li></ul>",
      "color": "#926c15"
    },
    {
      "id": "Mkl0k7exx7txfth",
      "x": 0.276701,
      "y": 0.436835,
      "type": "Mkks1dwxeuo4x2s",
      "title": "Pearl Record",
      "desc": "<p>From the broken glass in the nearby elevator, jump to the platform and use the Striders to crawl beneath the building and up the other side.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkllt1kafi1uhif",
      "x": 0.583593,
      "y": 0.438703,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 80.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklp9zx8aggjl8q",
      "x": 0.195898,
      "y": 0.440815,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl1paos37elyg",
      "x": 0.782762,
      "y": 0.441588,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl0l3mtlmxb4gq",
      "x": 0.751993,
      "y": 0.447209,
      "type": "Mkks1dwxeuo4x2s",
      "title": "Pearl Record",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkzz1sbhuba6hp",
      "x": 0.791393,
      "y": 0.448849,
      "type": "Mkks3hlp29dyho",
      "title": "Friendly Invitation",
      "desc": "<p>Opens a locked door in the Canopy.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkkvisdgjxporle",
      "x": 0.571995,
      "y": 0.449459,
      "type": "Mkkryd8c84zyyw9",
      "title": "Makeshift Recovery",
      "desc": "<p>Crawl up the wall in the corner to reach the Modifier.</p><p><br></p><p><em>Quickly defeating an enemy that has struck Mio restores one layer of protection (non-stackable).</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklok9025o7csx",
      "x": 0.190624,
      "y": 0.449920,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mklog1ftqa41ahe",
      "x": 0.616325,
      "y": 0.453582,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "<p>Found hidden in the wall in a small cubby that can be jumped to.</p>",
      "color": "#593f62"
    },
    {
      "id": "Mklpktbw4rv7dxm",
      "x": 0.389807,
      "y": 0.453795,
      "type": "Mklphh28hvj1f6l",
      "title": "Traveller's Log",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkxcoomu97f2x",
      "x": 0.393307,
      "y": 0.454569,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Dwellings",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkkxr8i53nzikf",
      "x": 0.778990,
      "y": 0.456299,
      "type": "Mkks2qeldcqyaeu",
      "title": "Friends",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkkz7j1w2cj3ku6",
      "x": 0.753203,
      "y": 0.456451,
      "type": "Mkks3yer4zvdfpn",
      "title": "Canopy Locked Door",
      "desc": "<p>Requires Friendly Invitation</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkllwsi51z75s6",
      "x": 0.240094,
      "y": 0.456198,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 20.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkln83tkbvbiqqm",
      "x": 0.555103,
      "y": 0.456829,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "<p>Two piles here.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklp8l9oomx9ax9",
      "x": 0.625705,
      "y": 0.457819,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklmutkhbm3fqy7",
      "x": 0.589658,
      "y": 0.458858,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklpd7sochos2p6",
      "x": 0.727132,
      "y": 0.462219,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklmhtcins4u9i",
      "x": 0.298946,
      "y": 0.461940,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Found on one of the railways.</p><p><br></p><p>Contains 40.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxuiiag4uewfb",
      "x": 0.723591,
      "y": 0.462465,
      "type": "Mkks2qeldcqyaeu",
      "title": "Nabuu",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkllkmv91jr13rz",
      "x": 0.738307,
      "y": 0.462831,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 80.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklpz8k4crl3id7",
      "x": 0.321544,
      "y": 0.462420,
      "type": "Mkks5pmnv7r87cp",
      "title": "Cryptic Curio",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkz5hm1v8ceka",
      "x": 0.596912,
      "y": 0.463268,
      "type": "Mkks3yer4zvdfpn",
      "title": "Bell Tower Door",
      "desc": "<p>Requires Bell Tower Visitor Pass.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mklol88dy07abkw",
      "x": 0.029099,
      "y": 0.463661,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mkkxbi751szxcjf",
      "x": 0.236612,
      "y": 0.463064,
      "type": "Mkkrxcctlrtd2qa",
      "title": "City Hall",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkkyfufnx839nacs",
      "x": 0.555477,
      "y": 0.463802,
      "type": "Mkks0setaahiv85",
      "title": "Candle",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxegfmrbj8qd6",
      "x": 0.601538,
      "y": 0.463919,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Bell Tower",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkkzv25sqcaoib",
      "x": 0.203968,
      "y": 0.463708,
      "type": "Mkks3hlp29dyho",
      "title": "Bell Tower Visitor Pass",
      "desc": "<p>Opens the Bell Tower door.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkl16p6igmvkp2s",
      "x": 0.231018,
      "y": 0.463928,
      "type": "Mkks46bz1m9o43",
      "title": "Fan Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl0f1iuaewbui",
      "x": 0.230336,
      "y": 0.463934,
      "type": "Mkks51x9f031zjt",
      "title": "Missing Shop NPC",
      "desc": "<p>Must use Striders to reach the button on the other side of the fan vent.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkkxfeyumd6b7g",
      "x": 0.006445,
      "y": 0.466753,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Promenade Tower",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkkxmchvheellnj",
      "x": 0.393497,
      "y": 0.467330,
      "type": "Mkks2qeldcqyaeu",
      "title": "Acat",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkl1rhs79tiz8y",
      "x": 0.357344,
      "y": 0.467964,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklp70z7pixsa7t",
      "x": 0.386738,
      "y": 0.468783,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkyu3wua1fwptl",
      "x": 0.132663,
      "y": 0.470618,
      "type": "Mkkryr9tzh06ueq",
      "title": "Damage Upgrade",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mkkytif6yp530ia",
      "x": 0.700988,
      "y": 0.470915,
      "type": "Mkkryr9tzh06ueq",
      "title": "Damage Upgrade",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mkl0773muhwfawi",
      "x": 0.133679,
      "y": 0.471484,
      "type": "Mkks11mxe0y1rxo",
      "title": "Letter From Tomo",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxnpggkp99j7g",
      "x": 0.105104,
      "y": 0.471647,
      "type": "Mkks2qeldcqyaeu",
      "title": "Ancile & Targa",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkllr6yi1w7666v",
      "x": 0.602513,
      "y": 0.472248,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkycwrle0wlb7f",
      "x": 0.196134,
      "y": 0.474813,
      "type": "Mkks0setaahiv85",
      "title": "Candle",
      "desc": "<p>Glide and use wall climb to reach the room.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkloxk83l1exfjg",
      "x": 0.209335,
      "y": 0.475817,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl1emwcf15wjnf",
      "x": 0.640787,
      "y": 0.477395,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklpxwkgt7c7omo",
      "x": 0.279007,
      "y": 0.478074,
      "type": "Mkks5pmnv7r87cp",
      "title": "Cryptic Curio",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklozhhmfl2pqnp",
      "x": 0.770785,
      "y": 0.479583,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkln6v7e27bzq5n3",
      "x": 0.701487,
      "y": 0.479518,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl0o7cdey9v1qu",
      "x": 0.756874,
      "y": 0.481071,
      "type": "Mkks4lifcmich7k",
      "title": "Alice",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkudkhfadohml",
      "x": 0.238531,
      "y": 0.481667,
      "type": "Mkkryd8c84zyyw9",
      "title": "Foolish Ideal",
      "desc": "<p><em>Damage inflicted on enemies increases when Energy is not fully charged.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkln1wn9njqaa4h",
      "x": 0.260312,
      "y": 0.482310,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkvq0w66yjq57e",
      "x": 0.206210,
      "y": 0.482568,
      "type": "Mkkryd8c84zyyw9",
      "title": "Sharpened Hairpin",
      "desc": "<p><em>Grants the ability to slice enemies when using the Hairpin ability on them.</em></p><p><br></p><ul><li>Requires 40 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklmrib500nfqi9",
      "x": 0.573355,
      "y": 0.482972,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklln65ykvdz11",
      "x": 0.221398,
      "y": 0.482621,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Atop the platform. Contains 240.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklmwfsvu93h4o8",
      "x": 0.645499,
      "y": 0.484137,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkyuybxfz4exwp",
      "x": 0.516082,
      "y": 0.484315,
      "type": "Mkkryr9tzh06ueq",
      "title": "Damage Upgrade",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mklpyoyudvvsj1",
      "x": 0.505538,
      "y": 0.484678,
      "type": "Mkks5pmnv7r87cp",
      "title": "Cryptic Curio",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklpyeiff79z4pt",
      "x": 0.489980,
      "y": 0.484986,
      "type": "Mkks5pmnv7r87cp",
      "title": "Cryptic Curio",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl1r2486sd2vzd",
      "x": 0.711598,
      "y": 0.485347,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkloqc5tp33obmn",
      "x": 0.194933,
      "y": 0.485104,
      "type": "Mklonkcrqpz0ly",
      "title": "Crystallizer",
      "desc": "<ul><li>Turns Nacre Droplets into Crystallized Nacre.</li></ul>",
      "color": "#926c15"
    },
    {
      "id": "Mkllw79delo5fc",
      "x": 0.277310,
      "y": 0.485222,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 80.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkyt3v9sba3w8f",
      "x": 0.417583,
      "y": 0.486000,
      "type": "Mkkryr9tzh06ueq",
      "title": "Damage Upgrade",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mkl0g78lgowpcka",
      "x": 0.633460,
      "y": 0.486701,
      "type": "Mkks51x9f031zjt",
      "title": "Missing Shop NPC",
      "desc": "<p>Defeat all the enemies in the area to free the NPC.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkl0ozlpgadx0g",
      "x": 0.114443,
      "y": 0.487228,
      "type": "Mkks4lifcmich7k",
      "title": "Liho, The Blood",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl1pvbjrdqao2f",
      "x": 0.034174,
      "y": 0.487595,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkz8tb6y74wtzc",
      "x": 0.226987,
      "y": 0.487140,
      "type": "Mkks3yer4zvdfpn",
      "title": "Hall Of History Door",
      "desc": "<p>Requires Old Fashioned Key.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mklp81fzxw7rnsj",
      "x": 0.170474,
      "y": 0.487493,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkloz2scxgm6slg",
      "x": 0.661414,
      "y": 0.488035,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkz8m6u6tj35ua",
      "x": 0.203260,
      "y": 0.487568,
      "type": "Mkks3yer4zvdfpn",
      "title": "Hall Of History Door",
      "desc": "<p>Requires Old Fashioned Key.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mklmgx1aegbov9mp",
      "x": 0.484732,
      "y": 0.487971,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Found via a hole in the nearby elevator shaft.</p><p><br></p><p>Contains 80.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1f8umqm970g",
      "x": 0.670080,
      "y": 0.489766,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklp7opphsr3uko",
      "x": 0.258753,
      "y": 0.489527,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklox8zm1xnej7",
      "x": 0.433720,
      "y": 0.489839,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkllrvo5ggjruru",
      "x": 0.784440,
      "y": 0.491977,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 40.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklmsaz1xvjnguk",
      "x": 0.583570,
      "y": 0.493322,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklmpnef2ab83m",
      "x": 0.258699,
      "y": 0.493883,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1b96qejl3s08",
      "x": 0.212053,
      "y": 0.494357,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Speak to the NPC nearby.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklmyg9pei2wazo",
      "x": 0.757709,
      "y": 0.495119,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "<p>On the ledge above.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkllo3ybkz89ys",
      "x": 0.223433,
      "y": 0.494881,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxaexttxlbvjo",
      "x": 0.270920,
      "y": 0.496236,
      "type": "Mkkrxcctlrtd2qa",
      "title": "City Gates",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mklmug5eks7cze4",
      "x": 0.607221,
      "y": 0.497054,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklor1gjznbpudw",
      "x": 0.584522,
      "y": 0.497072,
      "type": "Mklonkcrqpz0ly",
      "title": "Crystallizer",
      "desc": "<ul><li>Turns Nacre Droplets into Crystallized Nacre.</li></ul>",
      "color": "#926c15"
    },
    {
      "id": "Mklom7g1vv5c0xg",
      "x": 0.694583,
      "y": 0.497274,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mkkyaw50rc4tb8i",
      "x": 0.626766,
      "y": 0.497455,
      "type": "Mkks0setaahiv85",
      "title": "Candle",
      "desc": "<p>Inside the container.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxvba16nqbxlm",
      "x": 0.185053,
      "y": 0.497366,
      "type": "Mkks2qeldcqyaeu",
      "title": "Calderon",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkl002ylrey89g",
      "x": 0.192313,
      "y": 0.497940,
      "type": "Mkks3hlp29dyho",
      "title": "Old Fashioned Key",
      "desc": "<p>Found after defeating Calderon.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkllm2c6uiqv0n",
      "x": 0.530813,
      "y": 0.503555,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Use the Hairpin to reach the spot.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkllpbijl8d5ivr",
      "x": 0.659431,
      "y": 0.504071,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 80.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklmwwcuibhzw2r",
      "x": 0.677132,
      "y": 0.507741,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkln9vhpy5n9yd2",
      "x": 0.310125,
      "y": 0.507555,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklq9qih8abljys",
      "x": 0.501979,
      "y": 0.508148,
      "type": "Mkks2qeldcqyaeu",
      "title": "Final Boss",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkloyirb7b091s",
      "x": 0.637727,
      "y": 0.508792,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkz4femn8lqmf3",
      "x": 0.524068,
      "y": 0.508887,
      "type": "Mkks3yer4zvdfpn",
      "title": "Aviaries Door",
      "desc": "<p>Requires Aviaries Passepartout</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkmdxcm40aer783",
      "x": 0.469350,
      "y": 0.509484,
      "type": "Mkks4lifcmich7k",
      "title": "Rad",
      "desc": "<p>Stuck in the doorway.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkl04n7phujxxq9",
      "x": 0.530580,
      "y": 0.509562,
      "type": "Mkks11mxe0y1rxo",
      "title": "Letter From Tomo",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkwxm3xnc3qrpq",
      "x": 0.529216,
      "y": 0.509580,
      "type": "Mkkry1hb53dx6a",
      "title": "Dodge",
      "desc": "<p><em>Allows Mio to dodge projectiles and attacks.</em></p>",
      "color": "#593f62"
    },
    {
      "id": "Mkmdx12bx5rhxeh",
      "x": 0.468669,
      "y": 0.509613,
      "type": "Mkkryd8c84zyyw9",
      "title": "Analyzer",
      "desc": "<p>Given to Mio by Rad after rescuing them.</p><p><br></p><p><em>Displays enemies' remaining health.</em></p><p><br></p><ul><li>Requires 5 Modifier slots.<span class=\"ql-cursor\">﻿</span></li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkllot10i85fdcn",
      "x": 0.589046,
      "y": 0.510432,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 20.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkln1b4xpugp33a",
      "x": 0.333866,
      "y": 0.513653,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxezlj20zli8h",
      "x": 0.725255,
      "y": 0.517464,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Promenade",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkkz6ij6ki3lu2h",
      "x": 0.703851,
      "y": 0.517460,
      "type": "Mkks3yer4zvdfpn",
      "title": "Door To Vaults Lift",
      "desc": "<p>Requires Dr Hayln's Assistant Credentials.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mklmxv6qw13bi22",
      "x": 0.698136,
      "y": 0.517554,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkvmh0ghe0gd2j",
      "x": 0.188003,
      "y": 0.517143,
      "type": "Mkkryd8c84zyyw9",
      "title": "Nacre Overload",
      "desc": "<p><em>Damage increases for each Nacre Droplet carried. Each attack dealt on an enemy will use Droplets, but all Droplets will be returned when the enemy is defeated.</em></p><p><br></p><ul><li>Requires 30 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkktiyiyjpjw504",
      "x": 0.560404,
      "y": 0.518417,
      "type": "Mkkryd8c84zyyw9",
      "title": "The Hand's Greed",
      "desc": "<p><em>Damage inflicted on enemies increases for each layer of protection that Mio has lost.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkme2bjwi6chgkg",
      "x": 0.434900,
      "y": 0.518676,
      "type": "Mkkryd8c84zyyw9",
      "title": "Protective Overlay",
      "desc": "<p>Defeat all the enemies to open the closed container.</p><p><br></p><p><em>Grants an additional layer of protection.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklmp0hoqa0m7g",
      "x": 0.655679,
      "y": 0.519989,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1e1swqm3jqfm",
      "x": 0.608309,
      "y": 0.520893,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklmeg2y52erk97",
      "x": 0.306346,
      "y": 0.520770,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 280.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkt3wo5mvx8cnh",
      "x": 0.676836,
      "y": 0.521827,
      "type": "Mkkryd8c84zyyw9",
      "title": "Bird of Prey",
      "desc": "<p><em>Temporarily increases damage to enemies while using the Sail ability.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkme442e2zcuwhi",
      "x": 0.439534,
      "y": 0.522637,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Hidden up the wall in a small cubby.</p><p><br></p><p>Contains 280.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxpy75tkd25l",
      "x": 0.543336,
      "y": 0.523561,
      "type": "Mkks2qeldcqyaeu",
      "title": "Crow",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkl03u6ospqwm4r",
      "x": 0.550603,
      "y": 0.523605,
      "type": "Mkks11mxe0y1rxo",
      "title": "Letter From Tomo",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkllvh4hhgjfk11",
      "x": 0.343008,
      "y": 0.524048,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1d82o76tb1si",
      "x": 0.429715,
      "y": 0.524978,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Use the nearby enemy to harvest energy and regain jumps to real the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxry49rx6k8ng",
      "x": 0.723924,
      "y": 0.525330,
      "type": "Mkks2qeldcqyaeu",
      "title": "Lombre",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkkx1vdmg343w5",
      "x": 0.367778,
      "y": 0.525053,
      "type": "Mkkry1hb53dx6a",
      "title": "Striders",
      "desc": "<p><em>Allows Mio to cling to walls and other surfaces.</em></p>",
      "color": "#593f62"
    },
    {
      "id": "Mkl1c9po1dvyoui",
      "x": 0.174807,
      "y": 0.525157,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl05k0z9y23nhd",
      "x": 0.370329,
      "y": 0.525471,
      "type": "Mkks11mxe0y1rxo",
      "title": "Letter From Tomo",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkvg5lw80kwr4r",
      "x": 0.371838,
      "y": 0.525503,
      "type": "Mkkryd8c84zyyw9",
      "title": "Kinetic Thrust",
      "desc": "<p><em>The last attack of a the combo deals additional damage.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklp9he03tk0kcr",
      "x": 0.715416,
      "y": 0.525885,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkt1g2gz889w4r",
      "x": 0.552160,
      "y": 0.528125,
      "type": "Mkkryd8c84zyyw9",
      "title": "Asma's Will",
      "desc": "<p>Located hidden inside a small room in the wall just above the dangerous purple plants.</p><p><br></p><p><em>Makes it so enemies (excluding bosses) refuse to attack Mio unless she attacks them first.</em></p><p><br></p><ul><li>Requires 30 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkme6j5vaifzjzf",
      "x": 0.466488,
      "y": 0.528288,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklpn26q32b6ba",
      "x": 0.001212,
      "y": 0.528770,
      "type": "Mkkrxjyx2fo5gm9",
      "title": "Elevator",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkloaoejpjmzqnd",
      "x": 0.608053,
      "y": 0.528571,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "<p>Found behind the wall next to the bouncy mushroom.</p>",
      "color": "#593f62"
    },
    {
      "id": "Mklpkan1fyvxmto",
      "x": 0.298282,
      "y": 0.529098,
      "type": "Mklphh28hvj1f6l",
      "title": "Traveller's Log",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkme4t46zk1gqd",
      "x": 0.435658,
      "y": 0.529526,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl0im82ohj91ru",
      "x": 0.714987,
      "y": 0.530425,
      "type": "Mkks1dwxeuo4x2s",
      "title": "Pearl Record",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklmoh456sjuym",
      "x": 0.617700,
      "y": 0.531305,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklpofnryjtd2n6",
      "x": 0.712221,
      "y": 0.532069,
      "type": "Mkkrxjyx2fo5gm9",
      "title": "Elevator",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkmeamgti88r8y",
      "x": 0.501738,
      "y": 0.532256,
      "type": "Mkks4lifcmich7k",
      "title": "Shii",
      "desc": "<p>Feed Nacre to unlock the map system.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkmej2xnmd9u72f",
      "x": 0.476420,
      "y": 0.532289,
      "type": "Mkks3hlp29dyho",
      "title": "Silo Access Badge",
      "desc": "<p>Opens the Silo Access Door.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkkx3unkno0di7f",
      "x": 0.539754,
      "y": 0.532502,
      "type": "Mkkry1hb53dx6a",
      "title": "Harvester",
      "desc": "<p>Found in a hidden area past the Crow boss fight.</p><p><br></p><p><em>Allows Mio to refill energy after striking an enemy or object.</em></p>",
      "color": "#593f62"
    },
    {
      "id": "Mkl1g69v31pw9kk",
      "x": 0.339265,
      "y": 0.533422,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>User Striders to bypass the airflow and reach the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklpjxd21oz8yr",
      "x": 0.328630,
      "y": 0.533962,
      "type": "Mklphh28hvj1f6l",
      "title": "Traveller's Log",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklpmp5esy31tyl",
      "x": 0.474152,
      "y": 0.538080,
      "type": "Mkkrxjyx2fo5gm9",
      "title": "Elevator",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkme75g2ku2myx",
      "x": 0.465800,
      "y": 0.539010,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkku3quns8mm3s",
      "x": 0.278064,
      "y": 0.538855,
      "type": "Mkkryd8c84zyyw9",
      "title": "Enhanced Dodge",
      "desc": "<p><em>Dodging attacks has increased timing.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkl1i5k2qwu31pp",
      "x": 0.165603,
      "y": 0.539041,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Go through the vent in the top left corner of the previous room.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkygh3xrq2xztx",
      "x": 0.266302,
      "y": 0.539182,
      "type": "Mkks0setaahiv85",
      "title": "Candle",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxt9qbj6qs1ss",
      "x": 0.293901,
      "y": 0.539850,
      "type": "Mkks2qeldcqyaeu",
      "title": "Poltergates",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mklowri5ztx6e9w",
      "x": 0.603309,
      "y": 0.540234,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklm1w0apkwf45l",
      "x": 0.147075,
      "y": 0.540463,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklpx4aikxyj7qf",
      "x": 0.612565,
      "y": 0.545663,
      "type": "Mkks5pmnv7r87cp",
      "title": "Cryptic Curio",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkln0yufhkp6ht",
      "x": 0.359801,
      "y": 0.547364,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklmngrotulti2h",
      "x": 0.634311,
      "y": 0.549372,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkmdj1xutvrj4x",
      "x": 0.460585,
      "y": 0.551090,
      "type": "Mkks2qeldcqyaeu",
      "title": "Egis",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkmejrrvougq6xc",
      "x": 0.524141,
      "y": 0.551366,
      "type": "Mkks3yer4zvdfpn",
      "title": "Silo Access Door",
      "desc": "<p>Requires Silo Access Badge to open.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkloptdxd51g8tw",
      "x": 0.574513,
      "y": 0.551445,
      "type": "Mklonkcrqpz0ly",
      "title": "Crystallizer",
      "desc": "<ul><li>Turns Nacre Droplets into Crystallized Nacre.</li></ul>",
      "color": "#926c15"
    },
    {
      "id": "Mkktxz4y4kcuoh",
      "x": 0.623180,
      "y": 0.552518,
      "type": "Mkkryd8c84zyyw9",
      "title": "Defense Mechanism",
      "desc": "<p>Attack the flowers while jumping to regain a jump charge to cross the distance.</p><p><br></p><p><em>Creates an explosion around Mio when she takes a hit.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklpm5iuyfu57f",
      "x": 0.201493,
      "y": 0.553895,
      "type": "Mkkrxjyx2fo5gm9",
      "title": "Elevator",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkllumuac0mqlq7",
      "x": 0.222810,
      "y": 0.554906,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 200.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkmdum7ybvj3e5n",
      "x": 0.499560,
      "y": 0.555210,
      "type": "Mklonkcrqpz0ly",
      "title": "Crystallizer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl10binsd6h7xi",
      "x": 0.071033,
      "y": 0.555792,
      "type": "Mkks46bz1m9o43",
      "title": "Fan Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkxhyspbeu00at",
      "x": 0.100162,
      "y": 0.556210,
      "type": "Mkkry1hb53dx6a",
      "title": "Redacted #1",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mklp0l5g236i4gr",
      "x": 0.338822,
      "y": 0.556519,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkmeh92936y0aqh",
      "x": 0.569730,
      "y": 0.559476,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Compound",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mklmqofkbidsslo",
      "x": 0.440709,
      "y": 0.560858,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkmdr54w3q02qon",
      "x": 0.531661,
      "y": 0.561972,
      "type": "Mkks5pmnv7r87cp",
      "title": "Flash Memory",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkydxuaua8t4sd",
      "x": 0.078875,
      "y": 0.565109,
      "type": "Mkks0setaahiv85",
      "title": "Candle",
      "desc": "<p>Use wall climb and glide to reach.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkmegpgc19lxpxb",
      "x": 0.584431,
      "y": 0.564854,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklllded2xswqmn",
      "x": 0.638681,
      "y": 0.566295,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 80.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl0rvhzr9s1hcm",
      "x": 0.200621,
      "y": 0.565917,
      "type": "Mkks4lifcmich7k",
      "title": "Sin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkmdsh0kse3zn9i",
      "x": 0.539054,
      "y": 0.566712,
      "type": "Mkks4lifcmich7k",
      "title": "Samsk",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkxg7vfurm8dsk",
      "x": 0.046164,
      "y": 0.568198,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Redacted #2",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mklmq3mr2gppt5b",
      "x": 0.364669,
      "y": 0.567921,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1jawc71kg3qv",
      "x": 0.160968,
      "y": 0.568093,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkmeg3flt9a2ndp",
      "x": 0.589564,
      "y": 0.569758,
      "type": "Mklphh28hvj1f6l",
      "title": "Traveller's Log",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkvycanu63yeji",
      "x": 0.742801,
      "y": 0.570172,
      "type": "Mkkryd8c84zyyw9",
      "title": "Split Process",
      "desc": "<p><em>Increases the number of Modifier slots, but energy recharges more slowly.</em></p><p><br></p><ul><li>Adds 15 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkllv2o8s50ld8j",
      "x": 0.337269,
      "y": 0.570066,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkzxttp83d8k2",
      "x": 0.790930,
      "y": 0.570707,
      "type": "Mkks3yer4zvdfpn",
      "title": "Locked Access Door",
      "desc": "<p>Requires Dr Hayln's Assistant Credentials.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkmehtsci2ej14u",
      "x": 0.599479,
      "y": 0.571063,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 20.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklpnrdo09a7yfq",
      "x": 0.001388,
      "y": 0.572057,
      "type": "Mkkrxjyx2fo5gm9",
      "title": "Elevator",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mklq4o0y1r793a",
      "x": 0.038177,
      "y": 0.572183,
      "type": "Mkks5pmnv7r87cp",
      "title": "Fragmented Serial Number",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl1qervljhlgb",
      "x": 0.306635,
      "y": 0.571645,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkzx18uua1fvst",
      "x": 0.750524,
      "y": 0.572545,
      "type": "Mkks3hlp29dyho",
      "title": "Dr Hayln's Employment Ledger",
      "desc": "<p>Grants Dr Hayln's Assistant Credentials.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkln0iu1yz3arls",
      "x": 0.313067,
      "y": 0.572189,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkmdjqh0ms6nndr",
      "x": 0.447288,
      "y": 0.573426,
      "type": "Mkkry1hb53dx6a",
      "title": "Hairpin",
      "desc": "<p>Allows Mio to grapple Energy Shards.</p>",
      "color": "#593f62"
    },
    {
      "id": "Mkkvcss2bhkm6wp",
      "x": 0.352660,
      "y": 0.573867,
      "type": "Mkkryd8c84zyyw9",
      "title": "Imperfect Focus",
      "desc": "<p>Found on the ledge above the frost blasters. Players need to time dodges and jumps to reach it.</p><p><br></p><p><em>Increases the number of modifier slots available on Mio but the timing for dodging attacks is reduced.</em></p><p><br></p><ul><li>Adds 5 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklq3vhnb6v5x7j",
      "x": 0.255519,
      "y": 0.574357,
      "type": "Mkks5pmnv7r87cp",
      "title": "Modifier Extension",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklmz3flrdj288",
      "x": 0.275813,
      "y": 0.575635,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklo9sr1wnuciiu",
      "x": 0.610229,
      "y": 0.576708,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mklpjkgd6y6m0nq",
      "x": 0.228658,
      "y": 0.576320,
      "type": "Mklphh28hvj1f6l",
      "title": "Traveller's Log",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklmo0vbrmslaqn",
      "x": 0.611913,
      "y": 0.576991,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkmds18k4k6c1gd",
      "x": 0.524572,
      "y": 0.577329,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklm2tyuvc868b",
      "x": 0.215478,
      "y": 0.578508,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 200.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklq8auu05hyewp",
      "x": 0.129592,
      "y": 0.579560,
      "type": "Mkks5pmnv7r87cp",
      "title": "Fragmented Serial Number",
      "desc": "<p>Go in the hole beneath the moving red pipes and all the way left.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkloy1b5e2f25ju",
      "x": 0.415383,
      "y": 0.579261,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkztv2fi3jvfls",
      "x": 0.629384,
      "y": 0.579625,
      "type": "Mkks3hlp29dyho",
      "title": "Aviaries Passepartout",
      "desc": "<p>Located on a platform after defeating the Flora boss.</p><p><br></p><p>Opens the Aviaries Door.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkl0pxghmlx9vjo",
      "x": 0.620850,
      "y": 0.579879,
      "type": "Mkks4lifcmich7k",
      "title": "Personal Assistant",
      "desc": "<p>Shows up after the Flora boss fight.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mklpey1piot2kav",
      "x": 0.160433,
      "y": 0.579405,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklp0ai2aguat5i",
      "x": 0.303243,
      "y": 0.579592,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkxmygo3syhdpg",
      "x": 0.625141,
      "y": 0.579942,
      "type": "Mkks2qeldcqyaeu",
      "title": "Sentient Pearltrap",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkkxp9fk09v7xq",
      "x": 0.285618,
      "y": 0.580153,
      "type": "Mkks2qeldcqyaeu",
      "title": "Atmos",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkln00t7ilhhdy",
      "x": 0.306975,
      "y": 0.580217,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklmr17ur82ncuq",
      "x": 0.352349,
      "y": 0.580392,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklmiglgplrcl7",
      "x": 0.046311,
      "y": 0.581636,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 140.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl066odng295g",
      "x": 0.441242,
      "y": 0.581647,
      "type": "Mkks11mxe0y1rxo",
      "title": "Letter From Tomo",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklobmjb4swzh78",
      "x": 0.399278,
      "y": 0.582381,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "<p>Inside the container, will only open after boss fight.</p>",
      "color": "#593f62"
    },
    {
      "id": "Mkllu3n9pvrno2v",
      "x": 0.206512,
      "y": 0.583673,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 80.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl17eyjlz408bb",
      "x": 0.333160,
      "y": 0.585023,
      "type": "Mkks46bz1m9o43",
      "title": "Fan Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkktg7mcin9otr",
      "x": 0.189990,
      "y": 0.587869,
      "type": "Mkkryd8c84zyyw9",
      "title": "Afterimage",
      "desc": "<p><em>Using the Hairpin generates a Decoy that enemies will target instead of Mio. The Decoy will explode after a short period of time.</em></p><p><br></p><ul><li>Requires 30 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklmzipbgri7ijo",
      "x": 0.252958,
      "y": 0.594049,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklp01hr4dn6htf",
      "x": 0.273946,
      "y": 0.596171,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklmfcgvtmzpdcd",
      "x": 0.208830,
      "y": 0.597805,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 160.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkybwmt9pdaw1l",
      "x": 0.243047,
      "y": 0.597887,
      "type": "Mkks0setaahiv85",
      "title": "Candle",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklq7r2w51b0o6b",
      "x": 0.142051,
      "y": 0.600124,
      "type": "Mkks5pmnv7r87cp",
      "title": "Fragmented Serial Number",
      "desc": "<p>Inside the vent to the left of the moving red pipes.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mklp30t2ap7zv3i",
      "x": 0.106677,
      "y": 0.722477,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl15gpwlo92lpc",
      "x": 0.061309,
      "y": 0.723114,
      "type": "Mkks46bz1m9o43",
      "title": "Pump Level Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklndlr40vmksr",
      "x": 0.057480,
      "y": 0.723317,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl150ukrwtpn12",
      "x": 0.053968,
      "y": 0.723365,
      "type": "Mkks46bz1m9o43",
      "title": "Pump Level Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl16abug6w68nm",
      "x": 0.086933,
      "y": 0.723984,
      "type": "Mkks46bz1m9o43",
      "title": "Pump Level Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklp2m6ijfdz3fb",
      "x": 0.042556,
      "y": 0.724007,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklpw0fstynjj6p",
      "x": 0.148174,
      "y": 0.738492,
      "type": "Mkks5pmnv7r87cp",
      "title": "Crucible Report",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklnd8lbr747gnp",
      "x": 0.030357,
      "y": 0.741990,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkvw6l94fe4sco",
      "x": 0.653510,
      "y": 0.743153,
      "type": "Mkkryd8c84zyyw9",
      "title": "Splintering Dodge",
      "desc": "<p><em>Dodging an attack generates an Energy shard.</em></p><p><br></p><ul><li>Requires 30 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklnccrd0irp15s",
      "x": 0.133003,
      "y": 0.745350,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl14jkft8u9zzp",
      "x": 0.119783,
      "y": 0.746191,
      "type": "Mkks46bz1m9o43",
      "title": "Pump Level Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklncvoknjf0e4o",
      "x": 0.104095,
      "y": 0.746437,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklpwan6xu1khac",
      "x": 0.228963,
      "y": 0.745731,
      "type": "Mkks5pmnv7r87cp",
      "title": "Crucible Report",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkllybfp6wvhkje",
      "x": 0.677078,
      "y": 0.751367,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 80.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkln30hx89izlxr",
      "x": 0.648630,
      "y": 0.751600,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklp2dxh216bhu",
      "x": 0.065505,
      "y": 0.752021,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklnb7mocdxu8e",
      "x": 0.164140,
      "y": 0.753199,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklnbq782cyxt1b",
      "x": 0.260753,
      "y": 0.755147,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "<p>Two piles here.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkuixzf4yq9vh4",
      "x": 0.671793,
      "y": 0.757400,
      "type": "Mkkryd8c84zyyw9",
      "title": "High Risk Voucher",
      "desc": "<p><em>Allows purchase of an extra layer of protection (non-stackable) at Nacre Basins.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkl06rlt8eyilp",
      "x": 0.718544,
      "y": 0.757754,
      "type": "Mkks11mxe0y1rxo",
      "title": "Letter From Tomo",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkwwgs4lnv9nnu",
      "x": 0.717044,
      "y": 0.757808,
      "type": "Mkkry1hb53dx6a",
      "title": "Slingshot",
      "desc": "<p><em>Creates a powerful energy blast capable of clearing rubble when hitting Energy Shards.</em></p>",
      "color": "#593f62"
    },
    {
      "id": "Mklogz7a5dmz4g8",
      "x": 0.756270,
      "y": 0.757945,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "<p>Climb the drawers with the Striders. It's found in the back of the drawer up top.</p>",
      "color": "#593f62"
    },
    {
      "id": "Mklnaolnf1n89vd",
      "x": 0.236232,
      "y": 0.760131,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklp3nd1sj21t",
      "x": 0.282326,
      "y": 0.760967,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklp3yfr5cekprx",
      "x": 0.248753,
      "y": 0.762367,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklne7a83df8a4",
      "x": 0.252048,
      "y": 0.762745,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "<p>Three found here.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklolpbgos2fhzo",
      "x": 0.252773,
      "y": 0.763058,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mklot5f3fsrw2ip",
      "x": 0.193924,
      "y": 0.764287,
      "type": "Mklonkcrqpz0ly",
      "title": "Crystallizer",
      "desc": "<ul><li>Turns Nacre Droplets into Crystallized Nacre.</li></ul>",
      "color": "#926c15"
    },
    {
      "id": "Mkln3r8ty1hab01k",
      "x": 0.779915,
      "y": 0.765644,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "<p>Three in this area.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkzb95idrx1zki",
      "x": 0.704414,
      "y": 0.766124,
      "type": "Mkks3yer4zvdfpn",
      "title": "Vault Door",
      "desc": "<p>Requires Vaults' Worker Authentication.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkllywqh5am8zim",
      "x": 0.680725,
      "y": 0.766360,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 40.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxjnss02ozc5e",
      "x": 0.712450,
      "y": 0.766951,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Vaults",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mklpfhrfntl4q7p",
      "x": 0.189809,
      "y": 0.769381,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklpbcz4kl811a",
      "x": 0.464902,
      "y": 0.771895,
      "type": "Mkks46bz1m9o43",
      "title": "The Wheel",
      "desc": "<p>Used to spin the underside of the map.</p><p><br></p><ul><li>Requires the Severed Finger to operate.</li></ul>",
      "color": "#926c15"
    },
    {
      "id": "Mkl1kuih63me30n",
      "x": 0.687874,
      "y": 0.773158,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxtpo2xnrw6qf",
      "x": 0.778566,
      "y": 0.779910,
      "type": "Mkks2qeldcqyaeu",
      "title": "Sawlong",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mklpcnodr45ybzo",
      "x": 0.699766,
      "y": 0.779949,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl12v16jaj6xra",
      "x": 0.685535,
      "y": 0.780500,
      "type": "Mkks46bz1m9o43",
      "title": "Pump Level Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklpal7dtiz5v7j",
      "x": 0.458799,
      "y": 0.786366,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkxd4mm2iqu40d",
      "x": 0.465998,
      "y": 0.787374,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Lab",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mklq1wst3gmlk6",
      "x": 0.143561,
      "y": 0.792455,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklq1key353m9i",
      "x": 0.133048,
      "y": 0.792518,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkln6e313z5x66",
      "x": 0.779437,
      "y": 0.798586,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1gxa5kx0lpd",
      "x": 0.706121,
      "y": 0.798741,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklq2z3zdh36wc",
      "x": 0.158339,
      "y": 0.798985,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklm3jyfnfdt2k",
      "x": 0.781044,
      "y": 0.800666,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Hidden beneath the saws.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1lpj4zooxaf",
      "x": 0.638699,
      "y": 0.801302,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklpc5dklexqmpi",
      "x": 0.422636,
      "y": 0.801623,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklp1kl30746id3",
      "x": 0.740995,
      "y": 0.809465,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklm5y2dguc4y9s",
      "x": 0.755695,
      "y": 0.809663,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 240.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklos684gkjb5gv",
      "x": 0.675038,
      "y": 0.810736,
      "type": "Mklonkcrqpz0ly",
      "title": "Crystallizer",
      "desc": "<ul><li>Turns Nacre Droplets into Crystallized Nacre.</li></ul>",
      "color": "#926c15"
    },
    {
      "id": "Mkl13c5t9tqxtq",
      "x": 0.684387,
      "y": 0.813423,
      "type": "Mkks46bz1m9o43",
      "title": "Pump Level Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl1170tzvvm29",
      "x": 0.664302,
      "y": 0.813938,
      "type": "Mkks46bz1m9o43",
      "title": "Pump Level Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkku798v2y9zug",
      "x": 0.643215,
      "y": 0.814452,
      "type": "Mkkryd8c84zyyw9",
      "title": "Extra-Coating Processor",
      "desc": "<p><em>Creates an extra layer of protection (non-stackable) for every three enemies defeated.</em></p><p><br></p><p>Requires 30 Modifier slots.</p>",
      "color": "#593f62"
    },
    {
      "id": "Mklqb5oiqhhs4a5",
      "x": 0.464555,
      "y": 0.816238,
      "type": "Mkks2qeldcqyaeu",
      "title": "Anra",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkkxqozgsktf56n",
      "x": 0.724646,
      "y": 0.817717,
      "type": "Mkks2qeldcqyaeu",
      "title": "Debby",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkln7ba4ylz05x",
      "x": 0.734356,
      "y": 0.818184,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkz9owg8gosqel",
      "x": 0.788431,
      "y": 0.823602,
      "type": "Mkks3yer4zvdfpn",
      "title": "Serial Code Door",
      "desc": "<p>Requires 6 Serial Codes to open.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkl0j96c5kz9if9",
      "x": 0.397854,
      "y": 0.823620,
      "type": "Mkks1dwxeuo4x2s",
      "title": "Pearl Record",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklm3y4v7r2gu3h",
      "x": 0.608027,
      "y": 0.824387,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkllxkcta4v3lb",
      "x": 0.397464,
      "y": 0.824294,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklm55r8b148zao",
      "x": 0.664510,
      "y": 0.825597,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 180.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkv5vmymow168",
      "x": 0.687362,
      "y": 0.827580,
      "type": "Mkkryd8c84zyyw9",
      "title": "High Voltage Discharge",
      "desc": "<p>After a short delay, the next attack will automatically stun the target.</p><p><br></p><p>Requires 20 Modifier slots.</p><p><br></p><p><br></p>",
      "color": "#593f62"
    },
    {
      "id": "Mkln55opjelxp8",
      "x": 0.329456,
      "y": 0.829460,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkyf66y3pxr0rp",
      "x": 0.353579,
      "y": 0.831011,
      "type": "Mkks0setaahiv85",
      "title": "Candle",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkyenkb7nq04ci",
      "x": 0.696738,
      "y": 0.834991,
      "type": "Mkks0setaahiv85",
      "title": "Candle",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkln4rlmxqnnd0s",
      "x": 0.333241,
      "y": 0.835116,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklp13jtkfyl0w",
      "x": 0.331002,
      "y": 0.839642,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklm0u9sfbhaqqg",
      "x": 0.354047,
      "y": 0.844004,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkln4ccgyn91ban",
      "x": 0.332334,
      "y": 0.843984,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl00xerx9c0qrl",
      "x": 0.708476,
      "y": 0.845265,
      "type": "Mkks3hlp29dyho",
      "title": "Severed Fingertip",
      "desc": "<p>Used to control the Wheel located above the Lab Attune Station.</p>",
      "color": "#926c15"
    }
  ]
};
