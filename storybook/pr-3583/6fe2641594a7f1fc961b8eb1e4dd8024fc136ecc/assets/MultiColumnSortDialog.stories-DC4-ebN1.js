import{M as a}from"./MultiColumnSortDialog-B_HVE1Py.js";import"./DraggableList-RNpoh2B-.js";import"./iframe-dVXbPfbW.js";import"./preload-helper-BFr4GPrV.js";import"./svgIconContainer-DxPEc-Dh.js";import"./index-CymBcBUO.js";import"./search-CmnGJ3RM.js";import"./Input-Cg6B84SQ.js";import"./useBaseUiId-DkQRwknn.js";import"./useControlled-B7zIb9rJ.js";import"./index-CRqtUjTy.js";import"./index-D32At8WP.js";import"./Button-Bed55EGq.js";import"./small-cross-CVh1xk-w.js";import"./ActionButton-OrDxCUNF.js";import"./Dialog-k8pRThzw.js";import"./cross-C_K1F1KB.js";import"./InternalBackdrop-BUP4VQDn.js";import"./composite-BS0mYAk9.js";import"./index-DrTNwIQU.js";import"./MenuTrigger-CH0SMjgZ.js";import"./CompositeItem-Bb0_tKq-.js";import"./ToolbarRootContext-CLmrqA3G.js";import"./getDisabledMountTransitionStyles-fwloP6uZ.js";import"./getPseudoElementBounds-D7LpqCgB.js";import"./caret-down-DYmu-l7O.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
