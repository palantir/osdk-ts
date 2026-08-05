import{j as r}from"./iframe-Bq5j5aAZ.js";import{O as b}from"./object-table-ZojhhHH8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BCos4ERw.js";import{u as g}from"./useOsdkClient-Q-jj7O9w.js";import"./preload-helper-Cst-Jesr.js";import"./Table-CE6HqXij.js";import"./index-DWEhBHOg.js";import"./Dialog-BGHulRq-.js";import"./cross-CbyP9ICU.js";import"./svgIconContainer-D0zN2PvM.js";import"./useBaseUiId-BdQXYMbQ.js";import"./InternalBackdrop-uO_2LS-x.js";import"./composite-DrF_ejyf.js";import"./index-B_vCnOWE.js";import"./index-3GM7jxUo.js";import"./index-CjgMCQgf.js";import"./useEventCallback-CNtWd_Oy.js";import"./SkeletonBar-DRyfQFdJ.js";import"./LoadingCell-CJOAjMEt.js";import"./ColumnConfigDialog-OCSVdCgT.js";import"./DraggableList-CO-Jk5DR.js";import"./search-BjMKeiC8.js";import"./Input-BUcGQGwq.js";import"./useControlled-Bh97BPxb.js";import"./isEqual-C_CB3hcX.js";import"./isObject-CURaav_D.js";import"./Button-BDOsP3IO.js";import"./ActionButton-CWSaKj2F.js";import"./Checkbox-Dzs9FB__.js";import"./useValueChanged-ClV7qo_d.js";import"./CollapsiblePanel-zpIsHYl_.js";import"./MultiColumnSortDialog-DkloPuH0.js";import"./MenuTrigger-BzOQUDhL.js";import"./CompositeItem-D-DPXVET.js";import"./ToolbarRootContext-2btfoOPA.js";import"./getDisabledMountTransitionStyles-Ddgt0Mbu.js";import"./getPseudoElementBounds-DXUdX6lB.js";import"./chevron-down-Cyd20nPd.js";import"./index-XfaAXuD0.js";import"./error-BfeMGEzt.js";import"./BaseCbacBanner-CWdVryss.js";import"./makeExternalStore-DAAwZ8ri.js";import"./Tooltip-DDKYKaKZ.js";import"./PopoverPopup-Bli66F0P.js";import"./toNumber-BsCpXwUh.js";import"./tick-CqpcZgXj.js";import"./DropdownField-Ct14Ku7e.js";import"./withOsdkMetrics-Dh460Fmw.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
