import{j as r}from"./iframe-C0Xv1P5p.js";import{O as b}from"./object-table-B4FUOYcx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D2VU4NQk.js";import{u as g}from"./useOsdkClient-DanPI2Ge.js";import"./preload-helper-DK2j5cbT.js";import"./Table-CU1Qyt0T.js";import"./index-D6d1RC22.js";import"./Dialog-ChKuLAfw.js";import"./cross-C73iH-uw.js";import"./svgIconContainer-D6QpYyks.js";import"./useBaseUiId-DyrVnx3i.js";import"./InternalBackdrop-a7BFb5yp.js";import"./composite-DpnK5-9R.js";import"./index-CDpNmz1t.js";import"./index-D0yTA5vb.js";import"./index-DIBkcKPQ.js";import"./useEventCallback-BBtLdhG6.js";import"./SkeletonBar-CsuhaBVh.js";import"./LoadingCell-CG3DXpJr.js";import"./ColumnConfigDialog-C0j_b73w.js";import"./DraggableList-CetpfoCD.js";import"./search-BS7q0In0.js";import"./Input-C9L75zsf.js";import"./useControlled-qTk4_Vdn.js";import"./Button-CQxPIDLb.js";import"./small-cross-Bj0EFv1l.js";import"./ActionButton-DGf5lIp9.js";import"./Checkbox-HVh17jbi.js";import"./useValueChanged-CfD_n30e.js";import"./CollapsiblePanel-CIp9LNN3.js";import"./MultiColumnSortDialog-DhjXyduh.js";import"./MenuTrigger-ihJMW9zG.js";import"./CompositeItem-BRH5qaMr.js";import"./ToolbarRootContext-B2RHT2LC.js";import"./getDisabledMountTransitionStyles-DTtgGuxo.js";import"./getPseudoElementBounds-CnBSmlCQ.js";import"./chevron-down-Buq4H8ml.js";import"./index-DuGDHKhx.js";import"./error-DoPz0IgF.js";import"./BaseCbacBanner-BIlKvGdQ.js";import"./makeExternalStore-qN6iSkao.js";import"./Tooltip-ClUPMWTl.js";import"./PopoverPopup-C3x1U_f_.js";import"./debounce-Bf-s2Lqp.js";import"./tick-Bve5oyKY.js";import"./DropdownField-BY3LIDfC.js";import"./isEqual-BHWxWtGu.js";import"./withOsdkMetrics-BlIQDFpZ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
