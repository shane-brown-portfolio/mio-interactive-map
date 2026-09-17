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
          "icon": "icons/attune-station.png"
        },
        {
          "uid": "Mkkrxjyx2fo5gm9",
          "label": "Elevator",
          "icon": "icons/elevator.png"
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
          "icon": "icons/ability.png"
        },
        {
          "uid": "Mkkryd8c84zyyw9",
          "label": "Modifier",
          "icon": "icons/modifier.png"
        },
        {
          "uid": "Mkkryr9tzh06ueq",
          "label": "Damage Upgrade",
          "icon": "icons/damage-upgrade.png"
        },
        {
          "uid": "Mklo7etaznf2qu",
          "label": "Coating Component",
          "icon": "icons/coating-component.png"
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
          "icon": "icons/junk-pile.png"
        },
        {
          "uid": "Mkkrzn92hipumfv",
          "label": "Crystallized Nacre",
          "icon": "icons/crystallized-nacre.png"
        },
        {
          "uid": "Mkks00cdtqeamel",
          "label": "Old Core",
          "icon": "icons/old-core.png"
        },
        {
          "uid": "Mkks0setaahiv85",
          "label": "Candle",
          "icon": "icons/candle.png"
        },
        {
          "uid": "Mkks11mxe0y1rxo",
          "label": "Letter From Tomo",
          "icon": "icons/letter-from-tomo.png"
        },
        {
          "uid": "Mkks1dwxeuo4x2s",
          "label": "Pearl Record",
          "icon": "icons/pearl-record.png"
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
          "icon": "icons/bosses.png"
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
          "icon": "icons/key.png"
        },
        {
          "uid": "Mkks3yer4zvdfpn",
          "label": "Locked Door",
          "icon": "icons/locked-door.png"
        },
        {
          "uid": "Mkks46bz1m9o43",
          "label": "Switch",
          "icon": "icons/switch.png"
        },
        {
          "uid": "Mkks4lifcmich7k",
          "label": "NPC",
          "icon": "icons/npc.png"
        },
        {
          "uid": "Mkks51x9f031zjt",
          "label": "Missing Shop NPC",
          "icon": "icons/missing-shop-npc.png"
        },
        {
          "uid": "Mkks5pmnv7r87cp",
          "label": "Misc",
          "icon": "icons/misc.png"
        },
        {
          "uid": "Mklonkcrqpz0ly",
          "label": "Crystallizer",
          "icon": "icons/crystallizer.png"
        },
        {
          "uid": "Mklovgt3gcykgro",
          "label": "Nacre Basin",
          "icon": "icons/nacre-basin.png"
        },
        {
          "uid": "Mklp5xwbuhc529o",
          "label": "Torn Overseer",
          "icon": "icons/torn-overseer.png"
        },
        {
          "uid": "Mklphh28hvj1f6l",
          "label": "Traveller's Log",
          "icon": "icons/traveller-s-log.png"
        }
      ]
    }
  ],
  "markers": [
    {
      "id": "Mklpt36dd25j7r",
      "x": 0.449119,
      "y": 0.122427,
      "type": "Mkks5pmnv7r87cp",
      "title": "Stargazing Point",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklptn142wri5e",
      "x": 0.445932,
      "y": 0.151748,
      "type": "Mkks1dwxeuo4x2s",
      "title": "Pearl Record",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklpu6ri4h6upcj",
      "x": 0.645448,
      "y": 0.250975,
      "type": "Mkks5pmnv7r87cp",
      "title": "Planet Analysis",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklptwf0wgt3r39",
      "x": 0.660534,
      "y": 0.253313,
      "type": "Mkks1dwxeuo4x2s",
      "title": "Pearl Record",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklpuhjcobhv37",
      "x": 0.676257,
      "y": 0.277535,
      "type": "Mkkrxjyx2fo5gm9",
      "title": "Elevator",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mklpuynqfb1tbm",
      "x": 0.689856,
      "y": 0.293683,
      "type": "Mkks5pmnv7r87cp",
      "title": "Weird Curio",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklq0qhnveqn5a",
      "x": 0.750932,
      "y": 0.306139,
      "type": "Mkks5pmnv7r87cp",
      "title": "Library Overview",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklq0137tj758af",
      "x": 0.739274,
      "y": 0.306506,
      "type": "Mkks5pmnv7r87cp",
      "title": "Flash Memory",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkw0elwczjsl4i",
      "x": 0.542301,
      "y": 0.312015,
      "type": "Mkkryd8c84zyyw9",
      "title": "Sunsail",
      "desc": "<p><em>Increases gliding speed while using the Sail ability but also increases the energy consumption.</em></p><p><br></p><ul><li>Requires 30 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkkxdlqn01ejzra",
      "x": 0.75084,
      "y": 0.314125,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Library",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mklm4hwrbfd9q9p",
      "x": 0.437334,
      "y": 0.319207,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 180.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1jw2vk6hnmq",
      "x": 0.485867,
      "y": 0.322998,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklm6idkctl8mqm",
      "x": 0.541295,
      "y": 0.331081,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 240.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklpznkaotrw19pi",
      "x": 0.74235,
      "y": 0.352122,
      "type": "Mkks5pmnv7r87cp",
      "title": "Flash Memory",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklmfxcy7hxk79",
      "x": 0.739403,
      "y": 0.352149,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 480.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklmblh2ikjrfco",
      "x": 0.610536,
      "y": 0.362368,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 320.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl052ql43v4vs",
      "x": 0.580614,
      "y": 0.365787,
      "type": "Mkks11mxe0y1rxo",
      "title": "Letter From Tomo",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkwrg20eceubn",
      "x": 0.566649,
      "y": 0.366032,
      "type": "Mkkry1hb53dx6a",
      "title": "Sail",
      "desc": "<p><em>Allows Mio to glide.</em></p>",
      "color": "#593f62"
    },
    {
      "id": "Mkkx9j89s0h69be",
      "x": 0.718612,
      "y": 0.375084,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Canopy",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkl0qh5gduokzhk",
      "x": 0.738526,
      "y": 0.375687,
      "type": "Mkks4lifcmich7k",
      "title": "Selene",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkua0jpll4pn2r",
      "x": 0.591951,
      "y": 0.377859,
      "type": "Mkkryd8c84zyyw9",
      "title": "Firefly",
      "desc": "<p><em>Generates a small electric cloud around Mio when using the Sail ability.</em></p><p><br></p><ul><li>Requires 40 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklp1ysewhb19ksz",
      "x": 0.623063,
      "y": 0.384237,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkln955pesua5t",
      "x": 0.630872,
      "y": 0.384746,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklocejs7x6pqnm",
      "x": 0.567958,
      "y": 0.385266,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "<p>Use glide to reach the platform.</p>",
      "color": "#593f62"
    },
    {
      "id": "Mklmd65ofpb0v5n",
      "x": 0.744708,
      "y": 0.388464,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 40.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkln8sj7r0w38ua",
      "x": 0.674855,
      "y": 0.389355,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkloytof20sxeilh",
      "x": 0.590829,
      "y": 0.390322,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl1neu3f8daqcn",
      "x": 0.705374,
      "y": 0.400466,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Use the flowers and grapple points to reach the area above.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1mnyjykg4aya",
      "x": 0.661971,
      "y": 0.401149,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklmcp9al5fcck",
      "x": 0.684826,
      "y": 0.402248,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 100.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklosob5k6o40a5h",
      "x": 0.739261,
      "y": 0.402365,
      "type": "Mklonkcrqpz0ly",
      "title": "Crystallizer",
      "desc": "<ul><li>Turns Nacre Droplets into Crystallized Nacre.</li></ul>",
      "color": "#926c15"
    },
    {
      "id": "Mkln9gq56juizv9",
      "x": 0.730032,
      "y": 0.402523,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklmv968i21197g",
      "x": 0.624573,
      "y": 0.403714,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkllsj46irr51pg",
      "x": 0.534441,
      "y": 0.409665,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 20.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklmvt8570nfuyq",
      "x": 0.608234,
      "y": 0.412502,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "<p>Reach by gliding from the top branch.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkllqecq20uk40v",
      "x": 0.601267,
      "y": 0.413579,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Found above the Crystallizer on a branch. Contains 480.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklpdrrryfquals",
      "x": 0.763095,
      "y": 0.413768,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklmdpnkn04lrv",
      "x": 0.770829,
      "y": 0.415266,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 40.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl0su6yxg4euze",
      "x": 0.615648,
      "y": 0.415627,
      "type": "Mkks4lifcmich7k",
      "title": "Xelato",
      "desc": "<p>Offers an item in exchange for 10,000 Nacre.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkkw48mrpz6yfqa",
      "x": 0.517286,
      "y": 0.416529,
      "type": "Mkkryd8c84zyyw9",
      "title": "Wildcat",
      "desc": "<p><em>After using the Hairpin ability, the next attack will be a heavy strike that deals a lot more damage to enemies.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklorihl1mxebms",
      "x": 0.602742,
      "y": 0.417218,
      "type": "Mklonkcrqpz0ly",
      "title": "Crystallizer",
      "desc": "<ul><li>Turns Nacre Droplets into Crystallized Nacre.</li></ul>",
      "color": "#926c15"
    },
    {
      "id": "Mkl0k7exx7txfth",
      "x": 0.16315,
      "y": 0.419241,
      "type": "Mkks1dwxeuo4x2s",
      "title": "Pearl Record",
      "desc": "<p>From the broken glass in the nearby elevator, jump to the platform and use the Striders to crawl beneath the building and up the other side.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkllt1kafi1uhif",
      "x": 0.548402,
      "y": 0.420695,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 80.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklp9zx8aggjl8q",
      "x": 0.061711,
      "y": 0.423069,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl1paos37elyg",
      "x": 0.798425,
      "y": 0.423213,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl0l3mtlmxb4gq",
      "x": 0.759795,
      "y": 0.428536,
      "type": "Mkks1dwxeuo4x2s",
      "title": "Pearl Record",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkzz1sbhuba6hp",
      "x": 0.809254,
      "y": 0.430041,
      "type": "Mkks3hlp29dyho",
      "title": "Friendly Invitation",
      "desc": "<p>Opens a locked door in the Canopy.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkkvisdgjxporle",
      "x": 0.533835,
      "y": 0.430833,
      "type": "Mkkryd8c84zyyw9",
      "title": "Makeshift Recovery",
      "desc": "<p>Crawl up the wall in the corner to reach the Modifier.</p><p><br></p><p><em>Quickly defeating an enemy that has struck Mio restores one layer of protection (non-stackable).</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklok9025o7csx",
      "x": 0.055084,
      "y": 0.431646,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mklog1ftqa41ahe",
      "x": 0.58948,
      "y": 0.434671,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "<p>Found hidden in the wall in a small cubby that can be jumped to.</p>",
      "color": "#593f62"
    },
    {
      "id": "Mklpktbw4rv7dxm",
      "x": 0.305124,
      "y": 0.435096,
      "type": "Mklphh28hvj1f6l",
      "title": "Traveller's Log",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkxcoomu97f2x",
      "x": 0.309517,
      "y": 0.435821,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Dwellings",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkkxr8i53nzikf",
      "x": 0.793678,
      "y": 0.437067,
      "type": "Mkks2qeldcqyaeu",
      "title": "Friends",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkkz7j1w2cj3ku6",
      "x": 0.761307,
      "y": 0.437236,
      "type": "Mkks3yer4zvdfpn",
      "title": "Canopy Locked Door",
      "desc": "<p>Requires Friendly Invitation</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkllwsi51z75s6",
      "x": 0.117181,
      "y": 0.437507,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 20.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkln83tkbvbiqqm",
      "x": 0.512624,
      "y": 0.437788,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "<p>Two piles here.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklp8l9oomx9ax9",
      "x": 0.601253,
      "y": 0.43865,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklmutkhbm3fqy7",
      "x": 0.556,
      "y": 0.439664,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklpd7sochos2p6",
      "x": 0.728575,
      "y": 0.442692,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklmhtcins4u9i",
      "x": 0.191056,
      "y": 0.442855,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Found on one of the railways.</p><p><br></p><p>Contains 40.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxuiiag4uewfb",
      "x": 0.724129,
      "y": 0.442927,
      "type": "Mkks2qeldcqyaeu",
      "title": "Nabuu",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkllkmv91jr13rz",
      "x": 0.742602,
      "y": 0.443257,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 80.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklpz8k4crl3id7",
      "x": 0.219424,
      "y": 0.443284,
      "type": "Mkks5pmnv7r87cp",
      "title": "Cryptic Curio",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkz5hm1v8ceka",
      "x": 0.565104,
      "y": 0.443809,
      "type": "Mkks3yer4zvdfpn",
      "title": "Bell Tower Door",
      "desc": "<p>Requires Bell Tower Visitor Pass.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mklol88dy07abkw",
      "x": 0.8553,
      "y": 0.443949,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mkkxbi751szxcjf",
      "x": 0.112805,
      "y": 0.443975,
      "type": "Mkkrxcctlrtd2qa",
      "title": "City Hall",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkkyfufnx839nacs",
      "x": 0.513088,
      "y": 0.444353,
      "type": "Mkks0setaahiv85",
      "title": "Candle",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxegfmrbj8qd6",
      "x": 0.57091,
      "y": 0.444417,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Bell Tower",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkkzv25sqcaoib",
      "x": 0.071825,
      "y": 0.444614,
      "type": "Mkks3hlp29dyho",
      "title": "Bell Tower Visitor Pass",
      "desc": "<p>Opens the Bell Tower door.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkl16p6igmvkp2s",
      "x": 0.105782,
      "y": 0.444794,
      "type": "Mkks46bz1m9o43",
      "title": "Fan Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl0f1iuaewbui",
      "x": 0.104926,
      "y": 0.4448,
      "type": "Mkks51x9f031zjt",
      "title": "Missing Shop NPC",
      "desc": "<p>Must use Striders to reach the button on the other side of the fan vent.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkkxfeyumd6b7g",
      "x": 0.826859,
      "y": 0.446883,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Promenade Tower",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkkxmchvheellnj",
      "x": 0.309745,
      "y": 0.447835,
      "type": "Mkks2qeldcqyaeu",
      "title": "Acat",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkl1rhs79tiz8y",
      "x": 0.264361,
      "y": 0.448468,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklp70z7pixsa7t",
      "x": 0.301259,
      "y": 0.44921,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkyu3wua1fwptl",
      "x": 0.985302,
      "y": 0.450396,
      "type": "Mkkryr9tzh06ueq",
      "title": "Damage Upgrade",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mkkytif6yp530ia",
      "x": 0.695749,
      "y": 0.450905,
      "type": "Mkkryr9tzh06ueq",
      "title": "Damage Upgrade",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mkl0773muhwfawi",
      "x": 0.986577,
      "y": 0.451211,
      "type": "Mkks11mxe0y1rxo",
      "title": "Letter From Tomo",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxnpggkp99j7g",
      "x": 0.950705,
      "y": 0.451392,
      "type": "Mkks2qeldcqyaeu",
      "title": "Ancile & Targa",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkllr6yi1w7666v",
      "x": 0.572128,
      "y": 0.452258,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkycwrle0wlb7f",
      "x": 0.061982,
      "y": 0.455076,
      "type": "Mkks0setaahiv85",
      "title": "Candle",
      "desc": "<p>Glide and use wall climb to reach the room.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkloxk83l1exfjg",
      "x": 0.078553,
      "y": 0.456009,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl1emwcf15wjnf",
      "x": 0.620171,
      "y": 0.457066,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklpxwkgt7c7omo",
      "x": 0.166014,
      "y": 0.458064,
      "type": "Mkks5pmnv7r87cp",
      "title": "Cryptic Curio",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklozhhmfl2pqnp",
      "x": 0.783361,
      "y": 0.458996,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkln6v7e27bzq5n3",
      "x": 0.696369,
      "y": 0.459004,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl0o7cdey9v1qu",
      "x": 0.765897,
      "y": 0.460411,
      "type": "Mkks4lifcmich7k",
      "title": "Alice",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkudkhfadohml",
      "x": 0.1152,
      "y": 0.461487,
      "type": "Mkkryd8c84zyyw9",
      "title": "Foolish Ideal",
      "desc": "<p><em>Damage inflicted on enemies increases when Energy is not fully charged.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkln1wn9njqaa4h",
      "x": 0.142542,
      "y": 0.462071,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkvq0w66yjq57e",
      "x": 0.074626,
      "y": 0.462368,
      "type": "Mkkryd8c84zyyw9",
      "title": "Sharpened Hairpin",
      "desc": "<p><em>Grants the ability to slice enemies when using the Hairpin ability on them.</em></p><p><br></p><ul><li>Requires 40 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklmrib500nfqi9",
      "x": 0.535517,
      "y": 0.462383,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklln65ykvdz11",
      "x": 0.093692,
      "y": 0.462402,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Atop the platform. Contains 240.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklmwfsvu93h4o8",
      "x": 0.626081,
      "y": 0.463408,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkyuybxfz4exwp",
      "x": 0.463619,
      "y": 0.463704,
      "type": "Mkkryr9tzh06ueq",
      "title": "Damage Upgrade",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mklpyoyudvvsj1",
      "x": 0.450382,
      "y": 0.464057,
      "type": "Mkks5pmnv7r87cp",
      "title": "Cryptic Curio",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklpyeiff79z4pt",
      "x": 0.430851,
      "y": 0.464362,
      "type": "Mkks5pmnv7r87cp",
      "title": "Cryptic Curio",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl1r2486sd2vzd",
      "x": 0.709057,
      "y": 0.464482,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkloqc5tp33obmn",
      "x": 0.060467,
      "y": 0.464766,
      "type": "Mklonkcrqpz0ly",
      "title": "Crystallizer",
      "desc": "<ul><li>Turns Nacre Droplets into Crystallized Nacre.</li></ul>",
      "color": "#926c15"
    },
    {
      "id": "Mkllw79delo5fc",
      "x": 0.163878,
      "y": 0.464796,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 80.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkyt3v9sba3w8f",
      "x": 0.339968,
      "y": 0.465389,
      "type": "Mkkryr9tzh06ueq",
      "title": "Damage Upgrade",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mkl0g78lgowpcka",
      "x": 0.610966,
      "y": 0.465834,
      "type": "Mkks51x9f031zjt",
      "title": "Missing Shop NPC",
      "desc": "<p>Defeat all the enemies in the area to free the NPC.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkl0ozlpgadx0g",
      "x": 0.962417,
      "y": 0.466052,
      "type": "Mkks4lifcmich7k",
      "title": "Liho, The Blood",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl1pvbjrdqao2f",
      "x": 0.861653,
      "y": 0.466477,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkz8tb6y74wtzc",
      "x": 0.100704,
      "y": 0.466651,
      "type": "Mkks3yer4zvdfpn",
      "title": "Hall Of History Door",
      "desc": "<p>Requires Old Fashioned Key.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mklp81fzxw7rnsj",
      "x": 0.029761,
      "y": 0.46704,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkloz2scxgm6slg",
      "x": 0.646057,
      "y": 0.467062,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkz8m6u6tj35ua",
      "x": 0.070919,
      "y": 0.467078,
      "type": "Mkks3yer4zvdfpn",
      "title": "Hall Of History Door",
      "desc": "<p>Requires Old Fashioned Key.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mklmgx1aegbov9mp",
      "x": 0.424261,
      "y": 0.467178,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Found via a hole in the nearby elevator shaft.</p><p><br></p><p>Contains 80.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1f8umqm970g",
      "x": 0.656934,
      "y": 0.468683,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklp7opphsr3uko",
      "x": 0.14058,
      "y": 0.468867,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklox8zm1xnej7",
      "x": 0.360222,
      "y": 0.468987,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkllrvo5ggjruru",
      "x": 0.800494,
      "y": 0.470651,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 40.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklmsaz1xvjnguk",
      "x": 0.548332,
      "y": 0.472117,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklmpnef2ab83m",
      "x": 0.140509,
      "y": 0.472968,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1b96qejl3s08",
      "x": 0.081951,
      "y": 0.473461,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Speak to the NPC nearby.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklmyg9pei2wazo",
      "x": 0.766935,
      "y": 0.473636,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "<p>On the ledge above.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkllo3ybkz89ys",
      "x": 0.096237,
      "y": 0.473943,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxaexttxlbvjo",
      "x": 0.155848,
      "y": 0.475171,
      "type": "Mkkrxcctlrtd2qa",
      "title": "City Gates",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mklmug5eks7cze4",
      "x": 0.578019,
      "y": 0.475607,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklor1gjznbpudw",
      "x": 0.549525,
      "y": 0.475647,
      "type": "Mklonkcrqpz0ly",
      "title": "Crystallizer",
      "desc": "<ul><li>Turns Nacre Droplets into Crystallized Nacre.</li></ul>",
      "color": "#926c15"
    },
    {
      "id": "Mklom7g1vv5c0xg",
      "x": 0.687688,
      "y": 0.475728,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mkkyaw50rc4tb8i",
      "x": 0.602555,
      "y": 0.475965,
      "type": "Mkks0setaahiv85",
      "title": "Candle",
      "desc": "<p>Inside the container.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxvba16nqbxlm",
      "x": 0.048055,
      "y": 0.47632,
      "type": "Mkks2qeldcqyaeu",
      "title": "Calderon",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkl002ylrey89g",
      "x": 0.057169,
      "y": 0.476854,
      "type": "Mkks3hlp29dyho",
      "title": "Old Fashioned Key",
      "desc": "<p>Found after defeating Calderon.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkllm2c6uiqv0n",
      "x": 0.482097,
      "y": 0.481804,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Use the Hairpin to reach the spot.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkllpbijl8d5ivr",
      "x": 0.643556,
      "y": 0.482162,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 80.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklmwwcuibhzw2r",
      "x": 0.665774,
      "y": 0.485599,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkln9vhpy5n9yd2",
      "x": 0.205055,
      "y": 0.485789,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklq9qih8abljys",
      "x": 0.445897,
      "y": 0.486156,
      "type": "Mkks2qeldcqyaeu",
      "title": "Final Boss",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkloyirb7b091s",
      "x": 0.616306,
      "y": 0.486628,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkz4femn8lqmf3",
      "x": 0.473625,
      "y": 0.48683,
      "type": "Mkks3yer4zvdfpn",
      "title": "Aviaries Door",
      "desc": "<p>Requires Aviaries Passepartout</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkmdxcm40aer783",
      "x": 0.404936,
      "y": 0.487447,
      "type": "Mkks4lifcmich7k",
      "title": "Rad",
      "desc": "<p>Stuck in the doorway.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkl04n7phujxxq9",
      "x": 0.4818,
      "y": 0.487459,
      "type": "Mkks11mxe0y1rxo",
      "title": "Letter From Tomo",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkwxm3xnc3qrpq",
      "x": 0.480087,
      "y": 0.487478,
      "type": "Mkkry1hb53dx6a",
      "title": "Dodge",
      "desc": "<p><em>Allows Mio to dodge projectiles and attacks.</em></p>",
      "color": "#593f62"
    },
    {
      "id": "Mkmdx12bx5rhxeh",
      "x": 0.404081,
      "y": 0.487569,
      "type": "Mkkryd8c84zyyw9",
      "title": "Analyzer",
      "desc": "<p>Given to Mio by Rad after rescuing them.</p><p><br></p><p><em>Displays enemies' remaining health.</em></p><p><br></p><ul><li>Requires 5 Modifier slots.<span class=\"ql-cursor\">﻿</span></li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkllot10i85fdcn",
      "x": 0.555194,
      "y": 0.48822,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 20.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkln1b4xpugp33a",
      "x": 0.234854,
      "y": 0.491506,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxezlj20zli8h",
      "x": 0.726177,
      "y": 0.494705,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Promenade",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkkz6ij6ki3lu2h",
      "x": 0.699308,
      "y": 0.494723,
      "type": "Mkks3yer4zvdfpn",
      "title": "Door To Vaults Lift",
      "desc": "<p>Requires Dr Hayln's Assistant Credentials.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mklmxv6qw13bi22",
      "x": 0.692134,
      "y": 0.494817,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkvmh0ghe0gd2j",
      "x": 0.051744,
      "y": 0.494937,
      "type": "Mkkryd8c84zyyw9",
      "title": "Nacre Overload",
      "desc": "<p><em>Damage increases for each Nacre Droplet carried. Each attack dealt on an enemy will use Droplets, but all Droplets will be returned when the enemy is defeated.</em></p><p><br></p><ul><li>Requires 30 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkktiyiyjpjw504",
      "x": 0.519233,
      "y": 0.495766,
      "type": "Mkkryd8c84zyyw9",
      "title": "The Hand's Greed",
      "desc": "<p><em>Damage inflicted on enemies increases for each layer of protection that Mio has lost.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkme2bjwi6chgkg",
      "x": 0.361682,
      "y": 0.496135,
      "type": "Mkkryd8c84zyyw9",
      "title": "Protective Overlay",
      "desc": "<p>Defeat all the enemies to open the closed container.</p><p><br></p><p><em>Grants an additional layer of protection.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklmp0hoqa0m7g",
      "x": 0.638834,
      "y": 0.497152,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1e1swqm3jqfm",
      "x": 0.579368,
      "y": 0.49805,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklmeg2y52erk97",
      "x": 0.200301,
      "y": 0.498234,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 280.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkt3wo5mvx8cnh",
      "x": 0.665391,
      "y": 0.498861,
      "type": "Mkkryd8c84zyyw9",
      "title": "Bird of Prey",
      "desc": "<p><em>Temporarily increases damage to enemies while using the Sail ability.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkme442e2zcuwhi",
      "x": 0.367497,
      "y": 0.499859,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Hidden up the wall in a small cubby.</p><p><br></p><p>Contains 280.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxpy75tkd25l",
      "x": 0.497803,
      "y": 0.500626,
      "type": "Mkks2qeldcqyaeu",
      "title": "Crow",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkl03u6ospqwm4r",
      "x": 0.506925,
      "y": 0.50066,
      "type": "Mkks11mxe0y1rxo",
      "title": "Letter From Tomo",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkllvh4hhgjfk11",
      "x": 0.246323,
      "y": 0.501284,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1d82o76tb1si",
      "x": 0.355169,
      "y": 0.502073,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Use the nearby enemy to harvest energy and regain jumps to real the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxry49rx6k8ng",
      "x": 0.7245,
      "y": 0.502112,
      "type": "Mkks2qeldcqyaeu",
      "title": "Lombre",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkkx1vdmg343w5",
      "x": 0.277417,
      "y": 0.502205,
      "type": "Mkkry1hb53dx6a",
      "title": "Striders",
      "desc": "<p><em>Allows Mio to cling to walls and other surfaces.</em></p>",
      "color": "#593f62"
    },
    {
      "id": "Mkl1c9po1dvyoui",
      "x": 0.035172,
      "y": 0.502495,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl05k0z9y23nhd",
      "x": 0.280618,
      "y": 0.502596,
      "type": "Mkks11mxe0y1rxo",
      "title": "Letter From Tomo",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkvg5lw80kwr4r",
      "x": 0.282513,
      "y": 0.502625,
      "type": "Mkkryd8c84zyyw9",
      "title": "Kinetic Thrust",
      "desc": "<p><em>The last attack of a the combo deals additional damage.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklp9he03tk0kcr",
      "x": 0.713819,
      "y": 0.502643,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkt1g2gz889w4r",
      "x": 0.508876,
      "y": 0.504914,
      "type": "Mkkryd8c84zyyw9",
      "title": "Asma's Will",
      "desc": "<p>Located hidden inside a small room in the wall just above the dangerous purple plants.</p><p><br></p><p><em>Makes it so enemies (excluding bosses) refuse to attack Mio unless she attacks them first.</em></p><p><br></p><ul><li>Requires 30 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkme6j5vaifzjzf",
      "x": 0.401328,
      "y": 0.505153,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklpn26q32b6ba",
      "x": 0.820243,
      "y": 0.505275,
      "type": "Mkkrxjyx2fo5gm9",
      "title": "Elevator",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkloaoejpjmzqnd",
      "x": 0.57904,
      "y": 0.505279,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "<p>Found behind the wall next to the bouncy mushroom.</p>",
      "color": "#593f62"
    },
    {
      "id": "Mklpkan1fyvxmto",
      "x": 0.190172,
      "y": 0.506083,
      "type": "Mklphh28hvj1f6l",
      "title": "Traveller's Log",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkme4t46zk1gqd",
      "x": 0.362625,
      "y": 0.506349,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl0im82ohj91ru",
      "x": 0.713278,
      "y": 0.506918,
      "type": "Mkks1dwxeuo4x2s",
      "title": "Pearl Record",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklmoh456sjuym",
      "x": 0.591149,
      "y": 0.507843,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklpofnryjtd2n6",
      "x": 0.709804,
      "y": 0.508468,
      "type": "Mkkrxjyx2fo5gm9",
      "title": "Elevator",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkmeamgti88r8y",
      "x": 0.445576,
      "y": 0.508854,
      "type": "Mkks4lifcmich7k",
      "title": "Shii",
      "desc": "<p>Feed Nacre to unlock the map system.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkmej2xnmd9u72f",
      "x": 0.413794,
      "y": 0.50891,
      "type": "Mkks3hlp29dyho",
      "title": "Silo Access Badge",
      "desc": "<p>Opens the Silo Access Door.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkkx3unkno0di7f",
      "x": 0.493299,
      "y": 0.509047,
      "type": "Mkkry1hb53dx6a",
      "title": "Harvester",
      "desc": "<p>Found in a hidden area past the Crow boss fight.</p><p><br></p><p><em>Allows Mio to refill energy after striking an enemy or object.</em></p>",
      "color": "#593f62"
    },
    {
      "id": "Mkl1g69v31pw9kk",
      "x": 0.241617,
      "y": 0.510113,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>User Striders to bypass the airflow and reach the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklpjxd21oz8yr",
      "x": 0.228266,
      "y": 0.510632,
      "type": "Mklphh28hvj1f6l",
      "title": "Traveller's Log",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklpmp5esy31tyl",
      "x": 0.410942,
      "y": 0.514364,
      "type": "Mkkrxjyx2fo5gm9",
      "title": "Elevator",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkme75g2ku2myx",
      "x": 0.400457,
      "y": 0.515248,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkku3quns8mm3s",
      "x": 0.164784,
      "y": 0.515289,
      "type": "Mkkryd8c84zyyw9",
      "title": "Enhanced Dodge",
      "desc": "<p><em>Dodging attacks has increased timing.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkl1i5k2qwu31pp",
      "x": 0.023608,
      "y": 0.515575,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Go through the vent in the top left corner of the previous room.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkygh3xrq2xztx",
      "x": 0.150019,
      "y": 0.515608,
      "type": "Mkks0setaahiv85",
      "title": "Candle",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxt9qbj6qs1ss",
      "x": 0.184665,
      "y": 0.51621,
      "type": "Mkks2qeldcqyaeu",
      "title": "Poltergates",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mklowri5ztx6e9w",
      "x": 0.573076,
      "y": 0.516264,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklm1w0apkwf45l",
      "x": 0.000348,
      "y": 0.516933,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklpx4aikxyj7qf",
      "x": 0.584692,
      "y": 0.521366,
      "type": "Mkks5pmnv7r87cp",
      "title": "Cryptic Curio",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkln0yufhkp6ht",
      "x": 0.267386,
      "y": 0.523218,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklmngrotulti2h",
      "x": 0.611988,
      "y": 0.524836,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkmdj1xutvrj4x",
      "x": 0.393901,
      "y": 0.526626,
      "type": "Mkks2qeldcqyaeu",
      "title": "Egis",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkmejrrvougq6xc",
      "x": 0.473686,
      "y": 0.526823,
      "type": "Mkks3yer4zvdfpn",
      "title": "Silo Access Door",
      "desc": "<p>Requires Silo Access Badge to open.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkloptdxd51g8tw",
      "x": 0.536919,
      "y": 0.526847,
      "type": "Mklonkcrqpz0ly",
      "title": "Crystallizer",
      "desc": "<ul><li>Turns Nacre Droplets into Crystallized Nacre.</li></ul>",
      "color": "#926c15"
    },
    {
      "id": "Mkktxz4y4kcuoh",
      "x": 0.598012,
      "y": 0.527809,
      "type": "Mkkryd8c84zyyw9",
      "title": "Defense Mechanism",
      "desc": "<p>Attack the flowers while jumping to regain a jump charge to cross the distance.</p><p><br></p><p><em>Creates an explosion around Mio when she takes a hit.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklpm5iuyfu57f",
      "x": 0.068651,
      "y": 0.529524,
      "type": "Mkkrxjyx2fo5gm9",
      "title": "Elevator",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mkllumuac0mqlq7",
      "x": 0.09541,
      "y": 0.530455,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 200.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkmdum7ybvj3e5n",
      "x": 0.442825,
      "y": 0.530466,
      "type": "Mklonkcrqpz0ly",
      "title": "Crystallizer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl10binsd6h7xi",
      "x": 0.907872,
      "y": 0.530646,
      "type": "Mkks46bz1m9o43",
      "title": "Fan Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkxhyspbeu00at",
      "x": 0.944439,
      "y": 0.531011,
      "type": "Mkkry1hb53dx6a",
      "title": "Redacted #1",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mklp0l5g236i4gr",
      "x": 0.241044,
      "y": 0.531858,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkmeh92936y0aqh",
      "x": 0.530909,
      "y": 0.534413,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Compound",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mklmqofkbidsslo",
      "x": 0.368943,
      "y": 0.535842,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkmdr54w3q02qon",
      "x": 0.483118,
      "y": 0.536801,
      "type": "Mkks5pmnv7r87cp",
      "title": "Flash Memory",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkydxuaua8t4sd",
      "x": 0.91771,
      "y": 0.53941,
      "type": "Mkks0setaahiv85",
      "title": "Candle",
      "desc": "<p>Use wall climb and glide to reach.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkmegpgc19lxpxb",
      "x": 0.54936,
      "y": 0.539461,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklllded2xswqmn",
      "x": 0.617461,
      "y": 0.540764,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 80.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl0rvhzr9s1hcm",
      "x": 0.067547,
      "y": 0.540844,
      "type": "Mkks4lifcmich7k",
      "title": "Sin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkmdsh0kse3zn9i",
      "x": 0.492395,
      "y": 0.541256,
      "type": "Mkks4lifcmich7k",
      "title": "Samsk",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkxg7vfurm8dsk",
      "x": 0.876644,
      "y": 0.542351,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Redacted #2",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mklmq3mr2gppt5b",
      "x": 0.273482,
      "y": 0.542567,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1jawc71kg3qv",
      "x": 0.017767,
      "y": 0.542932,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkmeg3flt9a2ndp",
      "x": 0.5558,
      "y": 0.544073,
      "type": "Mklphh28hvj1f6l",
      "title": "Traveller's Log",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkvycanu63yeji",
      "x": 0.748164,
      "y": 0.544311,
      "type": "Mkkryd8c84zyyw9",
      "title": "Split Process",
      "desc": "<p><em>Increases the number of Modifier slots, but energy recharges more slowly.</em></p><p><br></p><ul><li>Adds 15 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkllv2o8s50ld8j",
      "x": 0.239084,
      "y": 0.544614,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkzxttp83d8k2",
      "x": 0.808582,
      "y": 0.544767,
      "type": "Mkks3yer4zvdfpn",
      "title": "Locked Access Door",
      "desc": "<p>Requires Dr Hayln's Assistant Credentials.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkmehtsci2ej14u",
      "x": 0.568246,
      "y": 0.545292,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 20.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklpnrdo09a7yfq",
      "x": 0.820432,
      "y": 0.546028,
      "type": "Mkkrxjyx2fo5gm9",
      "title": "Elevator",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mklq4o0y1r793a",
      "x": 0.866614,
      "y": 0.54611,
      "type": "Mkks5pmnv7r87cp",
      "title": "Fragmented Serial Number",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl1qervljhlgb",
      "x": 0.200626,
      "y": 0.546131,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkzx18uua1fvst",
      "x": 0.757857,
      "y": 0.546537,
      "type": "Mkks3hlp29dyho",
      "title": "Dr Hayln's Employment Ledger",
      "desc": "<p>Grants Dr Hayln's Assistant Credentials.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkln0iu1yz3arls",
      "x": 0.208701,
      "y": 0.546637,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkmdjqh0ms6nndr",
      "x": 0.377192,
      "y": 0.547668,
      "type": "Mkkry1hb53dx6a",
      "title": "Hairpin",
      "desc": "<p>Allows Mio to grapple Energy Shards.</p>",
      "color": "#593f62"
    },
    {
      "id": "Mkkvcss2bhkm6wp",
      "x": 0.258402,
      "y": 0.548177,
      "type": "Mkkryd8c84zyyw9",
      "title": "Imperfect Focus",
      "desc": "<p>Found on the ledge above the frost blasters. Players need to time dodges and jumps to reach it.</p><p><br></p><p><em>Increases the number of modifier slots available on Mio but the timing for dodging attacks is reduced.</em></p><p><br></p><ul><li>Adds 5 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklq3vhnb6v5x7j",
      "x": 0.136457,
      "y": 0.548735,
      "type": "Mkks5pmnv7r87cp",
      "title": "Modifier Extension",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklmz3flrdj288",
      "x": 0.161931,
      "y": 0.549918,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklo9sr1wnuciiu",
      "x": 0.581736,
      "y": 0.550596,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mklpjkgd6y6m0nq",
      "x": 0.102735,
      "y": 0.55061,
      "type": "Mklphh28hvj1f6l",
      "title": "Traveller's Log",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklmo0vbrmslaqn",
      "x": 0.58385,
      "y": 0.550861,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkmds18k4k6c1gd",
      "x": 0.474207,
      "y": 0.551266,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklm2tyuvc868b",
      "x": 0.086189,
      "y": 0.552683,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 200.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklq8auu05hyewp",
      "x": 0.981366,
      "y": 0.552965,
      "type": "Mkks5pmnv7r87cp",
      "title": "Fragmented Serial Number",
      "desc": "<p>Go in the hole beneath the moving red pipes and all the way left.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkloy1b5e2f25ju",
      "x": 0.337136,
      "y": 0.553193,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkztv2fi3jvfls",
      "x": 0.60578,
      "y": 0.553323,
      "type": "Mkks3hlp29dyho",
      "title": "Aviaries Passepartout",
      "desc": "<p>Located on a platform after defeating the Flora boss.</p><p><br></p><p>Opens the Aviaries Door.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkl0pxghmlx9vjo",
      "x": 0.595067,
      "y": 0.553571,
      "type": "Mkks4lifcmich7k",
      "title": "Personal Assistant",
      "desc": "<p>Shows up after the Flora boss fight.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mklpey1piot2kav",
      "x": 0.017087,
      "y": 0.553582,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklp0ai2aguat5i",
      "x": 0.196362,
      "y": 0.553616,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkxmygo3syhdpg",
      "x": 0.600454,
      "y": 0.553626,
      "type": "Mkks2qeldcqyaeu",
      "title": "Sentient Pearltrap",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkkxp9fk09v7xq",
      "x": 0.174237,
      "y": 0.554162,
      "type": "Mkks2qeldcqyaeu",
      "title": "Atmos",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkln00t7ilhhdy",
      "x": 0.201047,
      "y": 0.554201,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklmr17ur82ncuq",
      "x": 0.258007,
      "y": 0.554321,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklmiglgplrcl7",
      "x": 0.876819,
      "y": 0.555002,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 140.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl066odng295g",
      "x": 0.369596,
      "y": 0.555414,
      "type": "Mkks11mxe0y1rxo",
      "title": "Letter From Tomo",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklobmjb4swzh78",
      "x": 0.316917,
      "y": 0.556147,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "<p>Inside the container, will only open after boss fight.</p>",
      "color": "#593f62"
    },
    {
      "id": "Mkllu3n9pvrno2v",
      "x": 0.074929,
      "y": 0.557554,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 80.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl17eyjlz408bb",
      "x": 0.233914,
      "y": 0.5587,
      "type": "Mkks46bz1m9o43",
      "title": "Fan Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkktg7mcin9otr",
      "x": 0.054185,
      "y": 0.561521,
      "type": "Mkkryd8c84zyyw9",
      "title": "Afterimage",
      "desc": "<p><em>Using the Hairpin generates a Decoy that enemies will target instead of Mio. The Decoy will explode after a short period of time.</em></p><p><br></p><ul><li>Requires 30 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklmzipbgri7ijo",
      "x": 0.133227,
      "y": 0.567277,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklp01hr4dn6htf",
      "x": 0.159572,
      "y": 0.569254,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklmfcgvtmzpdcd",
      "x": 0.077828,
      "y": 0.570857,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 160.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkybwmt9pdaw1l",
      "x": 0.120782,
      "y": 0.5709,
      "type": "Mkks0setaahiv85",
      "title": "Candle",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklq7r2w51b0o6b",
      "x": 0.996991,
      "y": 0.572313,
      "type": "Mkks5pmnv7r87cp",
      "title": "Fragmented Serial Number",
      "desc": "<p>Inside the vent to the left of the moving red pipes.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mklp30t2ap7zv3i",
      "x": 0.952493,
      "y": 0.687539,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl15gpwlo92lpc",
      "x": 0.895541,
      "y": 0.688184,
      "type": "Mkks46bz1m9o43",
      "title": "Pump Level Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklndlr40vmksr",
      "x": 0.890734,
      "y": 0.688379,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl150ukrwtpn12",
      "x": 0.886325,
      "y": 0.688428,
      "type": "Mkks46bz1m9o43",
      "title": "Pump Level Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl16abug6w68nm",
      "x": 0.927707,
      "y": 0.688978,
      "type": "Mkks46bz1m9o43",
      "title": "Pump Level Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklp2m6ijfdz3fb",
      "x": 0.871999,
      "y": 0.689044,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklpw0fstynjj6p",
      "x": 0.00158,
      "y": 0.70337,
      "type": "Mkks5pmnv7r87cp",
      "title": "Crucible Report",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklnd8lbr747gnp",
      "x": 0.856671,
      "y": 0.705986,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkvw6l94fe4sco",
      "x": 0.635945,
      "y": 0.707256,
      "type": "Mkkryd8c84zyyw9",
      "title": "Splintering Dodge",
      "desc": "<p><em>Dodging an attack generates an Energy shard.</em></p><p><br></p><ul><li>Requires 30 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mklnccrd0irp15s",
      "x": 0.985524,
      "y": 0.709048,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl14jkft8u9zzp",
      "x": 0.968928,
      "y": 0.709852,
      "type": "Mkks46bz1m9o43",
      "title": "Pump Level Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklncvoknjf0e4o",
      "x": 0.949234,
      "y": 0.7101,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklpwan6xu1khac",
      "x": 0.102992,
      "y": 0.710105,
      "type": "Mkks5pmnv7r87cp",
      "title": "Crucible Report",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkllybfp6wvhkje",
      "x": 0.665524,
      "y": 0.714966,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 80.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkln30hx89izlxr",
      "x": 0.629812,
      "y": 0.715213,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklp2dxh216bhu",
      "x": 0.900786,
      "y": 0.715395,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklnb7mocdxu8e",
      "x": 0.021612,
      "y": 0.7172,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklnbq782cyxt1b",
      "x": 0.142892,
      "y": 0.718938,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "<p>Two piles here.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkuixzf4yq9vh4",
      "x": 0.658886,
      "y": 0.720651,
      "type": "Mkkryd8c84zyyw9",
      "title": "High Risk Voucher",
      "desc": "<p><em>Allows purchase of an extra layer of protection (non-stackable) at Nacre Basins.</em></p><p><br></p><ul><li>Requires 20 Modifier slots.</li></ul>",
      "color": "#593f62"
    },
    {
      "id": "Mkl06rlt8eyilp",
      "x": 0.717573,
      "y": 0.720938,
      "type": "Mkks11mxe0y1rxo",
      "title": "Letter From Tomo",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkwwgs4lnv9nnu",
      "x": 0.71569,
      "y": 0.72099,
      "type": "Mkkry1hb53dx6a",
      "title": "Slingshot",
      "desc": "<p><em>Creates a powerful energy blast capable of clearing rubble when hitting Energy Shards.</em></p>",
      "color": "#593f62"
    },
    {
      "id": "Mklogz7a5dmz4g8",
      "x": 0.764932,
      "y": 0.72108,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "<p>Climb the drawers with the Striders. It's found in the back of the drawer up top.</p>",
      "color": "#593f62"
    },
    {
      "id": "Mklnaolnf1n89vd",
      "x": 0.112106,
      "y": 0.723655,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklp3nd1sj21t",
      "x": 0.16997,
      "y": 0.724396,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklp3yfr5cekprx",
      "x": 0.127823,
      "y": 0.725747,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklne7a83df8a4",
      "x": 0.131959,
      "y": 0.7261,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "<p>Three found here.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklolpbgos2fhzo",
      "x": 0.132869,
      "y": 0.726394,
      "type": "Mklo7etaznf2qu",
      "title": "Coating Component",
      "desc": "",
      "color": "#593f62"
    },
    {
      "id": "Mklot5f3fsrw2ip",
      "x": 0.058993,
      "y": 0.727609,
      "type": "Mklonkcrqpz0ly",
      "title": "Crystallizer",
      "desc": "<ul><li>Turns Nacre Droplets into Crystallized Nacre.</li></ul>",
      "color": "#926c15"
    },
    {
      "id": "Mkln3r8ty1hab01k",
      "x": 0.794609,
      "y": 0.728305,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "<p>Three in this area.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkzb95idrx1zki",
      "x": 0.699829,
      "y": 0.728832,
      "type": "Mkks3yer4zvdfpn",
      "title": "Vault Door",
      "desc": "<p>Requires Vaults' Worker Authentication.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkllywqh5am8zim",
      "x": 0.670092,
      "y": 0.729077,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 40.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxjnss02ozc5e",
      "x": 0.709917,
      "y": 0.729602,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Vaults",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mklpfhrfntl4q7p",
      "x": 0.053823,
      "y": 0.732409,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklpbcz4kl811a",
      "x": 0.399156,
      "y": 0.734503,
      "type": "Mkks46bz1m9o43",
      "title": "The Wheel",
      "desc": "<p>Used to spin the underside of the map.</p><p><br></p><ul><li>Requires the Severed Finger to operate.</li></ul>",
      "color": "#926c15"
    },
    {
      "id": "Mkl1kuih63me30n",
      "x": 0.679061,
      "y": 0.73547,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkxtpo2xnrw6qf",
      "x": 0.792905,
      "y": 0.741737,
      "type": "Mkks2qeldcqyaeu",
      "title": "Sawlong",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mklpcnodr45ybzo",
      "x": 0.693984,
      "y": 0.741852,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl12v16jaj6xra",
      "x": 0.676119,
      "y": 0.742385,
      "type": "Mkks46bz1m9o43",
      "title": "Pump Level Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklpal7dtiz5v7j",
      "x": 0.391484,
      "y": 0.748133,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkkxd4mm2iqu40d",
      "x": 0.40052,
      "y": 0.749075,
      "type": "Mkkrxcctlrtd2qa",
      "title": "Lab",
      "desc": "",
      "color": "#ff9b42"
    },
    {
      "id": "Mklq1wst3gmlk6",
      "x": 0.998743,
      "y": 0.753385,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklq1key353m9i",
      "x": 0.985546,
      "y": 0.753455,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkln6e313z5x66",
      "x": 0.793985,
      "y": 0.759319,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1gxa5kx0lpd",
      "x": 0.701948,
      "y": 0.759538,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklq2z3zdh36wc",
      "x": 0.014295,
      "y": 0.760312,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklm3jyfnfdt2k",
      "x": 0.796,
      "y": 0.761276,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Hidden beneath the saws.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkl1lpj4zooxaf",
      "x": 0.617308,
      "y": 0.762016,
      "type": "Mkks00cdtqeamel",
      "title": "Old Core",
      "desc": "<p>Inside the mechanical remains.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklpc5dklexqmpi",
      "x": 0.346076,
      "y": 0.762533,
      "type": "Mklp5xwbuhc529o",
      "title": "Torn Overseer",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklp1kl30746id3",
      "x": 0.745718,
      "y": 0.7696,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklm5y2dguc4y9s",
      "x": 0.764172,
      "y": 0.769771,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 240.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mklos684gkjb5gv",
      "x": 0.662919,
      "y": 0.770862,
      "type": "Mklonkcrqpz0ly",
      "title": "Crystallizer",
      "desc": "<ul><li>Turns Nacre Droplets into Crystallized Nacre.</li></ul>",
      "color": "#926c15"
    },
    {
      "id": "Mkl13c5t9tqxtq",
      "x": 0.674654,
      "y": 0.773382,
      "type": "Mkks46bz1m9o43",
      "title": "Pump Level Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkl1170tzvvm29",
      "x": 0.64944,
      "y": 0.773887,
      "type": "Mkks46bz1m9o43",
      "title": "Pump Level Switch",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mkku798v2y9zug",
      "x": 0.622968,
      "y": 0.774392,
      "type": "Mkkryd8c84zyyw9",
      "title": "Extra-Coating Processor",
      "desc": "<p><em>Creates an extra layer of protection (non-stackable) for every three enemies defeated.</em></p><p><br></p><p>Requires 30 Modifier slots.</p>",
      "color": "#593f62"
    },
    {
      "id": "Mklqb5oiqhhs4a5",
      "x": 0.398688,
      "y": 0.776251,
      "type": "Mkks2qeldcqyaeu",
      "title": "Anra",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkkxqozgsktf56n",
      "x": 0.725189,
      "y": 0.777385,
      "type": "Mkks2qeldcqyaeu",
      "title": "Debby",
      "desc": "",
      "color": "#a11d33"
    },
    {
      "id": "Mkln7ba4ylz05x",
      "x": 0.737378,
      "y": 0.777815,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkz9owg8gosqel",
      "x": 0.805256,
      "y": 0.782862,
      "type": "Mkks3yer4zvdfpn",
      "title": "Serial Code Door",
      "desc": "<p>Requires 6 Serial Codes to open.</p>",
      "color": "#926c15"
    },
    {
      "id": "Mkl0j96c5kz9if9",
      "x": 0.314949,
      "y": 0.783267,
      "type": "Mkks1dwxeuo4x2s",
      "title": "Pearl Record",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklm3y4v7r2gu3h",
      "x": 0.578787,
      "y": 0.78378,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkllxkcta4v3lb",
      "x": 0.314459,
      "y": 0.783902,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklm55r8b148zao",
      "x": 0.649692,
      "y": 0.784863,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "<p>Contains 180.</p>",
      "color": "#344f6e"
    },
    {
      "id": "Mkkv5vmymow168",
      "x": 0.678377,
      "y": 0.786708,
      "type": "Mkkryd8c84zyyw9",
      "title": "High Voltage Discharge",
      "desc": "<p>After a short delay, the next attack will automatically stun the target.</p><p><br></p><p>Requires 20 Modifier slots.</p><p><br></p><p><br></p>",
      "color": "#593f62"
    },
    {
      "id": "Mkln55opjelxp8",
      "x": 0.229082,
      "y": 0.788833,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkyf66y3pxr0rp",
      "x": 0.259364,
      "y": 0.790269,
      "type": "Mkks0setaahiv85",
      "title": "Candle",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkkyenkb7nq04ci",
      "x": 0.690142,
      "y": 0.793675,
      "type": "Mkks0setaahiv85",
      "title": "Candle",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkln4rlmxqnnd0s",
      "x": 0.23383,
      "y": 0.794154,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mklp13jtkfyl0w",
      "x": 0.231016,
      "y": 0.798418,
      "type": "Mklovgt3gcykgro",
      "title": "Nacre Basin",
      "desc": "",
      "color": "#926c15"
    },
    {
      "id": "Mklm0u9sfbhaqqg",
      "x": 0.259942,
      "y": 0.802501,
      "type": "Mkkrzn92hipumfv",
      "title": "Crystallized Nacre",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkln4ccgyn91ban",
      "x": 0.232684,
      "y": 0.802504,
      "type": "Mkkrzfr5b2v5bpj",
      "title": "Junk Pile",
      "desc": "",
      "color": "#344f6e"
    },
    {
      "id": "Mkl00xerx9c0qrl",
      "x": 0.704869,
      "y": 0.803336,
      "type": "Mkks3hlp29dyho",
      "title": "Severed Fingertip",
      "desc": "<p>Used to control the Wheel located above the Lab Attune Station.</p>",
      "color": "#926c15"
    }
  ]
};
