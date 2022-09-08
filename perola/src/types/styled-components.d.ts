import theme  from "assets/styles/theme";
type theme = typeof theme;
declare module 'styled-components/'{
    export interface DefaultTheme extends theme{}
}
