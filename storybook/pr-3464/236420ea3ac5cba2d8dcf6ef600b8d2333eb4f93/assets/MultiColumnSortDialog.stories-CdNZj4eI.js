import{M as a}from"./MultiColumnSortDialog-D6GsvYfQ.js";import"./DraggableList-DpC9TOx3.js";import"./iframe-BQLDwnYS.js";import"./preload-helper-DrYcjSID.js";import"./svgIconContainer-Dm2wCbyW.js";import"./index-C1Y5AWrw.js";import"./search-DJ9ja1DT.js";import"./Input-BSFiHdyo.js";import"./useBaseUiId-BmyAjBD4.js";import"./useControlled-AOt-_DXq.js";import"./index-Bwp8y7R4.js";import"./index-vNuHTMxc.js";import"./Button-BJ0OLq1S.js";import"./small-cross-CZoDFuCq.js";import"./ActionButton-DzOL_DSi.js";import"./Dialog-BcylHAZC.js";import"./cross-BwP0gjCc.js";import"./InternalBackdrop-CoW5ayVh.js";import"./composite-DO2M4lPA.js";import"./index-DQoyM81Q.js";import"./MenuTrigger-CKpvMl9S.js";import"./CompositeItem-Ca06aqdO.js";import"./ToolbarRootContext-1yW1bLAK.js";import"./getDisabledMountTransitionStyles-DYnR0Bkc.js";import"./getPseudoElementBounds-C1EUm1wS.js";import"./caret-down-Dp47fQLJ.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
