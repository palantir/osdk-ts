import{j as r}from"./iframe-Tg2fnlVs.js";import{O as b}from"./object-table-s1e2Phdi.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-8HhBzGYs.js";import{u as g}from"./useOsdkClient-C_cOGEWG.js";import"./preload-helper-xsLVBww1.js";import"./Table-D4vOxokt.js";import"./index-B3-1mb1K.js";import"./Dialog-z10bt9ml.js";import"./cross-BZrYWs_D.js";import"./svgIconContainer-Cp1mUGc0.js";import"./useBaseUiId-D6sRq2bB.js";import"./InternalBackdrop-BsP43oYC.js";import"./composite-DuLfcYDh.js";import"./index-o5uplDD7.js";import"./index-DPwCU7gB.js";import"./index-FXCVzM8A.js";import"./useEventCallback-Clt5HhZy.js";import"./SkeletonBar-BzHuBvLf.js";import"./LoadingCell-C6Z17YL3.js";import"./ColumnConfigDialog-Ck5OsDxx.js";import"./DraggableList-2-y-jsVB.js";import"./search-UK-OniDD.js";import"./Input-BPgms8bD.js";import"./useControlled-Dvm87Fn4.js";import"./isEqual-NkSmJgkK.js";import"./isObject-DmJxbbx1.js";import"./Button-CiYzxyPU.js";import"./ActionButton-1QC1UJFs.js";import"./Checkbox-HpCj16gy.js";import"./useValueChanged-seYnRZ38.js";import"./CollapsiblePanel-BNpWQkWl.js";import"./MultiColumnSortDialog-D2ob9v7y.js";import"./MenuTrigger-Dw2XlIXx.js";import"./CompositeItem-DEGMDptb.js";import"./ToolbarRootContext-BUY7sygA.js";import"./getDisabledMountTransitionStyles-cA1h6ws6.js";import"./getPseudoElementBounds-B0T37kvs.js";import"./chevron-down-Bj_a4fCt.js";import"./index-CL7wapu_.js";import"./error-9Ml166dJ.js";import"./BaseCbacBanner-D21Fu5a7.js";import"./makeExternalStore-Y3iyej0D.js";import"./Tooltip-2VCDdGRa.js";import"./PopoverPopup-Dp0lEAyY.js";import"./toNumber-B00qaJHM.js";import"./tick-dG2WuFpQ.js";import"./DropdownField-CBRsuUdv.js";import"./withOsdkMetrics-DGs0YjPU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
