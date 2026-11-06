import{j as r}from"./iframe-BNBZBstC.js";import{O as b}from"./object-table-BYwjMuX-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CxCeeLTc.js";import{u as g}from"./useOsdkClient-BWShqPoN.js";import"./preload-helper-CnYrZllf.js";import"./Table-CXBfrNrR.js";import"./index-Cnm8VChd.js";import"./Dialog-RuUnz3l_.js";import"./cross-BBwfk0Yp.js";import"./svgIconContainer-Dn93O-Mo.js";import"./useBaseUiId-DT3QZnc6.js";import"./InternalBackdrop-DtBSnFoc.js";import"./composite-HrpU287b.js";import"./index-BH-plJ59.js";import"./index-CjrOmp5t.js";import"./index-CkDpN7v3.js";import"./useEventCallback-CxEm-vEP.js";import"./SkeletonBar-FnJRED2m.js";import"./LoadingCell-DdhnfFp4.js";import"./ColumnConfigDialog-C6WiL4IG.js";import"./DraggableList-DsRvbsQQ.js";import"./search-DByY8x3h.js";import"./Input-CHUFXkF3.js";import"./useControlled-hyr-Ee75.js";import"./Button-Dadxr29r.js";import"./small-cross-rhx74hoP.js";import"./ActionButton-Bdd2VFqy.js";import"./Checkbox-gAFJ0O_f.js";import"./useValueChanged-a5BaAUtx.js";import"./CollapsiblePanel-x-PqwnJ-.js";import"./MultiColumnSortDialog-B9BvTXjK.js";import"./MenuTrigger-Ch2CkAIa.js";import"./CompositeItem-CfUbW9s0.js";import"./ToolbarRootContext-DAKa1svD.js";import"./getDisabledMountTransitionStyles-CnacvZJ_.js";import"./getPseudoElementBounds-CboReYEL.js";import"./chevron-down-BqKYZ2w5.js";import"./index-s_lknIcx.js";import"./error-HeD-UTCd.js";import"./BaseCbacBanner-Xyw-G0Km.js";import"./makeExternalStore-Ba0UZiRg.js";import"./Tooltip-DPMltsX0.js";import"./isObject-C42gTfZZ.js";import"./debounce-yCFfzmLO.js";import"./tick-Bqx6qZZ9.js";import"./DropdownField-Dt-RrUgw.js";import"./isEqual-DKe9hHKP.js";import"./_baseIsEqual-CmMkSghX.js";import"./withOsdkMetrics-Db562hlY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
