import{j as r}from"./iframe-rq8NuSfP.js";import{O as b}from"./object-table-Tswkdilm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B10tqXPj.js";import{u as g}from"./useOsdkClient-DbA3yZIX.js";import"./preload-helper-CvJz_IUe.js";import"./Table-CGezPmZd.js";import"./index-ysoUH_JH.js";import"./Dialog-CJZ__yxs.js";import"./cross-BBqhm1p8.js";import"./svgIconContainer-DztQZTqt.js";import"./useBaseUiId-Bf-Z0IHd.js";import"./InternalBackdrop-CQ13XFOG.js";import"./composite-sl7bgooi.js";import"./index-B7xRuMiw.js";import"./index-CsgLYqAh.js";import"./index-CeRKYrT8.js";import"./useEventCallback-0iTg9u-J.js";import"./SkeletonBar-DY0bKr4Y.js";import"./LoadingCell-oWeSLE88.js";import"./ColumnConfigDialog-DE7lnRmq.js";import"./DraggableList-DDYXjOD7.js";import"./search-DWeYn3Qn.js";import"./Input-BIVs6kpr.js";import"./useControlled-CkaqNWIl.js";import"./isEqual-D6w6eBfH.js";import"./isObject-LqGLpNGT.js";import"./Button-DuL44OIq.js";import"./ActionButton-DfS5j_S1.js";import"./Checkbox-DIVGPwHV.js";import"./useValueChanged-t2VQXlNB.js";import"./CollapsiblePanel-BlfkVDoM.js";import"./MultiColumnSortDialog-2nBkzcbh.js";import"./MenuTrigger-Cg4wjv4b.js";import"./CompositeItem-Qabrm8X6.js";import"./ToolbarRootContext-DAlNjZIe.js";import"./getDisabledMountTransitionStyles-D29qu8tE.js";import"./getPseudoElementBounds-DLMPfxRO.js";import"./chevron-down-CfpMyllA.js";import"./index-0Ykzd783.js";import"./error-D6eViXnU.js";import"./BaseCbacBanner-BFnJR_Re.js";import"./makeExternalStore-DvD94buu.js";import"./Tooltip-CS9dv8wY.js";import"./PopoverPopup-BFyAfkPc.js";import"./toNumber-BOOCVMDJ.js";import"./tick-Jg4GGiJ3.js";import"./DropdownField-Cbab9S3i.js";import"./withOsdkMetrics-DHFbf_VX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
