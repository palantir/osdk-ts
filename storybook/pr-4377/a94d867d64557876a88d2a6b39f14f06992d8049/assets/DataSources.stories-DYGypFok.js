import{j as r}from"./iframe-BwKzjaO_.js";import{O as b}from"./object-table-CtwO0Cb5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-MGOn5nFx.js";import{u as g}from"./useOsdkClient-DMp68QLo.js";import"./preload-helper-Cw3PuEWm.js";import"./Table-D7NzkWze.js";import"./index-jEwj8y1B.js";import"./Dialog-DrkxivyJ.js";import"./cross-1lQqZabN.js";import"./svgIconContainer-BwQ9ehgu.js";import"./useBaseUiId-BGPb7m92.js";import"./InternalBackdrop-DCVAdZPe.js";import"./composite-Az3dyPdd.js";import"./index-Kp1RIk0o.js";import"./index-DSTqBN-p.js";import"./index-4q7PhTeO.js";import"./useEventCallback-DjZC-G9S.js";import"./SkeletonBar-LISMmzYx.js";import"./LoadingCell-1o51Z1Am.js";import"./ColumnConfigDialog-DX9yNz2p.js";import"./DraggableList-kpSIYOzv.js";import"./search-DdHvONrb.js";import"./Input-4hInwvvu.js";import"./useControlled-DYaNtfGY.js";import"./Button-Cz27x8wi.js";import"./small-cross-BWwYEXIu.js";import"./ActionButton-8eBbMlAk.js";import"./Checkbox-DLcp3PlG.js";import"./useValueChanged-m0H_6TBE.js";import"./CollapsiblePanel-D68KQNQi.js";import"./MultiColumnSortDialog-bs1kxzdX.js";import"./MenuTrigger-DMbbUQ5u.js";import"./CompositeItem-Cp7s4593.js";import"./ToolbarRootContext-BtpiBS9l.js";import"./getDisabledMountTransitionStyles-BdphTWCa.js";import"./getPseudoElementBounds-4gbF3_cn.js";import"./chevron-down-BTGBlQFb.js";import"./index-BV1P-O2s.js";import"./error-Nw58INx5.js";import"./BaseCbacBanner-DNDHOrYw.js";import"./makeExternalStore-GJQDziWf.js";import"./Tooltip-Dr8Setpm.js";import"./isObject-CfracQ9h.js";import"./debounce-F8ygRT2p.js";import"./tick-D4wK5tyJ.js";import"./DropdownField-CfFskAQQ.js";import"./isEqual-qYCEMLNC.js";import"./_baseIsEqual-DP6XDtsT.js";import"./withOsdkMetrics-3WubJygy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
