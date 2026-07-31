import{j as r}from"./iframe-Ci-tzRKJ.js";import{O as b}from"./object-table-CITG45g_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-PI--M885.js";import{u as g}from"./useOsdkClient-3HA0Y5pZ.js";import"./preload-helper-DJal9EPS.js";import"./Table-CmQN9Y76.js";import"./index-CKLM9KrJ.js";import"./Dialog-KZkL2rM7.js";import"./cross--vCoyTfT.js";import"./svgIconContainer-DvpSMQMB.js";import"./useBaseUiId-Bzqf9i17.js";import"./InternalBackdrop-C-ihlysw.js";import"./composite-C4r_G6LN.js";import"./index-DeFOLRTd.js";import"./index-CaIqfwj2.js";import"./index-BlJyzssb.js";import"./useEventCallback-Bny-aaz_.js";import"./SkeletonBar-Bh_W7132.js";import"./LoadingCell-D6DwyYVw.js";import"./ColumnConfigDialog-B8vm10hl.js";import"./DraggableList-DIocPcNc.js";import"./search-UQXWsdYO.js";import"./Input-BtwCPw-3.js";import"./useControlled-Cao399YH.js";import"./isEqual-BCUYvjjC.js";import"./isObject-6IzxmPNy.js";import"./Button-589e5R23.js";import"./ActionButton-hVwQz-i4.js";import"./Checkbox-ClY58DUW.js";import"./useValueChanged-5vetb3Im.js";import"./CollapsiblePanel-C9SI1XAD.js";import"./MultiColumnSortDialog-B9hp6Ldk.js";import"./MenuTrigger-BDYJ_hBI.js";import"./CompositeItem-CTqslAWX.js";import"./ToolbarRootContext-BbdAu-5X.js";import"./getDisabledMountTransitionStyles-Dhb3HthS.js";import"./getPseudoElementBounds-DMBkpSSS.js";import"./chevron-down-BTzWyvSz.js";import"./index-D-ov5pJU.js";import"./error-lEY9aX5-.js";import"./BaseCbacBanner-DnCgjrWi.js";import"./makeExternalStore-C9b1LS5H.js";import"./Tooltip-DFR6z9eh.js";import"./PopoverPopup-BLnVT5Jl.js";import"./toNumber-BOpuPoJi.js";import"./tick-CChZAUzt.js";import"./DropdownField-Bj5kZNiR.js";import"./withOsdkMetrics-fuyb5ykd.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
