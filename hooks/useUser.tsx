import { Subscription, UserDetails } from "@/types";
import { User } from "@supabase/auth-helpers-nextjs";
import {
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react";
import { createContext, useContext, useEffect, useState } from "react";

/* User 정보에 필요한 것들 
    1. 토큰
    2. supabase에서 받은 User 정보
    3. 만든 User정보
    4. 구독 정보
*/
interface UserType {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  subscription: Subscription | null;
}

export const UserContext = createContext<UserType | undefined>(undefined);

export interface IProps {
  [propName: string]: any;
}

export const UserContextProvider = (props: IProps) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient,
  } = useSessionContext();
  const user = useSupaUser();
  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  const getUserDetail = () => supabaseClient.from("users").select("*").single();
  const getSubscription = () =>
    supabaseClient
      .from("subscription")
      //관계형 데이터를 셀렉하기 위해서 쉼표로 구분해서 가져온다.
      .select("*, prices(*, products(*))")
      .in("status", ["trialing", "active"])
      .single();

  useEffect(() => {
    if (user && !isLoadingData && !userDetails && !subscription) {
      setIsLoadingData(true);
      Promise.allSettled([getUserDetail(), getSubscription()]).then(
        (result) => {
          const userDetailResult = result[0];
          const subscriptionsResult = result[1];

          if (userDetailResult.status === "fulfilled")
            setUserDetails(userDetailResult.value.data);

          if (subscriptionsResult.status === "fulfilled")
            setSubscription(subscriptionsResult.value.data);
        }
      );
      setIsLoadingData(false);
    } else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetails(null);
      setSubscription(null);
    }
  }, [user, isLoadingUser]);

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
    subscription,
  };
  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserContextProvider");
  }
  return context;
};
