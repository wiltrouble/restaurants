import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Restaurants from "../screens/Restaurants";
import Account from "../screens/Account";
import Favorites from "../screens/Favorites";
import Search from "../screens/Search";
import TopRestaurants from "../screens/TopRestaurants";
import RestaurantStack from './RestaurantStack';
import TopRestaurantsStack from './TopRestaurantsStack';
import SearchStack from './SearchStack';
import FavoritesStack from './FavoritesStack';
import AccountStack from './AccountStack';


const Tab = createBottomTabNavigator()



export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="restaurants"
                    component={RestaurantStack}
                    options={{title: 'Restaurants'}}
                />
                <Tab.Screen
                    name="topRestaurants"
                    component={TopRestaurantsStack}
                    options={{title: 'Top Restaurants'}}
                />
                <Tab.Screen
                    name="search"
                    component={SearchStack}
                    options={{title: 'Search'}}
                />
                <Tab.Screen
                    name="favorites"
                    component={FavoritesStack}
                    options={{title: 'Favorites'}}
                />
                <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{title: 'Account'}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
