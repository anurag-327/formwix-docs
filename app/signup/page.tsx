import Signup from "@/components/auth/Signup";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="w-full min-h-[92vh] flex items-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Signup />
      </Suspense>
    </div>
  );
}
