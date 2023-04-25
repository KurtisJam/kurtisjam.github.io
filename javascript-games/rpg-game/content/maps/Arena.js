import { utils } from "../../utils.js";

const arenaCutscene = [
  {
    exclude: "SEEN_ARENA_CUTSCENE",
    events: [
      { type: "addStoryFlag", flag: "SEEN_ARENA_CUTSCENE" },
      { type: "textMessage", text: "Secret Leader: Welcome everyone to the Hay tournment" },
      { type: "walk", who: "hero", direction: "up" },
      { type: "walk", who: "hero", direction: "up" },
      { type: "textMessage", text: "Secret Leader: Today we have a special guest, farmer Tom." },
      {
        type: "textMessage",
        text: "Secret Leader: Farmer Tom has been working on developing the ultimate farm animals.",
      },
      { type: "textMessage", text: "Secret Leader: Today I will be unveiling this as the prize for the winner.." },
      { type: "walk", who: "farmer", direction: "down" },
      { type: "walk", who: "farmer", direction: "down" },
      { type: "stand", who: "farmer", direction: "right", time: 200 },
      { type: "textMessage", text: "Dad: Sir... please stop this. I didn't agree to any of this!" },
      { type: "textMessage", text: "!!!" },
      { type: "walk", who: "farmer", direction: "down" },
      { type: "walk", who: "farmer", direction: "down" },

      { type: "stand", who: "farmer", direction: "right", time: 200 },
      { type: "stand", who: "farmer", direction: "left", time: 200 },
      { type: "stand", who: "farmer", direction: "down", time: 200 },
      { type: "stand", who: "farmer", direction: "right", time: 200 },
      { type: "stand", who: "farmer", direction: "left", time: 200 },
      { type: "stand", who: "farmer", direction: "down", time: 200 },
      { type: "textMessage", text: "Dad: Is it really you Son?!" },
      { type: "textMessage", text: "Me: Dad, I'm so glad you are okay. Why aren't you home?" },
      {
        type: "textMessage",
        text: "Dad: This group has taken me hostage, I tried to fight back son but they are too strong.",
      },
      { type: "textMessage", text: "Me: I will try and beat them Dad, Mum is worried sick." },
      { type: "walk", who: "leader", direction: "down" },
      { type: "walk", who: "leader", direction: "down" },
      { type: "stand", who: "leader", direction: "left", time: 200 },
      {
        type: "textMessage",
        text: "Secret Leader: Hahaha goodluck! You will have to get through all of us to be rid of us!",
      },
      { type: "walk", who: "farmer", direction: "left" },
      { type: "walk", who: "leader", direction: "left" },
      { type: "walk", who: "farmer", direction: "left" },
      { type: "stand", who: "farmer", direction: "right", time: 200 },
      { type: "textMessage", text: "Dad: How dare you! Get him son!" },
      { type: "walk", who: "farmer", direction: "right" },
      { type: "walk", who: "farmer", direction: "up" },
      { type: "walk", who: "farmer", direction: "up" },
      { type: "walk", who: "farmer", direction: "up" },
      { type: "walk", who: "farmer", direction: "up" },
      { type: "walk", who: "farmer", direction: "right" },
      {
        type: "textMessage",
        text: "Secret Leader: Haha I'd like to see you try, your animals are not match for ours!",
      },
      { type: "walk", who: "leader", direction: "right" },
      { type: "walk", who: "leader", direction: "up" },
      { type: "walk", who: "leader", direction: "up" },
    ],
  },
];

