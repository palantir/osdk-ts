import{j as r}from"./iframe-BykysWv2.js";import{O as b}from"./object-table-VL2pIuSS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CmeHMb5o.js";import{u as g}from"./useOsdkClient-BSt3qc0S.js";import"./preload-helper-D-tSwkR5.js";import"./Table-DKKJuYn2.js";import"./index-CCmH1fLx.js";import"./Dialog-BYmQ2lK1.js";import"./cross-C6UPhC48.js";import"./svgIconContainer-DuuAzJ-q.js";import"./useBaseUiId-BtfasykQ.js";import"./InternalBackdrop-DcsekBaZ.js";import"./composite-DVza1WGR.js";import"./index-CdS3MnO1.js";import"./index-D5tO8tmB.js";import"./index-Cqonjd7p.js";import"./useEventCallback-B4_uUg37.js";import"./SkeletonBar-XxmSe_Cp.js";import"./LoadingCell-DjZgc0r1.js";import"./ColumnConfigDialog-B17ARdeN.js";import"./DraggableList-DRSLRpqD.js";import"./search-BDkejYae.js";import"./Input-B6kNrbT5.js";import"./useControlled-BHDm0MR_.js";import"./Button-CmlMFMdB.js";import"./small-cross-CSSivirH.js";import"./ActionButton-DSbQbnUR.js";import"./Checkbox-D24EyxhG.js";import"./useValueChanged-C9e2VdUl.js";import"./CollapsiblePanel-CXUAw-hA.js";import"./MultiColumnSortDialog-T2inBz5a.js";import"./MenuTrigger-DAeKyCnh.js";import"./CompositeItem-B2Va5Uj8.js";import"./ToolbarRootContext-hgVSKpi4.js";import"./getDisabledMountTransitionStyles-DPi8XNEW.js";import"./getPseudoElementBounds-84sUmk7I.js";import"./chevron-down-BhIvQaF5.js";import"./index-D5SG44W0.js";import"./error-DoPIKpmU.js";import"./BaseCbacBanner-iC1JAFKe.js";import"./makeExternalStore-Efjiv4ks.js";import"./Tooltip-D6tequ9v.js";import"./PopoverPopup-7-Z1ZTD2.js";import"./debounce-BQifmnVJ.js";import"./tick-bGW9sZOi.js";import"./DropdownField-xIr7Ptnm.js";import"./isEqual-CY52NdiV.js";import"./withOsdkMetrics-byqTEtiY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
