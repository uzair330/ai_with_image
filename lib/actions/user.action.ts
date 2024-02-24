"use server";

import { revalidatePath } from "next/cache";

// import User from "@/prisma";

import { handleError } from "../utils";
import { db } from "../db";

// CREATE
export async function createUser(user: CreateUserParams) {
  try {
   

    const newUser = await db.user.create({
        data: user, // Use the 'data' field to specify the new user's data
    })

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getUserById(userId: string) {
  try {
    

    // const user = await User.findOne({ clerkId: userId });
    const user = await db.user.findUnique(
        {
            where: {
              clerkId: userId,
            },
          }
    )

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {


    const updatedUser =  await db.user.update({
        where: {
          clerkId,
        },
        data: user, // Use the 'data' field to specify the updates
      });

    if (!updatedUser) throw new Error("User update failed");
    
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteUser(clerkId: string) {
  try {
    

    // Find user to delete
    
    const userToDelete = await db.user.findUnique({
        where: {
          clerkId,
        },
      });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await db.user.delete(
        {
            where: {
              clerkId,
            },
          }
    );
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

// USE CREDITS
export async function updateCredits(userId: string, creditFee: number) {
  try {
    

    const updatedUserCredits = await db.user.update({
        where: {
          clerkId:userId,
        },
        data: {
          creditBalance: {
            increment: creditFee,
          },
        },
      });

    if(!updatedUserCredits) throw new Error("User credits update failed");

    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    handleError(error);
  }
}