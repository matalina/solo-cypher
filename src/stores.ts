
import { writable } from "@macfja/svelte-persistent-store";
import { User } from "./types";

export const user = writable<User|null>('user', null);