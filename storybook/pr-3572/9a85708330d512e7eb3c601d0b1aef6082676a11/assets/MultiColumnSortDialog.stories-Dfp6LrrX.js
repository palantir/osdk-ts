import{M as a}from"./MultiColumnSortDialog-WHLv-qIm.js";import"./DraggableList-C7FxmE-H.js";import"./iframe-6DWpb4n8.js";import"./preload-helper-CKC3MDBV.js";import"./svgIconContainer-CEcqlPd6.js";import"./index-DvSw4Y8y.js";import"./search-C_ZrWNSR.js";import"./Input-fwKnahH6.js";import"./useBaseUiId-BMfPZQEL.js";import"./useControlled-Cmd5jpf8.js";import"./index-kjbPB0Tc.js";import"./index-DXie4Vqe.js";import"./Button-DZvQGd15.js";import"./small-cross-vfe1oVw5.js";import"./ActionButton-9H35vsSc.js";import"./Dialog-S8zailNB.js";import"./cross-DzEIRlDS.js";import"./InternalBackdrop-5g83KIMa.js";import"./composite-BP4DAUSV.js";import"./index-B9yScdf6.js";import"./MenuTrigger-CMHzFKSj.js";import"./CompositeItem-Zyxnw8On.js";import"./ToolbarRootContext-j9l86UQ6.js";import"./getDisabledMountTransitionStyles-BP6n7LlW.js";import"./getPseudoElementBounds-Bp8sQiT_.js";import"./caret-down-C1_OAL1N.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
