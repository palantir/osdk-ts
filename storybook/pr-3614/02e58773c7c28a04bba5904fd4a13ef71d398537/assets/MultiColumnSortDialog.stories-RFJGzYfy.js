import{M as a}from"./MultiColumnSortDialog-DI9LcbeN.js";import"./DraggableList-8c_hU6Bg.js";import"./iframe-5X19KWNx.js";import"./preload-helper-UTxkvQfT.js";import"./svgIconContainer-BwFWOY5-.js";import"./index-DMgSKlOH.js";import"./search-D_fUGpVV.js";import"./Input-DFixr08O.js";import"./useBaseUiId-5Y5tv9E4.js";import"./useControlled-1rpxN9if.js";import"./index-CrYEtrFn.js";import"./index-iNzzVQ6F.js";import"./Button-Bt5MDCDq.js";import"./small-cross-C5Y5dweo.js";import"./ActionButton-C5VpQ9X3.js";import"./Dialog-COJQAXB9.js";import"./cross-C3ae2c9J.js";import"./InternalBackdrop-DQn4Ja3Y.js";import"./composite-CRwwAO6c.js";import"./index-XCFK5Y6u.js";import"./MenuTrigger-Ceaqc5y4.js";import"./CompositeItem-sAVqkF8E.js";import"./ToolbarRootContext-Bxj_6rSd.js";import"./getDisabledMountTransitionStyles-CSuzdCj7.js";import"./getPseudoElementBounds-DJIVGB2O.js";import"./caret-down-VuBYEUlH.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
