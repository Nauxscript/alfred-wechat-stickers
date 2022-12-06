export interface Sticker {
  key: string;
}

export interface AlfredSelection {
  uid: string;
  title: string;
  subtitle: string;
  arg: string;
  icon: {
    path: string; 
  },
  mods: {
    ctrl: {
      arg: string;
      subtitle: string;
    },
  }
}