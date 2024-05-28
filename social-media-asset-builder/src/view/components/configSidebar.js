import React from 'react';

const ConfigSidebar = ({ config, onChange }) => {
  const renderControl = (key, property) => {
    switch (property.type) {
      case 'text':
        return (
          <div key={key}>
            <label>{property.label}</label>
            <input
              type="text"
              defaultValue={property.defaultValue}
              onChange={(e) => onChange(key, e.target.value)}
            />
          </div>
        );
      case 'number':
        return (
          <div key={key}>
            <label>{property.label}</label>
            <input
              type="number"
              defaultValue={property.defaultValue}
              onChange={(e) => onChange(key, parseInt(e.target.value, 10))}
            />
          </div>
        );
      case 'select':
        return (
          <div key={key}>
            <label>{property.label}</label>
            <select
              defaultValue={property.defaultValue}
              onChange={(e) => onChange(key, e.target.value)}
            >
              {property.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="config-sidebar">
      {Object.keys(config.properties).map((key) =>
        renderControl(key, config.properties[key])
      )}
    </div>
  );
};

export default ConfigSidebar;