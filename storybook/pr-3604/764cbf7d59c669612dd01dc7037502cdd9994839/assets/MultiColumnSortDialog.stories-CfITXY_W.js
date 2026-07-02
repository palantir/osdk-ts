import{M as a}from"./MultiColumnSortDialog-BkQA2Fmy.js";import"./DraggableList-B4b2GDU_.js";import"./iframe-CKp2GoGt.js";import"./preload-helper-Dwl_2zgn.js";import"./svgIconContainer-DpbAUHon.js";import"./index-CV5CMoJy.js";import"./search-DKMjaczW.js";import"./Input-DbTAg51B.js";import"./useBaseUiId-PRbwLdOI.js";import"./useControlled-BSjj1z3Z.js";import"./index-DTnX0xVA.js";import"./index-D2il3bQJ.js";import"./Button-DP3U52Zi.js";import"./small-cross-DZYL8ayJ.js";import"./ActionButton-Ded8nVsd.js";import"./Dialog-D8lqGQIC.js";import"./cross-D_J0Mx2k.js";import"./InternalBackdrop-C8mEeC4M.js";import"./composite-DgO7Vm35.js";import"./index-DaqSnlCi.js";import"./MenuTrigger-D0kS97P2.js";import"./CompositeItem-BnJJ7eGh.js";import"./ToolbarRootContext-XlMRMSy8.js";import"./getDisabledMountTransitionStyles-BEUnbtJM.js";import"./getPseudoElementBounds-BO_DQhPo.js";import"./caret-down-B7HaT8DB.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
