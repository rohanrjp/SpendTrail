import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { RecentExpenses } from "@/components/recent-expenses"
import { ExpenseBreakdown } from "@/components/expense-breakdown"
import { BudgetProgress } from "@/components/budget-progress"
import { IncomeVsExpenses } from "@/components/income-vs-expenses"
import { SavingsGoal } from "@/components/savings-goal"
import { ExpenseTrend } from "@/components/expense-trend"
import { CreditCard, Wallet, PiggyBank, TrendingUp } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Financial Advice</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Based on your recent spending habits, consider allocating 20% of your income to savings and investments. This can help build a strong financial foundation for your future.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <CreditCard className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234.56</div>
            <p className="text-xs text-muted-foreground">61.73% of total budget</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <Wallet className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,000.00</div>
            <p className="text-xs text-muted-foreground">$765.44 remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Income</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,500.00</div>
            <p className="text-xs text-muted-foreground">$1,500.00 over budget</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings</CardTitle>
            <PiggyBank className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,265.44</div>
            <p className="text-xs text-muted-foreground">64.73% of total income</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Expense Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Overview />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentExpenses />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Expense Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ExpenseBreakdown />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Budget Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <BudgetProgress />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Income vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <IncomeVsExpenses />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Savings Goal Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <SavingsGoal />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Expense Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ExpenseTrend />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

