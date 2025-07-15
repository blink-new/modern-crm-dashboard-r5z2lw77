import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Progress } from '../components/ui/progress'
import {
  CheckSquare,
  TrendingUp,
  Clock,
  AlertTriangle,
  Plus,
  Filter,
  Download,
  Eye,
  Calendar
} from 'lucide-react'

const taskStats = [
  {
    title: 'Total Tasks',
    value: '234',
    change: '+12.5%',
    trend: 'up',
    icon: CheckSquare,
    color: 'text-orange-600'
  },
  {
    title: 'Completed Today',
    value: '18',
    change: '+8.2%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-green-600'
  },
  {
    title: 'Overdue Tasks',
    value: '12',
    change: '-15.3%',
    trend: 'up',
    icon: AlertTriangle,
    color: 'text-red-600'
  },
  {
    title: 'Avg. Completion Time',
    value: '2.4 days',
    change: '-5.2%',
    trend: 'up',
    icon: Clock,
    color: 'text-blue-600'
  }
]

const tasksByStatus = [
  { status: 'To Do', count: 89, percentage: 38, color: 'bg-gray-500' },
  { status: 'In Progress', count: 67, percentage: 29, color: 'bg-blue-500' },
  { status: 'Review', count: 34, percentage: 15, color: 'bg-yellow-500' },
  { status: 'Completed', count: 44, percentage: 18, color: 'bg-green-500' }
]

const upcomingTasks = [
  {
    id: 1,
    title: 'Review website mockups',
    project: 'Website Redesign',
    assignee: 'John Smith',
    priority: 'high',
    dueDate: 'Today, 2:00 PM',
    status: 'in-progress'
  },
  {
    id: 2,
    title: 'Client presentation prep',
    project: 'Mobile App Development',
    assignee: 'Sarah Johnson',
    priority: 'high',
    dueDate: 'Tomorrow, 10:00 AM',
    status: 'todo'
  },
  {
    id: 3,
    title: 'Database optimization',
    project: 'E-commerce Platform',
    assignee: 'Mike Wilson',
    priority: 'medium',
    dueDate: 'Dec 20, 3:00 PM',
    status: 'todo'
  },
  {
    id: 4,
    title: 'User testing session',
    project: 'Brand Identity Design',
    assignee: 'Emily Davis',
    priority: 'low',
    dueDate: 'Dec 22, 1:00 PM',
    status: 'review'
  }
]

const recentActivities = [
  {
    id: 1,
    type: 'completed',
    title: 'Task completed',
    description: 'Logo design finalized',
    assignee: 'John Smith',
    time: '30 minutes ago',
    status: 'completed'
  },
  {
    id: 2,
    type: 'assigned',
    title: 'Task assigned',
    description: 'Code review assigned to Mike',
    assignee: 'Mike Wilson',
    time: '2 hours ago',
    status: 'assigned'
  },
  {
    id: 3,
    type: 'overdue',
    title: 'Task overdue',
    description: 'Client feedback collection',
    assignee: 'Sarah Johnson',
    time: '1 day ago',
    status: 'overdue'
  },
  {
    id: 4,
    type: 'started',
    title: 'Task started',
    description: 'Database migration process',
    assignee: 'Emily Davis',
    time: '2 days ago',
    status: 'started'
  }
]

export function TasksDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tasks Dashboard</h1>
          <p className="text-gray-600 mt-1">Monitor task progress and team productivity.</p>
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
            Add Task
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {taskStats.map((stat) => {
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
                  <span className="text-sm text-gray-500 ml-1">from last week</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tasks by Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Tasks by Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {tasksByStatus.map((item) => (
              <div key={item.status} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{item.status}</span>
                  <span className="text-sm text-gray-600">{item.count}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress value={item.percentage} className="flex-1" />
                  <span className="text-sm text-gray-500 w-12">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Upcoming Tasks</CardTitle>
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View All
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
                  <p className="text-sm text-gray-600">{task.project}</p>
                  <div className="flex items-center mt-1 space-x-2">
                    <Calendar className="h-3 w-3 text-gray-400" />
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
                  activity.status === 'completed' ? 'bg-green-500' :
                  activity.status === 'assigned' ? 'bg-blue-500' :
                  activity.status === 'overdue' ? 'bg-red-500' :
                  'bg-yellow-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.assignee} • {activity.time}</p>
                </div>
                <Badge variant={
                  activity.status === 'completed' ? 'default' :
                  activity.status === 'assigned' ? 'secondary' :
                  activity.status === 'overdue' ? 'destructive' :
                  'outline'
                }>
                  {activity.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}