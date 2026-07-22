import{M as a}from"./MultiColumnSortDialog-BSM2ZWp1.js";import"./DraggableList-DEuHSCUq.js";import"./iframe-DSMWrXPe.js";import"./preload-helper-BlZGs9G1.js";import"./svgIconContainer-UJFGmyTn.js";import"./index-D6D_nts1.js";import"./search-Cw6Jc9Ce.js";import"./Input-wgU5PuR4.js";import"./useBaseUiId-Cx1Xrpmr.js";import"./useControlled-2qj00gpi.js";import"./index-CN-8IRxo.js";import"./index-DNaGfyxP.js";import"./isEqual-DpvqD4Se.js";import"./isObject-V_1Zj_Zw.js";import"./Button-DZHdVHGV.js";import"./ActionButton-DXOcgc9O.js";import"./Dialog-CxwSbKcE.js";import"./cross-mTQyjJ68.js";import"./InternalBackdrop-D0nVKbjz.js";import"./composite-B-A3OnRf.js";import"./index-DSxEGt0t.js";import"./MenuTrigger-BjB-MtHP.js";import"./CompositeItem-B-YTSQE9.js";import"./ToolbarRootContext-CUL72IU0.js";import"./getDisabledMountTransitionStyles-C0KhBNLA.js";import"./getPseudoElementBounds-aUbKXBHu.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
