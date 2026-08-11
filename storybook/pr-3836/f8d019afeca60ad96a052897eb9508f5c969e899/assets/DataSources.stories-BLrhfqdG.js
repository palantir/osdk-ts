import{j as r}from"./iframe-B5hHVZQu.js";import{O as b}from"./object-table-CRa7hXQr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CamdZSZK.js";import{u as g}from"./useOsdkClient-nCYvOOHq.js";import"./preload-helper-DyqMQgY0.js";import"./Table-CbYifu0N.js";import"./index-DaYiiRu5.js";import"./Dialog-CUw2nEX3.js";import"./cross-CTSJrujW.js";import"./svgIconContainer-DXyLBKXl.js";import"./useBaseUiId-CRlCyX-w.js";import"./InternalBackdrop-B2AgvPjW.js";import"./composite-CK8SD67A.js";import"./index-Cu4Ah4up.js";import"./index-ylobHPnE.js";import"./index-fX2rnPUV.js";import"./useEventCallback-CaB44r3W.js";import"./SkeletonBar-BiRh_pBp.js";import"./LoadingCell-CFlyTKGM.js";import"./ColumnConfigDialog-D9Lf1Y0L.js";import"./DraggableList-BGP-kqw7.js";import"./search-CxznAXlW.js";import"./Input-b2ptVJAS.js";import"./useControlled-By0Ac4RD.js";import"./isEqual-8i0GB84A.js";import"./isObject-CbTSOvn8.js";import"./Button-C90dbigt.js";import"./ActionButton-CwK2Sti0.js";import"./Checkbox-AQ_tXtJE.js";import"./useValueChanged-BAHrQvHb.js";import"./CollapsiblePanel-D7gMr-Bp.js";import"./MultiColumnSortDialog-B5QCiZ6f.js";import"./MenuTrigger-DGJeoD7u.js";import"./CompositeItem-BtNP4ARS.js";import"./ToolbarRootContext-DJjlFlUm.js";import"./getDisabledMountTransitionStyles-CQxLvVA1.js";import"./getPseudoElementBounds-Ofapsbk-.js";import"./chevron-down-Cc8R_gLM.js";import"./index-CfwqnS6H.js";import"./error-DRrdgJam.js";import"./BaseCbacBanner-ByQuoR7a.js";import"./makeExternalStore-004jpP0-.js";import"./Tooltip-BsUgOztO.js";import"./PopoverPopup-DbUxnxE-.js";import"./toNumber-Ct448nRS.js";import"./tick-lV8tZ7Ef.js";import"./DropdownField-Iac_8gPN.js";import"./withOsdkMetrics-DvK36u8X.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
