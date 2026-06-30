import{M as a}from"./MultiColumnSortDialog-CUBabrBs.js";import"./DraggableList-C6ZXpamz.js";import"./iframe-CJBaWBDv.js";import"./preload-helper-BWI1AJ3q.js";import"./svgIconContainer-BLorCNBT.js";import"./index-CMledsxy.js";import"./search-DjRbLZYR.js";import"./Input-hgK_yrrQ.js";import"./useBaseUiId-CoBsL_SE.js";import"./useControlled-OTZ1QGTe.js";import"./index-C5e1qggc.js";import"./index-mtO4_tCj.js";import"./Button-C4T61Ci8.js";import"./small-cross-D9V9xmZD.js";import"./ActionButton-Bb_1E8iC.js";import"./Dialog-DBKcyCmd.js";import"./cross-49LfIgF0.js";import"./InternalBackdrop-BNacSiOS.js";import"./composite-BADN5REh.js";import"./index-DNeP-dq5.js";import"./MenuTrigger-CZQ7sq_e.js";import"./CompositeItem-Ce5546Sm.js";import"./ToolbarRootContext-CaePn4Tj.js";import"./getDisabledMountTransitionStyles-BUI8zp0j.js";import"./getPseudoElementBounds-Cg2Feh6b.js";import"./caret-down-Dxz7FsQm.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
