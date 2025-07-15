import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Progress } from '../components/ui/progress'
import {
  UserCheck,
  TrendingUp,
  DollarSign,
  Calendar,
  Plus,
  Filter,
  Download,
  Eye,
  Star,
  Clock
} from 'lucide-react'

const clientStats = [
  {
    title: 'Total Clients',
    value: '1,234',
    change: '+8.2%',
    trend: 'up',
    icon: UserCheck,
    color: 'text-green-600'
  },
  {
    title: 'Active Projects',
    value: '456',
    change: '+12.5%',
    trend: 'up',
    icon: Calendar,
    color: 'text-blue-600'
  },
  {
    title: 'Monthly Revenue',
    value: '$125,430',
    change: '+15.3%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-purple-600'
  },
  {
    title: 'Avg. Project Value',
    value: '$8,750',
    change: '+3.1%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-orange-600'
  }
]

const clientTypes = [
  { name: 'Enterprise', count: 234, percentage: 19, color: 'bg-blue-500' },
  { name: 'Small Business', count: 567, percentage: 46, color: 'bg-green-500' },
  { name: 'Startup', count: 289, percentage: 23, color: 'bg-purple-500' },
  { name: 'Individual', count: 144, percentage: 12, color: 'bg-orange-500' }
]

const topClients = [
  {
    id: 1,
    name: 'Acme Corporation',
    contact: 'John Smith',
    email: 'john@acme.com',
    revenue: '$45,000',
    projects: 8,
    satisfaction: 4.8,
    status: 'active',
    lastProject: '2 days ago'
  },
  {
    id: 2,
    name: 'Tech Solutions Inc.',
    contact: 'Sarah Johnson',
    email: 'sarah@techsolutions.com',
    revenue: '$38,500',
    projects: 6,
    satisfaction: 4.9,
    status: 'active',
    lastProject: '1 week ago'
  },
  {
    id: 3,
    name: 'Global Enterprises',
    contact: 'Mike Wilson',
    email: 'mike@global.com',
    revenue: '$52,000',
    projects: 12,
    satisfaction: 4.7,
    status: 'active',
    lastProject: '3 days ago'
  },
  {
    id: 4,
    name: 'Creative Agency',
    contact: 'Emily Davis',
    email: 'emily@creative.com',
    revenue: '$28,750',
    projects: 4,
    satisfaction: 4.6,
    status: 'inactive',
    lastProject: '2 months ago'
  }
]

const recentActivities = [
  {
    id: 1,
    type: 'project',
    title: 'New project started',
    description: 'Website redesign for Acme Corp',
    client: 'Acme Corporation',
    time: '2 hours ago',
    status: 'started'
  },
  {
    id: 2,
    type: 'payment',
    title: 'Payment received',
    description: '$15,000 payment from Tech Solutions',
    client: 'Tech Solutions Inc.',
    time: '1 day ago',
    status: 'completed'
  },
  {
    id: 3,
    type: 'meeting',
    title: 'Client meeting scheduled',
    description: 'Project review with Global Enterprises',
    client: 'Global Enterprises',
    time: '2 days ago',
    status: 'scheduled'
  },
  {
    id: 4,
    type: 'feedback',
    title: 'Client feedback received',
    description: '5-star rating from Creative Agency',
    client: 'Creative Agency',
    time: '3 days ago',
    status: 'positive'
  }
]

export function ClientsDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Clients Dashboard</h1>
          <p className="text-gray-600 mt-1">Monitor client relationships and project performance.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Client
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {clientStats.map((stat) => {
          const Icon = stat.icon
          
          return (
            <Card key={stat.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1 text-green-600" />
                  <span className="text-sm text-green-600">{stat.change}</span>
                  <span className="text-sm text-gray-500 ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Client Types */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Client Types</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {clientTypes.map((type) => (
              <div key={type.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{type.name}</span>
                  <span className="text-sm text-gray-600">{type.count}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress value={type.percentage} className="flex-1" />
                  <span className="text-sm text-gray-500 w-12">{type.percentage}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Recent Activities</CardTitle>
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View All
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.status === 'started' ? 'bg-blue-500' :
                  activity.status === 'completed' ? 'bg-green-500' :
                  activity.status === 'scheduled' ? 'bg-yellow-500' :
                  'bg-purple-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.client} • {activity.time}</p>
                </div>
                <Badge variant={
                  activity.status === 'started' ? 'default' :
                  activity.status === 'completed' ? 'secondary' :
                  activity.status === 'scheduled' ? 'outline' :
                  'destructive'
                }>
                  {activity.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Top Clients */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">Top Clients</CardTitle>
          <Button variant="ghost" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topClients.map((client) => (
              <div key={client.id} className="flex items-center space-x-4 p-4 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">
                    {client.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-gray-900">{client.name}</p>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600">{client.satisfaction}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{client.contact}</p>
                  <p className="text-sm text-gray-500">{client.email}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900">{client.revenue}</p>
                  <p className="text-xs text-gray-500">Total Revenue</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900">{client.projects}</p>
                  <p className="text-xs text-gray-500">Projects</p>
                </div>
                <div className="text-right">
                  <Badge variant={client.status === 'active' ? 'default' : 'secondary'}>
                    {client.status}
                  </Badge>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {client.lastProject}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}