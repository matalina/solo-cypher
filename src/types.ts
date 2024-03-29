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
  name: string;
  created: Date;
  lastPlayed: Date;
  lastSession: string;
}

export interface Session {
  id: string;
  povCharacter: string;
  adventureStatus: number; // 1-6
  gameTime: string;
  location: string;
  log: LogEntry[];
}

export interface LogEntry {
  dateTime: number; // Date.now();
  type: string; // oracle, check, input
}