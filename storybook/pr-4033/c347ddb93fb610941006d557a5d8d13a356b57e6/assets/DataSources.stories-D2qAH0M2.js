import{j as r}from"./iframe-W94gYwuG.js";import{O as b}from"./object-table-u26aBLJA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DtJs6fol.js";import{u as g}from"./useOsdkClient-CUKa_SZN.js";import"./preload-helper-BZdF85c1.js";import"./Table-B7pjjzBe.js";import"./index-Cuk5CzZs.js";import"./Dialog-DPKn2sJh.js";import"./cross-B_Jh2OAU.js";import"./svgIconContainer-DML7KnhH.js";import"./useBaseUiId-DLO1E5rV.js";import"./InternalBackdrop-DEnvfhpS.js";import"./composite-DlnNiwsN.js";import"./index-Dr7s6soJ.js";import"./index-DDztdIhx.js";import"./index-CAHmDUH2.js";import"./useEventCallback-BTozI7bp.js";import"./SkeletonBar-Dgza8SlF.js";import"./LoadingCell-DP8X6ipS.js";import"./ColumnConfigDialog-DYtIfYSh.js";import"./DraggableList-QYESWnxS.js";import"./search-c21shtzO.js";import"./Input-CjZq1vGj.js";import"./useControlled-BNYkrsEO.js";import"./Button-DaHI_b0v.js";import"./small-cross-DTRNmX-j.js";import"./ActionButton-CkSfOtXe.js";import"./Checkbox-BLnB_188.js";import"./useValueChanged-DQx8oeSu.js";import"./CollapsiblePanel-CU0W5mdF.js";import"./MultiColumnSortDialog-B3ZAnm8a.js";import"./MenuTrigger-BXrNTKyb.js";import"./CompositeItem-DfviX0qN.js";import"./ToolbarRootContext-BJjWSvlz.js";import"./getDisabledMountTransitionStyles-CJr3sVjs.js";import"./getPseudoElementBounds-Di9nobCt.js";import"./chevron-down-C2jygjf1.js";import"./index-D8f0-tDA.js";import"./error-BiPx4nD4.js";import"./BaseCbacBanner-Dx5jNdQx.js";import"./makeExternalStore-CHaLvDqs.js";import"./Tooltip-CifKjXPD.js";import"./PopoverPopup-Dwm_HE2U.js";import"./debounce-DXg9Ea7B.js";import"./tick-DhBqls0o.js";import"./DropdownField-4fOxRAUh.js";import"./isEqual-FLvCKp87.js";import"./withOsdkMetrics-BUuBi764.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
