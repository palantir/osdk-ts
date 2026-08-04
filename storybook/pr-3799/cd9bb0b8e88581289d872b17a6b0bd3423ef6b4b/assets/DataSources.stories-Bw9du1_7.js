import{j as r}from"./iframe-Zg3agjVA.js";import{O as b}from"./object-table-DtBRANjR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BdMXPQG9.js";import{u as g}from"./useOsdkClient-D3I85USr.js";import"./preload-helper-BXRBmtzA.js";import"./Table-VcSvCLah.js";import"./index-COc2doys.js";import"./Dialog-DuCup1y3.js";import"./cross-3gwJUULA.js";import"./svgIconContainer-7JSyjSbU.js";import"./useBaseUiId-DRojaVbZ.js";import"./InternalBackdrop-CZBhsVYW.js";import"./composite-CY6EnEDk.js";import"./index-Do1Ejht1.js";import"./index-B1LfTOb2.js";import"./index-DFK3Dggy.js";import"./useEventCallback-B2Brsdpx.js";import"./SkeletonBar-CVhsy3f2.js";import"./LoadingCell-HojjnEqU.js";import"./ColumnConfigDialog-CGSl72f8.js";import"./DraggableList-CoIZMdOK.js";import"./search-i7uPZuYO.js";import"./Input-qYz4RN-U.js";import"./useControlled-CcIGpRzc.js";import"./isEqual-z3tOTpca.js";import"./isObject-C474tTtd.js";import"./Button-BYrujQNz.js";import"./ActionButton-DNbpkLMa.js";import"./Checkbox-CYAdMWyQ.js";import"./useValueChanged-C2Y4VRkm.js";import"./CollapsiblePanel-BajRWGm5.js";import"./MultiColumnSortDialog-BI0weRQX.js";import"./MenuTrigger-C0TksCSi.js";import"./CompositeItem-sHUrGE0o.js";import"./ToolbarRootContext-uC1AZv1t.js";import"./getDisabledMountTransitionStyles-CfZ2kbpR.js";import"./getPseudoElementBounds-CIZC6rE6.js";import"./chevron-down-CtGcJNNE.js";import"./index-BBvO76wk.js";import"./error-BbQ-Z9B4.js";import"./BaseCbacBanner-kvdalyTA.js";import"./makeExternalStore-DLtPHmhK.js";import"./Tooltip-DONLb8VO.js";import"./PopoverPopup-CeLvjh4_.js";import"./toNumber-izRZfRwO.js";import"./tick-D3Fn1KVO.js";import"./DropdownField-DIFQ3lkL.js";import"./withOsdkMetrics-Dl0gKApc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
