import{M as a}from"./MultiColumnSortDialog-DAs8y5YY.js";import"./DraggableList-Cj58OhCv.js";import"./iframe-K9uQTvnE.js";import"./preload-helper-DRtrsWEw.js";import"./svgIconContainer-DXVmsq7W.js";import"./index-BOTWRHfm.js";import"./search-mQER3stZ.js";import"./Input-DL9_8wOq.js";import"./useBaseUiId-BrMM6UqQ.js";import"./useControlled-B3zUT6Sw.js";import"./index-CvhlEaPX.js";import"./index-CghjAjwe.js";import"./Button-CcZ8W5ue.js";import"./small-cross-DaOtKoLb.js";import"./ActionButton-hmyTFlTx.js";import"./Dialog-CBUJ4aGx.js";import"./cross-Bz6WZlQ2.js";import"./InternalBackdrop-i_cU5UPM.js";import"./composite-NKL1wxmL.js";import"./index-CrUBQKj3.js";import"./MenuTrigger-BiG99jp3.js";import"./CompositeItem-C2VbBnr1.js";import"./ToolbarRootContext-BabJYKcD.js";import"./getDisabledMountTransitionStyles-CyRvRXlH.js";import"./getPseudoElementBounds-Mo3vOjnZ.js";import"./caret-down-GRSnguIB.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
