import{M as a}from"./MultiColumnSortDialog-D70Lf8hL.js";import"./DraggableList-DQUkxlfh.js";import"./iframe-BqSobOjs.js";import"./preload-helper-Dp1pzeXC.js";import"./svgIconContainer-DgnMBskL.js";import"./index-L1wTDGqM.js";import"./Input-GUrmuab8.js";import"./useBaseUiId-Dp_kYV1S.js";import"./useControlled-9AVv5K6I.js";import"./index-CDBVc2Go.js";import"./index-bCpJ3h2u.js";import"./Button-Zje7J_lk.js";import"./small-cross-Cz-s3IOk.js";import"./ActionButton-BzrQsBY7.js";import"./Dialog-CmNBNiQI.js";import"./cross-CnGN68mu.js";import"./InternalBackdrop-BYMeP7M_.js";import"./composite-DfJCZyGn.js";import"./index-Dmw5mkmL.js";import"./MenuTrigger-DyuLHkf2.js";import"./CompositeItem-CTpBLKUN.js";import"./ToolbarRootContext-DRoLsPMn.js";import"./getDisabledMountTransitionStyles-B6CVhBf6.js";import"./getPseudoElementBounds-JEaCRQOJ.js";import"./caret-down-CDW-Sg4_.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],j={title:"Experimental/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,j as default};
