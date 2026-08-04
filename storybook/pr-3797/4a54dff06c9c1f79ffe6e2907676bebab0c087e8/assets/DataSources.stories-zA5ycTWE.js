import{j as r}from"./iframe-QFYCOUfb.js";import{O as b}from"./object-table-B2DYjUEt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ohzqtvvZ.js";import{u as g}from"./useOsdkClient-D2V1bKMi.js";import"./preload-helper-BvwAeipT.js";import"./Table-Bu_7BoL1.js";import"./index-r2m1MzwO.js";import"./Dialog-Bfc7HWT_.js";import"./cross-lN9Ye2mz.js";import"./svgIconContainer-BTKuLZDT.js";import"./useBaseUiId-CWCv1RJ1.js";import"./InternalBackdrop-pmr-irU1.js";import"./composite-0JPHK5U6.js";import"./index-CFtpFERN.js";import"./index-p1_Aw4sU.js";import"./index-BYeoZqW9.js";import"./useEventCallback-BvukxHI1.js";import"./SkeletonBar-T8DUjg20.js";import"./LoadingCell-BDvbN2hs.js";import"./ColumnConfigDialog-BkXWINBS.js";import"./DraggableList-ihgDUqV9.js";import"./search-A6D3Nphw.js";import"./Input-XI1xCScB.js";import"./useControlled-DvS8LHTQ.js";import"./isEqual-WnM2x0h8.js";import"./isObject-B9e3BPlM.js";import"./Button-CCCx6o1T.js";import"./ActionButton-1xA6c8aW.js";import"./Checkbox-DBnhpo7E.js";import"./useValueChanged-DnV0Ju92.js";import"./CollapsiblePanel-1WpAY5PZ.js";import"./MultiColumnSortDialog-D1F5VEBP.js";import"./MenuTrigger-zbuTgZkT.js";import"./CompositeItem-BzxfLAiE.js";import"./ToolbarRootContext-DxtjrKYm.js";import"./getDisabledMountTransitionStyles-B4wrMBNf.js";import"./getPseudoElementBounds-C-0UF2Q5.js";import"./chevron-down-8j45KwVK.js";import"./index-nzm4ayqk.js";import"./error-DkSBwZqT.js";import"./BaseCbacBanner-CeATJGkx.js";import"./makeExternalStore-jT5LUsaV.js";import"./Tooltip-CKjmDpHV.js";import"./PopoverPopup-DUtHyKME.js";import"./toNumber-5VBp_Htu.js";import"./tick-C1D_7X95.js";import"./DropdownField-CcWDIdAB.js";import"./withOsdkMetrics-BwOMOUV-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
