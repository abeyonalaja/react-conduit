import withHeaderLayout from "./withHeaderLayout";
import withRouter from "./withRouter";

export const pageWithLayout = Wrapped => withRouter(withHeaderLayout(Wrapped));

export default pageWithLayout;
