import{j as r}from"./iframe-C_ysWNhq.js";import{O as b}from"./object-table-Onb8y1Nl.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ex02x3Ua.js";import{u as g}from"./useOsdkClient-BbU_1F98.js";import"./preload-helper-B0JwDfT_.js";import"./Table-BeiJE8WB.js";import"./index-D8k-dqCc.js";import"./Dialog-DAZHzVkY.js";import"./cross-Cks-uTaq.js";import"./svgIconContainer-DPwpyqoW.js";import"./useBaseUiId-B8q5gmFn.js";import"./InternalBackdrop-DqvtyXTc.js";import"./composite-PAhMiX3w.js";import"./index-BT7QjpST.js";import"./index-1cFlDnPE.js";import"./index-1eqntDw1.js";import"./useEventCallback-DPd3byDr.js";import"./SkeletonBar-BFhlXhJF.js";import"./LoadingCell-2MeogVKx.js";import"./ColumnConfigDialog-S153LwhW.js";import"./DraggableList-CfIzFJ4k.js";import"./search-xeTrpNpN.js";import"./Input-BrUW9GIt.js";import"./useControlled-B4G6FObT.js";import"./Button-BKcb8JBm.js";import"./small-cross-Dk7JcshC.js";import"./ActionButton-B5_maKSp.js";import"./Checkbox-CBOMkCDn.js";import"./useValueChanged-piBol0Lc.js";import"./CollapsiblePanel-B8zrkzOu.js";import"./MultiColumnSortDialog-C4lE6AcH.js";import"./MenuTrigger-88GoxliD.js";import"./CompositeItem-DiTioOKz.js";import"./ToolbarRootContext-DfBDsER3.js";import"./getDisabledMountTransitionStyles-Dc1W8hh3.js";import"./getPseudoElementBounds-BMpXcTKf.js";import"./chevron-down-Cj8R-hIH.js";import"./index-Ck0sGKHu.js";import"./error-DcGiqau0.js";import"./BaseCbacBanner-OU5akw7o.js";import"./makeExternalStore-B5fwAHq7.js";import"./Tooltip-BehVKe_w.js";import"./PopoverPopup-CcARrEno.js";import"./debounce-CIEAz8C3.js";import"./tick-CPHUZoWi.js";import"./DropdownField-DNkGYaLi.js";import"./isEqual-dzPNJu1I.js";import"./withOsdkMetrics-FlvAdwaB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
