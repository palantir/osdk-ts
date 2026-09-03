import{j as r}from"./iframe-CJbOBKBh.js";import{O as b}from"./object-table-C0WNmDxa.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BtBgMJ7B.js";import{u as g}from"./useOsdkClient-BLe4A4YY.js";import"./preload-helper-BLHdcgal.js";import"./Table-BcnA4fIo.js";import"./index-BZGK6RAy.js";import"./Dialog-Bo-c0AOc.js";import"./cross-DXZ7nfx1.js";import"./svgIconContainer-nMosQuRN.js";import"./useBaseUiId-BLfqnsnM.js";import"./InternalBackdrop-I-coYiRS.js";import"./composite-C9nRcOzN.js";import"./index-De6fjuAQ.js";import"./index-B_6VUgxJ.js";import"./index-BIEbhHvU.js";import"./useEventCallback-BXLXlKzm.js";import"./SkeletonBar-Dag5WjEc.js";import"./LoadingCell-Djlq0I6u.js";import"./ColumnConfigDialog-Ch2uVIOq.js";import"./DraggableList-DEf4p0ef.js";import"./search-BiEjqGXz.js";import"./Input-B6hCJoOA.js";import"./useControlled-CZ4YcEAU.js";import"./Button-ChlDUqJf.js";import"./small-cross-DJuRoaKr.js";import"./ActionButton-DP8E2oQU.js";import"./Checkbox-Bu4_rX8p.js";import"./useValueChanged-DMI7G-AI.js";import"./CollapsiblePanel-CQvGKC7K.js";import"./MultiColumnSortDialog-DtBR4rIY.js";import"./MenuTrigger-BRYGwGKp.js";import"./CompositeItem-CstBZeOc.js";import"./ToolbarRootContext-DRMcjCuu.js";import"./getDisabledMountTransitionStyles-ClJ44Vqv.js";import"./getPseudoElementBounds-D2bAA-Mc.js";import"./chevron-down-Cy1gcHm4.js";import"./index-Dxrf0IE0.js";import"./error-SsNWn793.js";import"./BaseCbacBanner-D2xMWTIl.js";import"./makeExternalStore-BjeVU-bl.js";import"./Tooltip-CLlrYrN9.js";import"./PopoverPopup-BrpFbh7n.js";import"./debounce-2qg7QCVU.js";import"./tick-CDcAZVlx.js";import"./DropdownField-Ig58Wcdc.js";import"./isEqual-BSq_xDkI.js";import"./withOsdkMetrics-PeDqWSVe.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
