import{j as r}from"./iframe-jMwYipi7.js";import{O as b}from"./object-table-DqCE7m8Q.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CF0cnPZ8.js";import{u as g}from"./useOsdkClient-BdINNOYX.js";import"./preload-helper-DuATZxWQ.js";import"./Table-Bco2QWZU.js";import"./index-Dz_M8fMm.js";import"./Dialog-BvewtxLp.js";import"./cross-D4s078tN.js";import"./svgIconContainer-C67djf6q.js";import"./useBaseUiId-CowvthfG.js";import"./InternalBackdrop-DMfDH2vS.js";import"./composite-CY5glQip.js";import"./index-_q0G2ZtV.js";import"./index-DEfzi2BY.js";import"./index-B-GHK9XU.js";import"./useEventCallback-BWoB4Eoe.js";import"./SkeletonBar-B0rvX527.js";import"./LoadingCell-CcW0Hh0k.js";import"./ColumnConfigDialog-DSsDrkGF.js";import"./DraggableList-DWqWm6Gb.js";import"./search-CZYRjLGu.js";import"./Input-yW4xW1y2.js";import"./useControlled-CkNav0ZD.js";import"./Button-CQ-F38oG.js";import"./small-cross-fIpnPilt.js";import"./ActionButton-DoLv7Bc0.js";import"./Checkbox-COWIvfzP.js";import"./useValueChanged-DU8GXm_T.js";import"./CollapsiblePanel--Covd7Se.js";import"./MultiColumnSortDialog-CTtUUKI-.js";import"./MenuTrigger-DWDMzYwZ.js";import"./CompositeItem-BFcshnAb.js";import"./ToolbarRootContext-CyHNucoq.js";import"./getDisabledMountTransitionStyles-CkP6dO--.js";import"./getPseudoElementBounds-Iu6zkRHv.js";import"./chevron-down-DoTJVfbo.js";import"./index-CLIDYXaA.js";import"./error-D1FCJ2D3.js";import"./BaseCbacBanner-C24i1Y0t.js";import"./makeExternalStore-DpRr9t8b.js";import"./Tooltip-CSvM8AX_.js";import"./PopoverPopup-DiKkC9qL.js";import"./debounce-DcYvAVr6.js";import"./tick-B4Iihx0z.js";import"./DropdownField-lNbdtwFm.js";import"./isEqual-1uMDO8x-.js";import"./withOsdkMetrics-CY_PsP6V.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
