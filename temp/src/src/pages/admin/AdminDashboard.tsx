import { Package, Users, ShoppingCart, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/components/AdminLayout';

const AdminDashboard = () => {
  // Mock data - in a real app, this would come from your backend
  const stats = [
    {
      title: 'Total Products',
      value: '124',
      description: '+12% from last month',
      icon: Package,
    },
    {
      title: 'Total Customers',
      value: '2,350',
      description: '+18% from last month',
      icon: Users,
    },
    {
      title: 'Total Orders',
      value: '1,045',
      description: '+7% from last month',
      icon: ShoppingCart,
    },
    {
      title: 'Revenue',
      value: '₹33,92,325',
      description: '+22% from last month',
      icon: DollarSign,
    },
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'John Doe', amount: '₹9,449', status: 'Delivered', date: '2024-01-15' },
    { id: 'ORD-002', customer: 'Jane Smith', amount: '₹6,713', status: 'Processing', date: '2024-01-14' },
    { id: 'ORD-003', customer: 'Bob Johnson', amount: '₹14,999', status: 'Shipped', date: '2024-01-14' },
    { id: 'ORD-004', customer: 'Alice Brown', amount: '₹5,644', status: 'Pending', date: '2024-01-13' },
    { id: 'ORD-005', customer: 'Mike Wilson', amount: '₹11,250', status: 'Delivered', date: '2024-01-13' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your store's performance and metrics
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-hover transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              Latest orders from your customers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount}</p>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                  </div>
                  <div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'Processing'
                          ? 'bg-blue-100 text-blue-800'
                          : order.status === 'Shipped'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;