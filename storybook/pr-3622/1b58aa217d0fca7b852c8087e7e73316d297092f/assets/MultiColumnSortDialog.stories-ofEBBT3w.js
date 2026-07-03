import{M as a}from"./MultiColumnSortDialog-B0f09Q4J.js";import"./DraggableList-DmkA-L6L.js";import"./iframe-CBVDd2K9.js";import"./preload-helper-CeHTi67z.js";import"./svgIconContainer-C12LQMwY.js";import"./index-CgSNX0NI.js";import"./search-MUd7770Y.js";import"./Input-PTyNua65.js";import"./useBaseUiId-H6sNVlNE.js";import"./useControlled-CQcpQ9pv.js";import"./index-kMiFdZDZ.js";import"./index-DdaPLHRE.js";import"./Button-UqzeAcIG.js";import"./small-cross-DwrLXjG1.js";import"./ActionButton-CHr87y9u.js";import"./Dialog-DpuLLdsv.js";import"./cross-MJj7YzFz.js";import"./InternalBackdrop-wfJdmOAO.js";import"./composite-CUsRZRAT.js";import"./index-DIq_SYvb.js";import"./MenuTrigger-KCDEPq8-.js";import"./CompositeItem-BaJfhb8h.js";import"./ToolbarRootContext-BsGBS5zG.js";import"./getDisabledMountTransitionStyles-Cd-N1Ma0.js";import"./getPseudoElementBounds-BidkPmNq.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],x={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,x as default};
