import{j as r}from"./iframe-DalzUr1q.js";import{O as b}from"./object-table-D2quk6NQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DenOiJNh.js";import{u as g}from"./useOsdkClient-LHIhBz2N.js";import"./preload-helper-D_n2FxVD.js";import"./Table-CntDsDRk.js";import"./index-BFBpHzmv.js";import"./Dialog-Dgd8ztuF.js";import"./cross-SZYnhdqh.js";import"./svgIconContainer-8scThZ5S.js";import"./useBaseUiId-C1YfiI_O.js";import"./InternalBackdrop-DXBWgB6P.js";import"./composite-ByIGP6v1.js";import"./index-CyRUVzxf.js";import"./index-8qyP2Pih.js";import"./index-6hqAlpZu.js";import"./useEventCallback-BAIllV_R.js";import"./SkeletonBar-BlqAJr93.js";import"./LoadingCell-BEct-0kK.js";import"./ColumnConfigDialog-EF_ikodc.js";import"./DraggableList-B75g6wQ8.js";import"./search-B4UxFsnj.js";import"./Input-D5Owm4cS.js";import"./useControlled-kzcpSzwV.js";import"./Button-c1CthLqB.js";import"./small-cross-BSqUQSnp.js";import"./ActionButton-BXGwgDtg.js";import"./Checkbox-ZFYZdGE6.js";import"./useValueChanged-Bc2VNrg5.js";import"./CollapsiblePanel-BcUy2Ne8.js";import"./MultiColumnSortDialog-BgZ7UXse.js";import"./MenuTrigger-BfxMhCU3.js";import"./CompositeItem-BA4-v1aY.js";import"./ToolbarRootContext-BCpC9w2q.js";import"./getDisabledMountTransitionStyles-BC7pIBNq.js";import"./getPseudoElementBounds-BzW4F44J.js";import"./chevron-down-CPH5FDFQ.js";import"./index-B3TGx6rz.js";import"./error-3LJUbIdl.js";import"./BaseCbacBanner-BynMbQO8.js";import"./makeExternalStore-Ill0Kq_R.js";import"./Tooltip-fxzvXvP9.js";import"./isObject-CZa9j52y.js";import"./debounce-BZIGTgj-.js";import"./tick-BBITmVPh.js";import"./DropdownField-Bri-IXaO.js";import"./isEqual-fqlKF2yu.js";import"./_baseIsEqual-DiyQ7VZY.js";import"./withOsdkMetrics-pz-JOP6f.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
