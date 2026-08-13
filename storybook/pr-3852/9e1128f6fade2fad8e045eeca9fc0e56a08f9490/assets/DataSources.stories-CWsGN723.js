import{j as r}from"./iframe-iUGaKF-g.js";import{O as b}from"./object-table-BeD6fwla.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BlEPo3WA.js";import{u as g}from"./useOsdkClient-cV4LfF2W.js";import"./preload-helper-C5QJwAu5.js";import"./Table-C4RNDYAH.js";import"./index-biVvCra3.js";import"./Dialog-Bwv5xC9X.js";import"./cross-BFNp-6V_.js";import"./svgIconContainer-D9SYWNzR.js";import"./useBaseUiId-Bf0uFdSS.js";import"./InternalBackdrop-DdW_D627.js";import"./composite-BdFuHmfd.js";import"./index-CABXZzlk.js";import"./index-CoBHmv7L.js";import"./index-Cof45HYg.js";import"./useEventCallback-C5wssiyI.js";import"./SkeletonBar-rf2cqXI-.js";import"./LoadingCell-VJOGm1a0.js";import"./ColumnConfigDialog-CCPWvcTE.js";import"./DraggableList-BY7dHUoN.js";import"./search-Bn0ITWKa.js";import"./Input-ChMcCw-p.js";import"./useControlled-BHtZ5WxN.js";import"./Button-DOHDr1Yv.js";import"./small-cross-BBd4zvtL.js";import"./ActionButton-C7IaQGOT.js";import"./Checkbox-CQTlFCNu.js";import"./useValueChanged-BzjxvPA-.js";import"./CollapsiblePanel-BziHNyai.js";import"./MultiColumnSortDialog-D1Z559Ip.js";import"./MenuTrigger-BwLCZgAB.js";import"./CompositeItem-BJtdPIpL.js";import"./ToolbarRootContext-CsWu5MBg.js";import"./getDisabledMountTransitionStyles-C6suAbyK.js";import"./getPseudoElementBounds-D3JDCaRV.js";import"./chevron-down-D6OM1qR9.js";import"./index-DIFFZVPL.js";import"./error-BPV1DyS9.js";import"./BaseCbacBanner-LmEMDQ7B.js";import"./makeExternalStore-DYociY-T.js";import"./Tooltip-CQC9ZA-1.js";import"./PopoverPopup-CjX0FeDE.js";import"./debounce-JprLheFU.js";import"./tick-BKSCw9Ac.js";import"./DropdownField-C0bAgzFB.js";import"./isEqual-B7Me7IYR.js";import"./withOsdkMetrics-BvgX9Hqp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
