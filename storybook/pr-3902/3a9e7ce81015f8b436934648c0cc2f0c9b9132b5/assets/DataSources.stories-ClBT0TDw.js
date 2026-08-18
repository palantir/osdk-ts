import{j as r}from"./iframe-B9hGOcVW.js";import{O as b}from"./object-table-1qd0gbMo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-FTIGmVgP.js";import{u as g}from"./useOsdkClient-Dl6R5ARr.js";import"./preload-helper-CEHJKNgD.js";import"./Table-BDWzuPuG.js";import"./index-WMs6XgHc.js";import"./Dialog-C7AaENM5.js";import"./cross-Kg25sWVz.js";import"./svgIconContainer-DJVhztLr.js";import"./useBaseUiId-Bv7mJDK-.js";import"./InternalBackdrop-CY5Sv-p0.js";import"./composite-BPGo720E.js";import"./index-DDiAWfcg.js";import"./index-C0zF1Hh-.js";import"./index-CLY61b3h.js";import"./useEventCallback-CRuXPfRQ.js";import"./SkeletonBar-DdBk-iAs.js";import"./LoadingCell-DMo5yi-9.js";import"./ColumnConfigDialog-CuHUO7sD.js";import"./DraggableList-72YsiWQv.js";import"./search-CIz89Kd0.js";import"./Input-DL4wCDaa.js";import"./useControlled-CuLTDJ7U.js";import"./Button-Kv95ZBq_.js";import"./small-cross-k_dWUzGn.js";import"./ActionButton-5hOfXxX5.js";import"./Checkbox-DmRWx-yX.js";import"./useValueChanged-BRgm995r.js";import"./CollapsiblePanel-BLpDHRNH.js";import"./MultiColumnSortDialog-CUeoMZUg.js";import"./MenuTrigger-D2PAdEJf.js";import"./CompositeItem-DJ_648IQ.js";import"./ToolbarRootContext-CI0oTBSQ.js";import"./getDisabledMountTransitionStyles-Btetjrhd.js";import"./getPseudoElementBounds-DoIsGQ2e.js";import"./chevron-down-cOiqTWha.js";import"./index-BOZqc1dp.js";import"./error-D0SwKHMs.js";import"./BaseCbacBanner-BK1b6COz.js";import"./makeExternalStore-X3bc05mq.js";import"./Tooltip-C5Zr6U13.js";import"./PopoverPopup-BOcc2TJb.js";import"./debounce-CzUX5qpY.js";import"./tick-BCju8FEy.js";import"./DropdownField-DCxSSnaY.js";import"./isEqual-edacVGT3.js";import"./withOsdkMetrics-CgdP6FhV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
