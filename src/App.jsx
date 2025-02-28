import { useRoutes } from "react-router-dom";
// Common Pages.
import HomePage from "./pages/home/HomePage";
import Navigation from "./components/Navigation/Navigation";
import AlbumPage from "./pages/album/AlbumPage";
import AlbumsPage from "./pages/albums/AlbumsPage";
import FavoritesPage from "./pages/favorites/FavoritesPage";
import SwiperPage from "./pages/swiper/SwiperPage";
import SwipePage from "./pages/swipe/SwipePage";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";



// Application
const App = () => {

  // Setting Up Routes
  const routes = useRoutes(
            [

            {
              path: "/",
              element : <HomePage></HomePage>
            },
            {
              path: "/album/:albumId",
              element : <AlbumPage></AlbumPage>
            },
            {
              path: "/album/:albumId",
              element : <AlbumPage></AlbumPage>
            },
            {
              path: "/Catalog",
              element : <AlbumsPage></AlbumsPage>
            },
            {
              path: "/Favorites",
              element : <FavoritesPage></FavoritesPage>
            },
            {
              path: "/Swiper",
              element : <SwiperPage></SwiperPage>
            },
            {
              path: "/Slider",
              element : <SwipePage></SwipePage>
            },
            {
              path: "*",
              element : <div>NOT FOUND</div>
            },

          ]

  );

  return <>
    <div>
        <Navigation></Navigation>
        <Breadcrumb />
        <div>
            {routes}
        </div>
       {/* GLOBAL FOOTER */}
    </div>
  </>;

}

export default App;
