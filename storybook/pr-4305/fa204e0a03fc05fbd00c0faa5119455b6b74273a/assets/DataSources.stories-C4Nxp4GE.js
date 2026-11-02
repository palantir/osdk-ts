import{j as r}from"./iframe-Dxf7pqeg.js";import{O as b}from"./object-table-CAmbjs-n.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DRcUffCA.js";import{u as g}from"./useOsdkClient-BclyzzCm.js";import"./preload-helper-CF9q8wC-.js";import"./Table-Dqkj2dN7.js";import"./index-wDaQCgfa.js";import"./Dialog-C-C7J_C5.js";import"./cross-jA7YlUXs.js";import"./svgIconContainer-DeyZ4zWj.js";import"./useBaseUiId-DVv5YeQ_.js";import"./InternalBackdrop-0R1WE3fv.js";import"./composite-DX7eZJ2_.js";import"./index-6J7TyXcf.js";import"./index-BoUI8uiT.js";import"./index-BwEpBM25.js";import"./useEventCallback-B4KD4d9L.js";import"./SkeletonBar-CbuQfCLG.js";import"./LoadingCell-BumJxikK.js";import"./ColumnConfigDialog-CpetANnK.js";import"./DraggableList-DwJkQy_K.js";import"./search-n-Z5MtR9.js";import"./Input-B-AK0ISA.js";import"./useControlled-COWGSBWf.js";import"./Button-C2uuxQ9H.js";import"./small-cross-DYWSmTGJ.js";import"./ActionButton-BDiX3ANK.js";import"./Checkbox-CugdzikF.js";import"./useValueChanged-hug1LV6U.js";import"./CollapsiblePanel-C66-rvaM.js";import"./MultiColumnSortDialog-CC2PzkiA.js";import"./MenuTrigger-O60ZG2Mr.js";import"./CompositeItem-DXqXcqtg.js";import"./ToolbarRootContext-DwNvvDcu.js";import"./getDisabledMountTransitionStyles-BObfekIg.js";import"./getPseudoElementBounds-D9abS4hX.js";import"./chevron-down-CeBUa0jW.js";import"./index-COpT5bPe.js";import"./error-LTA79L0B.js";import"./BaseCbacBanner-DbDDCNA_.js";import"./makeExternalStore-B474c-YK.js";import"./Tooltip-BjgMSx3f.js";import"./PopoverPopup-BKxQctdQ.js";import"./debounce-CKRCdOlE.js";import"./tick-Cm8FJ6ZM.js";import"./DropdownField-CGNqz11o.js";import"./isEqual-_UBNmDUY.js";import"./withOsdkMetrics-BVzotg80.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
