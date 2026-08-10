import{j as r}from"./iframe-Bbf4FjDU.js";import{O as b}from"./object-table-BEJj6W1i.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CHBXzezl.js";import{u as g}from"./useOsdkClient-C309Yu_W.js";import"./preload-helper-YaXZfCQV.js";import"./Table-2zm3-vg7.js";import"./index-DLE1jPtg.js";import"./Dialog-BFzKEiSE.js";import"./cross-CgPr2XxJ.js";import"./svgIconContainer-4ZiBMY0_.js";import"./useBaseUiId-BRh9XTyf.js";import"./InternalBackdrop-D5iuAy2S.js";import"./composite-B1F8KCAM.js";import"./index-BoMF0LF3.js";import"./index-D4hTQg7R.js";import"./index-CqmIA71W.js";import"./useEventCallback-CtrepMqV.js";import"./SkeletonBar-D6LzTyhc.js";import"./LoadingCell-DT_00f0o.js";import"./ColumnConfigDialog-DBotSK5e.js";import"./DraggableList-C8UKpv7q.js";import"./search-DsV4MpL_.js";import"./Input-g6XLjkNm.js";import"./useControlled-DoIPYusQ.js";import"./isEqual-HDG9Vt9K.js";import"./isObject-CZhzqWAx.js";import"./Button-BYft6qk9.js";import"./ActionButton-4Yza-xVC.js";import"./Checkbox-DG02Q9E8.js";import"./useValueChanged-Buh7nJZV.js";import"./CollapsiblePanel-Bt6kdg0r.js";import"./MultiColumnSortDialog-DjvjS0aZ.js";import"./MenuTrigger-tarBq3qg.js";import"./CompositeItem-CqrYPqsZ.js";import"./ToolbarRootContext-BBqjW-rY.js";import"./getDisabledMountTransitionStyles-bb81pDzD.js";import"./getPseudoElementBounds-CK5rS7kv.js";import"./chevron-down-Cc8MIWBV.js";import"./index-C9cY3Iny.js";import"./error-Cvn0KVtL.js";import"./BaseCbacBanner-EyvuuA27.js";import"./makeExternalStore-CCrsK6D4.js";import"./Tooltip-5hr7ViFB.js";import"./PopoverPopup-C2_JgWUB.js";import"./toNumber-BDYQ9irF.js";import"./tick-woGLAbCk.js";import"./DropdownField-BR-MlXyM.js";import"./withOsdkMetrics-CXfNwoqS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
