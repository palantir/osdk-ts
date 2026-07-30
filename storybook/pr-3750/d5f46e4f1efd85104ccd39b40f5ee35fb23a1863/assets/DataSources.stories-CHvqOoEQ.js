import{j as r}from"./iframe-CzXyKteJ.js";import{O as b}from"./object-table-CmWkGHB8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D7wPT2-B.js";import{u as g}from"./useOsdkClient-RZKJZcxi.js";import"./preload-helper-BtA1fO60.js";import"./Table-DJyGBHex.js";import"./index-n_H_jwj_.js";import"./Dialog-BWrIUMPt.js";import"./cross-B881VNei.js";import"./svgIconContainer-Btsr4gWM.js";import"./useBaseUiId-DFni2TzW.js";import"./InternalBackdrop-DEh8AMoC.js";import"./composite-BOMrbHlv.js";import"./index-Bk_q8mAy.js";import"./index-DArwu2FJ.js";import"./index-C7GM_zIq.js";import"./useEventCallback-zJZ4uVQD.js";import"./SkeletonBar-BntjMwNR.js";import"./LoadingCell-nmxELGMl.js";import"./ColumnConfigDialog-MS0Fd7di.js";import"./DraggableList-hRvIeA4O.js";import"./search-Kg3rAhij.js";import"./Input-CskI9HNq.js";import"./useControlled-BNTSXjm5.js";import"./isEqual-BGWZMeks.js";import"./isObject-BDs9UMZ_.js";import"./Button-D88wUQtr.js";import"./ActionButton-gGZEW4kV.js";import"./Checkbox-B1f_ifVo.js";import"./useValueChanged-DPGbOcWg.js";import"./CollapsiblePanel-CoUAtF6h.js";import"./MultiColumnSortDialog-3dYQGq5a.js";import"./MenuTrigger-CcwiJMR2.js";import"./CompositeItem-B9seLPIq.js";import"./ToolbarRootContext-DP20GWxN.js";import"./getDisabledMountTransitionStyles-FpXHtK5V.js";import"./getPseudoElementBounds-D-ex2Zop.js";import"./chevron-down-2uq3yvyE.js";import"./index-CwELXqcq.js";import"./error-YEC2L9e4.js";import"./BaseCbacBanner-CSAm_yts.js";import"./makeExternalStore-deaRhxWg.js";import"./Tooltip-Cb516tOt.js";import"./PopoverPopup-CESQGYy_.js";import"./toNumber-lt1qQnvl.js";import"./tick-Dxb9pXer.js";import"./DropdownField-RSDYPlMD.js";import"./withOsdkMetrics-Bf0ACKKN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
