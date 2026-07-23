import{M as a}from"./MultiColumnSortDialog-C7hgMBaM.js";import"./DraggableList-hVGM03aj.js";import"./iframe-Z2aXJPdd.js";import"./preload-helper-HH98OTG_.js";import"./svgIconContainer-6r4Cq3if.js";import"./index-BDwbbs7g.js";import"./search-CnOrU0Lt.js";import"./Input-Cnfz6hBh.js";import"./useBaseUiId-DsRLOs7K.js";import"./useControlled-CwIh3vpr.js";import"./index-wmvnWSa4.js";import"./index-CMHsxFJx.js";import"./isEqual-DUEJ2syM.js";import"./isObject-F1m0DPX1.js";import"./Button-SBHQNUwv.js";import"./ActionButton-DfA2iWyA.js";import"./Dialog-CQ9bW3NZ.js";import"./cross-BUXL1pRc.js";import"./InternalBackdrop-MWzh2A1Y.js";import"./composite-D_ju5rZt.js";import"./index-BeCsuUiB.js";import"./MenuTrigger-DI52AfNk.js";import"./CompositeItem-yg9xry01.js";import"./ToolbarRootContext-By8aQOR7.js";import"./getDisabledMountTransitionStyles-Bn5Izddt.js";import"./getPseudoElementBounds-CApyAz7W.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
