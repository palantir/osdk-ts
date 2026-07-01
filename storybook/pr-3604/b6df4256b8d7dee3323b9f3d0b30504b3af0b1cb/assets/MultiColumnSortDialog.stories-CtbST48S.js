import{M as a}from"./MultiColumnSortDialog-BFNKK5wW.js";import"./DraggableList-DPm_zsAi.js";import"./iframe-D4v6mEn1.js";import"./preload-helper-cbRsP1zf.js";import"./svgIconContainer-mFWmX3qp.js";import"./index-BLDi9A8o.js";import"./search-BcKgp1Di.js";import"./Input-D7akk8dr.js";import"./useBaseUiId-CX8CHixx.js";import"./useControlled-BKDEzTh5.js";import"./index-CdI-0PmB.js";import"./index-BLke2j3w.js";import"./Button-DQB5SbCy.js";import"./small-cross-B1fDr7ZV.js";import"./ActionButton-DVBYSDCI.js";import"./Dialog-DR1GKnzg.js";import"./cross-BB7vr1gI.js";import"./InternalBackdrop-74vI1ez0.js";import"./composite-DD0mt_Ur.js";import"./index-CZIkCEvv.js";import"./MenuTrigger-BwQ0OLvk.js";import"./CompositeItem-GxHcENsz.js";import"./ToolbarRootContext-BAVjkYc-.js";import"./getDisabledMountTransitionStyles-Bj4vjgLE.js";import"./getPseudoElementBounds-Bj01wAIb.js";import"./caret-down-C9R4WHQ2.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
