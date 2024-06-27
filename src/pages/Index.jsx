import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-4">Welcome to Learnify</h1>
        <p className="text-xl text-white">Your journey to knowledge starts here!</p>
      </header>
      <main className="w-full max-w-4xl">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Why Choose Learnify?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Interactive Courses</li>
              <li>Expert Instructors</li>
              <li>Flexible Learning</li>
              <li>Community Support</li>
            </ul>
          </CardContent>
        </Card>
        <Separator className="my-8" />
        <div className="text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="primary" className="text-lg">Get Started</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to begin your learning journey!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </main>
      <footer className="mt-8 text-white">
        <p>&copy; 2023 Learnify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;