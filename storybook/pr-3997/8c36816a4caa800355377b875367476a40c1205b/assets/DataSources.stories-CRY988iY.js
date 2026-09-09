import{j as r}from"./iframe-SOll1F4-.js";import{O as b}from"./object-table-8Lyto80n.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-SLqVzeDp.js";import{u as g}from"./useOsdkClient-DN1cnskB.js";import"./preload-helper-CZMLvVAf.js";import"./Table-D_kd8VXt.js";import"./index-DrJjeRbc.js";import"./Dialog-Bmx1tS-O.js";import"./cross-BhBNLXbN.js";import"./svgIconContainer-BqIiSSFa.js";import"./useBaseUiId-sLJlVzyX.js";import"./InternalBackdrop-DuO7hhrB.js";import"./composite-DrjuPSYu.js";import"./index-Bz0lLybg.js";import"./index-B_l0ycL7.js";import"./index-BxU0-qmk.js";import"./useEventCallback-DkB0XSt3.js";import"./SkeletonBar-ImB0JjUc.js";import"./LoadingCell-PvqKWmYK.js";import"./ColumnConfigDialog-CxJThB76.js";import"./DraggableList-DnYRjrbD.js";import"./search-DAnTDJ17.js";import"./Input-CD41sKiv.js";import"./useControlled-A2CHlnom.js";import"./Button-Cnjwffgu.js";import"./small-cross-DFG8waLt.js";import"./ActionButton-BED8MEyS.js";import"./Checkbox-B8Uf2TMr.js";import"./useValueChanged-BK4PR_uW.js";import"./CollapsiblePanel-D5QCO8r0.js";import"./MultiColumnSortDialog-DhUgrXVT.js";import"./MenuTrigger-mz_ipzIa.js";import"./CompositeItem-CILt4SmA.js";import"./ToolbarRootContext-C6z7XZRH.js";import"./getDisabledMountTransitionStyles-CqkzNEYE.js";import"./getPseudoElementBounds-DmvT9tik.js";import"./chevron-down-B7EMYXAy.js";import"./index-C1rZZXtv.js";import"./error-C4kcTs-K.js";import"./BaseCbacBanner-t3TVdD0X.js";import"./makeExternalStore-C8WgzvlO.js";import"./Tooltip-D0hmlA59.js";import"./PopoverPopup-BJU9-Q2L.js";import"./debounce-CbpELLX-.js";import"./tick-DfEEUKDP.js";import"./DropdownField-DCmZO5bG.js";import"./isEqual-Cy_MZ2uT.js";import"./withOsdkMetrics-DEguMpFR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
