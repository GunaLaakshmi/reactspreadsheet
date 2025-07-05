import {
  ArrowUpDown,
  Bell,
  ChevronDown,
  Download,
  Eye,
  Filter,
  Grid3x3,
  MoreHorizontal,
  Plus,
  Search,
  Share2,
  Upload
} from 'lucide-react';
import { useMemo, useState } from 'react';

const SpreadsheetPrototype = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeBottomTab, setActiveBottomTab] = useState('All Orders');

  const data = [
    { id: 1, jobRequest: 'Launch social media campaign for product awareness', submitted: '15-11-2024', status: 'In-process', submitter: 'Aisha Patel', url: 'www.aishapatel...', assigned: 'Sophie Choudhury', priority: 'Medium', dueDate: '20-11-2024', estValue: '6,200,000 ₹' },
    { id: 2, jobRequest: 'Update press kit for company redesign', submitted: '28-10-2024', status: 'Need to start', submitter: 'Irfan Khan', url: 'www.irfankhanp...', assigned: 'Tejas Pandey', priority: 'High', dueDate: '30-10-2024', estValue: '3,500,000 ₹' },
    { id: 3, jobRequest: 'Finalize user testing feedback for app improvements', submitted: '05-12-2024', status: 'In-process', submitter: 'Mark Johnson', url: 'www.markjohns...', assigned: 'Rachel Lee', priority: 'Medium', dueDate: '10-12-2024', estValue: '4,750,000 ₹' },
    { id: 4, jobRequest: 'Design new features for the website', submitted: '10-01-2025', status: 'Complete', submitter: 'Emily Green', url: 'www.emilygreen...', assigned: 'Tom Wright', priority: 'Low', dueDate: '15-01-2025', estValue: '5,900,000 ₹' },
    { id: 5, jobRequest: 'Prepare financial report for Q4', submitted: '25-01-2025', status: 'Blocked', submitter: 'Jessica Brown', url: 'www.jessicabro...', assigned: 'Kevin Smith', priority: 'Low', dueDate: '30-01-2025', estValue: '2,800,000 ₹' },
  ];

  const tabs = [
    { name: 'Q3 Financial Overview', color: 'bg-blue-100 text-blue-800' }
  ];

  const subTabs = [
    { name: 'ABC', color: 'bg-green-100 text-green-800' },
    { name: 'Answer a question', color: 'bg-purple-100 text-purple-800' },
    { name: 'Extract', color: 'bg-orange-100 text-orange-800' }
  ];

  const bottomTabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

  const columns = useMemo(() => [
    { key: 'jobRequest', label: 'Job Request', width: '300px' },
    { key: 'submitted', label: 'Submitted', width: '120px' },
    { key: 'status', label: 'Status', width: '120px' },
    { key: 'submitter', label: 'Submitter', width: '150px' },
    { key: 'url', label: 'URL', width: '150px' },
    { key: 'assigned', label: 'Assigned', width: '150px' },
    { key: 'priority', label: 'Priority', width: '100px' },
    { key: 'dueDate', label: 'Due Date', width: '120px' },
    { key: 'estValue', label: 'Est. Value', width: '120px' },
  ], []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'In-process': return 'bg-yellow-100 text-yellow-800';
      case 'Need to start': return 'bg-blue-100 text-blue-800';
      case 'Complete': return 'bg-green-100 text-green-800';
      case 'Blocked': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b px-4 py-2 flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-600 space-x-1">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
          <span>Workspace</span>
          <span>›</span>
          <span>Folder 2</span>
          <span>›</span>
          <span className="font-medium text-black">Spreadsheet 3</span>
          <MoreHorizontal className="w-4 h-4 ml-2" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-2 w-4 h-4 text-gray-400" />
            <input className="pl-10 pr-3 py-1.5 border border-gray-300 rounded text-sm" placeholder="Search within sheet" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <Bell className="w-5 h-5 text-gray-600" />
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold">JD</div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white border-b px-4 py-2 flex justify-between items-center text-sm">
        <div className="flex space-x-4">
          <button onClick={() => console.log('Clicked: Tool bar')} className="flex items-center space-x-1 text-gray-700"><span>Tool bar</span><ChevronDown className="w-4 h-4" /></button>
          <button onClick={() => console.log('Clicked: Hide fields')} className="flex items-center space-x-1 text-gray-700"><Eye className="w-4 h-4" /><span>Hide fields</span></button>
          <button onClick={() => console.log('Clicked: Sort')} className="flex items-center space-x-1 text-gray-700"><ArrowUpDown className="w-4 h-4" /><span>Sort</span></button>
          <button onClick={() => console.log('Clicked: Filter')} className="flex items-center space-x-1 text-gray-700"><Filter className="w-4 h-4" /><span>Filter</span></button>
          <button onClick={() => console.log('Clicked: Cell view')} className="flex items-center space-x-1 text-gray-700"><Grid3x3 className="w-4 h-4" /><span>Cell view</span></button>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => console.log('Clicked: Import')} className="flex items-center space-x-1 text-gray-700"><Upload className="w-4 h-4" /><span>Import</span></button>
          <button onClick={() => console.log('Clicked: Export')} className="flex items-center space-x-1 text-gray-700"><Download className="w-4 h-4" /><span>Export</span></button>
          <button onClick={() => console.log('Clicked: Share')} className="flex items-center space-x-1 text-gray-700 border px-3 py-1 rounded"><Share2 className="w-4 h-4" /><span>Share</span></button>
          <button onClick={() => console.log('Clicked: New Action')} className="bg-green-700 text-white px-4 py-1 rounded text-sm font-medium">+ New Action</button>
        </div>
      </div>

      {/* Top Tabs */}
      <div className="bg-white border-b px-4 py-2 flex space-x-1 items-center">
        {tabs.map(tab => (
          <button
            key={tab.name}
            onClick={() => console.log(`Selected tab: ${tab.name}`)}
            className={`px-4 py-1.5 text-sm font-medium rounded-t-md text-gray-700 bg-white border-t-2 border-transparent`}
          >
            {tab.name}
          </button>
        ))}
        <div className="flex space-x-1 ml-2">
          {subTabs.map(tab => (
            <div key={tab.name} className={`px-4 py-1.5 text-sm font-medium ${tab.color}`}>{tab.name}</div>
          ))}
        </div>
      </div>

      {/* Spreadsheet Table */}
      <div className="flex-1 overflow-auto bg-white">
        <table className="min-w-full border-t border-gray-300">
          <thead className="bg-white">
            <tr>
              <th className="border border-gray-300 text-left px-2 py-2 text-xs text-gray-500">#</th>
              {columns.map(col => (
                <th key={col.key} className="border border-gray-300 text-left px-4 py-2 text-xs text-gray-500" style={{ width: col.width }}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 24 }).map((_, i) => {
              const row = data[i];
              return (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-2 py-2 text-sm text-gray-500">{i + 1}</td>
                  {columns.map(col => (
                    <td key={col.key} className="border border-gray-300 px-4 py-2 text-sm">
                      {row ? (
                        col.key === 'status' ? <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(row[col.key])}`}>{row[col.key]}</span>
                        : col.key === 'priority' ? <span className={`font-medium ${getPriorityColor(row[col.key])}`}>{row[col.key]}</span>
                        : col.key === 'url' ? <a href="#" className="text-blue-600 underline">{row[col.key]}</a>
                        : (
                          <span
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => console.log(`Edited ${col.key}: ${e.target.textContent}`)}
                            className="outline-none focus:bg-yellow-50"
                          >
                            {row[col.key]}
                          </span>
                        )
                      ) : null}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Bottom Tabs */}
      <div className="border-t bg-white px-4 py-2 flex items-center space-x-4 text-sm">
        {bottomTabs.map(tab => (
          <button
            key={tab}
            onClick={() => {
              setActiveBottomTab(tab);
              console.log(`Selected bottom tab: ${tab}`);
            }}
            className={`px-4 py-1 rounded transition ${
              activeBottomTab === tab
                ? 'bg-green-200 text-green-800 font-semibold border border-green-500'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
        <button
          className="text-gray-400"
          onClick={() => console.log('Clicked: Add New Tab')}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SpreadsheetPrototype;
