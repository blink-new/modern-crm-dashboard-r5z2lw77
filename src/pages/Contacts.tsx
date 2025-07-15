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
  MapPin,
  Building2
} from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu'

const contacts = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@acme.com',
    phone: '+1 (555) 123-4567',
    company: 'Acme Corporation',
    position: 'CEO',
    type: 'client',
    location: 'New York, NY',
    tags: ['VIP', 'Decision Maker'],
    lastContact: '2024-01-15',
    source: 'Website'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@techsolutions.com',
    phone: '+1 (555) 234-5678',
    company: 'Tech Solutions Inc.',
    position: 'CTO',
    type: 'lead',
    location: 'San Francisco, CA',
    tags: ['Technical', 'Interested'],
    lastContact: '2024-01-14',
    source: 'Referral'
  },
  {
    id: 3,
    name: 'Mike Wilson',
    email: 'mike@global.com',
    phone: '+1 (555) 345-6789',
    company: 'Global Enterprises',
    position: 'Project Manager',
    type: 'client',
    location: 'Chicago, IL',
    tags: ['Long-term', 'Reliable'],
    lastContact: '2024-01-13',
    source: 'Social Media'
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily@creative.com',
    phone: '+1 (555) 456-7890',
    company: 'Creative Agency',
    position: 'Creative Director',
    type: 'prospect',
    location: 'Los Angeles, CA',
    tags: ['Creative', 'Budget Conscious'],
    lastContact: '2024-01-12',
    source: 'Email Campaign'
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david@digitalmarketing.com',
    phone: '+1 (555) 567-8901',
    company: 'Digital Marketing Pro',
    position: 'Marketing Manager',
    type: 'lead',
    location: 'Austin, TX',
    tags: ['Marketing', 'Growth'],
    lastContact: '2024-01-11',
    source: 'Website'
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    email: 'lisa@consulting.com',
    phone: '+1 (555) 678-9012',
    company: 'Consulting Group',
    position: 'Senior Consultant',
    type: 'partner',
    location: 'Boston, MA',
    tags: ['Strategic', 'Partnership'],
    lastContact: '2024-01-10',
    source: 'Conference'
  }
]

const contactStats = [
  { label: 'Total Contacts', value: contacts.length, color: 'text-blue-600' },
  { label: 'Clients', value: contacts.filter(c => c.type === 'client').length, color: 'text-green-600' },
  { label: 'Leads', value: contacts.filter(c => c.type === 'lead').length, color: 'text-yellow-600' },
  { label: 'Prospects', value: contacts.filter(c => c.type === 'prospect').length, color: 'text-purple-600' }
]

export function Contacts() {
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [sourceFilter, setSourceFilter] = useState('all')
  const [selectedContacts, setSelectedContacts] = useState<number[]>([])

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = typeFilter === 'all' || contact.type === typeFilter
    const matchesSource = sourceFilter === 'all' || contact.source === sourceFilter
    
    return matchesSearch && matchesType && matchesSource
  })

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedContacts(filteredContacts.map(contact => contact.id))
    } else {
      setSelectedContacts([])
    }
  }

  const handleSelectContact = (contactId: number, checked: boolean) => {
    if (checked) {
      setSelectedContacts([...selectedContacts, contactId])
    } else {
      setSelectedContacts(selectedContacts.filter(id => id !== contactId))
    }
  }

  const getTypeBadge = (type: string) => {
    const colors = {
      client: 'bg-green-100 text-green-800',
      lead: 'bg-blue-100 text-blue-800',
      prospect: 'bg-yellow-100 text-yellow-800',
      partner: 'bg-purple-100 text-purple-800'
    } as const

    return (
      <Badge className={colors[type as keyof typeof colors]}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Badge>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contacts</h1>
          <p className="text-gray-600 mt-1">Manage your business contacts and relationships.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Contact
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {contactStats.map((stat) => (
          <Card key={stat.label} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
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
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="client">Client</SelectItem>
                <SelectItem value="lead">Lead</SelectItem>
                <SelectItem value="prospect">Prospect</SelectItem>
                <SelectItem value="partner">Partner</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                <SelectItem value="Website">Website</SelectItem>
                <SelectItem value="Referral">Referral</SelectItem>
                <SelectItem value="Social Media">Social Media</SelectItem>
                <SelectItem value="Email Campaign">Email Campaign</SelectItem>
                <SelectItem value="Conference">Conference</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Bulk Actions */}
      {selectedContacts.length > 0 && (
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {selectedContacts.length} contact{selectedContacts.length > 1 ? 's' : ''} selected
              </span>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Button size="sm" variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Add Tags
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

      {/* Contacts Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectedContacts.length === filteredContacts.length && filteredContacts.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Company & Position</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Last Contact</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContacts.map((contact) => (
                <TableRow key={contact.id} className="hover:bg-gray-50">
                  <TableCell>
                    <Checkbox
                      checked={selectedContacts.includes(contact.id)}
                      onCheckedChange={(checked) => handleSelectContact(contact.id, checked as boolean)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{contact.name}</div>
                        <div className="text-sm text-gray-500">{contact.email}</div>
                        <div className="text-sm text-gray-500">{contact.phone}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="flex items-center space-x-1">
                        <Building2 className="h-3 w-3 text-gray-400" />
                        <span className="font-medium text-gray-900">{contact.company}</span>
                      </div>
                      <div className="text-sm text-gray-500">{contact.position}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {getTypeBadge(contact.type)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <MapPin className="h-3 w-3" />
                      {contact.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {contact.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{contact.source}</Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-600">{contact.lastContact}</span>
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
                          Edit Contact
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="h-4 w-4 mr-2" />
                          Send Email
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Phone className="h-4 w-4 mr-2" />
                          Call Contact
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Contact
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
        <span>Showing {filteredContacts.length} of {contacts.length} contacts</span>
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