import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Progress } from '../components/ui/progress'
import {
  Briefcase,
  TrendingUp,
  Clock,
  DollarSign,
  Plus,
  Filter,
  Download,
  Eye,
  Calendar
} from 'lucide-react'

const jobStats = [
  {
    title: 'Active Jobs',
    value: '456',
    change: '+12.5%',
    trend: 'up',
    icon: Briefcase,
    color: 'text-purple-600'
  },
  {
    title: 'Completed This Month',
    value: '89',
    change: '+8.2%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-green-600'
  },
  {
    title: 'Total Revenue',
    value: '$234,500',
    change: '+15.3%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-blue-600'
  },
  {
    title: 'Avg. Completion Time',
    value: '12.5 days',
    change: '-5.2%',
    trend: 'up',
    icon: Clock,
    color: 'text-orange-600'
  }
]

const jobsByStatus = [
  { status: 'Planning', count: 45, percentage: 25, color: 'bg-blue-500' },
  { status: 'In Progress', count: 78, percentage: 43, color: 'bg-yellow-500' },
  { status: 'Review', count: 23, percentage: 13, color: 'bg-purple-500' },
  { status: 'Completed', count: 34, percentage: 19, color: 'bg-green-500' }
]

const recentJobs = [
  {
    id: 1,
    title: 'Website Redesign',
    client: 'Acme Corporation',
    status: 'in-progress',
    priority: 'high',
    progress: 75,
    dueDate: '2024-01-25',
    value: '$15,000',
    assignee: 'John Smith'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    client: 'Tech Solutions Inc.',
    status: 'planning',
    priority: 'medium',
    progress: 25,
    dueDate: '2024-02-15',
    value: '$25,000',
    assignee: 'Sarah Johnson'
  },
  {
    id: 3,
    title: 'Brand Identity Design',
    client: 'Creative Agency',
    status: 'review',
    priority: 'low',
    progress: 90,
    dueDate: '2024-01-20',
    value: '$8,500',
    assignee: 'Mike Wilson'
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    client: 'Global Enterprises',
    status: 'completed',
    priority: 'high',
    progress: 100,
    dueDate: '2024-01-15',
    value: '$35,000',
    assignee: 'Emily Davis'
  }
]

export function JobsDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Jobs Dashboard</h1>
          <p className="text-gray-600 mt-1">Track project progress and manage job workflows.</p>
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
            Create Job
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobStats.map((stat) => {
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
        {/* Jobs by Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Jobs by Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {jobsByStatus.map((item) => (
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

        {/* Recent Jobs */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Recent Jobs</CardTitle>
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View All
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentJobs.map((job) => (
              <div key={job.id} className="flex items-center space-x-4 p-4 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="text-sm font-medium text-gray-900">{job.title}</p>
                    <Badge variant={
                      job.priority === 'high' ? 'destructive' :
                      job.priority === 'medium' ? 'default' :
                      'secondary'
                    }>
                      {job.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{job.client}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1">
                      <Progress value={job.progress} className="w-20" />
                      <span className="text-xs text-gray-500">{job.progress}%</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {job.dueDate}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={
                    job.status === 'planning' ? 'default' :
                    job.status === 'in-progress' ? 'secondary' :
                    job.status === 'review' ? 'outline' :
                    'destructive'
                  }>
                    {job.status}
                  </Badge>
                  <p className="text-sm font-medium text-gray-900 mt-1">{job.value}</p>
                  <p className="text-xs text-gray-500">{job.assignee}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}