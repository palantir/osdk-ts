import{j as r}from"./iframe-i_9Nw0aL.js";import{O as b}from"./object-table-f3XuAxzL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BJDLmIDr.js";import{u as g}from"./useOsdkClient-1TtZSZAh.js";import"./preload-helper-B6z7q6ev.js";import"./Table-qqKMoyF4.js";import"./index-xy7OH4WM.js";import"./Dialog-CPeu6G82.js";import"./cross-QqYP1fee.js";import"./svgIconContainer-3Y9_T1l7.js";import"./useBaseUiId-BMuu8nEn.js";import"./InternalBackdrop-ChYWKohY.js";import"./composite-BEolDa-D.js";import"./index-DFV1oDTw.js";import"./index-DBCrB76S.js";import"./index-DLeoqhRa.js";import"./useEventCallback-BWVM_xBp.js";import"./SkeletonBar-m7_oqjy5.js";import"./LoadingCell-DYhARKcP.js";import"./ColumnConfigDialog-BNOyyc7J.js";import"./DraggableList-BFhFmyUR.js";import"./search-CEIky3LJ.js";import"./Input-DSjQkga5.js";import"./useControlled-gY6NMr8Z.js";import"./Button-Cqo_9NuU.js";import"./small-cross-D-oeOHZb.js";import"./ActionButton-DoCWbHlm.js";import"./Checkbox-BxiFWmok.js";import"./useValueChanged-DZGUtt_l.js";import"./CollapsiblePanel-uhXZweix.js";import"./MultiColumnSortDialog-DPUj4uDW.js";import"./MenuTrigger-DVCrlIYb.js";import"./CompositeItem-CcQI67Uz.js";import"./ToolbarRootContext-C05xSZ6f.js";import"./getDisabledMountTransitionStyles-DwmQAXX5.js";import"./getPseudoElementBounds-rsgn8lVn.js";import"./chevron-down-D5tyPu8s.js";import"./index-DABPjbUn.js";import"./error-BtW_-Bd0.js";import"./BaseCbacBanner-BcoWqc6a.js";import"./makeExternalStore-DV-2pdTM.js";import"./Tooltip-BXqI72Um.js";import"./PopoverPopup-COfAsOM5.js";import"./debounce-Dt-hlKAZ.js";import"./tick-qmWuhCdU.js";import"./DropdownField-BOme1HDF.js";import"./isEqual-G20i65-m.js";import"./withOsdkMetrics-Bn9NhK2D.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
