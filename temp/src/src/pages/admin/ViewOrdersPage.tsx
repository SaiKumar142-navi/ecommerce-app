import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AdminLayout from '@/components/AdminLayout';
import { Eye } from 'lucide-react';

const ViewOrdersPage = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Mock orders data
  const orders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      email: 'john@example.com',
      total: 125.99,
      status: 'delivered',
      items: 3,
      date: '2024-01-15',
      shippingAddress: '123 Main St, City, State 12345',
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      email: 'jane@example.com',
      total: 89.50,
      status: 'processing',
      items: 2,
      date: '2024-01-14',
      shippingAddress: '456 Oak Ave, City, State 67890',
    },
    {
      id: 'ORD-003',
      customer: 'Bob Johnson',
      email: 'bob@example.com',
      total: 199.99,
      status: 'shipped',
      items: 1,
      date: '2024-01-14',
      shippingAddress: '789 Pine Rd, City, State 54321',
    },
    {
      id: 'ORD-004',
      customer: 'Alice Brown',
      email: 'alice@example.com',
      total: 75.25,
      status: 'pending',
      items: 4,
      date: '2024-01-13',
      shippingAddress: '321 Elm St, City, State 98765',
    },
    {
      id: 'ORD-005',
      customer: 'Mike Wilson',
      email: 'mike@example.com',
      total: 150.00,
      status: 'delivered',
      items: 2,
      date: '2024-01-13',
      shippingAddress: '654 Maple Dr, City, State 13579',
    },
  ];

  const filteredOrders = statusFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === statusFilter);

  const getStatusBadge = (status: string) => {
    const statusMap = {
      pending: { variant: 'secondary' as const, label: 'Pending' },
      processing: { variant: 'default' as const, label: 'Processing' },
      shipped: { variant: 'outline' as const, label: 'Shipped' },
      delivered: { variant: 'default' as const, label: 'Delivered' },
    };

    const statusInfo = statusMap[status as keyof typeof statusMap];
    return (
      <Badge variant={statusInfo.variant} className={
        status === 'delivered' ? 'bg-green-100 text-green-800 hover:bg-green-100' :
        status === 'shipped' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' :
        status === 'processing' ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' :
        ''
      }>
        {statusInfo.label}
      </Badge>
    );
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Orders</h1>
            <p className="text-muted-foreground">
              Manage and track all customer orders
            </p>
          </div>
          
          <div className="flex gap-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Orders</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Order Management</CardTitle>
            <CardDescription>
              View and manage all customer orders ({filteredOrders.length} orders)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-sm text-muted-foreground">{order.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>{order.items} items</TableCell>
                    <TableCell>₹{order.total.toLocaleString('en-IN')}</TableCell>
                    <TableCell>{getStatusBadge(order.status)}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default ViewOrdersPage;