import { Component } from 'react';
import { TextInputProps, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { CountryCode, CallingCode, Country } from 'react-native-country-picker-modal';
export interface PhoneInputProps {
    withDarkTheme?: boolean;
    withShadow?: boolean;
    autoFocus?: boolean;
    defaultCode?: CountryCode;
    defaultValue?: string;
    disabled?: boolean;
    disableArrowIcon?: boolean;
    onChangeText?: (text: string) => void;
    onChangeFormattedText?: (text: string) => void;
    containerStyle?: StyleProp<ViewStyle>;
    textInputProps?: TextInputProps;
    textInputStyle?: StyleProp<TextStyle>;
    codeTextStyle?: StyleProp<TextStyle>;
    flagButtonStyle?: StyleProp<ViewStyle>;
}
export interface PhoneInputState {
    code: CallingCode | undefined;
    number: string;
    modalVisible: boolean;
    countryCode: CountryCode;
    disabled: boolean;
}
export default class PhoneInput extends Component<PhoneInputProps, PhoneInputState> {
    constructor(props: PhoneInputProps, context: any);
    UNSAFE_componentWillMount(): Promise<void>;
    UNSAFE_componentWillReceiveProps(nextProps: PhoneInputProps): Promise<void>;
    getCountryCode: () => "AF" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BA" | "BW" | "BV" | "BR" | "IO" | "VG" | "BN" | "BG" | "BF" | "BI" | "KH" | "CM" | "CA" | "CV" | "BQ" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CK" | "CR" | "HR" | "CU" | "CW" | "CY" | "CZ" | "CD" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "SZ" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "HN" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "CI" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "XK" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MK" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "KP" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "CG" | "RO" | "RU" | "RW" | "RE" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "KR" | "SS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SE" | "CH" | "SY" | "ST" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "US" | "UM" | "VI" | "UY" | "UZ" | "VU" | "VA" | "VE" | "VN" | "WF" | "EH" | "YE" | "ZM" | "ZW" | "KI" | "HK" | "AX";
    getCallingCode: () => string | undefined;
    isValidNumber: () => boolean;
    onSelect: (country: Country) => void;
    onChangeText: (text: string) => void;
    render(): JSX.Element;
}