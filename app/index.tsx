// import { useAuth } from "@clerk/clerk-expo";
// import { Redirect } from "expo-router";

// const Page = () => {
//   const { isSignedIn } = useAuth();

//   if (isSignedIn) return <Redirect href="/(root)/(tabs)/home" />;

//   return <Redirect href="/(auth)/welcome" />;
// };

// export default Page;


// import { Redirect } from "expo-router";

// const Page = () => {
//   return <Redirect href="/(root)/(tabs)/index" />;
// };

// export default Page;




// import { useEffect } from 'react';
// import { useRouter } from 'expo-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from '@/store';
// import { loadAuthState } from '@/features/auth/authSlice';
// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();

// const Index = () => {
//   const router = useRouter();
//   const dispatch = useDispatch<AppDispatch>();
//   const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth);

//   useEffect(() => {
//     dispatch(loadAuthState());
//   }, [dispatch]);

//   useEffect(() => {
//     if (!loading) {
//       if (isAuthenticated) {
//         router.replace('/(tabs)');
//       } else {
//         router.replace('/login');
//       }
//       SplashScreen.hideAsync();
//     }
//   }, [isAuthenticated, loading, router]);

//   return null; // Prevent UI rendering while redirecting
// };

// export default Index;
