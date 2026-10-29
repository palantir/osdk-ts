import{j as r}from"./iframe-BJLBRZOh.js";import{O as b}from"./object-table-D6XTw50v.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BY9JeJm2.js";import{u as g}from"./useOsdkClient-BnXpdimb.js";import"./preload-helper-BwUp_7F1.js";import"./Table-dj-3XM9K.js";import"./index-C9_BYSi8.js";import"./Dialog-w7wPINN3.js";import"./cross-DYYKBVG2.js";import"./svgIconContainer-CQ7lEg_v.js";import"./useBaseUiId-LHwOB3kw.js";import"./InternalBackdrop-Bg95Crdb.js";import"./composite-BxFzj_3L.js";import"./index-MgR6vtA5.js";import"./index-Cf7wbzeY.js";import"./index-DsPo5D0P.js";import"./useEventCallback-D_IWJpWQ.js";import"./SkeletonBar-CA0TLWsN.js";import"./LoadingCell-oMac1VC6.js";import"./ColumnConfigDialog-D8ziylzG.js";import"./DraggableList-D3U2xt4z.js";import"./search-lm4u23Jr.js";import"./Input-DotRyYSg.js";import"./useControlled-DvCQBOjX.js";import"./Button-B1QFNCxV.js";import"./small-cross-s83LmiPv.js";import"./ActionButton-DfBkhzDx.js";import"./Checkbox-Cf1eTA8o.js";import"./useValueChanged-DKvkRZw_.js";import"./CollapsiblePanel-DeNvoW95.js";import"./MultiColumnSortDialog-Bxs_R_QI.js";import"./MenuTrigger-DUpdUHK8.js";import"./CompositeItem-B-vP8lxH.js";import"./ToolbarRootContext-DhgC0mq4.js";import"./getDisabledMountTransitionStyles-CMTlxnVD.js";import"./getPseudoElementBounds-GUEr2WJt.js";import"./chevron-down-PUEKZFzz.js";import"./index-BxHhiHH9.js";import"./error-RXBYB8o8.js";import"./BaseCbacBanner-CqC4EUL0.js";import"./makeExternalStore-BWhFJ2a3.js";import"./Tooltip-BYFoA5Qd.js";import"./PopoverPopup-Cbo8QQ1w.js";import"./debounce-lfKLdo1S.js";import"./tick-G0_utWJZ.js";import"./DropdownField-DLWbrKeC.js";import"./isEqual-Bm2E3Blo.js";import"./withOsdkMetrics-CUH6WGya.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
