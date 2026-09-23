import{j as r}from"./iframe-DoZpKAuy.js";import{O as b}from"./object-table-DRW4kY3M.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-RIcB7018.js";import{u as g}from"./useOsdkClient-BD-YRINd.js";import"./preload-helper-VWDIqFcw.js";import"./Table-CkJ--xpo.js";import"./index-DI9gHjQw.js";import"./Dialog-BLZbylxk.js";import"./cross-BOIWmSa8.js";import"./svgIconContainer-DaZ9l-Xt.js";import"./useBaseUiId-DGOpwqqR.js";import"./InternalBackdrop-CXaIk_fc.js";import"./composite-BwuXi3Qd.js";import"./index-CJ3t3vUm.js";import"./index-D3VbgQBY.js";import"./index-DsGBi-gt.js";import"./useEventCallback-q8sTQiWB.js";import"./SkeletonBar-COaLIR3K.js";import"./LoadingCell-BN8yrwmK.js";import"./ColumnConfigDialog-CrrtK0Ko.js";import"./DraggableList-CQLRPqV0.js";import"./search-D2oluobe.js";import"./Input-DA4z6leT.js";import"./useControlled-Dtv5pYI4.js";import"./Button-Bx4A8oJL.js";import"./small-cross-B5Wvka-s.js";import"./ActionButton-rr5yoRIG.js";import"./Checkbox-BWUk6GkC.js";import"./useValueChanged-D34j0py5.js";import"./CollapsiblePanel-CjPIi1du.js";import"./MultiColumnSortDialog-DhJrKoCa.js";import"./MenuTrigger-BEGEz8dr.js";import"./CompositeItem-JZBFttqy.js";import"./ToolbarRootContext-CkYvN6qQ.js";import"./getDisabledMountTransitionStyles-DiIXvqNo.js";import"./getPseudoElementBounds-DVZ5aDyN.js";import"./chevron-down-Chs2Nvxl.js";import"./index-Dwncc-H5.js";import"./error-vQUKN10-.js";import"./BaseCbacBanner-COxyuxvY.js";import"./makeExternalStore-A-gxfiQg.js";import"./Tooltip-B3gh8s19.js";import"./PopoverPopup-C_2AHMFH.js";import"./debounce-TKcLqlSn.js";import"./tick-ChJIONOw.js";import"./DropdownField-5YM5_cwC.js";import"./isEqual-DsuHKnmz.js";import"./withOsdkMetrics-wa8YRQpQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
