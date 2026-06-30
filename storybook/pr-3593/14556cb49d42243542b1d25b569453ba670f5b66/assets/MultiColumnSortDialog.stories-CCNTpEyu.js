import{M as a}from"./MultiColumnSortDialog-CNnuMjdo.js";import"./DraggableList-BkGP6wUy.js";import"./iframe-CwsA9WhF.js";import"./preload-helper-FMqlHbWX.js";import"./svgIconContainer-COq7IPBQ.js";import"./index-BApRn_8J.js";import"./search-CkRU7pdV.js";import"./Input-BuqsXWMB.js";import"./useBaseUiId-B5Wq6qzZ.js";import"./useControlled-S0xXrVrA.js";import"./index-CPLqiGi4.js";import"./index-BIIgFgfQ.js";import"./Button-B0hMRWi-.js";import"./small-cross-DNuEWf48.js";import"./ActionButton-CqW7L_-2.js";import"./Dialog--Y8H5fwN.js";import"./cross-CPIFBwIX.js";import"./InternalBackdrop-BBOS8aiL.js";import"./composite-BCMCXmgH.js";import"./index-CzYG-ZSX.js";import"./MenuTrigger-BTttg7I3.js";import"./CompositeItem-Uy1lPxRz.js";import"./ToolbarRootContext-C6W0RCW5.js";import"./getDisabledMountTransitionStyles-BE5rBXLK.js";import"./getPseudoElementBounds-DbNgHT2N.js";import"./caret-down-A_5iaUsD.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

const [isOpen, setIsOpen] = useState(false);

<MultiColumnSortDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={[
    { id: "fullName", name: "Full Name", canSort: true },
    { id: "email", name: "Email", canSort: true },
    { id: "department", name: "Department", canSort: true },
  ]}
  currentSorting={[
    { id: "fullName", desc: false },
    { id: "department", desc: true },
  ]}
  onApply={(sorting) => console.log("Applied:", sorting)}
/>`}}}};var o,n,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

const [isOpen, setIsOpen] = useState(false);

<MultiColumnSortDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={[
    { id: "fullName", name: "Full Name", canSort: true },
    { id: "email", name: "Email", canSort: true },
    { id: "department", name: "Department", canSort: true },
  ]}
  currentSorting={[
    { id: "fullName", desc: false },
    { id: "department", desc: true },
  ]}
  onApply={(sorting) => console.log("Applied:", sorting)}
/>\`
      }
    }
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const L=["Default"];export{e as Default,L as __namedExportsOrder,I as default};
