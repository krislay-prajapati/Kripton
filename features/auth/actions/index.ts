"user server";

import {auth} from "@/auth";
import {db} from "@/lib/db";



export const getUserById = async (Id: string) => {
    try{
        const user = await db.user.findUnique({
            where:{id:Id},
            include:{
                accounts:true
            }
        })

        return user;
    }catch(error){

        console.error("Error fetching user by ID:", error);
        throw new Error("Failed to fetch user by ID");

    }

    }


    export const getAccountByUserId = async (userId: string) => {
        try{
            const account = await db.accounnt.findFirst({
                where:{userId:userId}
            })
            return account;
        }catch(error){
            console.error("Error fetching account by user ID:", error);
            throw new Error("Failed to fetch account by user ID");
        }
    }

    export const currentUser = async () => {
        const user = await auth();
        return user?.user;
    }
