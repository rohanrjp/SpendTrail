import { Navbar } from "@/components/navbar"

export default function IncomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-4 md:p-6">
        <h1 className="text-3xl font-bold mb-6">Income</h1>
        <p>This is where you'll manage your income.</p>
      </main>
    </div>
  )
}

