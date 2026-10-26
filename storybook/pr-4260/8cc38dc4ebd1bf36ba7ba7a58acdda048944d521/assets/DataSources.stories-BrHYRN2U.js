import{j as r}from"./iframe-HJ0Gtc-x.js";import{O as b}from"./object-table-BrtVywDY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers--EpSRk8M.js";import{u as g}from"./useOsdkClient-CoXY6Vlt.js";import"./preload-helper-BOUoT_Gy.js";import"./Table-DZYPZAtB.js";import"./index-211_BqLo.js";import"./Dialog-CPQRVis-.js";import"./cross-ChjkGLAA.js";import"./svgIconContainer-BOUC7MPM.js";import"./useBaseUiId-CeZXZ9Z0.js";import"./InternalBackdrop-Ds4oR6Ed.js";import"./composite-CuUXCjDd.js";import"./index-CAQybw0C.js";import"./index-BPe5620H.js";import"./index-BhSWDlLz.js";import"./useEventCallback-CBE-X_q_.js";import"./SkeletonBar-BJ8asOzR.js";import"./LoadingCell-DC5Q3UnN.js";import"./ColumnConfigDialog-DzvX6v-V.js";import"./DraggableList-B4Hv6fvF.js";import"./search-BjFqXd51.js";import"./Input-BRC4lGnf.js";import"./useControlled-C74o2pv-.js";import"./Button-Cg7ItP1u.js";import"./small-cross-Bhi2-tHH.js";import"./ActionButton-B88YLnLq.js";import"./Checkbox-YM35Zgrv.js";import"./useValueChanged-l1kass9c.js";import"./CollapsiblePanel-B3ADmTiC.js";import"./MultiColumnSortDialog-C9w02LjT.js";import"./MenuTrigger-4LBwiAxB.js";import"./CompositeItem-CHrD2JLR.js";import"./ToolbarRootContext-Cec3nuK8.js";import"./getDisabledMountTransitionStyles-BazR3s1k.js";import"./getPseudoElementBounds-Cf3JM-Dw.js";import"./chevron-down-Db91ZRmD.js";import"./index-BbA9vrwp.js";import"./error-BQ1AWTRy.js";import"./BaseCbacBanner-CUdfbKKq.js";import"./makeExternalStore-AnzMBZSn.js";import"./Tooltip-D9CYaD7B.js";import"./PopoverPopup-CCXUh3Ez.js";import"./debounce-B7uP-EKg.js";import"./tick-CYuRXF5J.js";import"./DropdownField-hZtNo6MG.js";import"./isEqual-DSQoh2h8.js";import"./withOsdkMetrics-DmM4mVY6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
