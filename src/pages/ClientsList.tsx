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
  Mail,
  Phone,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Star
} from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu'

const clients = [
  {
    id: 1,
    name: 'Acme Corporation',
    contact: 'John Smith',
    email: 'john@acme.com',
    phone: '+1 (555) 123-4567',
    type: 'Enterprise',
    status: 'active',
    projects: 8,
    revenue: '$45,000',
    satisfaction: 4.8,
    joinDate: '2023-06-15',
    lastProject: '2024-01-15'
  },
  {
    id: 2,
    name: 'Tech Solutions Inc.',
    contact: 'Sarah Johnson',
    email: 'sarah@techsolutions.com',
    phone: '+1 (555) 234-5678',
    type: 'Small Business',
    status: 'active',
    projects: 6,
    revenue: '$38,500',
    satisfaction: 4.9,
    joinDate: '2023-08-22',
    lastProject: '2024-01-10'
  },
  {
    id: 3,
    name: 'Global Enterprises',
    contact: 'Mike Wilson',
    email: 'mike@global.com',
    phone: '+1 (555) 345-6789',
    type: 'Enterprise',
    status: 'active',
    projects: 12,
    revenue: '$52,000',
    satisfaction: 4.7,
    joinDate: '2023-04-10',
    lastProject: '2024-01-12'
  },
  {
    id: 4,
    name: 'Creative Agency',
    contact: 'Emily Davis',
    email: 'emily@creative.com',
    phone: '+1 (555) 456-7890',
    type: 'Startup',
    status: 'inactive',
    projects: 4,
    revenue: '$28,750',
    satisfaction: 4.6,
    joinDate: '2023-09-05',
    lastProject: '2023-11-20'
  },
  {
    id: 5,
    name: 'Digital Marketing Pro',
    contact: 'David Brown',
    email: 'david@digitalmarketing.com',
    phone: '+1 (555) 567-8901',
    type: 'Small Business',
    status: 'active',
    projects: 3,
    revenue: '$22,000',
    satisfaction: 4.5,
    joinDate: '2023-11-12',
    lastProject: '2024-01-08'
  }
]

export function ClientsList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const [selectedClients, setSelectedClients] = useState<number[]>([])

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter
    const matchesType = typeFilter === 'all' || client.type === typeFilter
    
    return matchesSearch && matchesStatus && matchesType
  })

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedClients(filteredClients.map(client => client.id))
    } else {
      setSelectedClients([])
    }
  }

  const handleSelectClient = (clientId: number, checked: boolean) => {
    if (checked) {
      setSelectedClients([...selectedClients, clientId])
    } else {
      setSelectedClients(selectedClients.filter(id => id !== clientId))
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Clients List</h1>
          <p className="text-gray-600 mt-1">Manage all your client relationships and projects.</p>
        </div>
        <div className="flex space-x-3">
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
                  placeholder="Search clients..."
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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Enterprise">Enterprise</SelectItem>
                <SelectItem value="Small Business">Small Business</SelectItem>
                <SelectItem value="Startup">Startup</SelectItem>
                <SelectItem value="Individual">Individual</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Clients Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectedClients.length === filteredClients.length && filteredClients.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Projects</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Last Project</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClients.map((client) => (
                <TableRow key={client.id} className="hover:bg-gray-50">
                  <TableCell>
                    <Checkbox
                      checked={selectedClients.includes(client.id)}
                      onCheckedChange={(checked) => handleSelectClient(client.id, checked as boolean)}
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium text-gray-900">{client.name}</div>
                      <div className="text-sm text-gray-500">{client.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium text-gray-900">{client.contact}</div>
                      <div className="text-sm text-gray-500">{client.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{client.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={client.status === 'active' ? 'default' : 'secondary'}>
                      {client.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium text-gray-900">{client.projects}</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium text-gray-900">{client.revenue}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{client.satisfaction}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-600">{client.lastProject}</span>
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
                          Edit Client
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="h-4 w-4 mr-2" />
                          Send Email
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Phone className="h-4 w-4 mr-2" />
                          Call Client
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Client
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
        <span>Showing {filteredClients.length} of {clients.length} clients</span>
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