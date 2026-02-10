import React, { useState } from 'react';
import ObjectTable from './components/ObjectTable';
import ObjectList from './components/ObjectList';
import PropertyEditor from './components/PropertyEditor';
import FilterBar from './components/FilterBar';
import ActionButton from './components/ActionButton';
import Theming from './guides/Theming';
import Customization from './guides/Customization';
import ObjectTypes from './configuration/ObjectTypes';
import Properties from './configuration/Properties';
import Filters from './configuration/Filters';

const components = {
  'Object Table': <ObjectTable />,
  'Object List': <ObjectList />,
  'Property Editor': <PropertyEditor />,
  'Filter Bar': <FilterBar />,
  'Action Button': <ActionButton />,
  'Theming': <Theming />,
  'Customization': <Customization />,
  'Object Types': <ObjectTypes />,
  'Properties': <Properties />,
  'Filters': <Filters />,
};

const App = () => {
  const [activeComponent, setActiveComponent] = useState('Object Table');

  const renderComponent = () => {
    return components[activeComponent] || <div>Component not found</div>;
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-100 p-4 border-r border-gray-200">
        <h1 className="text-xl font-bold mb-4">OSDK Components <span className="text-sm bg-blue-500 text-white px-2 py-1 rounded">v2.4.0</span></h1>
        <nav>
          <h2 className="font-bold text-gray-500 mt-4">Getting Started</h2>
          <ul>
            <li><a href="#" className="text-blue-500">Overview</a></li>
            <li><a href="#" className="text-blue-500">Installation</a></li>
            <li><a href="#" className="text-blue-500">Usage</a></li>
          </ul>
          <h2 className="font-bold text-gray-500 mt-4">Components</h2>
          <ul>
            {Object.keys(components).slice(0, 5).map(name => (
              <li key={name}>
                <a
                  href="#"
                  onClick={() => setActiveComponent(name)}
                  className={activeComponent === name ? 'text-blue-700 font-bold' : 'text-blue-500'}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <h2 className="font-bold text-gray-500 mt-4">Configuration</h2>
           <ul>
            {Object.keys(components).slice(7, 10).map(name => (
              <li key={name}>
                <a
                  href="#"
                  onClick={() => setActiveComponent(name)}
                  className={activeComponent === name ? 'text-blue-700 font-bold' : 'text-blue-500'}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <h2 className="font-bold text-gray-500 mt-4">Guides</h2>
           <ul>
            {Object.keys(components).slice(5, 7).map(name => (
              <li key={name}>
                <a
                  href="#"
                  onClick={() => setActiveComponent(name)}
                  className={activeComponent === name ? 'text-blue-700 font-bold' : 'text-blue-500'}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-10 overflow-auto">
        <div className="max-w-4xl mx-auto">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default App;
