import{j as r}from"./iframe-D_O5GLHm.js";import{O as b}from"./object-table-D3yZaObc.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CVQ9d6d_.js";import{u as g}from"./useOsdkClient-c0rRTlqj.js";import"./preload-helper-BLPPHW2C.js";import"./Table-BtWkwFr1.js";import"./index-XDSUUcCa.js";import"./Dialog-BRGgRluV.js";import"./cross-Lj5lTaea.js";import"./svgIconContainer-8JL1zmDp.js";import"./useBaseUiId-COien2vv.js";import"./InternalBackdrop-BtehdrfI.js";import"./composite-DGHwIWe7.js";import"./index-7Ufx5a3v.js";import"./index-DFbGTOLT.js";import"./index-BCabjJxl.js";import"./useEventCallback-CNsHmTrb.js";import"./SkeletonBar-DsxSQ0fs.js";import"./LoadingCell-BqSn2AUd.js";import"./ColumnConfigDialog-CDnNCtD3.js";import"./DraggableList-02jrEExn.js";import"./search-CU5APTmq.js";import"./Input-thkDpxWB.js";import"./useControlled-Beot_qrN.js";import"./Button-BrP8Z4b1.js";import"./small-cross-CuvREWXJ.js";import"./ActionButton-BwsvAH-b.js";import"./Checkbox-KnIESxCK.js";import"./useValueChanged-BZz3GkYD.js";import"./CollapsiblePanel-D6rYACOC.js";import"./MultiColumnSortDialog-pStuKZoQ.js";import"./MenuTrigger-CTf5EtnH.js";import"./CompositeItem-DNEzxX_O.js";import"./ToolbarRootContext-D4thcjEL.js";import"./getDisabledMountTransitionStyles-Cxbvf9rA.js";import"./getPseudoElementBounds-BpGMnD2o.js";import"./chevron-down-D5_c8Y-V.js";import"./index-D_1d4DqT.js";import"./error-DjceP8bp.js";import"./BaseCbacBanner-D_5FKbl2.js";import"./makeExternalStore-YLv6cY3e.js";import"./Tooltip-9_9Lgz4D.js";import"./PopoverPopup-Ca-jp817.js";import"./debounce-Brz8Ko54.js";import"./tick-BUVGhtIk.js";import"./DropdownField-BbAmy0X3.js";import"./isEqual-nCkGt9mz.js";import"./withOsdkMetrics-BU8FJf48.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
