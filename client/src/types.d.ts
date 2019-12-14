type IState = {
  count: CountData;
  emails: Email[];
  getUserCount: () => void;
  postEmail: (email: string) => void;
  loading: boolean;
  // getEmails: () => void;
  // getEmails: any;
  getEmails: () => void;
}

type IActionType = {
  type: string;
  payload?: any;
}

type CountData = {
  data: number;
}

type Email = {
  email: string;
}
