import{M as a}from"./MultiColumnSortDialog-DY5PqCng.js";import"./DraggableList-6ZRbY_ME.js";import"./iframe-Bf-sHAx5.js";import"./preload-helper-Dp1pzeXC.js";import"./svgIconContainer-D94XRhPf.js";import"./index-CPYufUPv.js";import"./search-C6C64LDd.js";import"./Input-ggDyi7pA.js";import"./useBaseUiId-BtnOSHgT.js";import"./useControlled-Dgh6Ve4V.js";import"./index-CBOjLJdB.js";import"./index-CjByY2wF.js";import"./Button-CjmRQsvR.js";import"./small-cross-Da-5WtOj.js";import"./ActionButton-BvM2V58M.js";import"./Dialog-CeMT2chU.js";import"./cross-CKUL4fQQ.js";import"./InternalBackdrop-D9EVtWlk.js";import"./composite-BJBTp0LG.js";import"./index-DDM5LG3P.js";import"./MenuTrigger-BRWelcJD.js";import"./CompositeItem-go0BGcIT.js";import"./ToolbarRootContext-CUq4CBDE.js";import"./getDisabledMountTransitionStyles-jl5SsFvN.js";import"./getPseudoElementBounds-Dr8kB9Qn.js";import"./caret-down-Bruc2G-l.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
