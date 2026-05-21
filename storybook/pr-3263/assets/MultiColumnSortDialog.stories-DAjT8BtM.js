import{M as a}from"./MultiColumnSortDialog-NcHezF-P.js";import"./DraggableList-BWlVOCKF.js";import"./iframe-CQfpdIDS.js";import"./preload-helper-sXrayful.js";import"./svgIconContainer-DZ6bCTNu.js";import"./index-C1w1p_QI.js";import"./Input-B5Asj_W8.js";import"./useBaseUiId-CXk-Zi_2.js";import"./useControlled-Cwv7WP7v.js";import"./index-B5ouszQ5.js";import"./index-DGvDcmm1.js";import"./Button-C6MY9Fxi.js";import"./small-cross-BGvX5UU2.js";import"./ActionButton-AcVfsTzT.js";import"./Dialog-BY4ptvjN.js";import"./cross-DdfsQEUD.js";import"./InternalBackdrop-B8fuyuZX.js";import"./composite-CFAJvTHp.js";import"./index-DfWid7qx.js";import"./MenuTrigger-CwDN63RT.js";import"./CompositeItem-BU1ioC6p.js";import"./ToolbarRootContext-CK_69faT.js";import"./getDisabledMountTransitionStyles-BIl7yC1-.js";import"./getPseudoElementBounds-DGsV1Ob-.js";import"./caret-down-DyXQLVm7.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],x={title:"Beta/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const B=["Default"];export{e as Default,B as __namedExportsOrder,x as default};
