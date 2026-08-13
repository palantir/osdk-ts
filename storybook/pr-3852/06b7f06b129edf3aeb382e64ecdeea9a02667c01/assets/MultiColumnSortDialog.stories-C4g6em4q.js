import{M as n}from"./MultiColumnSortDialog-UzWZkrUO.js";import"./DraggableList-BTBrHQlG.js";import"./iframe-BmFJOqc6.js";import"./preload-helper-C_jr2zBl.js";import"./svgIconContainer-CMQoxDUu.js";import"./index-3j69-5Ym.js";import"./search-CioqFqwa.js";import"./Input-BT2Zyp5m.js";import"./useBaseUiId-C5SRli-B.js";import"./useControlled-L8rvP9al.js";import"./index-DWnSWhJ9.js";import"./index-Cfv6AZs9.js";import"./isEqual-Bzt_ultW.js";import"./isObject-wZOe6YRR.js";import"./Button-BBPh3cP6.js";import"./ActionButton-DQEgHTbw.js";import"./Dialog-BHl_uah2.js";import"./cross-CKVqWa-w.js";import"./InternalBackdrop-LfW5Mcwa.js";import"./composite-BoouiZdh.js";import"./index-DXpgb3R7.js";import"./MenuTrigger-bCnbUhqU.js";import"./CompositeItem-CPVzsbMv.js";import"./ToolbarRootContext-Dryg-_tS.js";import"./getDisabledMountTransitionStyles-CCs1LxYN.js";import"./getPseudoElementBounds-CY2Q6OxG.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0,dataType:"string"},{id:"email",name:"Email",canSort:!0,dataType:"string"},{id:"jobTitle",name:"Job Title",canSort:!0,dataType:"string"},{id:"department",name:"Department",canSort:!0,dataType:"string"},{id:"startDate",name:"Start Date",canSort:!0,dataType:"timestamp"},{id:"yearsOfService",name:"Years of Service",canSort:!0,dataType:"integer"},{id:"location",name:"Location",canSort:!1,dataType:"string"}],x={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:n,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0},{id:"yearsOfService",desc:!0},{id:"startDate",desc:!1}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu."},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,x as default};
