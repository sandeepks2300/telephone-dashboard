import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function RecentCallsTable({ calls }) {
  return (
    <div>
      <h2 className="text-black font-semibold text-xl mb-4">
        Call Records
      </h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-black">Caller</TableHead>
            <TableHead className="text-black">Number</TableHead>
            <TableHead className="text-black">City</TableHead>
            <TableHead className="text-black">Duration</TableHead>
            <TableHead className="text-black">Cost</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {calls.slice(0, 20).map((c) => (
            <TableRow key={c.id}>
              <TableCell>{c.callerName}</TableCell>
              <TableCell>{c.callerNumber}</TableCell>
              <TableCell>{c.city}</TableCell>
              <TableCell>{c.callDuration}s</TableCell>
              <TableCell>${c.callCost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}