import{j as r}from"./iframe-BfxMX6cT.js";import{O as b}from"./object-table-Dy7UyFzj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CO-zZG7_.js";import{u as g}from"./useOsdkClient-B0mdKYcq.js";import"./preload-helper-BPDao22J.js";import"./Table-C92nfJIb.js";import"./index-D5QdHG6c.js";import"./Dialog-BjV9jDBU.js";import"./cross-BQzi9cCY.js";import"./svgIconContainer-B11i6ssl.js";import"./useBaseUiId-Diys5Rd8.js";import"./InternalBackdrop-CzfUVdiw.js";import"./composite-CX7YV8L_.js";import"./index-CgOKnRwH.js";import"./index-DGcqs1ai.js";import"./index-CxMUUWdA.js";import"./useEventCallback-CBWmqZQL.js";import"./SkeletonBar-CcSf93cH.js";import"./LoadingCell-lQ3kMXKt.js";import"./ColumnConfigDialog-BmCXnw3W.js";import"./DraggableList-tDSTIq02.js";import"./search-D1ZDVnFF.js";import"./Input-C-zjcWJd.js";import"./useControlled-AEJbE5Jc.js";import"./Button-4wSek2R3.js";import"./small-cross-DukaMdQz.js";import"./ActionButton-DDdXpm0C.js";import"./Checkbox-D8LsxsuS.js";import"./useValueChanged-MAwDQy-M.js";import"./CollapsiblePanel-DC0pzIEf.js";import"./MultiColumnSortDialog-C39kjkmj.js";import"./MenuTrigger-6JM3TOuY.js";import"./CompositeItem-BPbSYDgv.js";import"./ToolbarRootContext-DYeN6dWB.js";import"./getDisabledMountTransitionStyles-CUDtZPwG.js";import"./getPseudoElementBounds-CDkHDgNY.js";import"./chevron-down-3tdgVjjI.js";import"./index-DBgFz0Qc.js";import"./error-Cw0OZsfU.js";import"./BaseCbacBanner-qin0DxGa.js";import"./makeExternalStore-Cp6FC4H6.js";import"./Tooltip-CALVvbNy.js";import"./PopoverPopup-BTJRWa40.js";import"./debounce-BMvGLHn1.js";import"./tick-BZki_9Xu.js";import"./DropdownField-D9jSS7VG.js";import"./isEqual-CiQuOF5j.js";import"./withOsdkMetrics-DLVxiL_Q.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
