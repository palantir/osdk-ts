import{j as r}from"./iframe-S5f-tHYc.js";import{O as b}from"./object-table-Ci-xIoS3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D9B6ob5N.js";import{u as g}from"./useOsdkClient-DYs9h0g-.js";import"./preload-helper-CloBdclc.js";import"./Table-BCQUo_-N.js";import"./index-BjvFrMm8.js";import"./Dialog-Dza_Kh2Q.js";import"./cross-CW1FGrOP.js";import"./svgIconContainer-B4-msPtU.js";import"./useBaseUiId-BlrIsTLC.js";import"./InternalBackdrop-CLYIK4GL.js";import"./composite-541HdLvk.js";import"./index-1qViAGfj.js";import"./index-Cnu8xOcy.js";import"./index-CyzOmN0R.js";import"./useEventCallback-DLlqjfcw.js";import"./SkeletonBar-CkCJtsPM.js";import"./LoadingCell-B01Vuagz.js";import"./ColumnConfigDialog-BhYUMQ86.js";import"./DraggableList-B500BrHc.js";import"./search-CIBDynw6.js";import"./Input-DxXCBH_8.js";import"./useControlled-CL7wd5vL.js";import"./Button-FHTr9kOT.js";import"./small-cross-7E36Oaag.js";import"./ActionButton-DQaroWT8.js";import"./Checkbox-DkSL5Wdt.js";import"./useValueChanged-CA0bh4r8.js";import"./CollapsiblePanel-CBgNvisu.js";import"./MultiColumnSortDialog-Dhsa1G2b.js";import"./MenuTrigger-DAWQwhs-.js";import"./CompositeItem-Dg4eVuBQ.js";import"./ToolbarRootContext-DjBkFXc0.js";import"./getDisabledMountTransitionStyles-ZM0SJ2dg.js";import"./getPseudoElementBounds-BWWWPD0F.js";import"./chevron-down-Cgu3kTNg.js";import"./index--nob6yM3.js";import"./error-Dr3zRmrC.js";import"./BaseCbacBanner-BK0aUKAm.js";import"./makeExternalStore-DqL_g-L_.js";import"./Tooltip-C7N2M5Yu.js";import"./PopoverPopup-CzRxRT6J.js";import"./debounce-CMuMdGaR.js";import"./tick-1JQLMtoH.js";import"./DropdownField-CosoAnxz.js";import"./isEqual-C9oin3_9.js";import"./withOsdkMetrics-BbapYe7K.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
