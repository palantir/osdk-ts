import{j as r}from"./iframe-C6yB_OA9.js";import{O as b}from"./object-table-HDfg_TTy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ct46Ulsa.js";import{u as g}from"./useOsdkClient-CUdML_iS.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DRadfxZ3.js";import"./index-CYHovncI.js";import"./Dialog-B5ccMndt.js";import"./cross-CGEn_f8Q.js";import"./svgIconContainer-BHMXavE6.js";import"./useBaseUiId-rM_6hxp0.js";import"./InternalBackdrop-DtqyQDxL.js";import"./composite-pSUWUpBY.js";import"./index-CrGhjRoP.js";import"./index-CtIX1NAw.js";import"./index-BGZVb3vI.js";import"./useEventCallback-CB_wvjSH.js";import"./SkeletonBar-Crhiib3I.js";import"./LoadingCell-Dk7N-9vZ.js";import"./ColumnConfigDialog-2YulSkYL.js";import"./DraggableList-DR3zC2Zl.js";import"./search-Cs6gheVK.js";import"./Input-Cq3PGtjU.js";import"./useControlled-De9a2DUs.js";import"./Button-fD8qjLcS.js";import"./small-cross-BeJfHwu2.js";import"./ActionButton-Otj0HFao.js";import"./Checkbox-CtY2PwDF.js";import"./useValueChanged-DgXpI1nC.js";import"./CollapsiblePanel-Dq0dYvbH.js";import"./MultiColumnSortDialog-CWpcjsI4.js";import"./MenuTrigger-d7Oq0h18.js";import"./CompositeItem-BhFX388v.js";import"./ToolbarRootContext-l_NHV493.js";import"./getDisabledMountTransitionStyles-CjvM7Kt-.js";import"./getPseudoElementBounds-BxFMQaGu.js";import"./chevron-down-DYrrqtdW.js";import"./index-BjeOkhvx.js";import"./error-DvPL7YDk.js";import"./BaseCbacBanner-CiOoS4JT.js";import"./makeExternalStore-BcRZCs8p.js";import"./Tooltip-BZBvUMD1.js";import"./PopoverPopup-78FD9gys.js";import"./debounce-B5XLReag.js";import"./tick-DGvKhXVA.js";import"./DropdownField-3xa1gpQG.js";import"./isEqual-fJtbK8b1.js";import"./withOsdkMetrics-CC4rYMg2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
