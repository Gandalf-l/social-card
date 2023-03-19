export interface UserI {
  id: number;
  imgUrl: string;
  name: string;
  email: string;
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
  };
  company: {
    name: string,
    catchPhrase: 'Multi-layered client-server neural-net',
  };
  phone: string;
  website: string;
}
