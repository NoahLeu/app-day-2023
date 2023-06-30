import { GetServerSideProps } from "next";

export const requireAuth = (func: GetServerSideProps) => {
  return async (ctx: any) => {
    const session = await getSession(ctx);
    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    return await func(ctx);
  };
}