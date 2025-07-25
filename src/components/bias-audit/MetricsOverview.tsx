import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUp, Users, AlertTriangle } from "lucide-react";

export const MetricsOverview = () => {
  const metrics = [
    {
      title: "Disparate Impact Ratio",
      value: "0.65",
      description: "African American vs Caucasian",
      trend: "down",
      status: "critical",
      icon: AlertTriangle,
    },
    {
      title: "False Positive Rate Ratio",
      value: "1.85",
      description: "Difference between groups",
      trend: "up",
      status: "warning",
      icon: TrendingUp,
    },
    {
      title: "Demographic Parity Difference",
      value: "-0.24",
      description: "Normalized difference",
      trend: "down",
      status: "critical",
      icon: TrendingDown,
    },
    {
      title: "Total Population",
      value: "7,214",
      description: "Defendants analyzed",
      trend: "neutral",
      status: "info",
      icon: Users,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "text-destructive";
      case "warning":
        return "text-yellow-600";
      case "info":
        return "text-primary";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <Icon className={`h-4 w-4 ${getStatusColor(metric.status)}`} />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${getStatusColor(metric.status)}`}>
                {metric.value}
              </div>
              <p className="text-xs text-muted-foreground">
                {metric.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};