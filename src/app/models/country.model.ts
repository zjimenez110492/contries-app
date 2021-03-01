export interface Country {
  name:           string;
  population:     number;
  region:         string;
  capital:        string;
  nativeName:     string;
  subregion:      string;
  topLevelDomain: string[];
  currencies:     Currency[];
  languages:      Language[];
  borders:        string[];
  flag:           string;
/*

  alpha2Code:     string;
  alpha3Code:     string;
  callingCodes:   string[];

  altSpellings:   string[];


  latlng:         number[];
  demonym:        string;
  area:           number;
  gini:           number;
  timezones:      string[];


  numericCode:    string;


  translations:   Translations;

  regionalBlocs:  RegionalBloc[];
  cioc:           string; */
}

export interface Currency {
  code:   string;
  name:   string;
  symbol: string;
}

export interface Language {
  iso639_1:   string;
  iso639_2:   string;
  name:       string;
  nativeName: string;
}

export interface Translations {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
}
