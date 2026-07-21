import{M as a}from"./MultiColumnSortDialog-CnbRX7NB.js";import"./DraggableList-ChQ74AZk.js";import"./iframe-C6Gno_Aq.js";import"./preload-helper-CHnjjJXQ.js";import"./svgIconContainer-BLTZNNpG.js";import"./index-_m_JHKvg.js";import"./search-D577hEWx.js";import"./Input-DwspMHxQ.js";import"./useBaseUiId-CnO9l72w.js";import"./useControlled-B0Ct5X_K.js";import"./index-Cjc07lz8.js";import"./index-DH-47JRN.js";import"./isEqual-BNvlR8Lm.js";import"./isObject-C9uyR3jw.js";import"./Button-DdI2oTJ4.js";import"./ActionButton-CAN6YxmO.js";import"./Dialog-Yc5UnJJe.js";import"./cross-DEBXdKEp.js";import"./InternalBackdrop-BW1WOh88.js";import"./composite-BlxHHZlA.js";import"./index-_ZcEUh5t.js";import"./MenuTrigger-Cn05N57C.js";import"./CompositeItem-DE_b4Ah6.js";import"./ToolbarRootContext-Dt9qdQ1p.js";import"./getDisabledMountTransitionStyles-CalH2XBv.js";import"./getPseudoElementBounds-gRxFXJdK.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
