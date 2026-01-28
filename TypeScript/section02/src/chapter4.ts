// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "양진혁",
  nickname: "memm",
  birth: "1999.01.07",
  bio: "hello",
  location: "성남시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "memm",
  birth: "1999.01.07",
  bio: "hello",
  location: "성남시",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
