import{j as r}from"./iframe-B4Qf2x47.js";import{O as b}from"./object-table-CPLTCgyJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D2l2UJfQ.js";import{u as g}from"./useOsdkClient-D22Zy3Aq.js";import"./preload-helper-DmaZizbX.js";import"./Table-DcPW7WI2.js";import"./index-B97ocqDB.js";import"./Dialog-De2ibvoK.js";import"./cross-w9xefAeS.js";import"./svgIconContainer-Bx39OoUr.js";import"./useBaseUiId-CuoaS_IK.js";import"./InternalBackdrop-C8l1Y-0f.js";import"./composite-BxeFJGWF.js";import"./index-DHeuY6qT.js";import"./index-B6nqCMvX.js";import"./index-BA03CKcA.js";import"./useEventCallback-DWh8d3_D.js";import"./SkeletonBar-BtuvgBa-.js";import"./LoadingCell-DXNqVRfq.js";import"./ColumnConfigDialog-BZuObZPn.js";import"./DraggableList-CIdOPMJV.js";import"./search-D96kAX6P.js";import"./Input-CT1b0uTH.js";import"./useControlled-CjTdF22S.js";import"./Button-xKEqEHmE.js";import"./small-cross-DS3Q2Rz0.js";import"./ActionButton-zETE6syU.js";import"./Checkbox-COhZNwHi.js";import"./useValueChanged-DsKPkoty.js";import"./CollapsiblePanel-B9o26G0c.js";import"./MultiColumnSortDialog-DC5fGvj7.js";import"./MenuTrigger-exs7SvA9.js";import"./CompositeItem-Dm0AUseO.js";import"./ToolbarRootContext-gq31GD3n.js";import"./getDisabledMountTransitionStyles-CdqBMtts.js";import"./getPseudoElementBounds-F5SYiEpp.js";import"./chevron-down-DNdE9fs0.js";import"./index-COOPd0_C.js";import"./error-0thEM3V8.js";import"./BaseCbacBanner-ncSG64qg.js";import"./makeExternalStore-DYKlPK4M.js";import"./Tooltip-Rk-aR7OJ.js";import"./PopoverPopup-tqPNwfif.js";import"./debounce-DpXq-GLD.js";import"./tick-DFcuOcOL.js";import"./DropdownField-D-duYmE0.js";import"./isEqual-Bh4qltOa.js";import"./withOsdkMetrics-CQFCnZa4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
