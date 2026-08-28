import{M as n}from"./MultiColumnSortDialog-BFqkymhQ.js";import"./DraggableList-G0-kePYg.js";import"./iframe-DvvN0iZ4.js";import"./preload-helper-COgx8bff.js";import"./svgIconContainer-DO7duNWZ.js";import"./index-CExWqhF3.js";import"./search-iASH-OFa.js";import"./Input-RroOyWit.js";import"./useBaseUiId-BMLYN1z9.js";import"./useControlled-BJtimK6V.js";import"./index-CK5HdBab.js";import"./index-DU7UvfyD.js";import"./Button-BQEhn0-h.js";import"./small-cross-7Qo1ibsU.js";import"./ActionButton-DM7_AKH6.js";import"./Dialog-CD80pTON.js";import"./cross-DdXxY3zw.js";import"./InternalBackdrop-Dt_apqJW.js";import"./composite-C1x5nTDV.js";import"./index-VCT57lbz.js";import"./MenuTrigger-C-RbwST-.js";import"./CompositeItem-D7Fao19X.js";import"./ToolbarRootContext-Yypg0Ver.js";import"./getDisabledMountTransitionStyles-CArUbwJ-.js";import"./getPseudoElementBounds-DXBuHm7V.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0,dataType:"string"},{id:"email",name:"Email",canSort:!0,dataType:"string"},{id:"jobTitle",name:"Job Title",canSort:!0,dataType:"string"},{id:"department",name:"Department",canSort:!0,dataType:"string"},{id:"startDate",name:"Start Date",canSort:!0,dataType:"timestamp"},{id:"yearsOfService",name:"Years of Service",canSort:!0,dataType:"integer"},{id:"location",name:"Location",canSort:!1,dataType:"string"}],j={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:n,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0},{id:"yearsOfService",desc:!0},{id:"startDate",desc:!1}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu."},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

const [isOpen, setIsOpen] = useState(false);

<MultiColumnSortDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={[
    { id: "fullName", name: "Full Name", canSort: true, dataType: "string" },
    { id: "email", name: "Email", canSort: true, dataType: "string" },
    { id: "yearsOfService", name: "Years of Service", canSort: true, dataType: "integer" },
    { id: "startDate", name: "Start Date", canSort: true, dataType: "timestamp" },
  ]}
  currentSorting={[
    { id: "fullName", desc: false },
    { id: "yearsOfService", desc: true },
  ]}
  onApply={(sorting) => console.log("Applied:", sorting)}
/>`}}}};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

const [isOpen, setIsOpen] = useState(false);

<MultiColumnSortDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={[
    { id: "fullName", name: "Full Name", canSort: true, dataType: "string" },
    { id: "email", name: "Email", canSort: true, dataType: "string" },
    { id: "yearsOfService", name: "Years of Service", canSort: true, dataType: "integer" },
    { id: "startDate", name: "Start Date", canSort: true, dataType: "timestamp" },
  ]}
  currentSorting={[
    { id: "fullName", desc: false },
    { id: "yearsOfService", desc: true },
  ]}
  onApply={(sorting) => console.log("Applied:", sorting)}
/>\`
      }
    }
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,j as default};
