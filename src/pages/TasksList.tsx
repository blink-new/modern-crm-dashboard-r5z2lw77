import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table'
import { Checkbox } from '../components/ui/checkbox'
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
  User,
  CheckCircle
} from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu'

const tasks = [
  {
    id: 1,
    title: 'Review website mockups',
    project: 'Website Redesign',
    assignee: 'John Smith',
    priority: 'high',
    status: 'in-progress',
    dueDate: '2024-01-18',
    createdDate: '2024-01-15',
    description: 'Review and provide feedback on the new website mockups'
  },
  {
    id: 2,
    title: 'Client presentation prep',
    project: 'Mobile App Development',
    assignee: 'Sarah Johnson',
    priority: 'high',
    status: 'todo',
    dueDate: '2024-01-19',
    createdDate: '2024-01-16',
    description: 'Prepare presentation materials for client meeting'
  },
  {
    id: 3,
    title: 'Database optimization',
    project: 'E-commerce Platform',
    assignee: 'Mike Wilson',
    priority: 'medium',
    status: 'todo',
    dueDate: '2024-01-20',
    createdDate: '2024-01-14',
    description: 'Optimize database queries for better performance'
  },
  {
    id: 4,
    title: 'User testing session',
    project: 'Brand Identity Design',
    assignee: 'Emily Davis',
    priority: 'low',
    status: 'review',
    dueDate: '2024-01-22',
    createdDate: '2024-01-12',
    description: 'Conduct user testing session and collect feedback'
  },
  {
    id: 5,
    title: 'Code review',
    project: 'Website Redesign',
    assignee: 'David Brown',
    priority: 'medium',
    status: 'completed',
    dueDate: '2024-01-17',
    createdDate: '2024-01-13',
    description: 'Review code changes and provide feedback'
  },
  {
    id: 6,
    title: 'Content creation',
    project: 'Marketing Campaign',
    assignee: 'Lisa Anderson',
    priority: 'high',
    status: 'overdue',
    dueDate: '2024-01-16',
    createdDate: '2024-01-10',
    description: 'Create content for social media campaign'
  }
]

export function TasksList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [priorityFilter, setPriorityFilter] = useState('all')
  const [selectedTasks, setSelectedTasks] = useState<number[]>([])

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.assignee.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter
    const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter
    
    return matchesSearch && matchesStatus && matchesPriority
  })

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedTasks(filteredTasks.map(task => task.id))
    } else {
      setSelectedTasks([])
    }
  }

  const handleSelectTask = (taskId: number, checked: boolean) => {
    if (checked) {
      setSelectedTasks([...selectedTasks, taskId])
    } else {
      setSelectedTasks(selectedTasks.filter(id => id !== taskId))
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      'todo': 'secondary',
      'in-progress': 'default',
      'review': 'outline',
      'completed': 'default',
      'overdue': 'destructive'
    } as const

    const colors = {
      'todo': 'bg-gray-100 text-gray-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      'review': 'bg-yellow-100 text-yellow-800',
      'completed': 'bg-green-100 text-green-800',
      'overdue': 'bg-red-100 text-red-800'
    } as const

    return (
      <Badge className={colors[status as keyof typeof colors]}>
        {status === 'todo' ? 'To Do' : 
         status === 'in-progress' ? 'In Progress' :
         status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tasks List</h1>
          <p className="text-gray-600 mt-1">Manage and track all your tasks and assignments.</p>
        </div>
        <div className="flex space-x-3">
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
                  placeholder="Search tasks..."
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
                <SelectItem value="todo">To Do</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="review">Review</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
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

      {/* Bulk Actions */}
      {selectedTasks.length > 0 && (
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {selectedTasks.length} task{selectedTasks.length > 1 ? 's' : ''} selected
              </span>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Mark Complete
                </Button>
                <Button size="sm" variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Change Status
                </Button>
                <Button size="sm" variant="outline">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tasks Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectedTasks.length === filteredTasks.length && filteredTasks.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Task</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Assignee</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTasks.map((task) => (
                <TableRow key={task.id} className="hover:bg-gray-50">
                  <TableCell>
                    <Checkbox
                      checked={selectedTasks.includes(task.id)}
                      onCheckedChange={(checked) => handleSelectTask(task.id, checked as boolean)}
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium text-gray-900">{task.title}</div>
                      <div className="text-sm text-gray-500">{task.description}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-gray-900">{task.project}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <User className="h-3 w-3" />
                      {task.assignee}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      task.priority === 'high' ? 'destructive' :
                      task.priority === 'medium' ? 'default' :
                      'secondary'
                    }>
                      {task.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(task.status)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Calendar className="h-3 w-3" />
                      {task.dueDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-600">{task.createdDate}</span>
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
                          Edit Task
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Mark Complete
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Task
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
        <span>Showing {filteredTasks.length} of {tasks.length} tasks</span>
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