"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { BarChart, Users, Activity, CreditCard, ShoppingCart, RefreshCw, MessageCircle, Star } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Home() {
  const { toast } = useToast()

  return (
    <div className="min-h-screen p-5 bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex  h-16 items-center justify-between px-4">
          <div>
            <h1 className="text-2xl font-bold">ShadCN Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              A modern UI built with ShadCN components.
            </p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <Card>
          <CardHeader>
            <CardTitle>Welcome Back!</CardTitle>
            <CardDescription>
              Get a quick overview of your stats, transactions, and user feedback.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Dashboard Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Revenue" value="$45,231.89" growth="+20.1%" icon={<BarChart />} />
          <StatCard title="Active Users" value="+2350" growth="+180.1%" icon={<Users />} />
          <StatCard title="Active Sessions" value="+12,234" growth="+19%" icon={<Activity />} />
          <StatCard title="Sales" value="+573" growth="+201 since last hour" icon={<CreditCard />} />
          <StatCard title="Orders Processed" value="+1,250" growth="+8.5% this week" icon={<ShoppingCart />} />
          <StatCard title="Refunds Issued" value="+12" growth="-5% from last month" icon={<RefreshCw />} />
          <StatCard title="Engagement Rate" value="76%" growth="+12.3% from last week" icon={<Star />} />
          <StatCard title="Support Tickets" value="34 Pending" growth="5 new today" icon={<MessageCircle />} />
        </div>

        {/* Recent Transactions Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Latest financial activities</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TransactionRow date="Feb 10, 2025" id="#T12345" amount="$1,250.00" status="Completed" />
                <TransactionRow date="Feb 9, 2025" id="#T12344" amount="$750.00" status="Pending" />
                <TransactionRow date="Feb 8, 2025" id="#T12343" amount="$300.00" status="Failed" />
                <TransactionRow date="Feb 7, 2025" id="#T12342" amount="$2,500.00" status="Completed" />
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* User Feedback */}
        <Card>
          <CardHeader>
            <CardTitle>What Users Are Saying</CardTitle>
            <CardDescription>Real feedback from our customers</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Testimonial name="Alice Johnson" feedback="ShadCN's UI components are sleek and easy to use. Highly recommend!" />
            <Testimonial name="Michael Smith" feedback="This dashboard makes managing my sales super easy!" />
            <Testimonial name="Sarah Brown" feedback="The customization options are fantastic. It’s the perfect UI library!" />
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card>
          <CardHeader>
            <CardTitle>Get Started with ShadCN</CardTitle>
            <CardDescription>Ready to build amazing UIs? Start using ShadCN today!</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => {
                toast({
                  title: "Explore ShadCN",
                  description: "Visit the documentation to learn more!",
                })
              }}
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

// Reusable StatCard Component
function StatCard({ title, value, growth, icon }: { title: string; value: string; growth: string; icon: React.ReactNode }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-5 w-5 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{growth}</p>
      </CardContent>
    </Card>
  )
}

// Reusable TransactionRow Component
function TransactionRow({ date, id, amount, status }: { date: string; id: string; amount: string; status: string }) {
  return (
    <TableRow>
      <TableCell>{date}</TableCell>
      <TableCell>{id}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{status}</TableCell>
    </TableRow>
  )
}

// Reusable Testimonial Component
function Testimonial({ name, feedback }: { name: string; feedback: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{feedback}</p>
      </CardContent>
    </Card>
  )
}
