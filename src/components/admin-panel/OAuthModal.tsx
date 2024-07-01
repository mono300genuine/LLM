import { useState } from "react";
import { signIn } from "next-auth/react"

import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Mail, Apple, Key } from "lucide-react";

interface OAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OAuthModal({ isOpen, onClose }: OAuthModalProps) {
  const [email, setEmail] = useState("");

  const [user, setUser] = useState({ email: '', password: '' });

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn("credentials", { email: user.email, password: user.password, redirect: true, callbackUrl: "/" });

    try {
      const result = await signIn('credentials', { email: user.email, password: user.password, redirect: true, callbackUrl: "/" });
      if (result?.error) {
        throw new Error(result.error);
      }
    } catch (error) {

    }
  }

  const handleGoogleSignIn = () => {
    signIn('google', { redirect: true, callbackUrl: "/dashboard" });
  };
  const handleGithubSignIn = () => {
    signIn('github', { redirect: true, callbackUrl: "/dashboard" });
  };
  const handleFacebookSignIn = () => {
    signIn('facebook', { redirect: true, callbackUrl: "/dashboard" });
  };
  const handleEmailSignIn = () => {
    signIn('email', { redirect: true, callbackUrl: "/dashboard" });
  };

  const buttonStyle = "bg-[#3D3F40] hover:bg-[#000] rounded-full text-white font-semibold w-full flex items-center justify-center space-x-2";
  const emailstyle = "bg-transparent hover:bg-[#3D3F40] rounded-full text-white font-semibold w-full flex items-center justify-center space-x-2";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto p-6">
        <DialogTitle className="text-2xl font-semibold text-center text-white">Welcome</DialogTitle>
        <DialogDescription className="text-center mb-4 text-white">Sign in or sign up to continue</DialogDescription>
        <div className="flex flex-col space-y-3">
          <Button onClick={handleGoogleSignIn} className={buttonStyle}>
            <Mail size={18} />
            <span>Continue with Google</span>
          </Button>
          <Button onClick={handleGithubSignIn} className={buttonStyle}>
            <Apple size={18} />
            <span>Continue with Apple</span>
          </Button>
          <Button onClick={handleFacebookSignIn} className={buttonStyle}>
            <Key size={18} />
            <span>Single Sign-on (SAML SSO)</span>
          </Button>
          <Input
            autoComplete="off"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full rounded-full"
          />
          <Button onClick={handleEmailSignIn} className={emailstyle}>
            Continue with email
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
