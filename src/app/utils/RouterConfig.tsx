import React, {useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import HomePage from "../views/web/home-page/HomePage";
import TrackOrder from "../views/web/track-order/TrackOrder";
import UserProvider from "../providers/UserProvider";
import Dispute from "../views/web/dispute/Dispute";


function RouteConfig() {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
            <Routes>
                {/*Split layout right and left*/}
                {/*<Route element={<AuthenticationLayout />}>*/}
                {/*    <Route path="/login" element={<Login />} />*/}
                {/*    <Route path="/forgot-password" element={<ForgotPassword />} />*/}
                {/*    <Route path="/verification" element={<Verification/>} />*/}
                {/*    <Route path="/reset-password" element={<ResetPassword/>} />*/}
                {/*</Route>*/}
                {/*<Route element={<AuthLayout />}>*/}
                {/*    <Route path="/app-login" element={<AppLogin/>} />*/}
                {/*    <Route path="/app-register" element={<AppRegister/>} />*/}
                {/*    <Route path="/user-verification" element={<Verification/>} />*/}
                {/*</Route>*/}

                <Route element={
                    <UserProvider>
                        <AppLayout />
                    </UserProvider>
                }
                >
                    <Route index element={<HomePage/>} />
                    <Route path="/track-order/:id" element={<TrackOrder/>} />
                    <Route path="/dispute" element={<Dispute/>} />
                </Route>
                {/*APP LAYOUT ROUTES*/}
                {/*<Route element={*/}
                {/*    <ProtectedRoutes>*/}
                {/*        <RestaurantLayout/>*/}
                {/*    </ProtectedRoutes>*/}
                {/*}>*/}
                {/*    <Route index element={<RestaurantView/>} />*/}
                {/*    <Route path={'restaurant-skeleton'} element={<RestaurantViewSkeleton/>} />*/}
                {/*    /!*<Route path="/restaurant-view-skeleton" element={<RestaurantViewSkeleton/>} />*!/*/}
                {/*</Route>*/}
                {/*<Route element={*/}
                {/*    <ProtectedRoutes>*/}
                {/*        <CheckoutLayout/>*/}
                {/*    </ProtectedRoutes>*/}
                {/*}>*/}
                {/*    <Route path={'checkout'} element={<CheckoutView/>} />*/}
                {/*    /!*<Route path="/restaurant-view-skeleton" element={<   RestaurantViewSkeleton/>} />*!/*/}
                {/*</Route>*/}
                {/*<Route element={*/}
                {/*    <ProtectedRoutes>*/}
                {/*        <LocationLayout/>*/}
                {/*    </ProtectedRoutes>*/}
                {/*}>*/}
                {/*    /!*<Route path={'location'} element={<LocationView/>} />*!/*/}

                {/*    <Route path="/find-location" element={<FindLocation/>} />*/}
                {/*    <Route path="/location-found" element={<LocationFound/>} />*/}
                {/*    <Route path="/location-not-found" element={<LocationNotFound/>} />*/}
                {/*</Route>*/}


                {/*<Route element={*/}
                {/*    <ProtectedRoutes>*/}
                {/*        <PageLayout/>*/}
                {/*    </ProtectedRoutes>*/}
                {/*}>*/}
                {/*    <Route  path="/order-confirm/:id" element={<ThankyouPage />} />*/}
                {/*    <Route  path="/order-detail/:id" element={<ActiveOrderDetail />} />*/}
                {/*    <Route  path="/account-detail" element={<AccountDetail />} />*/}
                {/*</Route>*/}
                {/*<Route path="*" element={<NotFound/>}/>*/}
            </Routes>


    );
}

export default RouteConfig;