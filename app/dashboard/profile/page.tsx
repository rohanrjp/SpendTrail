"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"

// Dummy user data
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  joinDate: "January 1, 2023",
  avatar: "/placeholder.svg?height=100&width=100",
}

export default function ProfilePage() {
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    // Simulating logout process
    await new Promise(resolve => setTimeout(resolve, 1000))
    router.push("/sign-in")
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Profile</h1>
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">{user.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Join Date</p>
              <p>{user.joinDate}</p>
            </div>
            <div>
              <p className="font-semibold">Total Transactions</p>
              <p>143</p>
            </div>
          </div>
          <Button 
            variant="destructive" 
            onClick={handleLogout} 
            disabled={isLoggingOut}
            className="w-full"
          >
            {isLoggingOut ? "Logging out..." : "Log Out"}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

