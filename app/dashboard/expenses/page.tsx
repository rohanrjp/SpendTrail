"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from 'lucide-react'
import { CreateExpenseDialog } from "@/components/create-expense-dialog"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Dummy data for expenses
const initialExpenses = [
  { id: 1, category: "Groceries", amount: 150, emoji: "🛒" },
  { id: 2, category: "Utilities", amount: 200, emoji: "💡" },
  { id: 3, category: "Entertainment", amount: 50, emoji: "🎬" },
  { id: 4, category: "Transportation", amount: 100, emoji: "🚗" },
  { id: 5, category: "Dining Out", amount: 75, emoji: "🍽️" },
]

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState(initialExpenses)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingExpense, setEditingExpense] = useState<typeof expenses[0] | null>(null)

  const handleEditExpense = (expense: typeof expenses[0]) => {
    setEditingExpense(expense)
    setIsEditDialogOpen(true)
  }

  const handleUpdateExpense = (updatedExpense: typeof expenses[0]) => {
    setExpenses(expenses.map(exp => exp.id === updatedExpense.id ? updatedExpense : exp))
    setIsEditDialogOpen(false)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Expenses</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="cursor-pointer" onClick={() => setIsCreateDialogOpen(true)}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Create Expense</CardTitle>
            <PlusCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Add New</div>
          </CardContent>
        </Card>
        {expenses.map((expense) => (
          <Card key={expense.id} className="cursor-pointer" onClick={() => handleEditExpense(expense)}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>{expense.emoji}</span>
                {expense.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">${expense.amount}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <CreateExpenseDialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen} />
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Expense</DialogTitle>
          </DialogHeader>
          {editingExpense && (
            <form onSubmit={(e) => {
              e.preventDefault()
              handleUpdateExpense(editingExpense)
            }}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="amount" className="text-right">
                    Amount
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    value={editingExpense.amount}
                    onChange={(e) => setEditingExpense({...editingExpense, amount: Number(e.target.value)})}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Update Expense</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

