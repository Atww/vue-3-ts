interface Svg {
  d: string;
  fill?: string;
  fillRule?: string;
  clipRule?: string;
}
interface Menu {
  Label: string;
  RouteName: string;
  RouteUrl: string;
  Svg: Array<Svg>;
}

interface Menus {
  MenuCode?: string;
  Label: string;
  RouteName?: string;
  RouteUrl?: string;
  Svg?: Array<Svg>;
  Childern?: Array<ChildMenu>;
}
interface ChildMenu {
  MenuCode: string;
  Label: string;
  RouteName: string;
  RouteUrl: string;
  Svg?: Array<Svg>;
}

export { Menu, Svg, Menus, ChildMenu };
