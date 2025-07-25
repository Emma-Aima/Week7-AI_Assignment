import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const fairnessMetricsData = [
  {
    metric: "Demographic Parity",
    "African American": 0.32,
    "Caucasian": 1.0,
    "Hispanic": 0.78,
    "Native American": 1.05,
    threshold: 0.8,
  },
  {
    metric: "Equalized Odds",
    "African American": 0.45,
    "Caucasian": 1.0,
    "Hispanic": 0.82,
    "Native American": 0.96,
    threshold: 0.8,
  },
  {
    metric: "Calibration",
    "African American": 0.89,
    "Caucasian": 1.0,
    "Hispanic": 0.94,
    "Native American": 0.91,
    threshold: 0.8,
  },
  {
    metric: "Individual Fairness",
    "African American": 0.67,
    "Caucasian": 1.0,
    "Hispanic": 0.85,
    "Native American": 0.88,
    threshold: 0.8,
  },
];

const chartConfig = {
  "African American": {
    label: "African American",
    color: "hsl(var(--destructive))",
  },
  "Caucasian": {
    label: "Caucasian",
    color: "hsl(var(--primary))",
  },
  "Hispanic": {
    label: "Hispanic",
    color: "hsl(var(--secondary))",
  },
  "Native American": {
    label: "Native American",
    color: "hsl(var(--accent))",
  },
};

export const FairnessMetricsChart = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Comprehensive Fairness Metrics Analysis</CardTitle>
          <CardDescription>
            Comparison of multiple fairness criteria across racial groups. Values below 0.8 indicate potential bias.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={fairnessMetricsData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 1.2]} />
                <YAxis dataKey="metric" type="category" width={120} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="African American" fill="var(--color-African American)" />
                <Bar dataKey="Caucasian" fill="var(--color-Caucasian)" />
                <Bar dataKey="Hispanic" fill="var(--color-Hispanic)" />
                <Bar dataKey="Native American" fill="var(--color-Native American)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Fairness Metric Definitions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Demographic Parity</h4>
              <p className="text-xs text-muted-foreground">
                Equal positive prediction rates across groups. P(Ŷ=1|A=0) = P(Ŷ=1|A=1)
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Equalized Odds</h4>
              <p className="text-xs text-muted-foreground">
                Equal true positive and false positive rates across groups.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Calibration</h4>
              <p className="text-xs text-muted-foreground">
                Predicted probabilities match actual outcomes across groups.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Individual Fairness</h4>
              <p className="text-xs text-muted-foreground">
                Similar individuals receive similar predictions regardless of group.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bias Impact Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/20">
              <h4 className="font-semibold text-sm text-destructive mb-2">Critical Issues</h4>
              <ul className="text-xs space-y-1 text-destructive">
                <li>• Demographic parity severely violated for African Americans (0.32)</li>
                <li>• Equalized odds shows significant disparity (0.45)</li>
                <li>• 1.85x higher false positive rate for African Americans</li>
              </ul>
            </div>
            
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold text-sm text-yellow-700 dark:text-yellow-400 mb-2">Moderate Concerns</h4>
              <ul className="text-xs space-y-1 text-yellow-700 dark:text-yellow-400">
                <li>• Hispanic defendants show borderline fairness metrics</li>
                <li>• Individual fairness needs improvement across all groups</li>
              </ul>
            </div>

            <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-sm text-primary mb-2">Positive Findings</h4>
              <ul className="text-xs space-y-1 text-primary">
                <li>• Calibration is relatively good across all groups</li>
                <li>• Native American group shows fair treatment</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};