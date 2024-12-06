import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const expenses = [
  {
    id: 1,
    name: "Groceries",
    amount: 120.50,
    date: "2023-04-01",
  },
  {
    id: 2,
    name: "Electricity Bill",
    amount: 85.00,
    date: "2023-04-05",
  },
  {
    id: 3,
    name: "Internet",
    amount: 60.00,
    date: "2023-04-10",
  },
  {
    id: 4,
    name: "Gas",
    amount: 45.75,
    date: "2023-04-15",
  },
  {
    id: 5,
    name: "Restaurant",
    amount: 78.25,
    date: "2023-04-20",
  },
]

export function RecentExpenses() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {expenses.map((expense) => (
          <TableRow key={expense.id}>
            <TableCell>{expense.name}</TableCell>
            <TableCell>${expense.amount.toFixed(2)}</TableCell>
            <TableCell>{expense.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

