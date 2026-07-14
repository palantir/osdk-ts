import{M as a}from"./MultiColumnSortDialog-CgGS2eHt.js";import"./DraggableList-CElAX1bR.js";import"./iframe-CgaSJGms.js";import"./preload-helper-DlGsqh-w.js";import"./svgIconContainer-C3Ibj-cG.js";import"./index-p12yqEBA.js";import"./search-egRdoocF.js";import"./Input-cn_9g4lx.js";import"./useBaseUiId-D39DBVIB.js";import"./useControlled-B0Odcszh.js";import"./index-C8zT0CUI.js";import"./index-D9n3c3GT.js";import"./Button-BrX3zqVY.js";import"./small-cross-BRuITACP.js";import"./ActionButton-DDXYNB3A.js";import"./Dialog-DaLLSO_3.js";import"./cross-DRCEb7OP.js";import"./InternalBackdrop-CKvA9-Mq.js";import"./composite-CHM_Xrlu.js";import"./index-m450MFHl.js";import"./MenuTrigger-CCjxHt9L.js";import"./CompositeItem-BD5vHMJe.js";import"./ToolbarRootContext-ByCsV2PG.js";import"./getDisabledMountTransitionStyles-CXaOoWuT.js";import"./getPseudoElementBounds-BQpXq_rw.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],x={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,x as default};
