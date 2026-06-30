import{M as a}from"./MultiColumnSortDialog-BIxhs7xz.js";import"./DraggableList-5DfNZVxr.js";import"./iframe-Dem1jDDS.js";import"./preload-helper-G63TiWQ_.js";import"./svgIconContainer-DU8ZRB9_.js";import"./index-BCRd_LMW.js";import"./search-qlQl-7pj.js";import"./Input-CNzowxc_.js";import"./useBaseUiId-Cg-XwDDy.js";import"./useControlled-BiLVvTH4.js";import"./index-DqaMI3eV.js";import"./index-Dtm-sfXF.js";import"./Button-Cu6j3cTw.js";import"./small-cross-Cx41fDuO.js";import"./ActionButton-CxAVcywI.js";import"./Dialog-BzmKySbg.js";import"./cross-D5PF6dfy.js";import"./InternalBackdrop-BNUYx67r.js";import"./composite-wCVm2Dol.js";import"./index-CuYwHywN.js";import"./MenuTrigger-Dpy9Ww9e.js";import"./CompositeItem-DiidbYEL.js";import"./ToolbarRootContext-prEa1F63.js";import"./getDisabledMountTransitionStyles-5CY7_c06.js";import"./getPseudoElementBounds-cjuxFpQA.js";import"./caret-down-CYG6wV9Z.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
