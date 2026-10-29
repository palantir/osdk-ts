import{j as r}from"./iframe-CzBdkE8j.js";import{O as b}from"./object-table-Xx4g3onV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D8ybZHHo.js";import{u as g}from"./useOsdkClient-JXogxqf0.js";import"./preload-helper-DAcIQxKV.js";import"./Table-BL5aJ5vf.js";import"./index-nrSAC82l.js";import"./Dialog-0yBycXYz.js";import"./cross-DJGmKxbL.js";import"./svgIconContainer-vvQ2H1Kh.js";import"./useBaseUiId-DYoSQlXN.js";import"./InternalBackdrop-BX1TzKYN.js";import"./composite-NGmoik8z.js";import"./index-DxeeQ0ql.js";import"./index-DjEUrq-J.js";import"./index-C1mzUzFI.js";import"./useEventCallback-CE4dkAWk.js";import"./SkeletonBar-CxjV6sy3.js";import"./LoadingCell-9tetKVhd.js";import"./ColumnConfigDialog-6-FrOOaZ.js";import"./DraggableList-Dt-LkUjz.js";import"./search-G4OheDlQ.js";import"./Input-C91PS3np.js";import"./useControlled-CvawZQ67.js";import"./Button-BbinMP78.js";import"./small-cross-BTjUTHgC.js";import"./ActionButton-s9UbQrV0.js";import"./Checkbox-BnDFkLF7.js";import"./useValueChanged-B4Hgf5Tp.js";import"./CollapsiblePanel-Datx7g9u.js";import"./MultiColumnSortDialog-BdKQgwrU.js";import"./MenuTrigger-BPqOoWyQ.js";import"./CompositeItem-6yW-EHF-.js";import"./ToolbarRootContext-B8cFWt1N.js";import"./getDisabledMountTransitionStyles-DVtht9dj.js";import"./getPseudoElementBounds-RzDWICHu.js";import"./chevron-down-BMeIm_My.js";import"./index-BHtlx1SN.js";import"./error-BChTcIQI.js";import"./BaseCbacBanner-CBzuV4Dn.js";import"./makeExternalStore-oT7e1se-.js";import"./Tooltip-kjlyHoV2.js";import"./isObject-Cd8fWrM7.js";import"./debounce-Da2LiWyo.js";import"./tick-bUnIpS28.js";import"./DropdownField-2s0unNiS.js";import"./isEqual-CIxNRX36.js";import"./_baseIsEqual-DcQSHg13.js";import"./withOsdkMetrics-BruKftXq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
