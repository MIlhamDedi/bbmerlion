import { MatxLoadable } from "matx";

const BasicViewer = MatxLoadable({
  loader: () => import("./BasicViewer")
});

const notesRoutes = [
  {
    path: "/notes",
    component: BasicViewer
  },
];

export default notesRoutes;
