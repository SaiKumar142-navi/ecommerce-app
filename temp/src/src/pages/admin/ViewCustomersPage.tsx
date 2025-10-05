import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import AdminLayout from '@/components/AdminLayout';
import { Search, Mail, Phone } from 'lucide-react';

const ViewCustomersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock customers data
  const customers = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      totalOrders: 12,
      totalSpent: 1250.99,
      status: 'active',
      joinDate: '2023-06-15',
      lastOrder: '2024-01-15',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 (555) 234-5678',
      totalOrders: 8,
      totalSpent: 680.50,
      status: 'active',
      joinDate: '2023-08-22',
      lastOrder: '2024-01-14',
    },
    {
      id: '3',
      name: 'Bob Johnson',
      email: 'bob@example.com',
      phone: '+1 (555) 345-6789',
      totalOrders: 15,
      totalSpent: 2199.99,
      status: 'vip',
      joinDate: '2023-03-10',
      lastOrder: '2024-01-14',
    },
    {
      id: '4',
      name: 'Alice Brown',
      email: 'alice@example.com',
      phone: '+1 (555) 456-7890',
      totalOrders: 3,
      totalSpent: 275.25,
      status: 'new',
      joinDate: '2024-01-05',
      lastOrder: '2024-01-13',
    },
    {
      id: '5',
      name: 'Mike Wilson',
      email: 'mike@example.com',
      phone: '+1 (555) 567-8901',
      totalOrders: 6,
      totalSpent: 450.00,
      status: 'active',
      joinDate: '2023-09-18',
      lastOrder: '2024-01-13',
    },
    {
      id: '6',
      name: 'Sarah Davis',
      email: 'sarah@example.com',
      phone: '+1 (555) 678-9012',
      totalOrders: 0,
      totalSpent: 0,
      status: 'inactive',
      joinDate: '2023-12-01',
      lastOrder: 'Never',
    },
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    const statusMap = {
      new: { variant: 'default' as const, label: 'New', className: 'bg-blue-100 text-blue-800 hover:bg-blue-100' },
      active: { variant: 'default' as const, label: 'Active', className: 'bg-green-100 text-green-800 hover:bg-green-100' },
      vip: { variant: 'default' as const, label: 'VIP', className: 'bg-purple-100 text-purple-800 hover:bg-purple-100' },
      inactive: { variant: 'secondary' as const, label: 'Inactive', className: '' },
    };

    const statusInfo = statusMap[status as keyof typeof statusMap];
    return (
      <Badge variant={statusInfo.variant} className={statusInfo.className}>
        {statusInfo.label}
      </Badge>
    );
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Customers</h1>
            <p className="text-muted-foreground">
              Manage and view all registered customers
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Customer Management</CardTitle>
            <CardDescription>
              View customer information and order history ({filteredCustomers.length} customers)
            </CardDescription>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Last Order</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{customer.name}</p>
                        <p className="text-sm text-muted-foreground">ID: {customer.id}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-3 w-3" />
                          {customer.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-3 w-3" />
                          {customer.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{customer.totalOrders}</TableCell>
                    <TableCell>${customer.totalSpent.toFixed(2)}</TableCell>
                    <TableCell>{getStatusBadge(customer.status)}</TableCell>
                    <TableCell>{customer.joinDate}</TableCell>
                    <TableCell>{customer.lastOrder}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View Details
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

export default ViewCustomersPage;