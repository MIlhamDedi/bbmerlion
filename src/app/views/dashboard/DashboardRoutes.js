import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Analytics = MatxLoadable({
  loader: () => import("./None")
})

const dashboardRoutes = [
  {
    path: "/dashboard/analytics",
    component: Analytics,
    auth: authRoles.admin
  }
];

export default dashboardRoutes;
