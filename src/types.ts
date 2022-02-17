export interface TypeA {
  info: TypeAInfo
}

interface TypeAInfo {
  id: number,
  name: string
  email?: string;
  city?: string;
   /** @mockType {internet.ipv6} */
  addr?: string;
}