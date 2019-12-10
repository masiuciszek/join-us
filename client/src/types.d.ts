type IState = {
  count: CountData;
  getUserCount: () => void;
  loading: boolean;
}

type IActionType = {
  type: string;
  payload?: any;
}

type CountData = {
  data: number;
}
