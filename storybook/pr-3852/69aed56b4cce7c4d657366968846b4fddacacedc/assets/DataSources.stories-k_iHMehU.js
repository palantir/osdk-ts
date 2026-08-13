import{j as r}from"./iframe-B8GoyF7c.js";import{O as b}from"./object-table-DylVuKP0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C0vkskiq.js";import{u as g}from"./useOsdkClient-CmwQl11w.js";import"./preload-helper-B5kMgiMb.js";import"./Table-Bv_egrMe.js";import"./index-CL1eTbPH.js";import"./Dialog-wsrf6qLX.js";import"./cross-D9o3BuIu.js";import"./svgIconContainer-BNTJvbOM.js";import"./useBaseUiId-Bu2Afjul.js";import"./InternalBackdrop-CuOf1tUN.js";import"./composite-CN8JawkT.js";import"./index-B5C9ERo8.js";import"./index-1KpX_3Nf.js";import"./index-0XyaG4Ey.js";import"./useEventCallback-CxcEgKkZ.js";import"./SkeletonBar-2B0KuUAQ.js";import"./LoadingCell-D9wQxhLO.js";import"./ColumnConfigDialog-DOoFhFmI.js";import"./DraggableList-LwSvRxKn.js";import"./search-ChHon717.js";import"./Input-BoB_S2Yy.js";import"./useControlled-7SLzbWAF.js";import"./isEqual-E-iok-b5.js";import"./isObject-Px9ak30s.js";import"./Button-6Xf5SjjR.js";import"./ActionButton-DYJsKJBt.js";import"./Checkbox-BkmSl6q3.js";import"./useValueChanged-D1lqtZHd.js";import"./CollapsiblePanel-BaaA3CTx.js";import"./MultiColumnSortDialog-DeqDny7L.js";import"./MenuTrigger-BwiZ3WBk.js";import"./CompositeItem-59wLeDqw.js";import"./ToolbarRootContext-Cv3hvHkJ.js";import"./getDisabledMountTransitionStyles-CJn3nWEJ.js";import"./getPseudoElementBounds-4xJQNf4z.js";import"./chevron-down-BUm8spsZ.js";import"./index-D3EOgLBg.js";import"./error-D_8Foosf.js";import"./BaseCbacBanner-UWn7WJB6.js";import"./makeExternalStore-CPUAg4gi.js";import"./Tooltip-DwXyVsXL.js";import"./PopoverPopup-D7j3OXl0.js";import"./toNumber-CTVo6Cd-.js";import"./tick-8N_MNRu5.js";import"./DropdownField-DBIGyTkw.js";import"./withOsdkMetrics-CFIv4gRX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
