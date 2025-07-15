import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { MainDashboard } from './pages/MainDashboard'
import { LeadsDashboard } from './pages/LeadsDashboard'
import { LeadsList } from './pages/LeadsList'
import { ClientsDashboard } from './pages/ClientsDashboard'
import { ClientsList } from './pages/ClientsList'
import { JobsDashboard } from './pages/JobsDashboard'
import { JobsList } from './pages/JobsList'
import { TasksDashboard } from './pages/TasksDashboard'
import { TasksList } from './pages/TasksList'
import { Contacts } from './pages/Contacts'
import { useIsMobile } from './hooks/use-mobile'
import { Sheet, SheetContent, SheetTrigger } from './components/ui/sheet'
import { Button } from './components/ui/button'
import { Menu } from 'lucide-react'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isMobile = useIsMobile()

  const SidebarContent = () => (
    <Sidebar onNavigate={() => setSidebarOpen(false)} />
  )

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        {/* Desktop Sidebar */}
        {!isMobile && (
          <div className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
            <SidebarContent />
          </div>
        )}

        {/* Mobile Sidebar */}
        {isMobile && (
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="fixed top-4 left-4 z-50 lg:hidden"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <SidebarContent />
            </SheetContent>
          </Sheet>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<MainDashboard />} />
              <Route path="/leads" element={<Navigate to="/leads/dashboard" replace />} />
              <Route path="/leads/dashboard" element={<LeadsDashboard />} />
              <Route path="/leads/list" element={<LeadsList />} />
              <Route path="/clients" element={<Navigate to="/clients/dashboard" replace />} />
              <Route path="/clients/dashboard" element={<ClientsDashboard />} />
              <Route path="/clients/list" element={<ClientsList />} />
              <Route path="/jobs" element={<Navigate to="/jobs/dashboard" replace />} />
              <Route path="/jobs/dashboard" element={<JobsDashboard />} />
              <Route path="/jobs/list" element={<JobsList />} />
              <Route path="/tasks" element={<Navigate to="/tasks/dashboard" replace />} />
              <Route path="/tasks/dashboard" element={<TasksDashboard />} />
              <Route path="/tasks/list" element={<TasksList />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App