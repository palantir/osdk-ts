import{M as a}from"./MultiColumnSortDialog-XUB96F1J.js";import"./DraggableList-Dh_a88iA.js";import"./iframe-EWNiSOlz.js";import"./preload-helper-DINoBAyp.js";import"./svgIconContainer-i8Q-3NvR.js";import"./index-J8uMkFcT.js";import"./search-Ct4Cy4Cw.js";import"./Input-BLbu68-y.js";import"./useBaseUiId-CbA5EQtD.js";import"./useControlled-D0-X3QeL.js";import"./index-9MkXRS7h.js";import"./index-D-TWmAa9.js";import"./isEqual-B3gSTOQa.js";import"./isObject-DeF9seGk.js";import"./Button-NJGcULYm.js";import"./ActionButton-bhd-S6xZ.js";import"./Dialog-CipO93Rx.js";import"./cross-D8UDZUVl.js";import"./InternalBackdrop-DRn4jQWF.js";import"./composite-PBGFU2UH.js";import"./index-CZ5IyMT1.js";import"./MenuTrigger-ita0ycJf.js";import"./CompositeItem-BxLQcrHq.js";import"./ToolbarRootContext-E7FpR2J5.js";import"./getDisabledMountTransitionStyles-qQlhRRpu.js";import"./getPseudoElementBounds-Bzj5pAC2.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
