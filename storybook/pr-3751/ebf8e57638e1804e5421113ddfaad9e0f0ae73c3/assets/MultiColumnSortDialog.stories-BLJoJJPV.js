import{M as a}from"./MultiColumnSortDialog-CxV4v8xh.js";import"./DraggableList-C40V0O03.js";import"./iframe-BvlK2p8r.js";import"./preload-helper-Bf1QTDA3.js";import"./svgIconContainer-CLWMH6Fx.js";import"./index-CJtyvgYT.js";import"./search-CWi8yKUA.js";import"./Input-5I-CO4CQ.js";import"./useBaseUiId-DiGEHRWv.js";import"./useControlled-B_OuFYE6.js";import"./index-BXSqz-r8.js";import"./index-DR4zhZlK.js";import"./isEqual-D0ITe3HQ.js";import"./small-cross-C2NIy0Lo.js";import"./Button-CwuonV3H.js";import"./ActionButton-6FVwa-nx.js";import"./Dialog--FJPiMUE.js";import"./cross-XBkVoEMi.js";import"./InternalBackdrop-Cvxe13O2.js";import"./composite-DLYbiM9i.js";import"./index-BXKLk0LB.js";import"./MenuTrigger-C44b3RoE.js";import"./CompositeItem-DBLtjtTq.js";import"./ToolbarRootContext-B8YXpq5u.js";import"./getDisabledMountTransitionStyles-DDUBMXqp.js";import"./getPseudoElementBounds-BoJCJ9ri.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
