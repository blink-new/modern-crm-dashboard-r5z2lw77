import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '../lib/utils'
import { Button } from './ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import {
  LayoutDashboard,
  Users,
  UserCheck,
  Briefcase,
  CheckSquare,
  Contact,
  ChevronDown,
  ChevronRight,
  Building2
} from 'lucide-react'

interface SidebarProps {
  onNavigate?: () => void
}

interface NavItem {
  title: string
  icon: React.ComponentType<{ className?: string }>
  href?: string
  children?: {
    title: string
    href: string
  }[]
}

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard'
  },
  {
    title: 'Leads',
    icon: Users,
    children: [
      { title: 'Dashboard', href: '/leads/dashboard' },
      { title: 'List', href: '/leads/list' }
    ]
  },
  {
    title: 'Clients',
    icon: UserCheck,
    children: [
      { title: 'Dashboard', href: '/clients/dashboard' },
      { title: 'List', href: '/clients/list' }
    ]
  },
  {
    title: 'Jobs',
    icon: Briefcase,
    children: [
      { title: 'Dashboard', href: '/jobs/dashboard' },
      { title: 'List', href: '/jobs/list' }
    ]
  },
  {
    title: 'Tasks',
    icon: CheckSquare,
    children: [
      { title: 'Dashboard', href: '/tasks/dashboard' },
      { title: 'List', href: '/tasks/list' }
    ]
  },
  {
    title: 'Contacts',
    icon: Contact,
    href: '/contacts'
  }
]

export function Sidebar({ onNavigate }: SidebarProps) {
  const location = useLocation()
  const [openItems, setOpenItems] = useState<string[]>(() => {
    // Auto-open the section that contains the current route
    const currentSection = navItems.find(item => 
      item.children?.some(child => location.pathname.startsWith(child.href))
    )
    return currentSection ? [currentSection.title] : []
  })

  const toggleItem = (title: string) => {
    setOpenItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    )
  }

  const isActive = (href: string) => {
    return location.pathname === href
  }

  const isParentActive = (children: { href: string }[]) => {
    return children.some(child => location.pathname.startsWith(child.href))
  }

  return (
    <div className="flex flex-col h-full">
      {/* Logo/Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-xl font-semibold text-gray-900">CRM Pro</h1>
            <p className="text-sm text-gray-500">Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isOpen = openItems.includes(item.title)
          
          if (item.children) {
            const hasActiveChild = isParentActive(item.children)
            
            return (
              <Collapsible key={item.title} open={isOpen} onOpenChange={() => toggleItem(item.title)}>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-between text-left font-medium",
                      hasActiveChild && "bg-primary/10 text-primary"
                    )}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </div>
                    {isOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1 mt-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      onClick={onNavigate}
                      className={cn(
                        "block px-4 py-2 ml-8 text-sm rounded-md transition-colors",
                        isActive(child.href)
                          ? "bg-primary text-primary-foreground"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      )}
                    >
                      {child.title}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            )
          }

          return (
            <Link key={item.title} to={item.href!} onClick={onNavigate}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start font-medium",
                  isActive(item.href!) && "bg-primary text-primary-foreground"
                )}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.title}
              </Button>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          CRM Pro v1.0
        </div>
      </div>
    </div>
  )
}