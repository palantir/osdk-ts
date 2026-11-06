import{j as r}from"./iframe-DOoViGQC.js";import{O as b}from"./object-table-fsv2meK0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DS4zAWuk.js";import{u as g}from"./useOsdkClient-BvJQMhJJ.js";import"./preload-helper-D6M-lWMp.js";import"./Table-XlWncKwC.js";import"./index-x4gpFwBp.js";import"./Dialog-BUVOhGz-.js";import"./cross-BAqH0G--.js";import"./svgIconContainer-DDehFQ37.js";import"./useBaseUiId-CEA0ov3F.js";import"./InternalBackdrop-Cvfzz2Gg.js";import"./composite-DG_OLYDF.js";import"./index-uZqGKRzq.js";import"./index-C5WAn5Dx.js";import"./index-oSIBYKmR.js";import"./useEventCallback-2cQhO8Od.js";import"./SkeletonBar-yxb5jjnx.js";import"./LoadingCell-B8vGHO6K.js";import"./ColumnConfigDialog-DOx981jG.js";import"./DraggableList-uTc7RtXZ.js";import"./search-BtSuJQ9M.js";import"./Input-Bq0XAGaR.js";import"./useControlled-DyFvS3eo.js";import"./Button-DnpTR9kP.js";import"./small-cross-CkiB4kAk.js";import"./ActionButton-CT-L5CB7.js";import"./Checkbox-Dk0n7HNT.js";import"./useValueChanged-sHXiC0u3.js";import"./CollapsiblePanel--B4cqlmx.js";import"./MultiColumnSortDialog-C3caRr3a.js";import"./MenuTrigger-DB0T_UbP.js";import"./CompositeItem-C-YvkCMY.js";import"./ToolbarRootContext-BICNcApQ.js";import"./getDisabledMountTransitionStyles-FChDzxHp.js";import"./getPseudoElementBounds-CCgIuocG.js";import"./chevron-down-BssNm1rB.js";import"./index-v0gYgaE5.js";import"./error-CMiAPzhy.js";import"./BaseCbacBanner-Bxst7se4.js";import"./makeExternalStore-_9NPeB4S.js";import"./Tooltip-Ct-G7N11.js";import"./isObject-B3qfbi9s.js";import"./debounce-DshVKYBV.js";import"./tick-BcBfo_Ik.js";import"./DropdownField-CW8S6woh.js";import"./isEqual-D0Vlcsqm.js";import"./_baseIsEqual-BXzcdte9.js";import"./withOsdkMetrics-DkYGNx1N.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
