import{M as a}from"./MultiColumnSortDialog-DGuzWOGX.js";import"./DraggableList-VIA38x-Z.js";import"./iframe-hzfvyDmq.js";import"./preload-helper-CdJNp2PB.js";import"./svgIconContainer-Cb51Sm7i.js";import"./index-f5Cgh3Nq.js";import"./search-Cx-34oit.js";import"./Input-j4WQNWPZ.js";import"./useBaseUiId-DmC4LGoz.js";import"./useControlled-DAR7PUt5.js";import"./index-B1JvKBAi.js";import"./index-BLrf7TRG.js";import"./isEqual-B_G078b5.js";import"./isObject-OBBwB0n7.js";import"./Button-B5teW1fu.js";import"./ActionButton-BhhnarQt.js";import"./Dialog-CLxh-kiC.js";import"./cross-CRChT_Fc.js";import"./InternalBackdrop-BkhlETTr.js";import"./composite-BH-1n-px.js";import"./index-ECL9pzkS.js";import"./MenuTrigger-D9MLuSAC.js";import"./CompositeItem-CjjHoPXP.js";import"./ToolbarRootContext-BGTK6XuR.js";import"./getDisabledMountTransitionStyles-Dr6IxA0r.js";import"./getPseudoElementBounds-DMqUJd8Q.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
