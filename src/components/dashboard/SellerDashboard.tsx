
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import TrustScore from "@/components/ui/TrustScore";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ListPlus, Ticket, DollarSign, Clock, CheckCircle, ChevronRight, Edit, Trash2, Star, BarChart3, AlertTriangle, MessageSquare } from "lucide-react";

// Mock data for charts
const trustScoreHistory = [
  { name: 'Jan', score: 78 },
  { name: 'Feb', score: 80 },
  { name: 'Mar', score: 83 },
  { name: 'Apr', score: 85 },
  { name: 'May', score: 87 },
  { name: 'Jun', score: 89 },
  { name: 'Jul', score: 92 },
];

const reviewBreakdown = [
  { name: 'Communication', value: 4.8 },
  { name: 'Ticket Quality', value: 4.7 },
  { name: 'Timeliness', value: 4.6 },
  { name: 'Accuracy', value: 4.9 },
  { name: 'Overall', value: 4.8 },
];

// Mock data for listings
const listings = [
  { 
    id: 201, 
    event: "Red Hot Chili Peppers Tour",
    date: "August 14, 2023",
    venue: "Fenway Park, Boston",
    price: "$195.00",
    status: "active",
    views: 87,
    fraudCheck: "clear"
  },
  { 
    id: 202, 
    event: "The Weeknd | After Hours Tour",
    date: "September 22, 2023",
    venue: "T-Mobile Arena, Las Vegas",
    price: "$250.00",
    status: "active",
    views: 134,
    fraudCheck: "clear"
  },
  { 
    id: 203, 
    event: "US Open Tennis - Men's Finals",
    date: "September 10, 2023",
    venue: "Arthur Ashe Stadium, NY",
    price: "$420.00",
    status: "pending_review",
    views: 0,
    fraudCheck: "in_review"
  },
  { 
    id: 204, 
    event: "Bruno Mars Concert",
    date: "July 8, 2023",
    venue: "Staples Center, Los Angeles",
    price: "$175.00",
    status: "sold",
    views: 212,
    fraudCheck: "clear"
  }
];

// Mock data for transactions
const sellerTransactions = [
  { 
    id: 301, 
    event: "Billie Eilish Concert",
    date: "June 18, 2023",
    buyer: "Alex Thompson",
    price: "$210.00",
    status: "completed",
    reviewScore: 5
  },
  { 
    id: 302, 
    event: "Broadway Show - Hamilton",
    date: "May 30, 2023",
    buyer: "Maria Garcia",
    price: "$350.00",
    status: "in_escrow",
    escrowStep: "verification"
  },
  { 
    id: 303, 
    event: "Lakers vs. Warriors",
    date: "April 12, 2023",
    buyer: "David Kim",
    price: "$285.00",
    status: "completed",
    reviewScore: 4
  }
];

