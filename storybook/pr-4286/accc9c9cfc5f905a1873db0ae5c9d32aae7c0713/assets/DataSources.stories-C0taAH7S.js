import{j as r}from"./iframe-BH1__lyA.js";import{O as b}from"./object-table-C_YYv9IJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BlJLd0fs.js";import{u as g}from"./useOsdkClient-BG_667E1.js";import"./preload-helper-CcoKPVmD.js";import"./Table-DdPOGwfn.js";import"./index-COEeIEse.js";import"./Dialog-B-tTj_Nw.js";import"./cross-BG9CU_85.js";import"./svgIconContainer-wKAlV-si.js";import"./useBaseUiId-CocyTtNa.js";import"./InternalBackdrop-Bf6tif4j.js";import"./composite-C3W7I4o1.js";import"./index-Bb8BpDdy.js";import"./index-C3iKmC6u.js";import"./index-BiGG8ZBE.js";import"./useEventCallback-CPUVFOtx.js";import"./SkeletonBar-BGI6vnAm.js";import"./LoadingCell-BBxmDmnN.js";import"./ColumnConfigDialog-B4fUNH1J.js";import"./DraggableList-l-YPQ9p_.js";import"./search-XcMkpgCF.js";import"./Input-hpLjYkh3.js";import"./useControlled-DOGwcjPy.js";import"./Button-DfUwNhvG.js";import"./small-cross-CAPHq35Q.js";import"./ActionButton-C1MKeMQV.js";import"./Checkbox-BWUQFoeG.js";import"./useValueChanged-41xr8V2-.js";import"./CollapsiblePanel-Dn2DChxX.js";import"./MultiColumnSortDialog-D-Q0C7Y-.js";import"./MenuTrigger-PQ3cFOHk.js";import"./CompositeItem-D0FQTfbI.js";import"./ToolbarRootContext-CtjitZ_O.js";import"./getDisabledMountTransitionStyles-DVj5IYmX.js";import"./getPseudoElementBounds-hmm0rsQk.js";import"./chevron-down-PjTLl0ZH.js";import"./index-CGXKdUZr.js";import"./error-Dg7pD9uX.js";import"./BaseCbacBanner-DJUtLNca.js";import"./makeExternalStore-CyAT35zT.js";import"./Tooltip-6cEOUv8s.js";import"./isObject-neNgVvou.js";import"./debounce-CxGZY-Kb.js";import"./tick-PqPtFkmd.js";import"./DropdownField-C55flNy_.js";import"./isEqual-DAwlJfTA.js";import"./_baseIsEqual-fFGR7Jxx.js";import"./withOsdkMetrics-B_AmLLOG.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
