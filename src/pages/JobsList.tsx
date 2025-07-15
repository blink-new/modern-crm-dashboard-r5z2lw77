import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table'
import { Checkbox } from '../components/ui/checkbox'
import { Progress } from '../components/ui/progress'
import {
  Search,
  Filter,
  Download,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Calendar,
  User
} from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu'

const jobs = [
  {
    id: 1,
    title: 'Website Redesign',
    client: 'Acme Corporation',
    status: 'in-progress',
    priority: 'high',
    progress: 75,
    startDate: '2024-01-01',
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
    startDate: '2024-01-10',
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
    startDate: '2023-12-15',
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
    startDate: '2023-12-01',
    dueDate: '2024-01-15',
    value: '$35,000',
    assignee: 'Emily Davis'
  },
  {
    id: 5,
    title: 'Marketing Campaign',
    client: 'Digital Marketing Pro',
    status: 'in-progress',
    priority: 'medium',
    progress: 60,
    startDate: '2024-01-05',
    dueDate: '2024-01-30',
    value: '$12,000',
    assignee: 'David Brown'
  }
]

export function JobsList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [priorityFilter, setPriorityFilter] = useState('all')
  const [selectedJobs, setSelectedJobs] = useState<number[]>([])

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.assignee.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || job.status === statusFilter
    const matchesPriority = priorityFilter === 'all' || job.priority === priorityFilter
    
    return matchesSearch && matchesStatus && matchesPriority
  })

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedJobs(filteredJobs.map(job => job.id))
    } else {
      setSelectedJobs([])
    }
  }

  const handleSelectJob = (jobId: number, checked: boolean) => {
    if (checked) {
      setSelectedJobs([...selectedJobs, jobId])
    } else {
      setSelectedJobs(selectedJobs.filter(id => id !== jobId))
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Jobs List</h1>
          <p className="text-gray-600 mt-1">Manage all your projects and track their progress.</p>
        </div>
        <div className="flex space-x-3">
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

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="planning">Planning</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="review">Review</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Jobs Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectedJobs.length === filteredJobs.length && filteredJobs.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Job Title</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Assignee</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredJobs.map((job) => (
                <TableRow key={job.id} className="hover:bg-gray-50">
                  <TableCell>
                    <Checkbox
                      checked={selectedJobs.includes(job.id)}
                      onCheckedChange={(checked) => handleSelectJob(job.id, checked as boolean)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-gray-900">{job.title}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-gray-900">{job.client}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      job.status === 'planning' ? 'default' :
                      job.status === 'in-progress' ? 'secondary' :
                      job.status === 'review' ? 'outline' :
                      'destructive'
                    }>
                      {job.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      job.priority === 'high' ? 'destructive' :
                      job.priority === 'medium' ? 'default' :
                      'secondary'
                    }>
                      {job.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Progress value={job.progress} className="w-16" />
                      <span className="text-sm text-gray-600">{job.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Calendar className="h-3 w-3" />
                      {job.dueDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium text-gray-900">{job.value}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <User className="h-3 w-3" />
                      {job.assignee}
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Job
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Job
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>Showing {filteredJobs.length} of {jobs.length} jobs</span>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}