const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState("listings");
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>;
      case "pending_review":
        return <Badge variant="outline" className="text-orange-500 border-orange-500">Pending Review</Badge>;
      case "sold":
        return <Badge className="bg-blue-500">Sold</Badge>;
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>;
      case "in_escrow":
        return <Badge variant="secondary">In Escrow</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getFraudCheckBadge = (status: string) => {
    switch(status) {
      case "clear":
        return <Badge className="bg-green-500">AI Verified</Badge>;
      case "flagged":
        return <Badge className="bg-red-500">Flagged</Badge>;
      case "in_review":
        return <Badge variant="outline" className="text-orange-500 border-orange-500">In Review</Badge>;
      default:
        return <Badge variant="outline">Pending</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Overview & Trust Score */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Seller Overview</CardTitle>
              <CardDescription>Summary of your listings and transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col space-y-2 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">Active Listings</span>
                    <Ticket className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-2xl font-bold">3</p>
                </div>
                
                <div className="flex flex-col space-y-2 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">Tickets Sold</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-2xl font-bold">8</p>
                </div>
                
                <div className="flex flex-col space-y-2 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">Total Revenue</span>
                    <DollarSign className="h-4 w-4 text-blue-500" />
                  </div>
                  <p className="text-2xl font-bold">$1,840</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium mb-3">Your Transaction Timeline</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={trustScoreHistory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <ListPlus className="mr-2 h-4 w-4" /> Create New Listing
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Create New Ticket Listing</DialogTitle>
                    <DialogDescription>
                      List your ticket for sale with our secure escrow system
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <label htmlFor="event" className="text-sm font-medium">Event Name</label>
                      <Input id="event" placeholder="e.g. Taylor Swift Concert" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="date" className="text-sm font-medium">Event Date</label>
                        <Input id="date" type="date" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="price" className="text-sm font-medium">Price ($)</label>
                        <Input id="price" type="number" placeholder="0.00" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="venue" className="text-sm font-medium">Venue</label>
                      <Input id="venue" placeholder="e.g. Madison Square Garden" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="section" className="text-sm font-medium">Section & Seat</label>
                      <Input id="section" placeholder="e.g. Section 101, Row 7, Seat 12" />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">Ticket Image</label>
                      <Input type="file" />
                      <p className="text-xs text-muted-foreground">Upload an image of the ticket (with sensitive info blurred)</p>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">List Ticket</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Your Trust Score</span>
                <TrustScore score={92} size="md" showText={false} />
              </CardTitle>
              <CardDescription>Based on your transaction history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full border-8 border-primary-light flex items-center justify-center bg-white">
                  <div className="text-center">
                    <p className="text-3xl font-bold">92%</p>
                    <p className="text-xs text-muted-foreground">Excellent</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <h3 className="font-medium text-sm">Review Breakdown</h3>
                {reviewBreakdown.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <span className="text-sm">{item.name}</span>
                    <div className="flex items-center">
                      <span className="mr-2 font-medium">{item.value}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < Math.floor(item.value) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <BarChart3 className="mr-2 h-4 w-4" /> Detailed Analytics
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Tabs for Listings and Transactions */}
      <Card>
        <CardHeader>
          <Tabs defaultValue="listings" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full sm:w-[400px] grid-cols-2">
              <TabsTrigger value="listings">My Listings</TabsTrigger>
              <TabsTrigger value="transactions">My Transactions</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          {activeTab === "listings" && (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event Details</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>AI Check</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {listings.map((listing) => (
                    <TableRow key={listing.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{listing.event}</p>
                          <p className="text-sm text-muted-foreground">{listing.date}</p>
                          <p className="text-sm text-muted-foreground">{listing.venue}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(listing.status)}
                        {listing.status === "active" && (
                          <p className="text-xs text-muted-foreground mt-1">{listing.views} views</p>
                        )}
                      </TableCell>
                      <TableCell>{listing.price}</TableCell>
                      <TableCell>{getFraudCheckBadge(listing.fraudCheck)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          {listing.status === "active" && (
                            <>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </>
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
          )}

          {activeTab === "transactions" && (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event Details</TableHead>
                    <TableHead>Buyer</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sellerTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{transaction.event}</p>
                          <p className="text-sm text-muted-foreground">{transaction.date}</p>
                        </div>
                      </TableCell>
                      <TableCell>{transaction.buyer}</TableCell>
                      <TableCell>{transaction.price}</TableCell>
                      <TableCell>
                        <div>
                          {getStatusBadge(transaction.status)}
                          {transaction.status === "completed" && transaction.reviewScore && (
                            <div className="flex mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-3 w-3 ${i < transaction.reviewScore ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          {transaction.status === "in_escrow" && (
                            <Button size="sm" variant="outline">Verify</Button>
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
          )}
        </CardContent>
        <CardFooter className="justify-between">
          <Button variant="outline">
            {activeTab === "listings" ? "View All Listings" : "View All Transactions"}
          </Button>
          <Button variant="secondary">
            <MessageSquare className="mr-1 h-4 w-4" /> Support
          </Button>
        </CardFooter>
      </Card>
      
      {/* Support Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5 text-orange-500" />
            Need Help?
          </CardTitle>
          <CardDescription>
            Our support team is here to assist you with any issues or questions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Open Support Ticket</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Create a new support ticket for our team to assist you
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Create Ticket
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Start a dispute resolution process for transaction issues
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Start Dispute
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Knowledge Base</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Browse our FAQs and guides for helpful information
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  View Articles
                </Button>
              </CardFooter>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SellerDashboard;
