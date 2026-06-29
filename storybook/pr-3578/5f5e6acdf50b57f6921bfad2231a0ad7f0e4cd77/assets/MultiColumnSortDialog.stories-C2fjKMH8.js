import{M as a}from"./MultiColumnSortDialog-D2GuKRCN.js";import"./DraggableList-DYKQaxzi.js";import"./iframe-Bdo2Di7r.js";import"./preload-helper-B15x2S9q.js";import"./svgIconContainer-Cv1BdOht.js";import"./index-BdqDAckw.js";import"./search-DEYIpsf_.js";import"./Input-DXGGFzVW.js";import"./useBaseUiId-Bi1WURGV.js";import"./useControlled-DHUJClmm.js";import"./index-BAVX2Eg5.js";import"./index-GVK2X5FZ.js";import"./Button-Bwp5yWEl.js";import"./small-cross-DHpfRRFe.js";import"./ActionButton-DTxv_v0p.js";import"./Dialog-CsuwZu7C.js";import"./cross-CzBgvdiS.js";import"./InternalBackdrop-BHCFzCwP.js";import"./composite-B6AQIM1z.js";import"./index-CUsHopsA.js";import"./MenuTrigger-DdHdL1-q.js";import"./CompositeItem-B2GuXSMq.js";import"./ToolbarRootContext-C-Lj4Taw.js";import"./getDisabledMountTransitionStyles-BIimCZjE.js";import"./getPseudoElementBounds-Dvse4gv_.js";import"./caret-down-XGfgYBFP.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
