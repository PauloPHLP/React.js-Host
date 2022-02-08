import { homeRoutes } from './pages/Home/home.routes';
import { blueRoutes } from './pages/Blue/blue.routes';
import { redRoutes } from './pages/Red/red.routes';

export const appRoutes = [...homeRoutes, ...blueRoutes, ...redRoutes];
