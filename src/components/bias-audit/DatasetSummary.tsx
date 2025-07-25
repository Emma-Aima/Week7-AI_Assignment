import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const DatasetSummary = () => {
  const demographicData = [
    { group: "African American", count: 3821, percentage: 53.0, color: "bg-destructive" },
    { group: "Caucasian", count: 2454, percentage: 34.0, color: "bg-primary" },
    { group: "Hispanic", count: 637, percentage: 8.8, color: "bg-secondary" },
    { group: "Native American", count: 302, percentage: 4.2, color: "bg-accent" },
  ];

  const outcomeData = [
    { label: "Did Not Reoffend", count: 4738, percentage: 65.7 },
    { label: "Reoffended", count: 2476, percentage: 34.3 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>COMPAS Dataset Summary</CardTitle>
        <CardDescription>
          Broward County, Florida (2013-2014) - 7,214 criminal defendants
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Demographic Breakdown */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Demographic Distribution</h4>
          {demographicData.map((item) => (
            <div key={item.group} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{item.group}</span>
                <span className="text-muted-foreground">{item.count} ({item.percentage}%)</span>
              </div>
              <Progress value={item.percentage} className="h-2" />
            </div>
          ))}
        </div>

        {/* Recidivism Outcomes */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Two-Year Recidivism Outcomes</h4>
          {outcomeData.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{item.label}</span>
                <span className="text-muted-foreground">{item.count} ({item.percentage}%)</span>
              </div>
              <Progress value={item.percentage} className="h-2" />
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Key Features Analyzed</h4>
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            <div>• Age at arrest</div>
            <div>• Criminal history</div>
            <div>• Charge severity</div>
            <div>• Prior arrests</div>
            <div>• Gender</div>
            <div>• Juvenile record</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};