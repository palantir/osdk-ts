import{j as r}from"./iframe-tJoiUnOU.js";import{O as b}from"./object-table-X0gNoGMP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CrAxMxh4.js";import{u as g}from"./useOsdkClient-C-pct-id.js";import"./preload-helper-q_roJb3L.js";import"./Table-Da6epX_8.js";import"./index-wkjAOCKp.js";import"./Dialog-Du7sghjf.js";import"./cross-6Rc2LF7n.js";import"./svgIconContainer-D0F8gB11.js";import"./useBaseUiId-BiDCPQhp.js";import"./InternalBackdrop-CiNn4aLK.js";import"./composite-DOEUwxcs.js";import"./index-D3jnN6Jh.js";import"./index-VD2PRP19.js";import"./index-SeseWBh6.js";import"./useEventCallback-CPmd0Kz4.js";import"./SkeletonBar-cCyX40Gf.js";import"./LoadingCell-CLv6VafM.js";import"./ColumnConfigDialog-jmSwh543.js";import"./DraggableList-DRuIg0iu.js";import"./search-CgsmrxMy.js";import"./Input-Dbo8bi4g.js";import"./useControlled-B_scRK6a.js";import"./Button-D_5bqoFg.js";import"./small-cross-C-UfEnxt.js";import"./ActionButton-CiYF1Zig.js";import"./Checkbox-BuSk1rUm.js";import"./useValueChanged-BXd8sVHl.js";import"./CollapsiblePanel-fXxTLN8h.js";import"./MultiColumnSortDialog-DCJ2kmAh.js";import"./MenuTrigger-i4WkGPfE.js";import"./CompositeItem-BDVYJdc3.js";import"./ToolbarRootContext-ekETqF8a.js";import"./getDisabledMountTransitionStyles-D1n5Dxzz.js";import"./getPseudoElementBounds-CXXoJKvV.js";import"./chevron-down-CUB7Aj2S.js";import"./index-CKDcjobG.js";import"./error-B-PeBpWB.js";import"./BaseCbacBanner-DCJxw3sC.js";import"./makeExternalStore-nQCgHpFY.js";import"./Tooltip-P6WDKgxT.js";import"./PopoverPopup-D2CFDvFx.js";import"./debounce-CkWR7YVQ.js";import"./tick-CFI6xm9s.js";import"./DropdownField-CVHEoHqX.js";import"./isEqual-B4K20_d6.js";import"./withOsdkMetrics-DhS6V5OD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
