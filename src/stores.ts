
import { writable } from "@macfja/svelte-persistent-store";
import { Character, Game, LogEntry, Session, User } from "./types";

export const screen = writable<string>('screen','session');

export const user = writable<User|null>('user', null);

export const games = writable<Game[]>('games', []);
export const game = writable<Game|null>('game', null);

export const characters = writable<Character[]>('characters',[]);

export const session = writable<Session|null>('session',null);
export const log = writable<LogEntry[]>('log',[]);
