import { GalleryVerticalEnd } from "lucide-react"

import { SignupForm } from "~/components/signup-form"

export default function SignupPage() {
  return (
    <div className="min-h-svh flex flex-col p-6 md:p-10 bg-background">
      <div className="flex justify-center md:justify-start">
        <a href="#" className="flex items-center gap-2 font-medium">
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Chaicode Forms
        </a>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
