import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine } from "recharts";

const disparateImpactData = [
  {
    group: "African American",
    positiveRate: 0.45,
    ratio: 0.65,
    count: 3821,
  },
  {
    group: "Caucasian",
    positiveRate: 0.69,
    ratio: 1.0,
    count: 2454,
  },
  {
    group: "Hispanic",
    positiveRate: 0.58,
    ratio: 0.84,
    count: 637,
  },
  {
    group: "Native American",
    positiveRate: 0.71,
    ratio: 1.03,
    count: 302,
  },
];

const chartConfig = {
  positiveRate: {
    label: "Positive Rate",
    color: "hsl(var(--primary))",
  },
  ratio: {
    label: "Disparate Impact Ratio",
    color: "hsl(var(--destructive))",
  },
};

export const DisparateImpactChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Positive Prediction Rates by Race</CardTitle>
          <CardDescription>
            Percentage of defendants predicted to reoffend by racial group
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={disparateImpactData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="group" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  fontSize={12}
                />
                <YAxis 
                  domain={[0, 1]}
                  tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="positiveRate" fill="var(--color-positiveRate)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disparate Impact Ratios</CardTitle>
          <CardDescription>
            Ratio compared to Caucasian group (baseline). Values below 0.8 indicate bias.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={disparateImpactData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="group" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  fontSize={12}
                />
                <YAxis domain={[0, 1.2]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ReferenceLine y={0.8} stroke="hsl(var(--destructive))" strokeDasharray="5 5" />
                <ReferenceLine y={1.25} stroke="hsl(var(--destructive))" strokeDasharray="5 5" />
                <Bar 
                  dataKey="ratio" 
                  fill="var(--color-ratio)"
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};