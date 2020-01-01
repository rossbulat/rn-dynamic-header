export interface ScrollContextInterface {
  opacity: number;
  maxOffset: number;
  offset: number;
  titleShowing: boolean;
  updateOffset (val: number): void;
};