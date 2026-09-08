import{j as r}from"./iframe-Dixwoq4L.js";import{O as b}from"./object-table-BquBdSsi.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-AIPqb5NZ.js";import{u as g}from"./useOsdkClient-DiAIchaF.js";import"./preload-helper-BsHp-RGP.js";import"./Table-D-bsfsJd.js";import"./index-CcIVVuqf.js";import"./Dialog-CbAPprbB.js";import"./cross-D7TdtDyo.js";import"./svgIconContainer-CffeXbYk.js";import"./useBaseUiId-DaT4VLXm.js";import"./InternalBackdrop-B-8CQy8W.js";import"./composite-BiAYM8pY.js";import"./index-BX_I2TdV.js";import"./index-BXWUqN74.js";import"./index-Ch_N0PFP.js";import"./useEventCallback-C8toBuB-.js";import"./SkeletonBar-Dfdp1Pfv.js";import"./LoadingCell-BxTRRF_Z.js";import"./ColumnConfigDialog-DmKwlnIh.js";import"./DraggableList-DE08IhVc.js";import"./search-DAIXcQnY.js";import"./Input-gkS7bq_U.js";import"./useControlled-CJEoS3fz.js";import"./Button-Dr6WGivc.js";import"./small-cross-CaDB4jvF.js";import"./ActionButton-CdFwVFbZ.js";import"./Checkbox-mPvrwlTQ.js";import"./useValueChanged-CiXWMzHQ.js";import"./CollapsiblePanel-zs8L02cO.js";import"./MultiColumnSortDialog-drY98sLD.js";import"./MenuTrigger-BK7k2QEt.js";import"./CompositeItem-BVhXUg3I.js";import"./ToolbarRootContext-Dg49HtmA.js";import"./getDisabledMountTransitionStyles-DYbvwZ2K.js";import"./getPseudoElementBounds-DeapELKt.js";import"./chevron-down-BK-6EzsA.js";import"./index-nO-PLXJg.js";import"./error-CqJY6TRA.js";import"./BaseCbacBanner-DHUdayUx.js";import"./makeExternalStore-ClZX4f5E.js";import"./Tooltip-yiNDpymw.js";import"./PopoverPopup-CA0CFdoY.js";import"./debounce-atOz-W-P.js";import"./tick-D209HxbV.js";import"./DropdownField-pxQBJOyD.js";import"./isEqual-W3ULvD17.js";import"./withOsdkMetrics-CHTNEF0W.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
