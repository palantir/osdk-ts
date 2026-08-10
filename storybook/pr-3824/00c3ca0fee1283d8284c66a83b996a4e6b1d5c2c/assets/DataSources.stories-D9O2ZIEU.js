import{j as r}from"./iframe-BBtjza0D.js";import{O as b}from"./object-table-VAgW1ltd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-7wGD0_JW.js";import{u as g}from"./useOsdkClient-DWO6jtgp.js";import"./preload-helper-DIpLrdyg.js";import"./Table-BEnfOoEp.js";import"./index-B5Ib5NgX.js";import"./Dialog-CCUdZMbo.js";import"./cross-BAgiJhuh.js";import"./svgIconContainer-Cv3Whexl.js";import"./useBaseUiId-HwKRTBOZ.js";import"./InternalBackdrop-BBv82JT6.js";import"./composite-BoMOOGfe.js";import"./index-CzUdZzH9.js";import"./index-z3NWRD_P.js";import"./index-DY4mmY1u.js";import"./useEventCallback-C-6kmm7l.js";import"./SkeletonBar-DDTcX3hN.js";import"./LoadingCell-7hlIoA0q.js";import"./ColumnConfigDialog-BaW5HGmi.js";import"./DraggableList-GBg65Pa-.js";import"./search-DOUHr1do.js";import"./Input-CLtZs9ea.js";import"./useControlled-n1nITqfY.js";import"./isEqual-DRbQ_qQ8.js";import"./isObject-CRoSQNk8.js";import"./Button-DGjGmxxw.js";import"./ActionButton-dU6sc1YN.js";import"./Checkbox-BvRdeDWJ.js";import"./useValueChanged-B2tPWHcI.js";import"./CollapsiblePanel-BRYkOrMA.js";import"./MultiColumnSortDialog-82xGBFJG.js";import"./MenuTrigger-BalqVSgk.js";import"./CompositeItem-CDPE0MsY.js";import"./ToolbarRootContext-DZE0giUi.js";import"./getDisabledMountTransitionStyles-HfVWLkeP.js";import"./getPseudoElementBounds-DTnaAh_r.js";import"./chevron-down-BM8P94BW.js";import"./index-3zRTNHrM.js";import"./error-WTxwKOKI.js";import"./BaseCbacBanner-DdowyWAq.js";import"./makeExternalStore-DRwq3rQb.js";import"./Tooltip-D56y5GIx.js";import"./PopoverPopup-BqYcoYkA.js";import"./toNumber-DC-nmIwK.js";import"./tick-jgZPqcGy.js";import"./DropdownField-NYNeufQb.js";import"./withOsdkMetrics-CouVRm-f.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
