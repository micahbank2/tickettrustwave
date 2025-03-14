
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import TrustScore from "@/components/ui/TrustScore";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from "recharts";
import { 
  Users, 
  BarChart3, 
  DollarSign, 
  AlertTriangle, 
  Download, 
  Filter, 
  Search, 
  ChevronRight, 
  Ban, 
  CheckCircle, 
  UserCheck, 
  MessageSquare, 
  Shield
} from "lucide-react";

// Mock data for charts
const statsData = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 3600 },
  { name: 'Mar', value: 2800 },
  { name: 'Apr', value: 4200 },
  { name: 'May', value: 5000 },
  { name: 'Jun', value: 4500 },
  { name: 'Jul', value: 6000 },
];

const fraudDetectionData = [
  { name: 'Cleared', value: 85 },
  { name: 'Flagged', value: 12 },
  { name: 'Manual Review', value: 3 },
];

const COLORS = ['#0088FE', '#FF8042', '#FFBB28'];

// Mock data for users and transactions
const users = [
  { 
    id: 1, 
    name: "John Smith", 
    email: "john@example.com", 
    role: "seller", 
    status: "active", 
    trustScore: 94,
    joinDate: "2022-08-15",
    transactions: 27
  },
  { 
    id: 2, 
    name: "Emily Johnson", 
    email: "emily@example.com", 
    role: "buyer", 
    status: "active", 
    trustScore: 88,
    joinDate: "2022-10-03",
    transactions: 14
  },
  { 
    id: 3, 
    name: "Michael Davis", 
    email: "michael@example.com", 
    role: "both", 
    status: "flagged", 
    trustScore: 65,
    joinDate: "2023-01-22",
    transactions: 8
  },
  { 
    id: 4, 
    name: "Sarah Wilson", 
    email: "sarah@example.com", 
    role: "seller", 
    status: "suspended", 
    trustScore: 45,
    joinDate: "2022-11-18",
    transactions: 5
  },
  { 
    id: 5, 
    name: "Robert Brown", 
    email: "robert@example.com", 
    role: "buyer", 
    status: "active", 
    trustScore: 97,
    joinDate: "2023-02-08",
    transactions: 19
  }
];

const transactions = [
  { 
    id: 101, 
    event: "NBA Finals - Game 7",
    buyer: "Emily Johnson", 
    seller: "John Smith",
    amount: "$420.00", 
    status: "completed", 
    date: "2023-06-18",
    escrowStatus: "released",
    fraudDetection: "clear"
  },
  { 
    id: 102, 
    event: "Taylor Swift Concert",
    buyer: "Sarah Wilson", 
    seller: "Michael Davis",
    amount: "$350.00", 
    status: "in_dispute", 
    date: "2023-06-15",
    escrowStatus: "held",
    fraudDetection: "flagged"
  },
  { 
    id: 103, 
    event: "Comic-Con VIP Pass",
    buyer: "Robert Brown", 
    seller: "John Smith",
    amount: "$230.00", 
    status: "in_escrow", 
    date: "2023-06-20",
    escrowStatus: "pending",
    fraudDetection: "clear"
  },
  { 
    id: 104, 
    event: "Broadway Show - Hamilton",
    buyer: "Emily Johnson", 
    seller: "John Smith",
    amount: "$275.00", 
    status: "completed", 
    date: "2023-06-10",
    escrowStatus: "released",
    fraudDetection: "clear"
  }
];

