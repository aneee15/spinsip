export type Screen = "home" | "players" | "setup" | "game" | "summary";
export type Intensity = "light" | "normal" | "chaos" | "custom";
export type Category = "question" | "challenge" | "likely" | "duel" | "rule" | "special" | "everyone" | "drink" | "penalty";

export interface Player { id: string; name: string; sober: boolean; selections: number; shields: number }
export interface ActiveRule { text: string; remaining: number }
export interface GameCard { type: Category; title: string; text: string; rare?: boolean; rule?: string; special?: string }
export interface HistoryItem { round: number; player: string; type: Category; text: string }
export interface Settings {
  intensity: Intensity;
  categories: Category[];
  maxSips: number;
  roundLimit: number;
  sound: boolean;
  vibration: boolean;
  reducedMotion: boolean;
  probabilities: Record<Category, number>;
}
