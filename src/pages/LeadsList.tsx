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
  Eye
} from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu'

const leads = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Tech Solutions Inc.',
    source: 'Website',
    status: 'new',
    score: 85,
    value: '$25,000',
    createdAt: '2024-01-15',
    lastContact: '2024-01-15'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@creative.com',
    phone: '+1 (555) 234-5678',
    company: 'Creative Agency',
    source: 'Social Media',
    status: 'qualified',
    score: 92,
    value: '$45,000',
    createdAt: '2024-01-14',
    lastContact: '2024-01-16'
  },
  {
    id: 3,
    name: 'Mike Wilson',
    email: 'mike@global.com',
    phone: '+1 (555) 345-6789',
    company: 'Global Corp',
    source: 'Email Campaign',
    status: 'contacted',
    score: 78,
    value: '$35,000',
    createdAt: '2024-01-13',
    lastContact: '2024-01-17'
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily@startup.io',
    phone: '+1 (555) 456-7890',
    company: 'Startup Inc.',
    source: 'Referrals',
    status: 'nurturing',
    score: 65,
    value: '$15,000',
    createdAt: '2024-01-12',
    lastContact: '2024-01-18'
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david@enterprise.com',
    phone: '+1 (555) 567-8901',
    company: 'Enterprise Solutions',
    source: 'Website',
    status: 'converted',
    score: 95,
    value: '$75,000',
    createdAt: '2024-01-10',
    lastContact: '2024-01-19'
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    email: 'lisa@consulting.com',
    phone: '+1 (555) 678-9012',
    company: 'Consulting Group',
    source: 'Social Media',
    status: 'qualified',
    score: 88,
    value: '$30,000',
    createdAt: '2024-01-09',
    lastContact: '2024-01-20'
  }
]

export function LeadsList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [sourceFilter, setSourceFilter] = useState('all')
  const [selectedLeads, setSelectedLeads] = useState<number[]>([])

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter
    const matchesSource = sourceFilter === 'all' || lead.source === sourceFilter
    
    return matchesSearch && matchesStatus && matchesSource
  })

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedLeads(filteredLeads.map(lead => lead.id))
    } else {
      setSelectedLeads([])
    }
  }

  const handleSelectLead = (leadId: number, checked: boolean) => {
    if (checked) {
      setSelectedLeads([...selectedLeads, leadId])
    } else {
      setSelectedLeads(selectedLeads.filter(id => id !== leadId))
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      new: 'default',
      qualified: 'secondary',
      contacted: 'outline',
      nurturing: 'destructive',
      converted: 'default'
    } as const

    const colors = {
      new: 'bg-blue-100 text-blue-800',
      qualified: 'bg-green-100 text-green-800',
      contacted: 'bg-yellow-100 text-yellow-800',
      nurturing: 'bg-orange-100 text-orange-800',
      converted: 'bg-purple-100 text-purple-800'
    } as const

    return (
      <Badge className={colors[status as keyof typeof colors]}>
        {status}
      </Badge>
    )
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Leads List</h1>
          <p className="text-gray-600 mt-1">Manage and track all your leads in one place.</p>
        </div>
        <div className="flex space-x-3">
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
                  placeholder="Search leads..."
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
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="qualified">Qualified</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="nurturing">Nurturing</SelectItem>
                <SelectItem value="converted">Converted</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                <SelectItem value="Website">Website</SelectItem>
                <SelectItem value="Social Media">Social Media</SelectItem>
                <SelectItem value="Email Campaign">Email Campaign</SelectItem>
                <SelectItem value="Referrals">Referrals</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Bulk Actions */}
      {selectedLeads.length > 0 && (
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {selectedLeads.length} lead{selectedLeads.length > 1 ? 's' : ''} selected
              </span>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
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

      {/* Leads Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectedLeads.length === filteredLeads.length && filteredLeads.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Contact</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeads.map((lead) => (
                <TableRow key={lead.id} className="hover:bg-gray-50">
                  <TableCell>
                    <Checkbox
                      checked={selectedLeads.includes(lead.id)}
                      onCheckedChange={(checked) => handleSelectLead(lead.id, checked as boolean)}
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium text-gray-900">{lead.name}</div>
                      <div className="text-sm text-gray-500">{lead.email}</div>
                      <div className="text-sm text-gray-500">{lead.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-gray-900">{lead.company}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{lead.source}</Badge>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(lead.status)}
                  </TableCell>
                  <TableCell>
                    <span className={`font-medium ${getScoreColor(lead.score)}`}>
                      {lead.score}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium text-gray-900">{lead.value}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-600">{lead.createdAt}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-600">{lead.lastContact}</span>
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
                          Edit Lead
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="h-4 w-4 mr-2" />
                          Send Email
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Phone className="h-4 w-4 mr-2" />
                          Call Lead
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Lead
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
        <span>Showing {filteredLeads.length} of {leads.length} leads</span>
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