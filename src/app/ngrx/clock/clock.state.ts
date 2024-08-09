export interface ClockState {
  time: Date;
  running: boolean;
}

export const initialClockState: ClockState = {
  time: new Date(),
  running: false
};
