import { homeRoutes } from './pages/Home/home.routes';
import { blueRoutes } from './pages/Blue/blue.routes';

export const appRoutes = [...homeRoutes, ...blueRoutes];
