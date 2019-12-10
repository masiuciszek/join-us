type IState = {
  count: number;
  getUserCount: () => void;
}

type IActionType = {
  type: string;
  payload?: any;
}
