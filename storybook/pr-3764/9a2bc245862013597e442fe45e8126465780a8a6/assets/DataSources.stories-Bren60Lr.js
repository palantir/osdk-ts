import{j as r}from"./iframe-BKvHrTnY.js";import{O as b}from"./object-table-dfdTUyiR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DxjXGOBp.js";import{u as g}from"./useOsdkClient-BChUCHjG.js";import"./preload-helper-CoRksuzd.js";import"./Table-B29hTlS5.js";import"./index-rUQDaSAn.js";import"./Dialog-DaOGCD4R.js";import"./cross-DA7ChnMu.js";import"./svgIconContainer-PUQwmYf6.js";import"./useBaseUiId-CGTe-Nun.js";import"./InternalBackdrop-BLVhnK9n.js";import"./composite-BbDh-O6T.js";import"./index-BpNIUQVs.js";import"./index-CLKVOUxl.js";import"./index-CsvxdTi2.js";import"./useEventCallback-CbBJop34.js";import"./SkeletonBar-DQP9L77w.js";import"./LoadingCell-DVEVD3_d.js";import"./ColumnConfigDialog-Ci6pu3Ub.js";import"./DraggableList-R5VUcA9e.js";import"./search-Dbb6-sbu.js";import"./Input-C4eLCz5A.js";import"./useControlled-DhbqroXM.js";import"./isEqual-CVAQsW_R.js";import"./isObject-C_dCxk37.js";import"./Button-DuFY6WZV.js";import"./ActionButton-82aC6zfA.js";import"./Checkbox-DbvC00Sj.js";import"./useValueChanged-D4XpUpxP.js";import"./CollapsiblePanel-CILetta1.js";import"./MultiColumnSortDialog-lF0MJJLu.js";import"./MenuTrigger-D49rl2_N.js";import"./CompositeItem-Duo2TAMh.js";import"./ToolbarRootContext-xvHuYAEc.js";import"./getDisabledMountTransitionStyles-DRF5LK-l.js";import"./getPseudoElementBounds-C1BxtwWY.js";import"./chevron-down-DabCumzI.js";import"./index-X0S4TuAp.js";import"./error-DTZ2scD_.js";import"./BaseCbacBanner-toUcHF7o.js";import"./makeExternalStore-Da6NdYn7.js";import"./Tooltip-yA1aXIF8.js";import"./PopoverPopup-CohrSeYM.js";import"./toNumber-Cpsxj1fj.js";import"./tick-BPLLt8Qy.js";import"./DropdownField-BHO8l0-r.js";import"./withOsdkMetrics-4uldwMwY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
