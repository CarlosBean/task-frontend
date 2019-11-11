interface ISuscription {
  name: string;
  fee: string;
  terms: string;
  productId: string;
  termId: string;
}

export interface IUser {
  id?: string;
  status?: string;
  name?: string;
  quantity?: number;
  subscription?: ISuscription;
}

export class User implements IUser {
  constructor(
    public id?: string,
    public status?: string,
    public name?: string,
    public quantity?: number,
    public subscription?: ISuscription
  ) {}
}
