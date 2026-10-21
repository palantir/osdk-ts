import{j as r}from"./iframe-Czm_u8Ar.js";import{O as b}from"./object-table-oAmlQ3St.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CAMoSi5b.js";import{u as g}from"./useOsdkClient-D-g2OSKy.js";import"./preload-helper-BuAj_jN-.js";import"./Table-TR_5CIzU.js";import"./index-XKqF3n2I.js";import"./Dialog-BVdf1Plj.js";import"./cross-BlHijBJ4.js";import"./svgIconContainer-CgTn6RWL.js";import"./useBaseUiId-Me4okoRq.js";import"./InternalBackdrop-CSYiZwEF.js";import"./composite-C_KD_tny.js";import"./index-C3TofrwO.js";import"./index-D17LzocE.js";import"./index-DqRB57_4.js";import"./useEventCallback-CQUNaXho.js";import"./SkeletonBar-BvQmf4En.js";import"./LoadingCell-C-tmWlRS.js";import"./ColumnConfigDialog-BTFK5Wnj.js";import"./DraggableList-QZUMC6gD.js";import"./search-DY6wtpjt.js";import"./Input-C4CruWhv.js";import"./useControlled-Bgi6lmRr.js";import"./Button-DycfsGl1.js";import"./small-cross-CFLQZxWq.js";import"./ActionButton-CUg5ARhM.js";import"./Checkbox-BL2kZSvF.js";import"./useValueChanged-BSuWxBvq.js";import"./CollapsiblePanel-B3l-zgfo.js";import"./MultiColumnSortDialog-BpZ3Sg6L.js";import"./MenuTrigger-kXC2WmKi.js";import"./CompositeItem-y1T0uWu2.js";import"./ToolbarRootContext-CxE6VRH9.js";import"./getDisabledMountTransitionStyles-De4xDMuu.js";import"./getPseudoElementBounds-DfVhyAPU.js";import"./chevron-down-CPUKsW46.js";import"./index-C7-NS5HO.js";import"./error-DU7bFYdf.js";import"./BaseCbacBanner-DU_0BRZz.js";import"./makeExternalStore-DKjvIENS.js";import"./Tooltip-BhsvKrtc.js";import"./PopoverPopup-DGUEg27x.js";import"./debounce-D6HpQvGw.js";import"./tick-Dq-bnKtS.js";import"./DropdownField-ByNhlw8y.js";import"./isEqual-CtWSL3Nd.js";import"./withOsdkMetrics-BQzxgqT1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
