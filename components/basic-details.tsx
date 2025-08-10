import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import DatePicker from "./date-picker";

export default function BasicDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoice Details</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <Label htmlFor="invoice-number" className="px-1">
            Invoice Number
          </Label>
          <div className="relative flex gap-2">
            <Input
              id="invoice-number"
              type="text"
              placeholder="INV-0001"
              className="bg-background pr-10"
            />
          </div>
        </div>
        <div>
          <DatePicker />
        </div>
      </CardContent>
    </Card>
  );
}
