import{M as a}from"./MultiColumnSortDialog-u8ImQsb0.js";import"./DraggableList-C7jxuUyU.js";import"./iframe-Cx4Ki0JG.js";import"./preload-helper-D2p_ObaP.js";import"./svgIconContainer-CsN3cDK3.js";import"./index-HnQbfWf4.js";import"./search-epSbqOXw.js";import"./Input-DV3d6RQh.js";import"./useBaseUiId-BUi4NF8Q.js";import"./useControlled-D7I_6zSS.js";import"./index-BpfDO8te.js";import"./index-BqpatvoO.js";import"./Button-CEafUq7E.js";import"./small-cross-C8hl4Qtf.js";import"./ActionButton-DdbmGvNS.js";import"./Dialog-Dp3ul1Sg.js";import"./cross-DY4qmy__.js";import"./InternalBackdrop-CRD_XdlA.js";import"./composite-B6vW5PwB.js";import"./index-DSOvRsd-.js";import"./MenuTrigger-DXiN1CCF.js";import"./CompositeItem-C8Jrf0jR.js";import"./ToolbarRootContext-BirgvTm4.js";import"./getDisabledMountTransitionStyles-DZe9SMT8.js";import"./getPseudoElementBounds-BMfQuLdy.js";import"./caret-down-DiFr3ifQ.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
