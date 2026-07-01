import{M as a}from"./MultiColumnSortDialog-C9cvXBwA.js";import"./DraggableList-BVn1aAOS.js";import"./iframe-CRF3sQbb.js";import"./preload-helper-BxvwHE1r.js";import"./svgIconContainer-Cwc2mUeQ.js";import"./index-C2_vf368.js";import"./search-CzZCuUmt.js";import"./Input-CpyJIJ7L.js";import"./useBaseUiId-4pUjU83e.js";import"./useControlled-CH6zwWP0.js";import"./index-BX5C1w-G.js";import"./index-qfKuOoTK.js";import"./Button-BSJkBcDT.js";import"./small-cross-CBK0fAbS.js";import"./ActionButton-BNtnpq1w.js";import"./Dialog-Boi1ELK4.js";import"./cross-C8iLLnih.js";import"./InternalBackdrop-CGrmlXBz.js";import"./composite-CTZL7J_0.js";import"./index-Cb_VaF60.js";import"./MenuTrigger-DWd5d49K.js";import"./CompositeItem-CanDnIqa.js";import"./ToolbarRootContext-DY1zAZAc.js";import"./getDisabledMountTransitionStyles-rFYZMkOx.js";import"./getPseudoElementBounds-vp1YNWc8.js";import"./caret-down-cqNItdWt.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
