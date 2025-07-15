import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Progress } from '../components/ui/progress'
import {
  Users,
  TrendingUp,
  Target,
  Phone,
  Mail,
  Calendar,
  Plus,
  Filter,
  Download,
  Eye
} from 'lucide-react'

const leadStats = [
  {
    title: 'Total Leads',
    value: '2,847',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    title: 'Qualified Leads',
    value: '1,234',
    change: '+8.2%',
    trend: 'up',
    icon: Target,
    color: 'text-green-600'
  },
  {
    title: 'Conversion Rate',
    value: '43.3%',
    change: '+2.1%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-purple-600'
  },
  {
    title: 'Avg. Response Time',
    value: '2.4h',
    change: '-15.3%',
    trend: 'up',
    icon: Phone,
    color: 'text-orange-600'
  }
]

const leadSources = [
  { name: 'Website', count: 1247, percentage: 44, color: 'bg-blue-500' },
  { name: 'Social Media', count: 856, percentage: 30, color: 'bg-green-500' },
  { name: 'Email Campaign', count: 423, percentage: 15, color: 'bg-purple-500' },
  { name: 'Referrals', count: 321, percentage: 11, color: 'bg-orange-500' }
]

const recentLeads = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@example.com',
    company: 'Tech Solutions Inc.',
    source: 'Website',
    status: 'new',
    score: 85,
    createdAt: '2 minutes ago'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@creative.com',
    company: 'Creative Agency',
    source: 'Social Media',
    status: 'qualified',
    score: 92,
    createdAt: '1 hour ago'
  },
  {
    id: 3,
    name: 'Mike Wilson',
    email: 'mike@global.com',
    company: 'Global Corp',
    source: 'Email Campaign',
    status: 'contacted',
    score: 78,
    createdAt: '3 hours ago'
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily@startup.io',
    company: 'Startup Inc.',
    source: 'Referrals',
    status: 'nurturing',
    score: 65,
    createdAt: '1 day ago'
  }
]

const leadPipeline = [
  { stage: 'New', count: 145, percentage: 25 },
  { stage: 'Qualified', count: 98, percentage: 17 },
  { stage: 'Contacted', count: 156, percentage: 27 },
  { stage: 'Nurturing', count: 87, percentage: 15 },
  { stage: 'Converted', count: 92, percentage: 16 }
]

export function LeadsDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Leads Dashboard</h1>
          <p className="text-gray-600 mt-1">Track and manage your lead generation performance.</p>
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
            Add Lead
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {leadStats.map((stat) => {
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
        {/* Lead Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Lead Sources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {leadSources.map((source) => (
              <div key={source.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{source.name}</span>
                  <span className="text-sm text-gray-600">{source.count}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress value={source.percentage} className="flex-1" />
                  <span className="text-sm text-gray-500 w-12">{source.percentage}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Lead Pipeline */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Lead Pipeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {leadPipeline.map((stage) => (
              <div key={stage.stage} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div>
                  <p className="text-sm font-medium text-gray-900">{stage.stage}</p>
                  <p className="text-xs text-gray-500">{stage.percentage}% of total</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">{stage.count}</p>
                  <p className="text-xs text-gray-500">leads</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add New Lead
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Mail className="h-4 w-4 mr-2" />
              Send Email Campaign
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Phone className="h-4 w-4 mr-2" />
              Schedule Follow-up
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Book Meeting
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Leads
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Leads */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">Recent Leads</CardTitle>
          <Button variant="ghost" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="flex items-center space-x-4 p-4 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">
                    {lead.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-gray-900">{lead.name}</p>
                    <Badge variant="outline" className="text-xs">
                      Score: {lead.score}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{lead.email}</p>
                  <p className="text-sm text-gray-500">{lead.company}</p>
                </div>
                <div className="text-right">
                  <Badge variant={
                    lead.status === 'new' ? 'default' :
                    lead.status === 'qualified' ? 'secondary' :
                    lead.status === 'contacted' ? 'outline' :
                    'destructive'
                  }>
                    {lead.status}
                  </Badge>
                  <p className="text-xs text-gray-500 mt-1">{lead.createdAt}</p>
                </div>
                <div className="flex space-x-1">
                  <Button size="sm" variant="ghost">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}