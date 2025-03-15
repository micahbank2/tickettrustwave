
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, AlertTriangle, Upload, Search } from "lucide-react";
import BlurCard from "@/components/ui/BlurCard";

const TicketVerification = () => {
  const [verificationStep, setVerificationStep] = useState<'initial' | 'verifying' | 'verified' | 'suspicious'>('initial');
  const [ticketCode, setTicketCode] = useState("");
  
  const handleVerify = () => {
    if (!ticketCode.trim()) return;
    
    setVerificationStep('verifying');
    
    // Simulate verification process
    setTimeout(() => {
      // For demo purposes, show verified for codes starting with "SAFE", suspicious otherwise
      if (ticketCode.toUpperCase().startsWith('SAFE')) {
        setVerificationStep('verified');
      } else {
        setVerificationStep('suspicious');
      }
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="layout-grid py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Ticket <span className="title-gradient">Verification</span>
              </h1>
              <p className="text-muted-foreground">
                Check if your ticket is valid, authentic, and hasn't been flagged for suspicious activity.
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Verify Your Ticket</CardTitle>
                <CardDescription>
                  Enter your ticket code or upload a ticket image to verify its authenticity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ticket Code</label>
                    <div className="flex gap-3">
                      <Input 
                        value={ticketCode}
                        onChange={(e) => setTicketCode(e.target.value)}
                        placeholder="Enter ticket code (e.g., SAFE12345)"
                        className="flex-1"
                        disabled={verificationStep === 'verifying'}
                      />
                      <Button 
                        onClick={handleVerify}
                        disabled={!ticketCode.trim() || verificationStep === 'verifying'}
                      >
                        {verificationStep === 'verifying' ? (
                          <>Verifying<span className="loading-dots">...</span></>
                        ) : (
                          <>Verify</>
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Or</span>
                    </div>
                  </div>
                  
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop a ticket image or barcode
                    </p>
                    <Button variant="outline" size="sm">Select File</Button>
                  </div>
                  
                  {/* Verification Results */}
                  {verificationStep === 'verifying' && (
                    <BlurCard className="bg-secondary/30 text-center p-8">
                      <Search className="h-12 w-12 mx-auto text-primary mb-4 animate-pulse" />
                      <h3 className="text-xl font-semibold mb-2">Verifying Your Ticket</h3>
                      <p className="text-muted-foreground">
                        Please wait while we check your ticket against our databases...
                      </p>
                    </BlurCard>
                  )}
                  
                  {verificationStep === 'verified' && (
                    <BlurCard className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900 text-center p-8">
                      <CheckCircle className="h-12 w-12 mx-auto text-green-600 dark:text-green-400 mb-4" />
                      <h3 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-300">Ticket Verified!</h3>
                      <p className="text-green-600 dark:text-green-400">
                        This ticket appears to be authentic and hasn't been flagged in our system.
                      </p>
                      <div className="mt-4 pt-4 border-t border-green-200 dark:border-green-900">
                        <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                          Verification ID: VRF-{Math.random().toString(36).substring(2, 10).toUpperCase()}
                        </p>
                      </div>
                    </BlurCard>
                  )}
                  
                  {verificationStep === 'suspicious' && (
                    <BlurCard className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900 text-center p-8">
                      <AlertTriangle className="h-12 w-12 mx-auto text-red-600 dark:text-red-400 mb-4" />
                      <h3 className="text-xl font-semibold mb-2 text-red-700 dark:text-red-300">Caution: Suspicious Ticket</h3>
                      <p className="text-red-600 dark:text-red-400">
                        This ticket has been flagged in our system and may not be authentic. We recommend not proceeding with this purchase.
                      </p>
                      <div className="mt-4 pt-4 border-t border-red-200 dark:border-red-900">
                        <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                          Report This Ticket
                        </Button>
                      </div>
                    </BlurCard>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex-col space-y-2">
                <p className="text-xs text-muted-foreground">
                  Our verification system checks against official event databases, past fraud reports, and ticket validity. However, please note that a "verified" result is not a 100% guarantee of ticket authenticity.
                </p>
              </CardFooter>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <BlurCard className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Multiple Checks</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We run your ticket through multiple verification databases to ensure its authenticity.
                </p>
              </BlurCard>
              
              <BlurCard className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Search className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Real-time Scanning</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our system performs real-time verification against the latest fraud information.
                </p>
              </BlurCard>
              
              <BlurCard className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Risk Assessment</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We analyze various risk factors to provide comprehensive ticket safety information.
                </p>
              </BlurCard>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TicketVerification;
