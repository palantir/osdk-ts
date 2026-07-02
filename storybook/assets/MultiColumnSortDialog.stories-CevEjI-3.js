import{M as a}from"./MultiColumnSortDialog-D5VUTZjs.js";import"./DraggableList-C4avHE14.js";import"./iframe-Bqb8e56z.js";import"./preload-helper-Dp1pzeXC.js";import"./svgIconContainer-F71y2enf.js";import"./index-CReoR6Ri.js";import"./search-D_zrQfhi.js";import"./Input-BSsr1nM6.js";import"./useBaseUiId-DZTItZ6G.js";import"./useControlled-D2VuLNB-.js";import"./index-w_SXVmWn.js";import"./index-DQNPZVpa.js";import"./Button-SSzBwglZ.js";import"./small-cross-BMiZIc4s.js";import"./ActionButton-Dygl7oUl.js";import"./Dialog-DI-WC-dD.js";import"./cross-Fw1aZ42r.js";import"./InternalBackdrop-gfV2EQPd.js";import"./composite-CS1pQ03C.js";import"./index-CpMCSrrr.js";import"./MenuTrigger-DTr_qzlC.js";import"./CompositeItem-Be_PCj3i.js";import"./ToolbarRootContext-mnk_5yNn.js";import"./getDisabledMountTransitionStyles-cbQgbD10.js";import"./getPseudoElementBounds-Dj0ya8GA.js";import"./caret-down-Dn5cXcBi.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
