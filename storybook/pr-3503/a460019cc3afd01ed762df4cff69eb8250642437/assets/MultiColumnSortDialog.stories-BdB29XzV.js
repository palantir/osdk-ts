import{M as a}from"./MultiColumnSortDialog-BHsGQef1.js";import"./DraggableList-CexeqMm-.js";import"./iframe-hA54k6Ra.js";import"./preload-helper-B2ctPuK5.js";import"./svgIconContainer-Bt5A1ZM1.js";import"./index-CuWY2XwM.js";import"./search-DyXrHlWh.js";import"./Input-3RHKQlOe.js";import"./useBaseUiId-D7evU5vy.js";import"./useControlled-CLK-WO_f.js";import"./index-CDT2pjS0.js";import"./index-BXS422Xk.js";import"./Button-C0ZpVY7M.js";import"./small-cross-v7HF920m.js";import"./ActionButton-DZgI6ocs.js";import"./Dialog-DshM5ho7.js";import"./cross-DT1vpwrk.js";import"./InternalBackdrop-BOlZyT-O.js";import"./composite-CgGAQ8DQ.js";import"./index-D8IXKVGJ.js";import"./MenuTrigger-kTMLfRVu.js";import"./CompositeItem-fKFw6KEZ.js";import"./ToolbarRootContext-CxUD8pdl.js";import"./getDisabledMountTransitionStyles-DH3VZr7b.js";import"./getPseudoElementBounds-CfZ-O487.js";import"./caret-down-BN8v1Kvq.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
