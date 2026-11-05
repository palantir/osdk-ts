import{j as r}from"./iframe-BryHz5Df.js";import{O as b}from"./object-table-DhddezCq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-p8OtwZJI.js";import{u as g}from"./useOsdkClient-BoBqYHPA.js";import"./preload-helper-ZuG0aKTk.js";import"./Table-vbVKhRUZ.js";import"./index-iPKk9s3t.js";import"./Dialog-BBiaGDsk.js";import"./cross-ailj0yO2.js";import"./svgIconContainer-Bz8FzOTG.js";import"./useBaseUiId-lqu4HseA.js";import"./InternalBackdrop-BTDJowUB.js";import"./composite-BowJ7EVh.js";import"./index-DLszwrmC.js";import"./index-B23Jlpe-.js";import"./index-kHo4L0CJ.js";import"./useEventCallback-DNvqpEEj.js";import"./SkeletonBar-DbgbyCHj.js";import"./LoadingCell-nGP3YWSE.js";import"./ColumnConfigDialog-BO7h_Et0.js";import"./DraggableList-BiU9-PR1.js";import"./search-BMoYocFy.js";import"./Input-BJM0PLwp.js";import"./useControlled-CylTdVLs.js";import"./Button-C6Ze9Rf1.js";import"./small-cross-D3D35N0o.js";import"./ActionButton-BjzGaC9X.js";import"./Checkbox-4gp7fYlY.js";import"./useValueChanged-D5dYuYpQ.js";import"./CollapsiblePanel-s1GFKw9E.js";import"./MultiColumnSortDialog-DQsMxgaG.js";import"./MenuTrigger-Ciw0TFjQ.js";import"./CompositeItem-CUgXhRoj.js";import"./ToolbarRootContext-BjHx285v.js";import"./getDisabledMountTransitionStyles-Jl9aUEz_.js";import"./getPseudoElementBounds-uG2bpqSg.js";import"./chevron-down-DjbeKg79.js";import"./index-BK-BH_Yo.js";import"./error-CL2fTgGo.js";import"./BaseCbacBanner-KtikxSJ6.js";import"./makeExternalStore-CxnQMREG.js";import"./Tooltip-DXaG_Vux.js";import"./isObject-V0EIbVdK.js";import"./debounce-CjDJ8-42.js";import"./tick-Bz5bWrj2.js";import"./DropdownField-DwnJVj62.js";import"./isEqual-CorpkB5K.js";import"./_baseIsEqual-DNo1_TAY.js";import"./withOsdkMetrics-Dmyjllfi.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
