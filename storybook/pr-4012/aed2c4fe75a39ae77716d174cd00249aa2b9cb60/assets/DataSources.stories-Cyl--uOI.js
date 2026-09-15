import{j as r}from"./iframe-luQilSOF.js";import{O as b}from"./object-table-D_BqH1Hg.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-I7cobbfM.js";import{u as g}from"./useOsdkClient-BsFMFNEo.js";import"./preload-helper-BKBqwCKh.js";import"./Table-BagWR1Ww.js";import"./index-Bz5LVora.js";import"./Dialog-Lv9F4OgU.js";import"./cross-dcAeg2cP.js";import"./svgIconContainer-Dg-z8JPf.js";import"./useBaseUiId-BIcPA1wg.js";import"./InternalBackdrop-CbMdhPVq.js";import"./composite-BqKU6h-l.js";import"./index-C2BPTamy.js";import"./index-CXosHwau.js";import"./index-BkNSozDa.js";import"./useEventCallback-Cac5EMzj.js";import"./SkeletonBar-DKdanr-N.js";import"./LoadingCell-DLmJphPR.js";import"./ColumnConfigDialog-CY95iwzL.js";import"./DraggableList-CF9NsHRJ.js";import"./search-B5llV8dS.js";import"./Input-BK5kzofZ.js";import"./useControlled-BcMtuVsI.js";import"./Button-CNpzMVry.js";import"./small-cross-DZFGtHrI.js";import"./ActionButton-BsMQ9zjV.js";import"./Checkbox-BZ25OhG5.js";import"./useValueChanged-sApPA-B_.js";import"./CollapsiblePanel-Dre8cIpY.js";import"./MultiColumnSortDialog-b-9uFQN3.js";import"./MenuTrigger-BjxfWAfx.js";import"./CompositeItem-5KLXQsnX.js";import"./ToolbarRootContext-iSsHGgjo.js";import"./getDisabledMountTransitionStyles-DuXtt4zv.js";import"./getPseudoElementBounds-DdBLUXDN.js";import"./chevron-down-DV7XSuWi.js";import"./index-BnFccNhI.js";import"./error-D7uvB3Tp.js";import"./BaseCbacBanner-BSCFDJYo.js";import"./makeExternalStore-D9PcNge9.js";import"./Tooltip-CDExLyRp.js";import"./PopoverPopup-B9ZyQpmI.js";import"./debounce-DhX6Egr1.js";import"./tick-D7ya3IWu.js";import"./DropdownField-CC2Dpk0A.js";import"./isEqual-DQb8zkzB.js";import"./withOsdkMetrics-CIz4zTAP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
