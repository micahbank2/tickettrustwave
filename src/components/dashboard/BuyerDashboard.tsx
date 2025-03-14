import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrustScore from "@/components/ui/TrustScore";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, Filter, Ticket, Calendar, MapPin, DollarSign, ThumbsUp, Clock, CheckCircle, AlertCircle, HelpCircle } from "lucide-react";

const recentTransactions = [
  { 
    id: 1, 
    event: "Taylor Swift | The Eras Tour",
    date: "May 15, 2023",
    venue: "Sofi Stadium, Los Angeles",
    price: "$350.00",
    status: "completed",
    seller: "John Doe",
    sellerScore: 95
  },
  { 
    id: 2, 
    event: "NBA Finals 2023 - Game 5",
    date: "June 12, 2023",
    venue: "Chase Center, San Francisco",
    price: "$275.00",
    status: "pending",
    seller: "Jane Smith",
    sellerScore: 88
  },
  { 
    id: 3, 
    event: "Coldplay | Music of the Spheres Tour",
    date: "August 3, 2023",
    venue: "Rose Bowl, Pasadena",
    price: "$180.00",
    status: "in_escrow",
    seller: "Mike Johnson",
    sellerScore: 76
  }
];

const ticketListings = [
  { 
    id: 101, 
    event: "Beyoncé | Renaissance World Tour",
    date: "August 23, 2023",
    venue: "Metlife Stadium, NJ",
    price: "$420.00",
    seller: "Sarah Williams",
    sellerScore: 92,
    fraudCheck: "clear"
  },
  { 
    id: 102, 
    event: "Formula 1 Grand Prix",
    date: "September 5, 2023",
    venue: "Circuit of the Americas, Austin",
    price: "$550.00",
    seller: "Robert Chen",
    sellerScore: 97,
    fraudCheck: "clear"
  },
  { 
    id: 103, 
    event: "Harry Styles | Love On Tour",
    date: "July 29, 2023",
    venue: "Madison Square Garden, NY",
    price: "$310.00",
    seller: "Emma Davis",
    sellerScore: 65,
    fraudCheck: "flagged"
  },
  { 
    id: 104, 
    event: "Coachella Valley Music Festival - Weekend 1",
    date: "April 14-16, 2023",
    venue: "Empire Polo Club, Indio",
    price: "$780.00",
    seller: "Tom Wilson",
    sellerScore: 89,
    fraudCheck: "clear"
  }
];

const BuyerDashboard = () => {
  const navigate = useNavigate();

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>;
      case "pending":
        return <Badge variant="outline" className="text-orange-500 border-orange-500">Pending</Badge>;
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
      default:
        return <Badge variant="outline">Pending</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Ticket className="mr-2 h-5 w-5 text-primary" />
              Available Tickets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">247</p>
            <p className="text-sm text-muted-foreground">Across 53 events</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" onClick={() => navigate("/marketplace")}>
              Browse Marketplace
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Clock className="mr-2 h-5 w-5 text-orange-500" />
              Pending Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">2</p>
            <p className="text-sm text-muted-foreground">Requiring your attention</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">View Transactions</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              Completed Purchases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">8</p>
            <p className="text-sm text-muted-foreground">All transactions successful</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">View History</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Marketplace Search */}
      <Card>
        <CardHeader>
          <CardTitle>Marketplace</CardTitle>
          <CardDescription>
            Find tickets for your favorite events with our secure escrow system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search events, artists, or venues..." className="pl-10" />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
          </div>

          <div className="space-y-4">
            {ticketListings.map(listing => (
              <Card key={listing.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-3/4 p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{listing.event}</h3>
                        <div className="flex items-center mt-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" /> {listing.date}
                        </div>
                        <div className="flex items-center mt-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" /> {listing.venue}
                        </div>
                      </div>
                      <div>
                        {getFraudCheckBadge(listing.fraudCheck)}
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/4 bg-gray-50 p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Seller:</span>
                        <TrustScore score={listing.sellerScore} size="sm" showTooltip />
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm font-medium">Price:</span>
                        <span className="font-bold">{listing.price}</span>
                      </div>
                    </div>
                    <Button className="mt-4 w-full">View Details</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <Button variant="outline">Load More</Button>
        </CardFooter>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>
            Track your purchases and ongoing escrow processes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map(transaction => (
              <Card key={transaction.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-3/4 p-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold">{transaction.event}</h3>
                        <div className="flex items-center mt-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" /> {transaction.date}
                        </div>
                        <div className="flex items-center mt-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" /> {transaction.venue}
                        </div>
                      </div>
                      <div>
                        {getStatusBadge(transaction.status)}
                      </div>
                    </div>
                    
                    {transaction.status === "in_escrow" && (
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Escrow Progress</span>
                          <span>In Verification</span>
                        </div>
                        <Progress value={66} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>Deposit Made</span>
                          <span>Payment Received</span>
                          <span>Verification</span>
                          <span>Complete</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-full md:w-1/4 bg-gray-50 p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Seller:</span>
                        <div className="flex items-center">
                          <span className="text-sm mr-1">{transaction.seller}</span>
                          <TrustScore score={transaction.sellerScore} size="sm" showText={false} />
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm font-medium">Price:</span>
                        <span className="font-bold">{transaction.price}</span>
                      </div>
                    </div>
                    
                    {transaction.status === "completed" && (
                      <Button variant="outline" className="mt-4 w-full">
                        <ThumbsUp className="mr-1 h-4 w-4" /> Leave Review
                      </Button>
                    )}
                    
                    {transaction.status === "pending" && (
                      <Button className="mt-4 w-full">Pay Now</Button>
                    )}
                    
                    {transaction.status === "in_escrow" && (
                      <Button className="mt-4 w-full">Verify Receipt</Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
        <CardFooter className="justify-between">
          <Button variant="outline">View All Transactions</Button>
          <Button variant="secondary">
            <HelpCircle className="mr-1 h-4 w-4" /> Need Help?
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BuyerDashboard;
