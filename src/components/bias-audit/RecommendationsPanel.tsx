import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, AlertTriangle, Clock, Target } from "lucide-react";

export const RecommendationsPanel = () => {
  const recommendations = [
    {
      category: "Immediate Actions",
      priority: "high",
      icon: AlertTriangle,
      items: [
        {
          title: "Suspend Model Usage",
          description: "Temporarily halt deployment for high-stakes decisions until bias is addressed",
          status: "critical",
          timeline: "Immediate",
        },
        {
          title: "Bias Impact Assessment",
          description: "Conduct comprehensive review of past decisions affecting African American defendants",
          status: "critical", 
          timeline: "1-2 weeks",
        },
        {
          title: "Stakeholder Notification",
          description: "Inform judges, probation officers, and legal advocates about identified bias",
          status: "high",
          timeline: "3-5 days",
        },
      ],
    },
    {
      category: "Technical Mitigation",
      priority: "high",
      icon: Target,
      items: [
        {
          title: "Fairness-Aware Retraining",
          description: "Implement demographic parity constraints during model training",
          status: "high",
          timeline: "4-6 weeks",
        },
        {
          title: "Bias Mitigation Techniques",
          description: "Apply pre-processing (resampling) and post-processing (threshold optimization)",
          status: "high",
          timeline: "2-3 weeks",
        },
        {
          title: "Feature Engineering Review",
          description: "Remove or transform features that may serve as proxies for race",
          status: "medium",
          timeline: "2-4 weeks",
        },
      ],
    },
    {
      category: "Long-term Improvements",
      priority: "medium",
      icon: Clock,
      items: [
        {
          title: "Continuous Monitoring System",
          description: "Implement automated bias detection and alerting for ongoing model deployment",
          status: "medium",
          timeline: "8-12 weeks",
        },
        {
          title: "Diverse Training Data",
          description: "Expand dataset to include more representative samples across all demographic groups",
          status: "medium",
          timeline: "6-8 weeks",
        },
        {
          title: "Human-in-the-Loop Validation",
          description: "Establish review process for high-risk predictions, especially for protected groups",
          status: "medium",
          timeline: "4-6 weeks",
        },
      ],
    },
    {
      category: "Governance & Compliance",
      priority: "medium",
      icon: CheckCircle,
      items: [
        {
          title: "Fairness Policy Development",
          description: "Create formal algorithmic fairness guidelines and approval processes",
          status: "medium",
          timeline: "6-8 weeks",
        },
        {
          title: "Regular Audit Schedule",
          description: "Establish quarterly bias audits with external validation",
          status: "low",
          timeline: "Ongoing",
        },
        {
          title: "Training & Education",
          description: "Educate staff on algorithmic bias, interpretation, and responsible AI usage",
          status: "low",
          timeline: "4-6 weeks",
        },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "destructive";
      case "high":
        return "secondary";
      case "medium":
        return "outline";
      default:
        return "outline";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-destructive";
      case "medium":
        return "text-yellow-600";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Bias Mitigation Roadmap</AlertTitle>
        <AlertDescription>
          The following recommendations are prioritized based on severity of bias detected and potential impact.
          Immediate actions should be implemented within days, while long-term improvements can be phased over months.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recommendations.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className={`w-5 h-5 ${getPriorityColor(category.priority)}`} />
                  {category.category}
                </CardTitle>
                <CardDescription>
                  Priority: <Badge variant="outline" className={getPriorityColor(category.priority)}>
                    {category.priority.toUpperCase()}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((item, index) => (
                  <div key={index} className="border rounded-lg p-3 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <Badge variant={getStatusColor(item.status)} className="text-xs">
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{item.timeline}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Implementation Strategy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-destructive">Phase 1: Crisis Response (1-2 weeks)</h4>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Suspend high-stakes model usage</li>
                <li>• Notify all stakeholders</li>
                <li>• Begin impact assessment</li>
                <li>• Implement temporary manual review</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-yellow-600">Phase 2: Technical Fixes (4-8 weeks)</h4>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Apply bias mitigation techniques</li>
                <li>• Retrain with fairness constraints</li>
                <li>• Implement new evaluation metrics</li>
                <li>• Test on holdout datasets</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-primary">Phase 3: Long-term (3-6 months)</h4>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Deploy monitoring systems</li>
                <li>• Establish governance framework</li>
                <li>• Create audit schedules</li>
                <li>• Train staff on responsible AI</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};