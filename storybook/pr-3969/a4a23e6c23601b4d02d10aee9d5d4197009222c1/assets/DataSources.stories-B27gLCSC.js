import{j as r}from"./iframe-DetImBFL.js";import{O as b}from"./object-table-l9nJQEnV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cd0jd-Qx.js";import{u as g}from"./useOsdkClient-DV-Uh5dk.js";import"./preload-helper-DN6cOUrg.js";import"./Table-CMwtMuro.js";import"./index-CjK2QqlI.js";import"./Dialog-DqgzoO1K.js";import"./cross-BTvDRRjf.js";import"./svgIconContainer-CuWFsLi_.js";import"./useBaseUiId-DyXUSeTY.js";import"./InternalBackdrop-DKm_sEMG.js";import"./composite-BM_kJ03V.js";import"./index-Dbo0Nida.js";import"./index-1NP1-UWN.js";import"./index-BqArXz2b.js";import"./useEventCallback-DGvbRIMO.js";import"./SkeletonBar-4ieJl6GY.js";import"./LoadingCell-CGeR1JKn.js";import"./ColumnConfigDialog-DlnX3h0V.js";import"./DraggableList-B7zhWw29.js";import"./search-e2lLNT_b.js";import"./Input-X6MfJgE7.js";import"./useControlled-BLemWNqF.js";import"./Button-CQ4Oxn8O.js";import"./small-cross-C-ziKcdd.js";import"./ActionButton-CgowrMZV.js";import"./Checkbox-CC4URrkY.js";import"./useValueChanged-CkoVxTgS.js";import"./CollapsiblePanel-D7JjcV__.js";import"./MultiColumnSortDialog-DZ9YJY6I.js";import"./MenuTrigger-L0DQBaQA.js";import"./CompositeItem-DSZEDG_X.js";import"./ToolbarRootContext-CemVikP4.js";import"./getDisabledMountTransitionStyles-JdcJj3gF.js";import"./getPseudoElementBounds-CL4lvn8M.js";import"./chevron-down-CGCRcDmq.js";import"./index-Dz3fekal.js";import"./error-CePwHWcz.js";import"./BaseCbacBanner-CVZyUjUG.js";import"./makeExternalStore-Dta9gR3b.js";import"./Tooltip-BKreMXEX.js";import"./PopoverPopup-DaARwFrv.js";import"./debounce-ZgZr2Rpo.js";import"./tick-OHKO7Ym4.js";import"./DropdownField-GfiPe651.js";import"./isEqual-an0pKOrh.js";import"./withOsdkMetrics-tYPfHwL4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
