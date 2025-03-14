
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlurCard from "@/components/ui/BlurCard";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Shield, 
  Zap,
  BarChart3, 
  CreditCard, 
  Search,
  Filter,
  Ticket,
  Calendar,
  MapPin,
  DollarSign,
  ThumbsUp,
  Clock,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  ListPlus,
  Users,
  LineChart,
  PieChart,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardFeatures = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("buyer");

  return (
    <div className="container mx-auto px-4">
      {/* Dashboard Features Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Powerful <span className="title-gradient">Dashboard</span> Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our intuitive dashboards designed for buyers, sellers, and administrators,
            all featuring our revolutionary security and trust features.
          </p>
        </div>

        <Tabs defaultValue="buyer" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="buyer">Buyer Dashboard</TabsTrigger>
              <TabsTrigger value="seller">Seller Dashboard</TabsTrigger>
              <TabsTrigger value="admin">Admin Portal</TabsTrigger>
            </TabsList>
          </div>
          
          {/* Buyer Dashboard Preview */}
          <TabsContent value="buyer" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Search className="mr-2 h-5 w-5 text-primary" />
                    Marketplace
                  </CardTitle>
                  <CardDescription>
                    Find tickets for your favorite events with our secure escrow system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-grow">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <div className="h-10 pl-10 bg-background flex items-center border rounded-md px-3">
                        Search events, artists, or venues...
                      </div>
                    </div>
                    <Button variant="outline" className="md:w-auto">
                      <Filter className="mr-2 h-4 w-4" /> Filters
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <Card className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-3/4 p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">Beyoncé | Renaissance World Tour</h3>
                              <div className="flex items-center mt-1 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4 mr-1" /> August 23, 2023
                              </div>
                              <div className="flex items-center mt-1 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4 mr-1" /> Metlife Stadium, NJ
                              </div>
                            </div>
                            <div>
                              <Badge className="bg-green-500">AI Verified</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-1/4 bg-gray-50 p-4 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Seller:</span>
                              <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                                92
                              </div>
                            </div>
                            <div className="mt-2 flex items-center justify-between">
                              <span className="text-sm font-medium">Price:</span>
                              <span className="font-bold">$420.00</span>
                            </div>
                          </div>
                          <Button className="mt-4 w-full">View Details</Button>
                        </div>
                      </div>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-3/4 p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">Formula 1 Grand Prix</h3>
                              <div className="flex items-center mt-1 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4 mr-1" /> September 5, 2023
                              </div>
                              <div className="flex items-center mt-1 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4 mr-1" /> Circuit of the Americas, Austin
                              </div>
                            </div>
                            <div>
                              <Badge className="bg-green-500">AI Verified</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-1/4 bg-gray-50 p-4 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Seller:</span>
                              <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                                97
                              </div>
                            </div>
                            <div className="mt-2 flex items-center justify-between">
                              <span className="text-sm font-medium">Price:</span>
                              <span className="font-bold">$550.00</span>
                            </div>
                          </div>
                          <Button className="mt-4 w-full">View Details</Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-orange-500" />
                    Transaction Progress
                  </CardTitle>
                  <CardDescription>Transparent escrow system for secure payments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Taylor Swift | The Eras Tour</span>
                      </div>
                      <Badge variant="outline" className="text-green-500 border-green-500 mb-2">Completed</Badge>
                      <div className="flex items-center mt-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" /> May 15, 2023
                      </div>
                      <div className="flex items-center mt-1 text-sm text-muted-foreground">
                        <DollarSign className="h-4 w-4 mr-1" /> $350.00
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">NBA Finals 2023</span>
                      </div>
                      <Badge variant="secondary" className="mb-2">In Escrow</Badge>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Escrow Progress</span>
                          <span>In Verification</span>
                        </div>
                        <Progress value={66} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>Deposit</span>
                          <span>Payment</span>
                          <span>Verify</span>
                          <span>Complete</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      <ThumbsUp className="mr-2 h-4 w-4" /> Complete Transaction
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Seller Dashboard Preview */}
          <TabsContent value="seller" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Seller Overview</CardTitle>
                    <CardDescription>Summary of your listings and transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
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
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Your Listings</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between p-2 border-b">
                            <div>
                              <p className="font-medium">Red Hot Chili Peppers Tour</p>
                              <p className="text-sm text-muted-foreground">Aug 14, 2023 | Fenway Park</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className="bg-green-500">Active</Badge>
                              <span className="font-bold">$195</span>
                            </div>
                          </div>
                          
                          <div className="flex justify-between p-2 border-b">
                            <div>
                              <p className="font-medium">The Weeknd | After Hours Tour</p>
                              <p className="text-sm text-muted-foreground">Sep 22, 2023 | T-Mobile Arena</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className="bg-green-500">Active</Badge>
                              <span className="font-bold">$250</span>
                            </div>
                          </div>
                          
                          <div className="flex justify-between p-2">
                            <div>
                              <p className="font-medium">US Open Tennis - Men's Finals</p>
                              <p className="text-sm text-muted-foreground">Sep 10, 2023 | Arthur Ashe Stadium</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-orange-500 border-orange-500">Pending</Badge>
                              <span className="font-bold">$420</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          <ListPlus className="mr-2 h-4 w-4" /> Create New Listing
                        </Button>
                      </CardFooter>
                    </Card>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>Your Trust Score</span>
                      <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                        92
                      </div>
                    </CardTitle>
                    <CardDescription>Based on your transaction history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center">
                      <div className="w-32 h-32 rounded-full border-8 border-primary/10 flex items-center justify-center bg-white relative">
                        <div className="absolute inset-0 rounded-full border-8 border-green-500 border-t-transparent border-r-transparent border-b-transparent transform -rotate-45"></div>
                        <div className="text-center">
                          <p className="text-3xl font-bold">92%</p>
                          <p className="text-xs text-muted-foreground">Excellent</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <h3 className="font-medium text-sm">Review Breakdown</h3>
                      {[
                        { name: "Communication", value: 4.8 },
                        { name: "Ticket Quality", value: 4.7 },
                        { name: "Timeliness", value: 4.6 },
                        { name: "Accuracy", value: 4.9 }
                      ].map((item) => (
                        <div key={item.name} className="flex items-center justify-between">
                          <span className="text-sm">{item.name}</span>
                          <div className="flex items-center">
                            <span className="mr-2 font-medium">{item.value}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <div 
                                  key={i} 
                                  className={`h-3 w-3 rounded-full mr-0.5 ${i < Math.floor(item.value) ? 'bg-yellow-400' : 'bg-gray-200'}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Admin Dashboard Preview */}
          <TabsContent value="admin" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Admin Dashboard</CardTitle>
                  <CardDescription>Complete oversight and management of the platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex flex-col space-y-2 p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-muted-foreground">Active Users</span>
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-2xl font-bold">1,248</p>
                      <p className="text-xs text-green-500">+12% from last month</p>
                    </div>
                    
                    <div className="flex flex-col space-y-2 p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-muted-foreground">Total Transactions</span>
                        <CreditCard className="h-4 w-4 text-blue-500" />
                      </div>
                      <p className="text-2xl font-bold">845</p>
                      <p className="text-xs text-green-500">+8% from last month</p>
                    </div>
                    
                    <div className="flex flex-col space-y-2 p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-muted-foreground">Fraud Prevention</span>
                        <Shield className="h-4 w-4 text-orange-500" />
                      </div>
                      <p className="text-2xl font-bold">43</p>
                      <p className="text-xs text-orange-500">Listings prevented</p>
                    </div>
                    
                    <div className="flex flex-col space-y-2 p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-muted-foreground">Platform Revenue</span>
                        <DollarSign className="h-4 w-4 text-green-500" />
                      </div>
                      <p className="text-2xl font-bold">$28,450</p>
                      <p className="text-xs text-green-500">+15% from last month</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <LineChart className="mr-2 h-4 w-4 text-primary" />
                          Transaction Volume
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="h-48 bg-gray-50 rounded flex items-center justify-center">
                        <div className="w-full h-32 px-4 flex items-end">
                          {[35, 45, 30, 60, 75, 50, 65].map((height, index) => (
                            <div 
                              key={index} 
                              className="flex-1 mx-1 bg-primary/80 rounded-t"
                              style={{ height: `${height}%` }}
                            ></div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <PieChart className="mr-2 h-4 w-4 text-primary" />
                          User Segments
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="h-48 bg-gray-50 rounded flex items-center justify-center">
                        <div className="relative w-32 h-32">
                          <div className="absolute inset-0 rounded-full border-[16px] border-primary"></div>
                          <div className="absolute inset-0 rounded-full border-[16px] border-green-400 border-t-transparent border-r-transparent border-b-transparent"></div>
                          <div className="absolute inset-0 rounded-full border-[16px] border-blue-400 border-t-transparent border-r-transparent border-l-transparent"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white"></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Transaction Flow Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Secure <span className="title-gradient">Transaction</span> Flow
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our revolutionary escrow system keeps both buyers and sellers protected throughout the entire process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <BlurCard className="p-6 flex flex-col items-center text-center" animateIn delay={0}>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Ticket className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Ticket Listing</h3>
            <p className="text-muted-foreground text-sm">
              Sellers create listings with details and images. AI automatically scans for potential fraud.
            </p>
            <div className="mt-4">
              <Badge className="bg-green-500">AI Verified</Badge>
            </div>
          </BlurCard>

          <BlurCard className="p-6 flex flex-col items-center text-center" animateIn delay={150}>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Escrow Deposit</h3>
            <p className="text-muted-foreground text-sm">
              Buyer funds are held securely in escrow until ticket delivery is confirmed.
            </p>
            <div className="mt-4">
              <Badge variant="secondary">In Escrow</Badge>
            </div>
          </BlurCard>

          <BlurCard className="p-6 flex flex-col items-center text-center" animateIn delay={300}>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Verification</h3>
            <p className="text-muted-foreground text-sm">
              Buyer confirms ticket delivery and authenticity before funds are released.
            </p>
            <div className="mt-4 w-full">
              <Progress value={66} className="h-2" />
            </div>
          </BlurCard>

          <BlurCard className="p-6 flex flex-col items-center text-center" animateIn delay={450}>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">4. Trust Updates</h3>
            <p className="text-muted-foreground text-sm">
              Buyers leave reviews that update the seller's Trust Score after successful transactions.
            </p>
            <div className="mt-4 flex">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-4 w-4 rounded-full mr-0.5 bg-yellow-400"
                />
              ))}
            </div>
          </BlurCard>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Experience <span className="title-gradient">Secure</span> Ticket Exchange?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Join thousands of users who buy and sell tickets with complete confidence on our platform.
        </p>
        <Button size="lg" onClick={() => navigate("/auth")}>
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default DashboardFeatures;
