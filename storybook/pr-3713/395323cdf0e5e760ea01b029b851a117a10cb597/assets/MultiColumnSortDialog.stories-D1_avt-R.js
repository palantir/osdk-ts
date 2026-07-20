import{M as a}from"./MultiColumnSortDialog-Bk7ZdgUa.js";import"./DraggableList-Ci2O7Ee1.js";import"./iframe-Dsqo2Te7.js";import"./preload-helper-C00VWsW9.js";import"./svgIconContainer-BiCW5V8l.js";import"./index-CJIEMWbJ.js";import"./search-DrXmUYNB.js";import"./Input-D052xPpl.js";import"./useBaseUiId-ByGgpH05.js";import"./useControlled-D0ueKSiO.js";import"./index-d7L08DFU.js";import"./index-BUiXT7C6.js";import"./isEqual-cNN2Sa1e.js";import"./isObject-EOHsfNuN.js";import"./Button-CLJwxOKS.js";import"./ActionButton-lctsbi_E.js";import"./Dialog-Cw9EXoZk.js";import"./cross-BBE-eoHs.js";import"./InternalBackdrop-CQl3ZlNA.js";import"./composite-dCCZG-QB.js";import"./index-D1DkXvj6.js";import"./MenuTrigger-BjX0hAmP.js";import"./CompositeItem-mCNVQvhZ.js";import"./ToolbarRootContext-BqymNalt.js";import"./getDisabledMountTransitionStyles-C-Did450.js";import"./getPseudoElementBounds-Dh1fwNyK.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
