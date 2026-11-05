import{j as r}from"./iframe-_9YlafCr.js";import{O as b}from"./object-table-DUelh5-U.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-PsDf6IfW.js";import{u as g}from"./useOsdkClient-DugCV1Jh.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DW3vsqL2.js";import"./index-BfZ7BIaf.js";import"./Dialog-BrV6o91O.js";import"./cross-B125yZV8.js";import"./svgIconContainer--y7ZeGKv.js";import"./useBaseUiId-D-8XVTg2.js";import"./InternalBackdrop-CsGmrjwG.js";import"./composite-B3EEdu-D.js";import"./index-DIog01LX.js";import"./index-DNJvNqQL.js";import"./index-BakLKG99.js";import"./useEventCallback-DJBlLW-f.js";import"./SkeletonBar-CUvmqA7b.js";import"./LoadingCell-DoXNawwV.js";import"./ColumnConfigDialog-B6_4becb.js";import"./DraggableList-EY3fB7NM.js";import"./search-0XIiHjxa.js";import"./Input-B_fnG3Vc.js";import"./useControlled-BdcuaOkM.js";import"./Button-C98CyIMt.js";import"./small-cross-OYYk08nU.js";import"./ActionButton-CUGmDrNW.js";import"./Checkbox-B-HW6x-Y.js";import"./useValueChanged-CBaTlyFq.js";import"./CollapsiblePanel-B3fgQFhP.js";import"./MultiColumnSortDialog-CZ0LbiOr.js";import"./MenuTrigger-BXTZW7uz.js";import"./CompositeItem-DW1q3vob.js";import"./ToolbarRootContext-BvwX_Pt8.js";import"./getDisabledMountTransitionStyles-DZwz930I.js";import"./getPseudoElementBounds-CjjwHwg5.js";import"./chevron-down-DxrxOWhu.js";import"./index-Cj93zZaN.js";import"./error-DDBbGTuS.js";import"./BaseCbacBanner-C9BvCD8Z.js";import"./makeExternalStore-CDyMTORk.js";import"./Tooltip-DinPo1CO.js";import"./isObject-SrfzQbVs.js";import"./debounce-BfdW6jiz.js";import"./tick-CFfbGJF6.js";import"./DropdownField-ACTuDJFj.js";import"./isEqual-C1L_1N_i.js";import"./_baseIsEqual-BOWedRvE.js";import"./withOsdkMetrics-ASK7qsZD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
