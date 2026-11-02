import{j as r}from"./iframe-Yi2ClGEq.js";import{O as b}from"./object-table-CaIo3T7V.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BFrGcaXv.js";import{u as g}from"./useOsdkClient-tf1w8g-M.js";import"./preload-helper-Bw9P2RvH.js";import"./Table-BdFrvihc.js";import"./index-kCKGZ11f.js";import"./Dialog-C9gO9GIU.js";import"./cross-DHxNtUiL.js";import"./svgIconContainer-DLtA5jnz.js";import"./useBaseUiId-BJvR5yfv.js";import"./InternalBackdrop-D86_8K-4.js";import"./composite-7FUpzlUO.js";import"./index-C3Jd9_Nf.js";import"./index-DxUEYHeM.js";import"./index-BWR70Qv0.js";import"./useEventCallback-C9LtGhrj.js";import"./SkeletonBar-CDwfwm__.js";import"./LoadingCell-CROJ_4TS.js";import"./ColumnConfigDialog-Dy_CqDUs.js";import"./DraggableList-DaGXgq_V.js";import"./search-D88J6TuI.js";import"./Input-B_VCwPTa.js";import"./useControlled-688Acsw-.js";import"./Button-BhYwxPlJ.js";import"./small-cross-BME_eUbX.js";import"./ActionButton-Cu3YO4Fd.js";import"./Checkbox-y1-FMYyx.js";import"./useValueChanged-DMCuXC2X.js";import"./CollapsiblePanel-pAq3TuKo.js";import"./MultiColumnSortDialog-DwKTr3Yn.js";import"./MenuTrigger-DuKpFfjw.js";import"./CompositeItem-DwrEPXux.js";import"./ToolbarRootContext-erRSrQJW.js";import"./getDisabledMountTransitionStyles-B8Q9sBzy.js";import"./getPseudoElementBounds-Dsc1LKXz.js";import"./chevron-down-A6HBtaN4.js";import"./index-Ccuhm711.js";import"./error-CvXgqfjV.js";import"./BaseCbacBanner-i-5de_6b.js";import"./makeExternalStore-BnsF0xX3.js";import"./Tooltip-RTNvhfg1.js";import"./PopoverPopup-C3dzCr8l.js";import"./debounce-gfIDaUjK.js";import"./tick-Di576YmF.js";import"./DropdownField-BGRkIBYk.js";import"./isEqual-8BsEnXjv.js";import"./withOsdkMetrics-Dhx42yDK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
