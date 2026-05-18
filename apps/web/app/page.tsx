'use client'
import { trpc } from "~/trpc/client";

export default function Home() {
  const { data } = trpc.chaicode.useQuery({ email: "a@e.com" });
  return (
    <main className="min-h-screen min-w-screen flex justify-center items-center bg-black text-white">
      <div>
        <h2>Server Message: {data?.message}</h2>
      </div>
    </main>
  );
}
