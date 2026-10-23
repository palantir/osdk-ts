import{j as r}from"./iframe-DH1LfSqj.js";import{O as b}from"./object-table-C4--OWMA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B9EjVXWV.js";import{u as g}from"./useOsdkClient-DN4s-WbE.js";import"./preload-helper-BtNGdpdU.js";import"./Table-DXNoMCtE.js";import"./index-BwVz3K80.js";import"./Dialog-m6U3BZ2P.js";import"./cross-CVAZ1iFx.js";import"./svgIconContainer-GysfdOnF.js";import"./useBaseUiId-CW3AoQkf.js";import"./InternalBackdrop-DD_xzXOG.js";import"./composite-DB-jEcsY.js";import"./index-Dfpbq9fn.js";import"./index-Dt70WsCn.js";import"./index-BQpuPn_O.js";import"./useEventCallback-B1T6-Dk0.js";import"./SkeletonBar-Blb2KjQc.js";import"./LoadingCell-DJ166qfC.js";import"./ColumnConfigDialog-Dppaw2Lr.js";import"./DraggableList-DfK_4q05.js";import"./search-Cf7xLzNe.js";import"./Input-BbVzkVzZ.js";import"./useControlled-DAJs0K9A.js";import"./Button-CC_D7kUc.js";import"./small-cross-AKv-8hHD.js";import"./ActionButton-DAhEk0oH.js";import"./Checkbox-CJ_ikFlF.js";import"./useValueChanged-D1k7g2Vp.js";import"./CollapsiblePanel-CGVC2bAM.js";import"./MultiColumnSortDialog-DqDhlwJe.js";import"./MenuTrigger-D2rZbEGn.js";import"./CompositeItem-ty0jR14S.js";import"./ToolbarRootContext-DNwYbqk6.js";import"./getDisabledMountTransitionStyles-Dwh5nb5R.js";import"./getPseudoElementBounds-DTVu78U6.js";import"./chevron-down-BcIj0xVN.js";import"./index-BAF1QDd0.js";import"./error-CvpqdC3I.js";import"./BaseCbacBanner-CARa9_yI.js";import"./makeExternalStore-fduFP-zO.js";import"./Tooltip-CZY4h-1t.js";import"./PopoverPopup-C1WEOJ_A.js";import"./debounce-B4GI_Apd.js";import"./tick-BIbnl7xY.js";import"./DropdownField-C9gy_Wgf.js";import"./isEqual-DdMqeQ25.js";import"./withOsdkMetrics-CkK0GNNa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
