import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const confusionMatrices = {
  "African American": {
    tp: 1225, fp: 805, fn: 990, tn: 801,
    total: 3821,
  },
  "Caucasian": {
    tp: 990, fp: 347, fn: 461, tn: 656,
    total: 2454,
  },
  "Hispanic": {
    tp: 223, fp: 145, fn: 156, tn: 113,
    total: 637,
  },
  "Native American": {
    tp: 134, fp: 81, fn: 54, tn: 33,
    total: 302,
  },
};

const ConfusionMatrix = ({ title, data }: { title: string; data: any }) => {
  const { tp, fp, fn, tn, total } = data;
  const accuracy = ((tp + tn) / total * 100).toFixed(1);
  const precision = (tp / (tp + fp) * 100).toFixed(1);
  const recall = (tp / (tp + fn) * 100).toFixed(1);
  const fpr = (fp / (fp + tn) * 100).toFixed(1);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>
          Accuracy: {accuracy}% | Precision: {precision}% | Recall: {recall}% | FPR: {fpr}%
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Confusion Matrix Grid */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div></div>
            <div className="font-semibold text-sm">Predicted No</div>
            <div className="font-semibold text-sm">Predicted Yes</div>
            
            <div className="font-semibold text-sm">Actual No</div>
            <div className="bg-primary/10 p-3 rounded border-2">
              <div className="text-xl font-bold text-primary">{tn}</div>
              <div className="text-xs text-muted-foreground">True Negative</div>
            </div>
            <div className="bg-destructive/10 p-3 rounded border-2">
              <div className="text-xl font-bold text-destructive">{fp}</div>
              <div className="text-xs text-muted-foreground">False Positive</div>
            </div>
            
            <div className="font-semibold text-sm">Actual Yes</div>
            <div className="bg-destructive/10 p-3 rounded border-2">
              <div className="text-xl font-bold text-destructive">{fn}</div>
              <div className="text-xs text-muted-foreground">False Negative</div>
            </div>
            <div className="bg-primary/10 p-3 rounded border-2">
              <div className="text-xl font-bold text-primary">{tp}</div>
              <div className="text-xs text-muted-foreground">True Positive</div>
            </div>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex justify-between">
              <span>False Positive Rate:</span>
              <span className="font-medium text-destructive">{fpr}%</span>
            </div>
            <div className="flex justify-between">
              <span>False Negative Rate:</span>
              <span className="font-medium text-destructive">{(fn / (tp + fn) * 100).toFixed(1)}%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const ConfusionMatrixGrid = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Confusion Matrices by Racial Group</CardTitle>
          <CardDescription>
            Detailed prediction accuracy breakdown showing how the model performs across different racial groups.
            Notice the higher false positive rates for African American defendants.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Object.entries(confusionMatrices).map(([group, data]) => (
          <ConfusionMatrix key={group} title={group} data={data} />
        ))}
      </div>
    </div>
  );
};