export const Arena = {
  id: "Arena",
  lowerSrc: "./assets/maps/newmaps/room7_lower.png",
  upperSrc: "./assets/maps/newmaps/room7_upper.png",
  configObjects: {
    hero: {
      type: "Person",
      isPlayerControlled: true,
      src: "./assets/characters/people/hero.png",
      x: utils.withGrid(9),
      y: utils.withGrid(12),
    },

    enemy3: {
      type: "Person",
      x: utils.withGrid(12),
      y: utils.withGrid(8),
      src: "./assets/characters/people/blacksmith.png",
      behaviorLoop: [{ type: "stand", direction: "left", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "Welcome, enemy 3",
            },
          ],
        },
      ],
    },
    enemy2: {
      type: "Person",
      x: utils.withGrid(13),
      y: utils.withGrid(10),
      src: "./assets/characters/people/blacksmith2.png",
      behaviorLoop: [{ type: "stand", direction: "left", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "Welcome, enemy 2",
            },
          ],
        },
      ],
    },
    enemy1: {
      type: "Person",
      x: utils.withGrid(6),
      y: utils.withGrid(10),
      src: "./assets/characters/people/blacksmith.png",
      behaviorLoop: [{ type: "stand", direction: "right", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "Welcome, enemy 1",
            },
          ],
        },
      ],
    },
    enemy4: {
      type: "Person",
      x: utils.withGrid(7),
      y: utils.withGrid(8),
      src: "./assets/characters/people/blacksmith2.png",
      behaviorLoop: [{ type: "stand", direction: "right", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "Welcome, enemy 4",
            },
          ],
        },
      ],
    },
    leader: {
      type: "Person",
      x: utils.withGrid(10),
      y: utils.withGrid(7),
      src: "./assets/characters/people/bartender2.png",
      behaviorLoop: [{ type: "stand", direction: "down", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "Welcome, enemy final boss",
            },
          ],
        },
      ],
    },
    farmer: {
      type: "Person",
      x: utils.withGrid(9),
      y: utils.withGrid(5),
      src: "./assets/characters/people/farmer.png",
      behaviorLoop: [{ type: "stand", direction: "down", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "Dad!!",
            },
          ],
        },
      ],
    },
    npc1: {
      type: "Person",
      x: utils.withGrid(12),
      y: utils.withGrid(12),
      src: "./assets/characters/people/merchant1.png",
      behaviorLoop: [{ type: "stand", direction: "up", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "Goodluck, I hate this group!",
            },
          ],
        },
      ],
    },
    npc2: {
      type: "Person",
      x: utils.withGrid(7),
      y: utils.withGrid(12),
      src: "./assets/characters/people/merchant2.png",
      behaviorLoop: [{ type: "stand", direction: "up", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "Man these guys are the worst...",
            },
          ],
        },
      ],
    },
  },
  walls: {
    [utils.asGridCoord(19, 3)]: true,
    [utils.asGridCoord(1, 2)]: true,
    [utils.asGridCoord(2, 2)]: true,
    [utils.asGridCoord(3, 2)]: true,
    [utils.asGridCoord(4, 2)]: true,
    [utils.asGridCoord(5, 2)]: true,
    [utils.asGridCoord(6, 2)]: true,
    [utils.asGridCoord(7, 2)]: true,
    [utils.asGridCoord(8, 2)]: true,
    [utils.asGridCoord(9, 2)]: true,
    [utils.asGridCoord(10, 2)]: true,
    [utils.asGridCoord(11, 2)]: true,
    [utils.asGridCoord(12, 2)]: true,
    [utils.asGridCoord(13, 2)]: true,
    [utils.asGridCoord(14, 2)]: true,
    [utils.asGridCoord(15, 2)]: true,
    [utils.asGridCoord(16, 2)]: true,
    [utils.asGridCoord(17, 2)]: true,
    [utils.asGridCoord(18, 2)]: true,
    [utils.asGridCoord(0, 3)]: true,
    [utils.asGridCoord(19, 4)]: true,
    [utils.asGridCoord(0, 4)]: true,
    [utils.asGridCoord(19, 5)]: true,
    [utils.asGridCoord(0, 5)]: true,
    [utils.asGridCoord(19, 6)]: true,
    [utils.asGridCoord(0, 6)]: true,
    [utils.asGridCoord(19, 7)]: true,
    [utils.asGridCoord(0, 7)]: true,
    [utils.asGridCoord(19, 8)]: true,
    [utils.asGridCoord(0, 8)]: true,
    [utils.asGridCoord(19, 9)]: true,
    [utils.asGridCoord(0, 9)]: true,
    [utils.asGridCoord(19, 10)]: true,
    [utils.asGridCoord(0, 10)]: true,
    [utils.asGridCoord(19, 11)]: true,
    [utils.asGridCoord(0, 11)]: true,
    [utils.asGridCoord(19, 12)]: true,
    [utils.asGridCoord(0, 12)]: true,
    [utils.asGridCoord(19, 13)]: true,
    [utils.asGridCoord(1, 13)]: true,
    [utils.asGridCoord(2, 13)]: true,
    [utils.asGridCoord(3, 13)]: true,
    [utils.asGridCoord(4, 13)]: true,
    [utils.asGridCoord(5, 13)]: true,
    [utils.asGridCoord(6, 13)]: true,
    [utils.asGridCoord(7, 13)]: true,
    [utils.asGridCoord(12, 13)]: true,
    [utils.asGridCoord(13, 13)]: true,
    [utils.asGridCoord(14, 13)]: true,
    [utils.asGridCoord(15, 13)]: true,
    [utils.asGridCoord(16, 13)]: true,
    [utils.asGridCoord(17, 13)]: true,
    [utils.asGridCoord(18, 13)]: true,
  },
  cutsceneSpaces: {
    /* Arena - NPC interactions */
    [utils.asGridCoord(9, 12)]: arenaCutscene,
    /* Arena - NPC interactions end */

    /* Arena - Room map changing */
    [utils.asGridCoord(8, 13)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideRight",
            x: utils.withGrid(13),
            y: utils.withGrid(6),
            direction: "down",
          },
        ],
      },
    ],
    [utils.asGridCoord(9, 13)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideRight",
            x: utils.withGrid(13),
            y: utils.withGrid(6),
            direction: "down",
          },
        ],
      },
    ],
    [utils.asGridCoord(10, 13)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideRight",
            x: utils.withGrid(13),
            y: utils.withGrid(6),
            direction: "down",
          },
        ],
      },
    ],
    [utils.asGridCoord(11, 13)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideRight",
            x: utils.withGrid(13),
            y: utils.withGrid(6),
            direction: "down",
          },
        ],
      },
    ],
    /* Arena - Room map changing end */
  },
};
