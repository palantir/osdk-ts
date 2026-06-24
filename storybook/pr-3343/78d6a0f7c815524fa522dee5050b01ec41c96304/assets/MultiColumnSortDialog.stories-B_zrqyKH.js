import{M as a}from"./MultiColumnSortDialog-MEZWV2Ob.js";import"./DraggableList-YoSp78x2.js";import"./iframe-CQsWIHX4.js";import"./preload-helper-DeHQ25bj.js";import"./svgIconContainer-Dd6MU_-n.js";import"./index-BZdihyUU.js";import"./Input-DUNS0JHG.js";import"./useBaseUiId-CJzjfth2.js";import"./useControlled-CxfZAwQ1.js";import"./index-DeEfLW8W.js";import"./index-C95yrUQR.js";import"./Button-Bo6XnFx1.js";import"./small-cross-DpAyXmKA.js";import"./InternalBackdrop-DVWpzKpj.js";import"./composite-CEhoyh-F.js";import"./index-DTvD48mG.js";import"./Dialog-Zw8T_QuQ.js";import"./cross-DCfjD-NF.js";import"./MenuTrigger-B-QXBCIq.js";import"./CompositeItem-C-Iymisy.js";import"./ToolbarRootContext-DpcTF9uY.js";import"./getDisabledMountTransitionStyles-CTMxiaXi.js";import"./getPseudoElementBounds-CtMorKso.js";import"./caret-down-BJBXE8n8.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],j={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,j as default};