// Mock data for disputes
const disputes = [
  { 
    id: 201, 
    event: "Taylor Swift Concert",
    buyer: "Sarah Wilson", 
    seller: "Michael Davis",
    amount: "$350.00", 
    status: "open", 
    openDate: "2023-06-15",
    reason: "Ticket authenticity"
  },
  { 
    id: 202, 
    event: "Coachella VIP Pass",
    buyer: "Alex Thompson", 
    seller: "Jessica Miller",
    amount: "$580.00", 
    status: "under_review", 
    openDate: "2023-06-12",
    reason: "Wrong ticket details"
  },
  { 
    id: 203, 
    event: "UFC 287",
    buyer: "David Lee", 
    seller: "James Wilson",
    amount: "$420.00", 
    status: "resolved", 
    openDate: "2023-06-05",
    resolvedDate: "2023-06-08",
    resolution: "Refund issued"
  }
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const getUserStatusBadge = (status: string) => {
    switch(status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>;
      case "flagged":
        return <Badge className="bg-orange-500">Flagged</Badge>;
      case "suspended":
        return <Badge className="bg-red-500">Suspended</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getDisputeStatusBadge = (status: string) => {
    switch(status) {
      case "open":
        return <Badge className="bg-orange-500">Open</Badge>;
      case "under_review":
        return <Badge variant="secondary">Under Review</Badge>;
      case "resolved":
        return <Badge className="bg-green-500">Resolved</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getTransactionStatusBadge = (status: string) => {
    switch(status) {
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>;
      case "in_escrow":
        return <Badge variant="secondary">In Escrow</Badge>;
      case "in_dispute":
        return <Badge className="bg-orange-500">In Dispute</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getFraudDetectionBadge = (status: string) => {
    switch(status) {
      case "clear":
        return <Badge className="bg-green-500">Clear</Badge>;
      case "flagged":
        return <Badge className="bg-red-500">Flagged</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
          <div>
            <div className="flex items-center">
              <Shield className="mr-2 h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            </div>
            <p className="text-muted-foreground mt-1">
              Manage users, transactions, and platform settings
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Export Reports
            </Button>
            <Button>
              System Settings
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full md:w-[600px] grid-cols-3">
            <TabsTrigger value="overview">Platform Overview</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="transactions">Transactions & Disputes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    Total Users
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">1,248</p>
                  <p className="text-sm text-muted-foreground">72 new this week</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-blue-500" />
                    Active Listings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">347</p>
                  <p className="text-sm text-muted-foreground">24 flagged for review</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <DollarSign className="mr-2 h-5 w-5 text-green-500" />
                    Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">$28,459</p>
                  <p className="text-sm text-muted-foreground">+12.5% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5 text-orange-500" />
                    Open Disputes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">16</p>
                  <p className="text-sm text-muted-foreground">5 require immediate attention</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Transaction Volume</CardTitle>
                  <CardDescription>Monthly transaction volume over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={statsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Download Report
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>AI Fraud Detection</CardTitle>
                  <CardDescription>Ticket listings analyzed by AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-60 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={fraudDetectionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {fraudDetectionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-sm">
                    <p className="text-muted-foreground">AI Accuracy Rate: <span className="font-medium text-foreground">97.5%</span></p>
                  </div>
                  <Button variant="outline" size="sm">Details</Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest platform events and alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 mt-0.5">
                      <span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
                    </div>
                    <div>
                      <p className="font-medium">Dispute Opened</p>
                      <p className="text-sm text-muted-foreground">Sarah Wilson opened a dispute for Taylor Swift Concert tickets</p>
                      <p className="text-xs text-muted-foreground mt-1">20 minutes ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-0.5">
                      <span className="flex h-2 w-2 rounded-full bg-red-500"></span>
                    </div>
                    <div>
                      <p className="font-medium">Flagged Account</p>
                      <p className="text-sm text-muted-foreground">AI detected suspicious activity on Michael Davis's account</p>
                      <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-0.5">
                      <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                    </div>
                    <div>
                      <p className="font-medium">Large Transaction Completed</p>
                      <p className="text-sm text-muted-foreground">$580 transaction for Coachella VIP Pass successfully completed</p>
                      <p className="text-xs text-muted-foreground mt-1">3 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-0.5">
                      <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                    </div>
                    <div>
                      <p className="font-medium">New Verified Seller</p>
                      <p className="text-sm text-muted-foreground">Robert Brown completed verification and listed first tickets</p>
                      <p className="text-xs text-muted-foreground mt-1">6 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Activity</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="users" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>View and manage platform users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search users by name or email..." className="pl-10" />
                  </div>
                  <Button variant="outline" className="md:w-auto">
                    <Filter className="mr-2 h-4 w-4" /> Filters
                  </Button>
                </div>
                
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Trust Score</TableHead>
                        <TableHead>Transactions</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                              <p className="text-xs text-muted-foreground">Joined: {user.joinDate}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="capitalize">
                              {user.role}
                            </Badge>
                          </TableCell>
                          <TableCell>{getUserStatusBadge(user.status)}</TableCell>
                          <TableCell>
                            <TrustScore score={user.trustScore} size="sm" />
                          </TableCell>
                          <TableCell>{user.transactions}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end space-x-2">
                              {user.status === "active" && (
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <Ban className="h-4 w-4 text-red-500" />
                                </Button>
                              )}
                              {user.status === "flagged" && (
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <UserCheck className="h-4 w-4 text-green-500" />
                                </Button>
                              )}
                              {user.status === "suspended" && (
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <UserCheck className="h-4 w-4 text-green-500" />
                                </Button>
                              )}
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing 5 of 1,248 users
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="transactions" className="mt-6 space-y-6">
            <Tabs defaultValue="all">
              <TabsList className="grid w-full md:w-[400px] grid-cols-2">
                <TabsTrigger value="all">All Transactions</TabsTrigger>
                <TabsTrigger value="disputes">Disputes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Transaction Monitoring</CardTitle>
                    <CardDescription>View and manage all platform transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                      <div className="relative flex-grow">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search transactions..." className="pl-10" />
                      </div>
                      <Button variant="outline" className="md:w-auto">
                        <Filter className="mr-2 h-4 w-4" /> Filters
                      </Button>
                    </div>
                    
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Transaction</TableHead>
                            <TableHead>Buyer/Seller</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>AI Check</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {transactions.map((transaction) => (
                            <TableRow key={transaction.id}>
                              <TableCell>
                                <div>
                                  <p className="font-medium">{transaction.event}</p>
                                  <p className="text-xs text-muted-foreground">ID: #{transaction.id}</p>
                                  <p className="text-xs text-muted-foreground">Date: {transaction.date}</p>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div>
                                  <p className="text-sm">Buyer: {transaction.buyer}</p>
                                  <p className="text-sm">Seller: {transaction.seller}</p>
                                </div>
                              </TableCell>
                              <TableCell>{transaction.amount}</TableCell>
                              <TableCell>{getTransactionStatusBadge(transaction.status)}</TableCell>
                              <TableCell>{getFraudDetectionBadge(transaction.fraudDetection)}</TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end space-x-2">
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <ChevronRight className="h-4 w-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <div className="text-sm text-muted-foreground">
                      Showing 4 of 320 transactions
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">Previous</Button>
                      <Button variant="outline" size="sm">Next</Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="disputes" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Dispute Resolution</CardTitle>
                    <CardDescription>Manage and resolve user disputes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Dispute</TableHead>
                            <TableHead>Parties</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Reason</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {disputes.map((dispute) => (
                            <TableRow key={dispute.id}>
                              <TableCell>
                                <div>
                                  <p className="font-medium">{dispute.event}</p>
                                  <p className="text-xs text-muted-foreground">ID: #{dispute.id}</p>
                                  <p className="text-xs text-muted-foreground">Opened: {dispute.openDate}</p>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div>
                                  <p className="text-sm">Buyer: {dispute.buyer}</p>
                                  <p className="text-sm">Seller: {dispute.seller}</p>
                                </div>
                              </TableCell>
                              <TableCell>{dispute.amount}</TableCell>
                              <TableCell>{getDisputeStatusBadge(dispute.status)}</TableCell>
                              <TableCell>
                                <p className="text-sm">{dispute.reason}</p>
                                {dispute.resolution && (
                                  <p className="text-xs text-muted-foreground mt-1">Resolution: {dispute.resolution}</p>
                                )}
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end space-x-2">
                                  {dispute.status !== "resolved" && (
                                    <Button size="sm">Review</Button>
                                  )}
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <ChevronRight className="h-4 w-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <div className="text-sm text-muted-foreground">
                      Showing 3 of 16 disputes
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" /> Export Report
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
