
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function getSession() {
    return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
    try {
      const session = await getSession();
  
      if (!session?.user?.email) {
        return null;
      }
  
      return {
        email: session.user.email,
      };
    } catch (error: any) {
        console.log(error);
      return null;
    }
  }
  
  