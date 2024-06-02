// export { default as AboutMe } from './AboutMe';
// export { default as Carrusel } from './Carrusel';
// export { default as Driven } from './Driven';
// export { default as Language } from './Language';
// export { default as Nav } from './Nav';
// export { default as Networks } from './Networks';
// export { default as ProjectDetail } from './ProjectDetail';
// export { default as SkillContainer } from './SkillContainer';
import { lazy } from "react";

export const AboutMe = lazy(() => import("./AboutMe"));
export const Carrusel = lazy(() => import("./Carrusel"));
export const Driven = lazy(() => import("./Driven"));
export const Language = lazy(() => import("./Language"));
export const Nav = lazy(() => import("./Nav"));
export const Networks = lazy(() => import("./Networks"));
export const ProjectDetail = lazy(() => import("./ProjectDetail"));
export const SkillContainer = lazy(() => import("./SkillContainer"));
