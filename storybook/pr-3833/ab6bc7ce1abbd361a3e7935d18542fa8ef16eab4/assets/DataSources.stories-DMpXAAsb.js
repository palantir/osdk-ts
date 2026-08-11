import{j as r}from"./iframe-CMTZ0fe1.js";import{O as b}from"./object-table-KzsxDKyC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CvD1ZY8s.js";import{u as g}from"./useOsdkClient-fyW5LEUN.js";import"./preload-helper-CcoQ00to.js";import"./Table-Bnsc0v89.js";import"./index-Bh2d44Ht.js";import"./Dialog-CVh1DPcK.js";import"./cross-DM_x2Wwt.js";import"./svgIconContainer-e3zlhnbG.js";import"./useBaseUiId-DzzDh8hf.js";import"./InternalBackdrop-1jqktKWZ.js";import"./composite-DZ5IyePu.js";import"./index-DLlFFsdj.js";import"./index-BAeLlemU.js";import"./index-DjIpGPbX.js";import"./useEventCallback-C8Wd_EE4.js";import"./SkeletonBar-Dw7JaR66.js";import"./LoadingCell-aoEJ-q9D.js";import"./ColumnConfigDialog-7frJ1pW2.js";import"./DraggableList-2l1aoXTT.js";import"./search-IoccQV4w.js";import"./Input-BDDU57H1.js";import"./useControlled-aZtd6HrX.js";import"./isEqual-hPXDcjsC.js";import"./isObject-DzEwnOmo.js";import"./Button-DNRqIdKS.js";import"./ActionButton-DdMAnRGf.js";import"./Checkbox-ZIYx-bNZ.js";import"./useValueChanged-CpNBPQAy.js";import"./CollapsiblePanel-D9kmoKty.js";import"./MultiColumnSortDialog-Dc5URj1l.js";import"./MenuTrigger-BujG9I8j.js";import"./CompositeItem-BO_EAHEP.js";import"./ToolbarRootContext-G1neddYV.js";import"./getDisabledMountTransitionStyles-fmppOIBL.js";import"./getPseudoElementBounds-D5ZzF8r2.js";import"./chevron-down-l0Ac3Xd0.js";import"./index-CjcSY54Z.js";import"./error-Cau1AwlP.js";import"./BaseCbacBanner-CAfSZuIq.js";import"./makeExternalStore-f8SczYn0.js";import"./Tooltip-zQ5Y_0XM.js";import"./PopoverPopup-CZz1h-u7.js";import"./toNumber-BD-Yxo2a.js";import"./tick-DX859i1S.js";import"./DropdownField-x8BNRTfX.js";import"./withOsdkMetrics-tRuzaAIK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
