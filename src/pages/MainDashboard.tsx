import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import {
  Users,
  UserCheck,
  Briefcase,
  CheckSquare,
  TrendingUp,
  TrendingDown,
  Plus,
  Eye,
  Calendar,
  DollarSign
} from 'lucide-react'

const stats = [
  {
    title: 'Total Leads',
    value: '2,847',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    title: 'Active Clients',
    value: '1,234',
    change: '+8.2%',
    trend: 'up',
    icon: UserCheck,
    color: 'text-green-600'
  },
  {
    title: 'Active Jobs',
    value: '456',
    change: '-2.1%',
    trend: 'down',
    icon: Briefcase,
    color: 'text-purple-600'
  },
  {
    title: 'Pending Tasks',
    value: '89',
    change: '+15.3%',
    trend: 'up',
    icon: CheckSquare,
    color: 'text-orange-600'
  }
]

const recentActivities = [
  {
    id: 1,
    type: 'lead',
    title: 'New lead from website',
    description: 'John Smith submitted contact form',
    time: '2 minutes ago',
    status: 'new'
  },
  {
    id: 2,
    type: 'client',
    title: 'Client meeting scheduled',
    description: 'Meeting with Acme Corp at 3:00 PM',
    time: '1 hour ago',
    status: 'scheduled'
  },
  {
    id: 3,
    type: 'job',
    title: 'Job completed',
    description: 'Website redesign project finished',
    time: '3 hours ago',
    status: 'completed'
  },
  {
    id: 4,
    type: 'task',
    title: 'Task overdue',
    description: 'Follow up with prospect',
    time: '1 day ago',
    status: 'overdue'
  }
]

const upcomingTasks = [
  {
    id: 1,
    title: 'Call prospect about proposal',
    client: 'Tech Solutions Inc.',
    dueDate: 'Today, 2:00 PM',
    priority: 'high'
  },
  {
    id: 2,
    title: 'Send project timeline',
    client: 'Creative Agency',
    dueDate: 'Tomorrow, 10:00 AM',
    priority: 'medium'
  },
  {
    id: 3,
    title: 'Review contract terms',
    client: 'Global Corp',
    dueDate: 'Dec 18, 3:00 PM',
    priority: 'low'
  }
]

export function MainDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your business.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            This Month
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown
          
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
                  <TrendIcon className={`h-4 w-4 mr-1 ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`} />
                  <span className={`text-sm ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
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
                  activity.status === 'new' ? 'bg-blue-500' :
                  activity.status === 'scheduled' ? 'bg-green-500' :
                  activity.status === 'completed' ? 'bg-purple-500' :
                  'bg-red-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
                <Badge variant={
                  activity.status === 'new' ? 'default' :
                  activity.status === 'scheduled' ? 'secondary' :
                  activity.status === 'completed' ? 'outline' :
                  'destructive'
                }>
                  {activity.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Upcoming Tasks</CardTitle>
            <Button variant="ghost" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Task
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingTasks.map((task) => (
              <div key={task.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`w-3 h-3 rounded-full mt-1 ${
                  task.priority === 'high' ? 'bg-red-500' :
                  task.priority === 'medium' ? 'bg-yellow-500' :
                  'bg-green-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{task.title}</p>
                  <p className="text-sm text-gray-600">{task.client}</p>
                  <div className="flex items-center mt-1">
                    <Calendar className="h-3 w-3 text-gray-400 mr-1" />
                    <p className="text-xs text-gray-500">{task.dueDate}</p>
                  </div>
                </div>
                <Badge variant={
                  task.priority === 'high' ? 'destructive' :
                  task.priority === 'medium' ? 'default' :
                  'secondary'
                }>
                  {task.priority}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            <DollarSign className="h-5 w-5 mr-2 text-green-600" />
            Revenue Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Revenue chart will be displayed here</p>
              <p className="text-sm text-gray-400 mt-1">Connect your data source to see analytics</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}