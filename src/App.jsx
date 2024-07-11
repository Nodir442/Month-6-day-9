import { Routes, Route } from "react-router-dom";
import { MainLoyaut } from "./layout/mian-loyaut/main-loyaut";
import { routes, userRoutes } from "./routes/routes";
import { UserLoyaut } from "./layout/user-loyaut/user-loyaut";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLoyaut />}>
          {routes.map(({ component: Element, id, path }) => (
            <Route
              index={!path ? true : false}
              path={path}
              key={id}
              element={<Element />}
            />
          ))}
          <Route path="profile" element={<UserLoyaut />}>
            {userRoutes.map(({ component: Element, id, path }) => (
              <Route
                index={!path ? true : false}
                path={path}
                key={id}
                element={<Element />}
              />
            ))}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
