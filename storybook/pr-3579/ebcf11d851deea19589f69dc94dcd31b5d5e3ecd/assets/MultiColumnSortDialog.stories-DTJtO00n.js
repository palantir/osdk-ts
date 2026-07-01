import{M as a}from"./MultiColumnSortDialog-Cba0Gj5Z.js";import"./DraggableList-DE05-CQ-.js";import"./iframe-ByebNF9G.js";import"./preload-helper-BLJ5nm8q.js";import"./svgIconContainer-CyQgdri1.js";import"./index-DrYCJTcF.js";import"./search-C7zAZ54L.js";import"./Input-C5LuyW3N.js";import"./useBaseUiId-BSJ3fRaN.js";import"./useControlled-oOiLPaN4.js";import"./index-gnCQ8zpE.js";import"./index-n0aiGAK9.js";import"./Button-CZzSrRkZ.js";import"./small-cross-q31CaUCX.js";import"./ActionButton-CcqVTL0u.js";import"./Dialog-DjgGOx1l.js";import"./cross-B9Ul-EiI.js";import"./InternalBackdrop-DklVG8lc.js";import"./composite-D85XRieF.js";import"./index-D7fCb9_B.js";import"./MenuTrigger-BIT1Eune.js";import"./CompositeItem-Df4No_Tk.js";import"./ToolbarRootContext-C9vRlfBp.js";import"./getDisabledMountTransitionStyles-DiXGk51e.js";import"./getPseudoElementBounds-OAjD6b0x.js";import"./caret-down-DfDUhgIs.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
