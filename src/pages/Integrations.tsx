
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlurCard from "@/components/ui/BlurCard";
import { Progress } from "@/components/ui/progress";
import {
  Bell,
  Zap,
  RefreshCw,
  FileCode,
  Server,
  Workflow,
  CreditCard,
  ShieldAlert,
  Star,
  BarChart3,
  ArrowRight,
  Clock,
  Repeat,
  Webhook,
  GitBranch,
  Layers,
  Code,
  LucideGitFork,
  LucideGitMerge,
  Puzzle,
  Lock
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const IntegrationsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("automation");

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16">
        <div className="layout-grid">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">
              Platform <span className="title-gradient">Automation & Integrations</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our powerful API-driven architecture enables seamless automation, third-party integrations,
              and a future-proof foundation for your ticket exchange needs.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          {/* Automation & Integrations Section */}
          <div className="mb-20">
            <Tabs defaultValue="automation" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="automation">Event Automation</TabsTrigger>
                  <TabsTrigger value="integrations">API Integrations</TabsTrigger>
                  <TabsTrigger value="future">Future-Proofing</TabsTrigger>
                </TabsList>
              </div>
              
              {/* Event Automation Tab */}
              <TabsContent value="automation" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Workflow className="mr-2 h-5 w-5 text-primary" />
                        Event-Driven Workflows
                      </CardTitle>
                      <CardDescription>
                        Automated processes triggered at every stage of the transaction lifecycle
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="bg-gray-50 rounded-lg p-5">
                          <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <RefreshCw className="mr-2 h-5 w-5 text-blue-500" />
                            Transaction Lifecycle Automation
                          </h3>
                          
                          <div className="space-y-4 mt-4">
                            <div className="flex flex-col md:flex-row gap-4">
                              <div className="flex-1 border rounded-lg p-4 bg-white">
                                <div className="flex items-center mb-2">
                                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                    <span className="font-bold">1</span>
                                  </div>
                                  <h4 className="font-medium">Ticket Created</h4>
                                </div>
                                <p className="text-sm text-muted-foreground ml-11">
                                  AI fraud detection scan initiated
                                </p>
                                <p className="text-sm text-muted-foreground ml-11">
                                  Seller notified of listing status
                                </p>
                              </div>
                              
                              <div className="flex-1 border rounded-lg p-4 bg-white">
                                <div className="flex items-center mb-2">
                                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                    <span className="font-bold">2</span>
                                  </div>
                                  <h4 className="font-medium">Payment Received</h4>
                                </div>
                                <p className="text-sm text-muted-foreground ml-11">
                                  Funds held in secure escrow
                                </p>
                                <p className="text-sm text-muted-foreground ml-11">
                                  Seller and buyer notified
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex flex-col md:flex-row gap-4">
                              <div className="flex-1 border rounded-lg p-4 bg-white">
                                <div className="flex items-center mb-2">
                                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                    <span className="font-bold">3</span>
                                  </div>
                                  <h4 className="font-medium">Verification Complete</h4>
                                </div>
                                <p className="text-sm text-muted-foreground ml-11">
                                  Ticket authenticity confirmed
                                </p>
                                <p className="text-sm text-muted-foreground ml-11">
                                  Verification receipt generated
                                </p>
                              </div>
                              
                              <div className="flex-1 border rounded-lg p-4 bg-white">
                                <div className="flex items-center mb-2">
                                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                    <span className="font-bold">4</span>
                                  </div>
                                  <h4 className="font-medium">Funds Released</h4>
                                </div>
                                <p className="text-sm text-muted-foreground ml-11">
                                  Escrow released to seller
                                </p>
                                <p className="text-sm text-muted-foreground ml-11">
                                  Trust Score updated automatically
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-5">
                          <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <Bell className="mr-2 h-5 w-5 text-orange-500" />
                            Notification System
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div className="border rounded-lg p-4 bg-white">
                              <h4 className="font-medium mb-2">Email Notifications</h4>
                              <div className="space-y-2">
                                <Badge variant="outline" className="w-full justify-start font-normal text-xs">New Listing Confirmation</Badge>
                                <Badge variant="outline" className="w-full justify-start font-normal text-xs">Payment Received Alert</Badge>
                                <Badge variant="outline" className="w-full justify-start font-normal text-xs">Verification Required</Badge>
                                <Badge variant="outline" className="w-full justify-start font-normal text-xs">Transaction Complete</Badge>
                              </div>
                            </div>
                            
                            <div className="border rounded-lg p-4 bg-white">
                              <h4 className="font-medium mb-2">SMS Alerts</h4>
                              <div className="space-y-2">
                                <Badge variant="outline" className="w-full justify-start font-normal text-xs">Payment Confirmation</Badge>
                                <Badge variant="outline" className="w-full justify-start font-normal text-xs">Ticket Delivery</Badge>
                                <Badge variant="outline" className="w-full justify-start font-normal text-xs">Transaction Status</Badge>
                                <Badge variant="outline" className="w-full justify-start font-normal text-xs">Security Alerts</Badge>
                              </div>
                            </div>
                            
                            <div className="border rounded-lg p-4 bg-white">
                              <h4 className="font-medium mb-2">In-App Notifications</h4>
                              <div className="space-y-2">
                                <Badge variant="outline" className="w-full justify-start font-normal text-xs">Real-time Updates</Badge>
                                <Badge variant="outline" className="w-full justify-start font-normal text-xs">Trust Score Changes</Badge>
                                <Badge variant="outline" className="w-full justify-start font-normal text-xs">Listing Status Changes</Badge>
                                <Badge variant="outline" className="w-full justify-start font-normal text-xs">Review Requests</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                        Automation Control Center
                      </CardTitle>
                      <CardDescription>Customizable triggers and actions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-5">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-medium mb-3">Trust Score Engine</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Transaction History</span>
                              <Badge>60%</Badge>
                            </div>
                            <Progress value={60} className="h-2" />
                            
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Verification Speed</span>
                              <Badge>20%</Badge>
                            </div>
                            <Progress value={20} className="h-2" />
                            
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Review Ratings</span>
                              <Badge>15%</Badge>
                            </div>
                            <Progress value={15} className="h-2" />
                            
                            <div className="flex justify-between items-center">
                              <span className="text-sm">AI Fraud Analysis</span>
                              <Badge>5%</Badge>
                            </div>
                            <Progress value={5} className="h-2" />
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="font-medium">Automated Workflows</h3>
                          
                          <div className="border rounded-lg p-3 flex items-center justify-between">
                            <div className="flex items-center">
                              <Webhook className="h-4 w-4 text-blue-500 mr-2" />
                              <span className="text-sm">Webhook Triggers</span>
                            </div>
                            <Badge className="bg-green-500">Enabled</Badge>
                          </div>
                          
                          <div className="border rounded-lg p-3 flex items-center justify-between">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-blue-500 mr-2" />
                              <span className="text-sm">Scheduled Events</span>
                            </div>
                            <Badge className="bg-green-500">Enabled</Badge>
                          </div>
                          
                          <div className="border rounded-lg p-3 flex items-center justify-between">
                            <div className="flex items-center">
                              <Repeat className="h-4 w-4 text-blue-500 mr-2" />
                              <span className="text-sm">Recurring Tasks</span>
                            </div>
                            <Badge variant="outline">Optional</Badge>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button variant="outline" className="w-full">
                            Customize Automation Rules
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* API Integrations Tab */}
              <TabsContent value="integrations" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileCode className="mr-2 h-5 w-5 text-primary" />
                        Third-Party Integrations
                      </CardTitle>
                      <CardDescription>
                        Connect with external services to enhance platform capabilities
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <BlurCard className="p-5" animateIn delay={0}>
                            <div className="flex items-center mb-3">
                              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                                <CreditCard className="h-5 w-5 text-blue-600" />
                              </div>
                              <h3 className="font-semibold">Payment Processing</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              Secure payment gateways with escrow capabilities
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <Badge variant="outline">Stripe</Badge>
                              <Badge variant="outline">PayPal</Badge>
                              <Badge variant="outline">Square</Badge>
                              <Badge variant="outline">Apple Pay</Badge>
                            </div>
                          </BlurCard>
                          
                          <BlurCard className="p-5" animateIn delay={100}>
                            <div className="flex items-center mb-3">
                              <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center mr-3">
                                <ShieldAlert className="h-5 w-5 text-orange-600" />
                              </div>
                              <h3 className="font-semibold">AI Fraud Detection</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              Real-time analysis of ticket listings for authenticity
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <Badge variant="outline">Machine Learning</Badge>
                              <Badge variant="outline">Image Analysis</Badge>
                              <Badge variant="outline">Pattern Detection</Badge>
                            </div>
                          </BlurCard>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <BlurCard className="p-5" animateIn delay={200}>
                            <div className="flex items-center mb-3">
                              <div className="h-10 w-10 rounded-lg bg-yellow-100 flex items-center justify-center mr-3">
                                <Star className="h-5 w-5 text-yellow-600" />
                              </div>
                              <h3 className="font-semibold">Rating & Review System</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              Dynamic Trust Score calculation based on transaction history
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <Badge variant="outline">Weighted Reviews</Badge>
                              <Badge variant="outline">Verification Status</Badge>
                              <Badge variant="outline">Historical Analysis</Badge>
                            </div>
                          </BlurCard>
                          
                          <BlurCard className="p-5" animateIn delay={300}>
                            <div className="flex items-center mb-3">
                              <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                                <BarChart3 className="h-5 w-5 text-green-600" />
                              </div>
                              <h3 className="font-semibold">Analytics Integration</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              Comprehensive data collection and performance tracking
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <Badge variant="outline">Google Analytics</Badge>
                              <Badge variant="outline">Mixpanel</Badge>
                              <Badge variant="outline">Segment</Badge>
                              <Badge variant="outline">Amplitude</Badge>
                            </div>
                          </BlurCard>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-5">
                          <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <Code className="mr-2 h-5 w-5 text-primary" />
                            API Documentation
                          </h3>
                          
                          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                            <div className="text-green-400">
                              # Ticket Verification Endpoint
                            </div>
                            <div className="text-gray-400">
                              POST /api/v1/tickets/verify
                            </div>
                            <div className="text-white mt-2">
                              {`{`}
                            </div>
                            <div className="text-white ml-4">
                              "ticketId": "t_12345abcde",
                            </div>
                            <div className="text-white ml-4">
                              "eventDetails": {`{`} "name": "Concert Name", "date": "2023-09-15" {`}`},
                            </div>
                            <div className="text-white ml-4">
                              "verificationMethod": "ai_scan"
                            </div>
                            <div className="text-white">
                              {`}`}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Server className="mr-2 h-5 w-5 text-primary" />
                        Integration Hub
                      </CardTitle>
                      <CardDescription>Connect and manage third-party services</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-5">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-medium mb-3">API Key Management</h3>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                                  <span className="text-blue-600 text-xs font-bold">P</span>
                                </div>
                                <span className="text-sm">Payment API</span>
                              </div>
                              <Badge className="bg-green-500">Connected</Badge>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                                  <span className="text-purple-600 text-xs font-bold">A</span>
                                </div>
                                <span className="text-sm">Analytics API</span>
                              </div>
                              <Badge className="bg-green-500">Connected</Badge>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                                  <span className="text-orange-600 text-xs font-bold">N</span>
                                </div>
                                <span className="text-sm">Notification API</span>
                              </div>
                              <Badge variant="outline">Configure</Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="font-medium">Webhook Endpoints</h3>
                          
                          <div className="border rounded-lg p-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm">Transaction Webhook</span>
                              <Badge variant="secondary">Active</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Notifies external systems of transaction status changes
                            </p>
                          </div>
                          
                          <div className="border rounded-lg p-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm">Verification Webhook</span>
                              <Badge variant="secondary">Active</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Sends verification results to integrated services
                            </p>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button variant="outline" className="w-full">
                            Add New Integration
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Future-Proofing Tab */}
              <TabsContent value="future" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <GitBranch className="mr-2 h-5 w-5 text-primary" />
                        Future-Proof Architecture
                      </CardTitle>
                      <CardDescription>
                        Modular design that scales and adapts to new features and market needs
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <BlurCard className="p-5" animateIn delay={0}>
                          <div className="flex items-center mb-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                              <Layers className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="font-semibold">Modular Architecture</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Independent components that can be updated or replaced without affecting the entire system.
                          </p>
                        </BlurCard>
                        
                        <BlurCard className="p-5" animateIn delay={150}>
                          <div className="flex items-center mb-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                              <Puzzle className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="font-semibold">Extensible API</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Well-documented API that allows for easy integration with new services and third-party platforms.
                          </p>
                        </BlurCard>
                        
                        <BlurCard className="p-5" animateIn delay={300}>
                          <div className="flex items-center mb-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                              <Lock className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="font-semibold">Security First</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Built-in security measures that evolve with new threats and compliance requirements.
                          </p>
                        </BlurCard>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-xl mb-6">
                        <h3 className="text-xl font-semibold mb-4">Upcoming Features</h3>
                        
                        <div className="space-y-6">
                          <div className="border bg-white p-5 rounded-lg">
                            <div className="flex items-start">
                              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                <LucideGitFork className="h-6 w-6 text-blue-600" />
                              </div>
                              <div>
                                <h4 className="text-lg font-medium mb-1">Ticket Bidding System</h4>
                                <p className="text-sm text-muted-foreground mb-3">
                                  A modular auction system where sellers list tickets and buyers place competitive bids.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  <Badge variant="outline" className="bg-blue-50">Real-time Bidding</Badge>
                                  <Badge variant="outline" className="bg-blue-50">Reserve Pricing</Badge>
                                  <Badge variant="outline" className="bg-blue-50">Auto-extend Auctions</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="border bg-white p-5 rounded-lg">
                            <div className="flex items-start">
                              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mr-4 mt-1">
                                <ShieldAlert className="h-6 w-6 text-purple-600" />
                              </div>
                              <div>
                                <h4 className="text-lg font-medium mb-1">Advanced AI Fraud Prevention</h4>
                                <p className="text-sm text-muted-foreground mb-3">
                                  Continually improving fraud detection algorithms trained on platform data.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  <Badge variant="outline" className="bg-purple-50">Machine Learning</Badge>
                                  <Badge variant="outline" className="bg-purple-50">Behavioral Analysis</Badge>
                                  <Badge variant="outline" className="bg-purple-50">Continuous Training</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="border bg-white p-5 rounded-lg">
                            <div className="flex items-start">
                              <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mr-4 mt-1">
                                <LucideGitMerge className="h-6 w-6 text-green-600" />
                              </div>
                              <div>
                                <h4 className="text-lg font-medium mb-1">External Platform Integration</h4>
                                <p className="text-sm text-muted-foreground mb-3">
                                  API endpoints enabling other ticketing platforms to leverage our security layer.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  <Badge variant="outline" className="bg-green-50">API Gateway</Badge>
                                  <Badge variant="outline" className="bg-green-50">White-label Solutions</Badge>
                                  <Badge variant="outline" className="bg-green-50">Partner Programs</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <Button size="lg" onClick={() => navigate("/features")}>
                          View Current Platform Features
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build on Our <span className="title-gradient">Powerful</span> Platform?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of businesses leveraging our secure and flexible ticket exchange infrastructure.
            </p>
            <Button size="lg" onClick={() => navigate("/contact")}>
              Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IntegrationsPage;
