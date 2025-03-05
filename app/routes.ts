import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  layout("./pages/auth/layout.tsx", [
    route("auth/login", "./pages/auth/login.tsx"),
    // route("auth/register", "./pages/auth/register.tsx"),
  ]),
] satisfies RouteConfig;
