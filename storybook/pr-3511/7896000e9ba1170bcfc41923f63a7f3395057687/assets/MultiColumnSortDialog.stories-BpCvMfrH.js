import{M as a}from"./MultiColumnSortDialog-Cq_W0MDf.js";import"./DraggableList-D42ewjP4.js";import"./iframe-DIdaxOLR.js";import"./preload-helper-Cv4ocMnk.js";import"./svgIconContainer-DafxEzdg.js";import"./index-GvktmLB_.js";import"./search-ByfIaBTs.js";import"./Input-q_83M2dQ.js";import"./useBaseUiId-CcZqXfAF.js";import"./useControlled-BZuFqG0t.js";import"./index-ClaFPr-d.js";import"./index-D0nZjEcy.js";import"./Button-CiOiDF7a.js";import"./small-cross-Bo01nl37.js";import"./ActionButton-MrPg5-WH.js";import"./Dialog-CFXiRv5w.js";import"./cross-BQQs13Fl.js";import"./InternalBackdrop-C6fSx2lF.js";import"./composite-DHu_NJDJ.js";import"./index-BOfidV88.js";import"./MenuTrigger-CWidFxXi.js";import"./CompositeItem-C1xIO8ne.js";import"./ToolbarRootContext-B2mSYT1Q.js";import"./getDisabledMountTransitionStyles-DbnZLkOT.js";import"./getPseudoElementBounds-ZSRKgaeb.js";import"./caret-down-DYkX4qcH.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
