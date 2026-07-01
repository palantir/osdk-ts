import{M as a}from"./MultiColumnSortDialog-Dl2rylL1.js";import"./DraggableList-DxZ-7_gS.js";import"./iframe-CQqcNnwi.js";import"./preload-helper-Dp1pzeXC.js";import"./svgIconContainer-IQ0gBQ0C.js";import"./index-BGqNz3HP.js";import"./search-T4DuTzMx.js";import"./Input-B_Q9krhW.js";import"./useBaseUiId-81HNnwRN.js";import"./useControlled-D_CwS4tB.js";import"./index-BFZh7uCY.js";import"./index-C4QRzzj4.js";import"./Button-D78VRn98.js";import"./small-cross-CJePShLT.js";import"./ActionButton-CEleWzrZ.js";import"./Dialog-CsKFRitx.js";import"./cross-C6Rm_Lrn.js";import"./InternalBackdrop-Cg4UhYKA.js";import"./composite-Du3fY-K0.js";import"./index-Dbx2WRpg.js";import"./MenuTrigger-CR54dlXa.js";import"./CompositeItem-Byt82z5M.js";import"./ToolbarRootContext-on_UmCVp.js";import"./getDisabledMountTransitionStyles-CdIgwyH4.js";import"./getPseudoElementBounds-Bd9GqyuT.js";import"./caret-down-C7tUwnbq.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
