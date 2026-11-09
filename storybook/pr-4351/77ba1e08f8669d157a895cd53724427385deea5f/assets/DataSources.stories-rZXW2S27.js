import{j as r}from"./iframe-D3hBsnsj.js";import{O as b}from"./object-table-BDCVUGn6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C-ohEKR1.js";import{u as g}from"./useOsdkClient-CSiMh-gG.js";import"./preload-helper-DMLOvsmI.js";import"./Table-u1lWsm55.js";import"./index-BFoG3y9f.js";import"./Dialog-CuB9xgJ9.js";import"./cross-zcrYkWBY.js";import"./svgIconContainer-Bz0YpGKi.js";import"./useBaseUiId-Bk-faTDV.js";import"./InternalBackdrop-CS-KNpxJ.js";import"./composite-DWlrqv2G.js";import"./index-CCkpr9rO.js";import"./index-BPny8RHi.js";import"./index-CeAiM1qG.js";import"./useEventCallback-BP_wGY7x.js";import"./SkeletonBar-DI0g9AHe.js";import"./LoadingCell-CT7wzQLK.js";import"./ColumnConfigDialog-w0Tnxbhj.js";import"./DraggableList-BBuYe0yT.js";import"./search-CE7lhKVr.js";import"./Input-DbDZgezU.js";import"./useControlled-D75sOh0K.js";import"./Button-Z7wlB8te.js";import"./small-cross-BH03RGEV.js";import"./ActionButton-P3mRJLVa.js";import"./Checkbox-Cna2c8lA.js";import"./useValueChanged-Dbp_U3FV.js";import"./CollapsiblePanel-By1TCkBA.js";import"./MultiColumnSortDialog-l7mW_WED.js";import"./MenuTrigger-DwCPrNRY.js";import"./CompositeItem-DxaSaYkw.js";import"./ToolbarRootContext-CMXlPgPk.js";import"./getDisabledMountTransitionStyles-DsHQCkew.js";import"./getPseudoElementBounds-BXFF9d0t.js";import"./chevron-down-i4CyxBDw.js";import"./index-DzDp982c.js";import"./error-BUxN-ftl.js";import"./BaseCbacBanner-DSSobXcA.js";import"./makeExternalStore-CKN6mP8s.js";import"./Tooltip-BF8YE5eC.js";import"./isObject-DTGaRAh3.js";import"./debounce-4gosawj0.js";import"./tick-X_jDyEUZ.js";import"./DropdownField-DgWMbQ5Q.js";import"./isEqual-B7i9BrOq.js";import"./_baseIsEqual-D3i4A-oD.js";import"./withOsdkMetrics-CQ22kB-k.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
