type IState = {
  count: CountData;
  getUserCount: () => void;
  postEmail: (formData: string) => void;
  loading: boolean;
}

type IActionType = {
  type: string;
  payload?: any;
}

type CountData = {
  data: number;
}
