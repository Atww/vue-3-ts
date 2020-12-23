import { Menu, Menus } from "@/types/menu";

export function getMenu(): Array<Menu> {
  const Menu: Array<Menu> = [
    {
      Label: "DashBoard",
      RouteName: "Dashboard",
      RouteUrl: "/dashboard",
      Svg: [
        {
          d:
            "M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z",
          fill: "currentColor"
        },
        {
          d:
            "M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z",
          fill: "currentColor"
        }
      ]
    },
    {
      Label: "UI Elements",
      RouteName: "UIElements",
      RouteUrl: "/ui-elements",
      Svg: [
        {
          d:
            "M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z",
          fill: "currentColor"
        },
        {
          d:
            "M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z",
          fill: "currentColor"
        },
        {
          d:
            "M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z",
          fill: "currentColor"
        },
        {
          d:
            "M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z",
          fill: "currentColor"
        }
      ]
    },
    {
      Label: "Forms",
      RouteName: "Forms",
      RouteUrl: "/forms",
      Svg: [
        {
          d:
            "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
        },
        {
          d:
            "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      ]
    },
    {
      Label: "Cards",
      RouteName: "Cards",
      RouteUrl: "/cards",
      Svg: [
        {
          d:
            "M15.475,6.692l-4.084-4.083C11.32,2.538,11.223,2.5,11.125,2.5h-6c-0.413,0-0.75,0.337-0.75,0.75v13.5c0,0.412,0.337,0.75,0.75,0.75h9.75c0.412,0,0.75-0.338,0.75-0.75V6.94C15.609,6.839,15.554,6.771,15.475,6.692 M11.5,3.779l2.843,2.846H11.5V3.779z M14.875,16.75h-9.75V3.25h5.625V7c0,0.206,0.168,0.375,0.375,0.375h3.75V16.75z"
        }
      ]
    },
    {
      Label: "Modal",
      RouteName: "Modal",
      RouteUrl: "/modal",
      Svg: [
        {
          d:
            "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
        }
      ]
    },
    {
      Label: "Blank",
      RouteName: "Blank",
      RouteUrl: "/blank",
      Svg: [
        {
          d:
            "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
        }
      ]
    },
    {
      Label: "Post",
      RouteName: "Post",
      RouteUrl: "/post",
      Svg: [
        {
          d:
            "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
        }
      ]
    }
  ];
  return Menu;
}
// export function getMenus(): Array<Menus> {
//   const Menus: Array<Menus> = [
//     {
//       Label: "Template",
//       Svg: [
//         {
//           d:
//             "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
//         }
//       ],
//       Childern: [
//         {
//           MenuCode: "Mnu-001",
//           Label: "Modal",
//           RouteName: "Modal",
//           RouteUrl: "/modal",
//           Svg: [
//             {
//               d:
//                 "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
//             }
//           ]
//         },
//         {
//           MenuCode: "Mnu-002",
//           Label: "Blank",
//           RouteName: "Blank",
//           RouteUrl: "/blank",
//           Svg: [
//             {
//               d:
//                 "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       MenuCode: "Mnu-003",
//       Label: "Blank",
//       RouteName: "Blank",
//       RouteUrl: "/blank",
//       Svg: [
//         {
//           d:
//             "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
//         }
//       ]
//     }
//   ];

//   return Menus;
// }
