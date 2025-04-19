import Drink from "../pages/drink/Drink";
import Food from "../pages/food/Food";
import Home from "../pages/home/Home";
import Merchandise from "../pages/merchandise /Merchandise";

export const routes_arr = [
    {path : "/", element : <Home/>},
    {path : "/drink", element : <Drink/>},
    {path : "/food", element : <Food/>},
    {path : "/merchandise", element : <Merchandise/>},

]