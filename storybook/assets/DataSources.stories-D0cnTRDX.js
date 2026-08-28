import{j as r}from"./iframe-u9hOX5tX.js";import{O as b}from"./object-table-BJHX7Vyh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DCNU7IF2.js";import{u as g}from"./useOsdkClient-hhbELhlD.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BzgweOE7.js";import"./index-DxD8FM_1.js";import"./Dialog-DVGdVo-X.js";import"./cross-DrLAndSC.js";import"./svgIconContainer-BhCzJfro.js";import"./useBaseUiId-NreGDPh5.js";import"./InternalBackdrop-P_7OvP9a.js";import"./composite-B0ATBYyt.js";import"./index-CiR2ByAS.js";import"./index-Bn7Z55t6.js";import"./index-CFOUBP5K.js";import"./useEventCallback-CHykcO5e.js";import"./SkeletonBar-DoUbz6Ni.js";import"./LoadingCell-CQ6s98i_.js";import"./ColumnConfigDialog-Bz70j5Ne.js";import"./DraggableList-DVHeZQF9.js";import"./search-D3Zuzx7q.js";import"./Input-DUgdjwsc.js";import"./useControlled-Bfp9z5LY.js";import"./Button-DIQR92sZ.js";import"./small-cross-Dlcf9okf.js";import"./ActionButton-C0VbMkfx.js";import"./Checkbox-tT1GQ2wN.js";import"./useValueChanged-ZtLxRCub.js";import"./CollapsiblePanel-CWP0NHJq.js";import"./MultiColumnSortDialog-USQ-f1i6.js";import"./MenuTrigger-DC5MUKls.js";import"./CompositeItem-mIZsnJNz.js";import"./ToolbarRootContext-C-NXaLDf.js";import"./getDisabledMountTransitionStyles-CtlgkIoY.js";import"./getPseudoElementBounds-C7nlu7dc.js";import"./chevron-down-DJMNDdHU.js";import"./index-DBgJDRZ-.js";import"./error-BYByE55v.js";import"./BaseCbacBanner-COgIJB5W.js";import"./makeExternalStore-j84EUnMN.js";import"./Tooltip-uYEwdezG.js";import"./PopoverPopup-D5EtTsUF.js";import"./debounce-DDOmq6Bw.js";import"./tick-ChqeFAL5.js";import"./DropdownField-C8giUWCR.js";import"./isEqual-QkICyt9V.js";import"./withOsdkMetrics-DZo9ZLyt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
