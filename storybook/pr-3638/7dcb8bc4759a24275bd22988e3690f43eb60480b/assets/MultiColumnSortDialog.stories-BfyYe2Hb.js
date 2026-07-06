import{M as a}from"./MultiColumnSortDialog-B-jBrX5l.js";import"./DraggableList-kd00cC6l.js";import"./iframe-pvq-vF4J.js";import"./preload-helper-DFsU4bK8.js";import"./svgIconContainer-DoKzqDPY.js";import"./index-eCbMZ3Ul.js";import"./search-DQbqmV51.js";import"./Input-CuEV0MJp.js";import"./useBaseUiId-D_Zi5uO4.js";import"./useControlled-irIHLVOH.js";import"./index-DN-yE6uB.js";import"./index-C8dY89Xh.js";import"./Button-Bo-ewfGH.js";import"./small-cross-Bz6jWoQP.js";import"./ActionButton-pt3H2IG5.js";import"./Dialog-BSFba0YN.js";import"./cross-CUOCPzVL.js";import"./InternalBackdrop-B_0pgqUq.js";import"./composite-CPbkNe6Q.js";import"./index-Dy2Ho76o.js";import"./MenuTrigger-4cl__Hjc.js";import"./CompositeItem-Gaw4LcDL.js";import"./ToolbarRootContext-BmnO0RL7.js";import"./getDisabledMountTransitionStyles-CFR6EmQi.js";import"./getPseudoElementBounds-BijCPbtt.js";import"./caret-down-BpsXYsiX.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
