import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function ContactDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>From & To</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <h3 className="font-medium">From (Your Details)</h3>
          <Label htmlFor="fromName" className="px-1">
            Name
          </Label>
          <div className="relative flex gap-2">
            <Input
              id="fromName"
              type="text"
              placeholder="Your name or company"
              className="bg-background pr-10"
            />
          </div>
          <Label htmlFor="fromEmail" className="px-1">
            Email
          </Label>
          <div className="relative flex gap-2">
            <Input
              id="fromEmail"
              type="text"
              placeholder="you@example.com"
              className="bg-background pr-10"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-medium">To (Client Details)</h3>
          <Label htmlFor="toName" className="px-1">
            Name
          </Label>
          <div className="relative flex gap-2">
            <Input
              id="toName"
              type="text"
              placeholder="Client name or company"
              className="bg-background pr-10"
            />
          </div>
          <Label htmlFor="toEmail" className="px-1">
            Email
          </Label>
          <div className="relative flex gap-2">
            <Input
              id="toEmail"
              type="text"
              placeholder="client@example.com"
              className="bg-background pr-10"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
