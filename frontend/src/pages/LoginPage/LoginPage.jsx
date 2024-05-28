import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginFrom from "./LoginFrom";
import SignupForm from "./SignupForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col gap-y-10 h-screen py-3 justify-center items-center">
      <h1 className="text-3xl font-bold text-neutral-800 text-center">
        Office Lunch Menu Management System
      </h1>
      <div>
        <Tabs defaultValue="login" className="w-[400px] h-[430px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginFrom />
          </TabsContent>
          <TabsContent value="signup">
            <SignupForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginPage;