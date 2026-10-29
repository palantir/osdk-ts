import{j as r}from"./iframe-DuPGHU0l.js";import{O as b}from"./object-table-Ba0vIJbC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-334EwhUF.js";import{u as g}from"./useOsdkClient-6i4-GCvx.js";import"./preload-helper-C0i017mv.js";import"./Table-noAsufEy.js";import"./index-trCVkGnT.js";import"./Dialog-BzPqVQ2n.js";import"./cross-DX5M9gAF.js";import"./svgIconContainer-DYavZBCX.js";import"./useBaseUiId-CXOx85Ji.js";import"./InternalBackdrop-MypWFEdM.js";import"./composite-bxfGnibV.js";import"./index-BPZGrXj8.js";import"./index-CxEs7fW4.js";import"./index-D9lJQHx7.js";import"./useEventCallback-DffRG6R1.js";import"./SkeletonBar-qHgUQhEG.js";import"./LoadingCell-Bf_lcAmE.js";import"./ColumnConfigDialog-DNmXXilw.js";import"./DraggableList-1OyrW2jH.js";import"./search-lklVR3bN.js";import"./Input-jGQQmaCN.js";import"./useControlled-uIFuGzm4.js";import"./Button-kErr3Na-.js";import"./small-cross-D_ytDnoJ.js";import"./ActionButton-CpXgr1m4.js";import"./Checkbox-C21-Grtb.js";import"./useValueChanged-Czjmm1xx.js";import"./CollapsiblePanel-BYMuCAsZ.js";import"./MultiColumnSortDialog--U5HnCnj.js";import"./MenuTrigger-CgIzNycJ.js";import"./CompositeItem-D0CjBMiI.js";import"./ToolbarRootContext-wxST6T8W.js";import"./getDisabledMountTransitionStyles-D68V5Zib.js";import"./getPseudoElementBounds-DIwP7tdN.js";import"./chevron-down-2p6Ee397.js";import"./index-D-GgPzMj.js";import"./error-WnyZ_TXe.js";import"./BaseCbacBanner-mJeOJsVv.js";import"./makeExternalStore-B2yZ_Kza.js";import"./Tooltip-B0JeszV9.js";import"./PopoverPopup-Ccr61WFs.js";import"./debounce-DDzZOsHB.js";import"./tick-gyoLk9c6.js";import"./DropdownField-I3G12o5O.js";import"./isEqual-DxSON3wr.js";import"./withOsdkMetrics-D5QjWVGm.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
