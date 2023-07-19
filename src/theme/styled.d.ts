import styled from "styled-components";
import theme from ".";

declare module 'style-components' {
  type ThemeType = typeof theme
  
  export interface DefaultTheme extends ThemeType {}
}