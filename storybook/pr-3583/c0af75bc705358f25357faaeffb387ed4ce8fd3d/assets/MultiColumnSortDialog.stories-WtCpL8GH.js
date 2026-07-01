import{M as a}from"./MultiColumnSortDialog-GWO_PYIb.js";import"./DraggableList-CLd7JuXj.js";import"./iframe-B_sNEAoD.js";import"./preload-helper-D4w3BnHq.js";import"./svgIconContainer-C33xHrgH.js";import"./index-Boi3yEsI.js";import"./search-DH6_rBgy.js";import"./Input-CXVnOTc2.js";import"./useBaseUiId-sroOZ_HI.js";import"./useControlled-DPIbQqn6.js";import"./index-D9sBx7SB.js";import"./index-SbkiAc5f.js";import"./Button-DcOn_dM0.js";import"./small-cross-BPdFfJ16.js";import"./ActionButton-BfDUNyJy.js";import"./Dialog-BOSXeufz.js";import"./cross-CNm-11LQ.js";import"./InternalBackdrop-CDkKhgRm.js";import"./composite-CVNBfdPF.js";import"./index-eh1otGm1.js";import"./MenuTrigger-WuyKFSEu.js";import"./CompositeItem-BeNd1EcZ.js";import"./ToolbarRootContext-C_Wh8Bm0.js";import"./getDisabledMountTransitionStyles-BiighB_e.js";import"./getPseudoElementBounds-BPyvZZ25.js";import"./caret-down-BlO4iYKN.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
