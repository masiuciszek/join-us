type IState = {
  count: CountData;
  emails: string[];
  getUserCount: () => void;
  postEmail: (email: string) => void;
  loading: boolean;
}

type IActionType = {
  type: string;
  payload?: any;
}

type CountData = {
  data: number;
}
