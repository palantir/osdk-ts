import{j as r}from"./iframe-Bf5y3yuv.js";import{O as b}from"./object-table-o3fW6O_1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CSAWSAZL.js";import{u as g}from"./useOsdkClient-DjcJEL1f.js";import"./preload-helper-M85ITnzL.js";import"./Table-CEgm66mY.js";import"./index-C4oFc8fT.js";import"./Dialog-qNiPAhSf.js";import"./cross-DxmUAvZu.js";import"./svgIconContainer-CVN7uHeY.js";import"./useBaseUiId-DRtCxjKI.js";import"./InternalBackdrop-CfpA2xj_.js";import"./composite-CgQiA1Oi.js";import"./index-7NakAMlJ.js";import"./index-BPFo9kvt.js";import"./index-BuryNxwZ.js";import"./useEventCallback-DSTs8mUv.js";import"./SkeletonBar-dr-6BVoY.js";import"./LoadingCell-D9U_T-mC.js";import"./ColumnConfigDialog-DPnBwTbo.js";import"./DraggableList-TUEm6KRa.js";import"./search-DTQlzK8C.js";import"./Input-Cld-FXxr.js";import"./useControlled-BhduwF_8.js";import"./Button-C7r4XXrU.js";import"./small-cross-C2Orfn7g.js";import"./ActionButton-BaQtH1dx.js";import"./Checkbox-DK7gyUqH.js";import"./useValueChanged-MJfmbFHj.js";import"./CollapsiblePanel-PwbspAK8.js";import"./MultiColumnSortDialog-CnwrRsPJ.js";import"./MenuTrigger-CK11EHjB.js";import"./CompositeItem-ComoR2X-.js";import"./ToolbarRootContext-C57pzsjm.js";import"./getDisabledMountTransitionStyles-DrojxNJY.js";import"./getPseudoElementBounds-DDEzy1Cb.js";import"./chevron-down-Ax9eqJiN.js";import"./index-CQQhRiBl.js";import"./error-CLHz_uFS.js";import"./BaseCbacBanner-DYAvFjdX.js";import"./makeExternalStore-ZObW_I0b.js";import"./Tooltip-ZHBJR7Og.js";import"./PopoverPopup-pwUuDPTa.js";import"./debounce-CC8UUzvo.js";import"./tick-C1fNgrEf.js";import"./DropdownField-CggY-cK5.js";import"./isEqual-DJatYdkR.js";import"./withOsdkMetrics-y8Y3XJDn.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
