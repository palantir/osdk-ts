import{j as r}from"./iframe-Chfnu1YD.js";import{O as b}from"./object-table-GXQqgEvs.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C1Rzm1vk.js";import{u as g}from"./useOsdkClient-v00nyVWz.js";import"./preload-helper-8IaaIvc6.js";import"./Table-BYiLzy7V.js";import"./index-vEtNoJy3.js";import"./Dialog-C0NkkaLW.js";import"./cross-DDh1oeg3.js";import"./svgIconContainer-Cemmf0nA.js";import"./useBaseUiId-1GAAVutu.js";import"./InternalBackdrop-DLHFnO4E.js";import"./composite-ptzmGyTW.js";import"./index-DvqaWTEs.js";import"./index-Bbt8955e.js";import"./index-C4q2PejQ.js";import"./useEventCallback-Dz5cwNMH.js";import"./SkeletonBar-ikqiEJT9.js";import"./LoadingCell-CvbYgRpj.js";import"./ColumnConfigDialog-nCGkIgug.js";import"./DraggableList-D5aJDVZs.js";import"./search-BNvr0C3M.js";import"./Input-DWPUbvhX.js";import"./useControlled-G2n_omSR.js";import"./Button-Ciq9JFcz.js";import"./small-cross-CA-g_M_D.js";import"./ActionButton-CBNCZv9P.js";import"./Checkbox-C2BsILr5.js";import"./useValueChanged-NA9qAH4Q.js";import"./CollapsiblePanel-C_TGf3AQ.js";import"./MultiColumnSortDialog-BQDGa9D6.js";import"./MenuTrigger-CH8gjYXg.js";import"./CompositeItem-B84_RNVq.js";import"./ToolbarRootContext-BC9rkGH_.js";import"./getDisabledMountTransitionStyles-BhZDCpH_.js";import"./getPseudoElementBounds-BJU_D_lr.js";import"./chevron-down-lrpzUfD-.js";import"./index-DvPbsGeG.js";import"./error-Dy9PQux-.js";import"./BaseCbacBanner-CmZapzw4.js";import"./makeExternalStore-CYR-IDnU.js";import"./Tooltip-D2XqF5oz.js";import"./isObject-BCq84zEs.js";import"./debounce-D2wam908.js";import"./tick-DN0NnQtg.js";import"./DropdownField-BBRj5dwe.js";import"./isEqual-BQpI83mS.js";import"./_baseIsEqual-CmLtIxcO.js";import"./withOsdkMetrics-DRREQEVj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
