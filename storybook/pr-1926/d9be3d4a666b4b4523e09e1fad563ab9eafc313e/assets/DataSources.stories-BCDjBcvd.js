import{j as r}from"./iframe-CPzX1uSk.js";import{O as b}from"./object-table-BLYmji7X.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C8fg0DSW.js";import{u as g}from"./useOsdkClient-C9BVIZ8E.js";import"./preload-helper-BV_2dDRe.js";import"./Table-DiecgVVT.js";import"./index-COJJFOT5.js";import"./Dialog-DpOd0WRd.js";import"./cross-CrQPe3Ah.js";import"./svgIconContainer-BUGQNNP_.js";import"./useBaseUiId-Dlz6RJMI.js";import"./InternalBackdrop-ICDvYA-3.js";import"./composite-BpWI7eGy.js";import"./index-bgG3RNaT.js";import"./index-Ce1oZCaV.js";import"./index-BFdAxWey.js";import"./useEventCallback-_Omzy9f1.js";import"./SkeletonBar-DscMDxVg.js";import"./LoadingCell-C_0EDqol.js";import"./ColumnConfigDialog-xTF2dYRe.js";import"./DraggableList-Bg8CiRyW.js";import"./search-DbyDvw8l.js";import"./Input-BcH8rlzt.js";import"./useControlled-C6jvEykx.js";import"./Button-Bp9aDI8N.js";import"./small-cross-7guhEJxW.js";import"./ActionButton-ZZbDa446.js";import"./Checkbox-DMURKGRH.js";import"./useValueChanged-BdmTJ_Td.js";import"./CollapsiblePanel-1OBlzHqi.js";import"./MultiColumnSortDialog-DGwUDAAJ.js";import"./MenuTrigger-BOhlA6os.js";import"./CompositeItem-BddFvRMc.js";import"./ToolbarRootContext-ddrpupWn.js";import"./getDisabledMountTransitionStyles-B_mC_X_B.js";import"./getPseudoElementBounds-Czhjand4.js";import"./chevron-down-C8Owk0H7.js";import"./index-Cz0_03bE.js";import"./error-DwSWgrLn.js";import"./BaseCbacBanner-1Sh0I2-t.js";import"./makeExternalStore-DLgjxXB4.js";import"./Tooltip-DbjgG31A.js";import"./PopoverPopup-DsbqH6LM.js";import"./debounce-DokDeayM.js";import"./tick-DiJrDoSw.js";import"./DropdownField-CDKK8b_W.js";import"./isEqual-D0b9prfR.js";import"./withOsdkMetrics-XJdj0BYd.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
