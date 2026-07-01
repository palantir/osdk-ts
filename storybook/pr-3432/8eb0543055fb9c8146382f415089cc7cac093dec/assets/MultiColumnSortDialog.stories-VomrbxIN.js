import{M as a}from"./MultiColumnSortDialog-Ct02ryPU.js";import"./DraggableList-B7JDgkpz.js";import"./iframe-DzqL76g_.js";import"./preload-helper-DmG9dd1J.js";import"./svgIconContainer-C4c3U1tJ.js";import"./index-C7_zXXHU.js";import"./search-o3G2SKWf.js";import"./Input-BLrL7N-3.js";import"./useBaseUiId-BMxeAaRK.js";import"./useControlled-CL8CCR_w.js";import"./index-DrZY_AQx.js";import"./index-MULyq74S.js";import"./Button-DchrC9Fa.js";import"./small-cross-BEToCHFc.js";import"./ActionButton-hyPTWY7z.js";import"./Dialog-CLvHkKkD.js";import"./cross-JNlRAt1Y.js";import"./InternalBackdrop-Bm0TLdpS.js";import"./composite-ZwiEyvb2.js";import"./index-SN9vA9md.js";import"./MenuTrigger-BktJHoyZ.js";import"./CompositeItem-Bg5Dmo8o.js";import"./ToolbarRootContext-Bk0YX5FX.js";import"./getDisabledMountTransitionStyles-BFXtb6nh.js";import"./getPseudoElementBounds-CEURjEPE.js";import"./caret-down-Bbns_mqK.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
