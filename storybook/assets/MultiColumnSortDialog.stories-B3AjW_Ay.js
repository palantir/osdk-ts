import{M as a}from"./MultiColumnSortDialog-B4t_fhv9.js";import"./DraggableList-BmiBrSwb.js";import"./iframe-DapanO-P.js";import"./preload-helper-Dp1pzeXC.js";import"./svgIconContainer-Co7lmLmh.js";import"./index-BK8hrqxS.js";import"./Input-BwNcLheo.js";import"./useBaseUiId-DyOjq1NT.js";import"./useControlled-B-qlSgs5.js";import"./index-D0ctGmqs.js";import"./index-BYhY79FB.js";import"./Button-XOxqAeXM.js";import"./small-cross-CvLm2s3P.js";import"./ActionButton-CreJBPk8.js";import"./Dialog-Cjg1gaO5.js";import"./cross-wFFEdw2s.js";import"./InternalBackdrop-BTiL0FjV.js";import"./composite-CIPSM3MK.js";import"./index-CR4JTnx7.js";import"./MenuTrigger-oA6x8eVf.js";import"./CompositeItem-ByF7EIVZ.js";import"./ToolbarRootContext-cT7h50G9.js";import"./getDisabledMountTransitionStyles-jiOb257f.js";import"./getPseudoElementBounds-Da1S3hM4.js";import"./caret-down-BAb0ojAc.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],x={title:"Beta/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const B=["Default"];export{e as Default,B as __namedExportsOrder,x as default};
