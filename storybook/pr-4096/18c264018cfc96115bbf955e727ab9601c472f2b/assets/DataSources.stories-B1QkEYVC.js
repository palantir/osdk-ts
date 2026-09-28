import{j as r}from"./iframe-Dtb1PIwC.js";import{O as b}from"./object-table-Br6Q4v9E.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BGSTyM0e.js";import{u as g}from"./useOsdkClient-too7NMkO.js";import"./preload-helper-CrZ439aZ.js";import"./Table-CZR12SqA.js";import"./index-CLrFOtS8.js";import"./Dialog-qmfyp1_P.js";import"./cross-CVJIQSJP.js";import"./svgIconContainer-DpSb0Wlf.js";import"./useBaseUiId-COzzw9eg.js";import"./InternalBackdrop-B9T7uYNU.js";import"./composite-BY6IafNz.js";import"./index-v7pWAnnW.js";import"./index-0o9LwOHv.js";import"./index-Kclo__p-.js";import"./useEventCallback-r4_5tZHq.js";import"./SkeletonBar-LfD4cjLN.js";import"./LoadingCell-YAFXgfIN.js";import"./ColumnConfigDialog-DuogBYgf.js";import"./DraggableList-BkSx7UZi.js";import"./search-BvnVhgRx.js";import"./Input-77thj6XN.js";import"./useControlled-C9h-MgnN.js";import"./Button-CLxSMUqH.js";import"./small-cross-BU1CI3Ri.js";import"./ActionButton-BVFIiiEV.js";import"./Checkbox-CUJBJRlP.js";import"./useValueChanged-BlnwCZsu.js";import"./CollapsiblePanel-C6l7NaqJ.js";import"./MultiColumnSortDialog-CZ7uSgVr.js";import"./MenuTrigger-Ms8jt9xm.js";import"./CompositeItem-DJjbAwA2.js";import"./ToolbarRootContext-CVyIw6JT.js";import"./getDisabledMountTransitionStyles-Bo5uM1fX.js";import"./getPseudoElementBounds-C6ruZhMa.js";import"./chevron-down-CjmVxAZS.js";import"./index-BYzRMw1m.js";import"./error-BTkWOlta.js";import"./BaseCbacBanner-FkN-Yjr_.js";import"./makeExternalStore-DJHAEnib.js";import"./Tooltip-JVmLA6-U.js";import"./PopoverPopup-BxsY-gjv.js";import"./debounce-Da9L3ttw.js";import"./tick-sHGnIXkS.js";import"./DropdownField-BmlojZ_x.js";import"./isEqual-Cwb8oMGa.js";import"./withOsdkMetrics-B_mXWVb4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
