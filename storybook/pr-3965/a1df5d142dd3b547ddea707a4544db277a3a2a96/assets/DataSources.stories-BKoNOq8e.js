import{j as r}from"./iframe-czm1xubf.js";import{O as b}from"./object-table-DNMgRG-f.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-3ha3eo-x.js";import{u as g}from"./useOsdkClient-CqNVWEmJ.js";import"./preload-helper-BGUEigPd.js";import"./Table-B6qewDiI.js";import"./index-_fZ9c0fg.js";import"./Dialog-DHxpHxHZ.js";import"./cross-BQAzUdVL.js";import"./svgIconContainer-E3yOYGsj.js";import"./useBaseUiId-BS68w5je.js";import"./InternalBackdrop-B9KVxE9X.js";import"./composite-B592Vhi6.js";import"./index-DfcivzEs.js";import"./index-yWvVzDbE.js";import"./index-DTt1rg3M.js";import"./useEventCallback-B22Ha2u5.js";import"./SkeletonBar-CdEM0QXh.js";import"./LoadingCell-BVI3jUQO.js";import"./ColumnConfigDialog-Cm2lbAkX.js";import"./DraggableList-DMQ-nVz6.js";import"./search-UypY9bAA.js";import"./Input-DgUpGPn-.js";import"./useControlled-C5Jpqy1f.js";import"./Button-BRqFWopk.js";import"./small-cross-FhsGrgpu.js";import"./ActionButton-BZ-JCoJ_.js";import"./Checkbox-CsxsWFlF.js";import"./useValueChanged-C6JEBq-B.js";import"./CollapsiblePanel-BZqHTtX0.js";import"./MultiColumnSortDialog-BiIQwfLv.js";import"./MenuTrigger-BLnLbRO0.js";import"./CompositeItem-BpDVMI5W.js";import"./ToolbarRootContext-DUZDki5d.js";import"./getDisabledMountTransitionStyles-CpcSQr6S.js";import"./getPseudoElementBounds-pSys7i-_.js";import"./chevron-down-WwCXMtNu.js";import"./index-BSuxyzBF.js";import"./error-DWSVNtwO.js";import"./BaseCbacBanner-CINRFj0R.js";import"./makeExternalStore-BA14Lxn7.js";import"./Tooltip-DhInjGrA.js";import"./PopoverPopup-CShNizHP.js";import"./debounce-DV3wU0MB.js";import"./tick-ClPbeRGi.js";import"./DropdownField-D-57vV6-.js";import"./isEqual-W8BNuaGE.js";import"./withOsdkMetrics-C-yijIYr.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
