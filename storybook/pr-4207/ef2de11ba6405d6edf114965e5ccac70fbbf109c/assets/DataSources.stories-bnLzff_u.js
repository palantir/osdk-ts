import{j as r}from"./iframe-D8GtPwc8.js";import{O as b}from"./object-table-CudRMjsB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BizpUJiW.js";import{u as g}from"./useOsdkClient-D4kcyEkr.js";import"./preload-helper-DM7AYsRe.js";import"./Table-Dnd_Z03K.js";import"./index-BHvqAHvK.js";import"./Dialog-BQAfoqXB.js";import"./cross-DB6ZQcJi.js";import"./svgIconContainer-DlryWN-T.js";import"./useBaseUiId-cPjFtQbW.js";import"./InternalBackdrop-BnVhbZ_p.js";import"./composite-C3gA3n5a.js";import"./index-BFpMtvXB.js";import"./index-hBVFoSAx.js";import"./index--mveQ4GA.js";import"./useEventCallback-JoMVAP4J.js";import"./SkeletonBar-DhDYamN9.js";import"./LoadingCell-CpxY2g9E.js";import"./ColumnConfigDialog-CgqnQaBc.js";import"./DraggableList-H11g_daa.js";import"./search-1VHOmlrx.js";import"./Input-BQZ4zqRI.js";import"./useControlled-BGR8D7jw.js";import"./Button-BY4p0q88.js";import"./small-cross-AU0AwZv4.js";import"./ActionButton-COwhhG-g.js";import"./Checkbox-CYnr5sf0.js";import"./useValueChanged-Bvcq1JkK.js";import"./CollapsiblePanel-DRmMBXX1.js";import"./MultiColumnSortDialog-w5gbJQoX.js";import"./MenuTrigger-CQvmaUV7.js";import"./CompositeItem-DiLTW9IV.js";import"./ToolbarRootContext-BqDTk1g9.js";import"./getDisabledMountTransitionStyles-OSessTJH.js";import"./getPseudoElementBounds-DAdIAfjY.js";import"./chevron-down-7LsT1DrB.js";import"./index-BZjshZ5O.js";import"./error-DXFVtY0P.js";import"./BaseCbacBanner-DJmT2hTZ.js";import"./makeExternalStore-ByNN_qQg.js";import"./Tooltip-CWkY425s.js";import"./PopoverPopup-DnmZzlUY.js";import"./debounce-4ipI9nx9.js";import"./tick-DbzPDmMF.js";import"./DropdownField-DIakJXQh.js";import"./isEqual-DcZVMsbL.js";import"./withOsdkMetrics-BajG3tch.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
