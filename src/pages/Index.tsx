import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Database, BarChart3, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background border-b">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="text-sm">
              <AlertTriangle className="w-4 h-4 mr-2" />
              AI Fairness Analysis Tool
            </Badge>
            <h1 className="text-5xl font-bold text-foreground">
              COMPAS Bias Audit Dashboard
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive analysis of algorithmic bias in the COMPAS Recidivism Risk Assessment system. 
              Examining fairness across racial groups using industry-standard metrics.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/bias-audit">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Audit Results
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <FileText className="w-5 h-5 mr-2" />
                Download Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Bias Analysis</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our analysis examines multiple dimensions of algorithmic fairness to identify and quantify bias in predictive systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                Dataset Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Comprehensive examination of 7,214 defendants from Broward County, Florida, 
                analyzing demographic distributions and outcome patterns.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Fairness Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Multiple fairness criteria including demographic parity, equalized odds, 
                calibration, and individual fairness across racial groups.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                Bias Detection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Systematic identification of discriminatory patterns with statistical significance testing 
                and disparate impact analysis.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Key Findings */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Findings</h2>
            <p className="text-muted-foreground">Critical insights from our comprehensive bias audit</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-destructive">
              <CardHeader>
                <CardTitle className="text-destructive">Significant Bias Detected</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Disparate Impact Ratio</span>
                  <Badge variant="destructive">0.65</Badge>
                </div>
                <div className="flex justify-between">
                  <span>False Positive Rate Ratio</span>
                  <Badge variant="destructive">1.85x</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  African American defendants are 1.85x more likely to be incorrectly flagged as high risk.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-sm">Immediate suspension for high-stakes decisions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Implement fairness-aware retraining</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Establish continuous monitoring</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
