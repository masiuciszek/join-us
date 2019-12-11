type IState = {
  count: CountData;
  emails: string[];
  getUserCount: () => void;
  // postEmail: (email: string) => void;
  postEmail: (email: string) => void;
  // postEmail: () => any;
  loading: boolean;
}

type IActionType = {
  type: string;
  payload?: any;
}

type CountData = {
  data: number;
}
