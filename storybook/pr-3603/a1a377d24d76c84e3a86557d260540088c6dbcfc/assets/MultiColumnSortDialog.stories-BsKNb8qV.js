import{M as a}from"./MultiColumnSortDialog-qBcYRTn9.js";import"./DraggableList-CDBWsX3h.js";import"./iframe-BBnYssKE.js";import"./preload-helper-Q1X6EyBU.js";import"./svgIconContainer-ClncAOm3.js";import"./index-Dsq-QVPM.js";import"./search-CfZBthS7.js";import"./Input-6ez52RYZ.js";import"./useBaseUiId-D95b9lUd.js";import"./useControlled-BGBIGCbd.js";import"./index-B5LPtQqv.js";import"./index-DwbwFuJ6.js";import"./Button-BZIwRf36.js";import"./small-cross-DGgZtsjj.js";import"./ActionButton-BYwte3qz.js";import"./Dialog-B9QPPBbP.js";import"./cross-Dm7Mw9KH.js";import"./InternalBackdrop-B40uSbWH.js";import"./composite-Dsyt5hif.js";import"./index-rDCV9qw1.js";import"./MenuTrigger-sHYbXQ8p.js";import"./CompositeItem-crAYYpLc.js";import"./ToolbarRootContext-BveLu8S4.js";import"./getDisabledMountTransitionStyles-BysKSgBJ.js";import"./getPseudoElementBounds-D3g7uFYP.js";import"./caret-down-CQ1Lw5L6.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
