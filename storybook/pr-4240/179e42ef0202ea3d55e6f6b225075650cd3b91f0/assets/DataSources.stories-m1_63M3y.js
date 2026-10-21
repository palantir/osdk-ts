import{j as r}from"./iframe-BN5ehZsU.js";import{O as b}from"./object-table-BiY9bRY-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers--k83RTm8.js";import{u as g}from"./useOsdkClient-D_Tzde9i.js";import"./preload-helper-DiI2ZQ3N.js";import"./Table-DkXsCYJE.js";import"./index-CUoza1kZ.js";import"./Dialog-DetNl7lg.js";import"./cross-CTzlKmgX.js";import"./svgIconContainer-3_nrEXxJ.js";import"./useBaseUiId-BEp1f_TL.js";import"./InternalBackdrop-Cd1W5N03.js";import"./composite-Dz6G3wtQ.js";import"./index-CNUSOrN9.js";import"./index-BMD_ABKq.js";import"./index-cT-qCssu.js";import"./useEventCallback-CfoOVKbg.js";import"./SkeletonBar-CzWtUtS0.js";import"./LoadingCell-Dm1PRD3p.js";import"./ColumnConfigDialog-BMx-cACT.js";import"./DraggableList-Df0gkaKK.js";import"./search-B5pZpNhj.js";import"./Input-Byq2KsKZ.js";import"./useControlled-Dn-0uibR.js";import"./Button-Ca_A2rxi.js";import"./small-cross-BhsmHd15.js";import"./ActionButton-in3xyPdG.js";import"./Checkbox-Uoa-vC10.js";import"./useValueChanged-ByN6FCGV.js";import"./CollapsiblePanel-e8TDfTp5.js";import"./MultiColumnSortDialog-Dy6VCNrc.js";import"./MenuTrigger-5qlhqjab.js";import"./CompositeItem-CfdU5eWF.js";import"./ToolbarRootContext-C4vwBpF_.js";import"./getDisabledMountTransitionStyles-CbLH7J6E.js";import"./getPseudoElementBounds-B23cJjwW.js";import"./chevron-down-DSRGL9k7.js";import"./index-CfzvYg2Q.js";import"./error-BrwUp-mO.js";import"./BaseCbacBanner-DP2nV8rQ.js";import"./makeExternalStore-9ZiGbHue.js";import"./Tooltip-B7KHYj-o.js";import"./PopoverPopup-CDJ9nvZU.js";import"./debounce-DDVGe1yo.js";import"./tick-CWonoO7R.js";import"./DropdownField-CPsZXnb7.js";import"./isEqual-sFEmQ9k3.js";import"./withOsdkMetrics-XTiZGcd-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
