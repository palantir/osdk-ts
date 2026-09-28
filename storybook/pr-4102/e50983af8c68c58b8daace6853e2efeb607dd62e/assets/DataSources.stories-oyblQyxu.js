import{j as r}from"./iframe-CdZ1-8VD.js";import{O as b}from"./object-table-DDvSb5Kt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-8dnR-7PV.js";import{u as g}from"./useOsdkClient-8doQ3A6W.js";import"./preload-helper-BfsuwAVK.js";import"./Table-C3-BZLyv.js";import"./index-DyOp5UTf.js";import"./Dialog-BVsM3nhX.js";import"./cross-D0Gcop_x.js";import"./svgIconContainer-BzSPbIbT.js";import"./useBaseUiId-Bn-Ngw1_.js";import"./InternalBackdrop-BIdMsz61.js";import"./composite-DXQ2UI8x.js";import"./index-B0esJxNQ.js";import"./index-DVUFOk1V.js";import"./index-CXL10vF5.js";import"./useEventCallback-Cu7C16-m.js";import"./SkeletonBar-8SPBEh-g.js";import"./LoadingCell-DAfUInab.js";import"./ColumnConfigDialog-C9RPYwH1.js";import"./DraggableList-DEKgyEc5.js";import"./search-BZxjL_1A.js";import"./Input-KSBtG81T.js";import"./useControlled-U2uKb9nR.js";import"./Button-Bt5t_54D.js";import"./small-cross-DR7ny8zU.js";import"./ActionButton-Cru8Qy-m.js";import"./Checkbox-R3-afLLJ.js";import"./useValueChanged-C1GpysCg.js";import"./CollapsiblePanel-CFarmLG5.js";import"./MultiColumnSortDialog-h-aCTogI.js";import"./MenuTrigger-_in--5sv.js";import"./CompositeItem-yiTSbTdQ.js";import"./ToolbarRootContext-2AFAS280.js";import"./getDisabledMountTransitionStyles-BI1VlBVA.js";import"./getPseudoElementBounds-BdSlNVkb.js";import"./chevron-down-ElNoZV5X.js";import"./index-BDrIE1q3.js";import"./error-C5_AkzgF.js";import"./BaseCbacBanner-BNo88gI0.js";import"./makeExternalStore-xgvF_Gz5.js";import"./Tooltip-DhGkKgsN.js";import"./PopoverPopup-DXgfGfh3.js";import"./debounce-mQD2mSjp.js";import"./tick-Ds5_YkYs.js";import"./DropdownField-D6ZvZlxb.js";import"./isEqual-jIhDHEUI.js";import"./withOsdkMetrics-Bjc_co0T.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
