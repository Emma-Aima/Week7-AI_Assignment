import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, TrendingDown, TrendingUp, Users } from "lucide-react";
import { MetricsOverview } from "@/components/bias-audit/MetricsOverview";
import { DisparateImpactChart } from "@/components/bias-audit/DisparateImpactChart";
import { ConfusionMatrixGrid } from "@/components/bias-audit/ConfusionMatrixGrid";
import { FairnessMetricsChart } from "@/components/bias-audit/FairnessMetricsChart";
import { DatasetSummary } from "@/components/bias-audit/DatasetSummary";
import { RecommendationsPanel } from "@/components/bias-audit/RecommendationsPanel";

const BiasAudit = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">COMPAS Bias Audit Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive fairness analysis of the COMPAS Recidivism Risk Assessment
            </p>
          </div>
          <Badge variant="outline" className="text-sm">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Bias Detected
          </Badge>
        </div>

        {/* Key Alerts */}
        <Alert className="border-destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Significant Bias Detected</AlertTitle>
          <AlertDescription>
            The model shows substantial disparate impact against African American defendants with a 
            disparate impact ratio of 0.65 (below the 0.8 fairness threshold).
          </AlertDescription>
        </Alert>

        {/* Metrics Overview */}
        <MetricsOverview />

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="disparate-impact">Disparate Impact</TabsTrigger>
            <TabsTrigger value="confusion-matrix">Confusion Matrices</TabsTrigger>
            <TabsTrigger value="fairness-metrics">Fairness Metrics</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DatasetSummary />
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-destructive" />
                    Bias Risk Assessment
                  </CardTitle>
                  <CardDescription>
                    Overall fairness evaluation across protected groups
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Demographic Parity</span>
                      <span className="text-destructive font-medium">FAIL</span>
                    </div>
                    <Progress value={32} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Equalized Odds</span>
                      <span className="text-destructive font-medium">FAIL</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Calibration</span>
                      <span className="text-accent-foreground font-medium">PASS</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="disparate-impact">
            <DisparateImpactChart />
          </TabsContent>

          <TabsContent value="confusion-matrix">
            <ConfusionMatrixGrid />
          </TabsContent>

          <TabsContent value="fairness-metrics">
            <FairnessMetricsChart />
          </TabsContent>

          <TabsContent value="recommendations">
            <RecommendationsPanel />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BiasAudit;