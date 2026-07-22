import{M as a}from"./MultiColumnSortDialog-BE-Xqeny.js";import"./DraggableList-D-6R4oYR.js";import"./iframe-DjtcYyzQ.js";import"./preload-helper-Dp1pzeXC.js";import"./svgIconContainer-JU7cmdzA.js";import"./index-CQV6Rnc6.js";import"./search-DFIZPiTI.js";import"./Input-eiOZqsyQ.js";import"./useBaseUiId-kxFdZqtD.js";import"./useControlled-DggWxDeY.js";import"./index-CBxdpb96.js";import"./index-D8ZMhwwx.js";import"./isEqual-CHBEhNJy.js";import"./isObject-BLUbfgBE.js";import"./Button-yoR8DJA2.js";import"./ActionButton-aTqycEsf.js";import"./Dialog-y15XJOsn.js";import"./cross-B6N8rLM4.js";import"./InternalBackdrop-CpQyJmy1.js";import"./composite-B_imHkJV.js";import"./index-C3TnBhfz.js";import"./MenuTrigger-qUgny5m-.js";import"./CompositeItem-pjHtEKS0.js";import"./ToolbarRootContext-DHGJfn9d.js";import"./getDisabledMountTransitionStyles-C83r2vCZ.js";import"./getPseudoElementBounds-D-8MIy1t.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
