export interface Sticker {
  key: string;
}

export interface Mode {
  arg: string;
  subtitle: string;
}

export type ModifiedKeys = 'ctrl' | 'alt'

export interface AlfredSelection {
  uid: string;
  title: string;
  subtitle: string;
  arg: string;
  icon: {
    path: string; 
  },
  mods: Record<ModifiedKeys, Mode>
}

declare global {
  const Application: any
}
