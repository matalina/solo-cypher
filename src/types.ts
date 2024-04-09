import type { DiceRoll } from "@dice-roller/rpg-dice-roller";

export interface User {
  "access_token": string;
  "expires_in": number;
  "token_type": string;
  "scope": string;
  "refresh_token": string;
  "account_id": string;
  "uid": string;
}

export interface Game {
  id: string;
  name: string;
  created: number; // Date.now();
  lastPlayed?: number; // Date.now();
  lastSession?: string;

  characters: string[]; // Character names
}

export interface Session {
  gameId: string; 
  id: string;
  povCharacter: string;
  adventureStatus: number; // 1-6
  gameTime: string;
  location: string;
  log: string[]; // LogEntry Ids
}

export interface LogEntry {
  id: string;
  sessionId: string;
  dateTime: number; // Date.now();
  type: string; // oracle, check, input
  data: LogData;
}

export interface LogData {
  dateTime: number; // Date.now();
  type: string; // oracle, check, input
  roll?: DiceRoll;
}

export interface Developer {
  roll: DiceRoll;
  developer: string;
}

export interface Oracle extends LogData {
  question: string;
  answer: string;
  developer?: Developer;
  gmIntrusion: boolean;
}

export interface Check extends LogData {
  task: string;
  level: number; // 1-10(15) -- multiply by 3 to get target number
  easedSkill?: number; // max 2  -- positive number to be subtracted from level
  easedAsset?:  number; // max 2 -- positive number to be subtracted from level
  hindered?: number; // positive number to be added to level
  gmModifiers?: number; // positive or negative to be added to level
  answer: string;
  developer?: Developer;
  gmIntrusion: boolean;
}


export interface UserInput extends LogData {
  text: string;
}

export interface Character extends CypherCharacter {
  id: string;
  gameId: string;
  name: string;
}

export interface CypherCharacter {
  tier: number;
  xp: number;
  effort: number;
  cypherLimit: number[]; //[type, additional]

  decriptor: string[];
  type: string;
  flavor: string;
  focus: string[];
  
  damageTrack: boolean[]; // [true, false, false, false];
  revoeryRoll: number; // [level, additional]
  recovery: Recovery[];

  armor: number;
  armors: Armor[];
  attacks: Attack[];

  stats: Stat[];
  skills: Skill[]; 
  abilities: Ability[];

  cyphers: Cypher[];
  equiment: Container[]; // self, backpack, wallet

  advancement: Advancement[];
}

export interface Advancement {
  tier: number;
  advancements: Advance[]; 
}

export interface Advance {
  name: string;
  details: string;
}

export interface Cypher {
  name: string;
  level: string;
  description: string;
}

export interface Container {
  name: string;
  slots: number;
  items: Item[];
}

export interface Item {
  name: string;
  description: string;
  quantity?: number;
}

export interface Armor {
  name: string;
  cost?: number;
  stat?: string;
  bonus: number;
  details: string;
  training?: string; // inability, practiced, trained, specialized
}

export interface Attack {
  name: string;
  description: string;
  cost?: number;
  stat?: string;
  damage: number;
  training?: string; // inability, practiced, trained, specialized
}

export interface Ability {
  name: string;
  description: string;
  training?: string; // inability, practiced, trained, specialized
  stat: string; // Stat name;
  cost?: number;
}

export interface Skill {
  name: string;
  description: string;
  training: string; // inability, practiced, trained, specialized
  stat: string; // Stat name;
}

export interface Recovery {
  name: string;
  used: boolean;
}

export interface Stat {
  name: string;
  pool: number;
  current: number;
  edge?: number;
  defense: string; // inability, practiced, trained, specialized
}