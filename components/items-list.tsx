import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import InvoiceItem from "./invoice-item";

export const items = [
  {
    id: 1,
    description: "Web Application Development",
    quantity: 1,
    price: 1000,
    amount: 1000,
  },
  {
    id: 2,
    description: "Mobile Application Development",
    quantity: 1,
    price: 1200,
    amount: 1200,
  },
];

export default function ItemsList() {
  const addItem = () => {};
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Invoice Items</CardTitle>
        <Button onClick={addItem} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Item
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-row items-center justify-between"
          >
            <InvoiceItem
              key={item.id}
              item={item}
              index={index}
              canRemove={items.length > 1}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
