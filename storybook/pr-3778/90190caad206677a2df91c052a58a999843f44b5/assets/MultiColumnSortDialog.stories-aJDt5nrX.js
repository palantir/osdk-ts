import{M as a}from"./MultiColumnSortDialog-Bs8NsRCP.js";import"./DraggableList-Clfm8Udl.js";import"./iframe-Cs0vjh1D.js";import"./preload-helper-BW6fmHbo.js";import"./svgIconContainer-UGeX2bOE.js";import"./index-BRpQkU0f.js";import"./search-gUhAvHQd.js";import"./Input-DS8FrlZU.js";import"./useBaseUiId-CBGw6rf9.js";import"./useControlled-D0eBDm4j.js";import"./index-Bsi3aTLo.js";import"./index-DszKNb2L.js";import"./isEqual-D0NYUuEo.js";import"./isObject-Cn8y_MRd.js";import"./Button-qASnNh7s.js";import"./ActionButton-DKr4sj1v.js";import"./Dialog-svDsLJqH.js";import"./cross-BbGBkiuK.js";import"./InternalBackdrop-BZL4K5sB.js";import"./composite-BA2SFYHq.js";import"./index-I2-ks3cR.js";import"./MenuTrigger-koUejPxM.js";import"./CompositeItem-B2PoMDzg.js";import"./ToolbarRootContext-C8XwSccZ.js";import"./getDisabledMountTransitionStyles-pUKZhWTR.js";import"./getPseudoElementBounds-D8W5OxLB.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
