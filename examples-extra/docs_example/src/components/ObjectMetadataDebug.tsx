import { Employee } from '../generatedNoCheck/index.js';

export function ObjectMetadataDebug() {
  // @ts-expect-error - accessing internal metadata for debugging
  const metadata = Employee.__DefinitionMetadata;

  return (
    <div className="p-4 bg-gray-50 border border-gray-300 rounded space-y-2">
      <div className="font-semibold">Employee Object Metadata:</div>
      <div className="text-sm">
        <div><strong>API Name:</strong> {metadata?.apiName}</div>
        <div><strong>Display Name:</strong> {metadata?.displayName}</div>
        <div><strong>Primary Key:</strong> {metadata?.primaryKeyApiName}</div>
      </div>
      <div className="mt-3">
        <div className="font-semibold mb-1">Properties:</div>
        <div className="text-xs bg-white p-2 rounded">
          {metadata?.properties && Object.keys(metadata.properties).map(propKey => (
            <div key={propKey} className="py-1 border-b border-gray-200 last:border-0">
              <span className="font-mono text-blue-600">{propKey}</span>
              {' - '}
              <span className="text-gray-600">
                {/* @ts-expect-error - accessing property type */}
                {metadata.properties[propKey]?.[0] ?? 'unknown type'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
