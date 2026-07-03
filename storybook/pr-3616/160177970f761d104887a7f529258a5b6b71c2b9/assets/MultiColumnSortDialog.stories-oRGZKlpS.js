import{M as a}from"./MultiColumnSortDialog-BXFsItg4.js";import"./DraggableList-CkslO-Mh.js";import"./iframe-CyqMwwwa.js";import"./preload-helper-AtWPu6x5.js";import"./svgIconContainer-B6yM1sE_.js";import"./index-BQ01XBWb.js";import"./search-cwTssfHk.js";import"./Input-BtpaAmi8.js";import"./useBaseUiId-DzGITZS5.js";import"./useControlled-rqeQw8gV.js";import"./index-DYsHBxeE.js";import"./index-CcpSGuBk.js";import"./Button-CXO_Rr9x.js";import"./small-cross-Dp3Pu0cg.js";import"./ActionButton-Bqy0gAP_.js";import"./Dialog-DXT83sRA.js";import"./cross-DO-0I_3Y.js";import"./InternalBackdrop-8Zqb3ANz.js";import"./composite-Duq6hh4g.js";import"./index-DIHHxjgY.js";import"./MenuTrigger-upw5FU3W.js";import"./CompositeItem-BgpsbA-o.js";import"./ToolbarRootContext-Ck6me1lS.js";import"./getDisabledMountTransitionStyles-DAGRMAK3.js";import"./getPseudoElementBounds-BtFR1fwX.js";import"./caret-down-BWp8ZItO.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
