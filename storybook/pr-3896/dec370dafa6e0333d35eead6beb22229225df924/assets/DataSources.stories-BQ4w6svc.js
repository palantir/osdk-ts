import{j as r}from"./iframe--UbMdiy2.js";import{O as b}from"./object-table-BPleZlfI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CSj18frA.js";import{u as g}from"./useOsdkClient-xnyzvADb.js";import"./preload-helper-CA7u7TiX.js";import"./Table-S5ZSLI0s.js";import"./index-C1u9riy0.js";import"./Dialog-CRlo1yaY.js";import"./cross-CsZwFA4x.js";import"./svgIconContainer-CK_06w6f.js";import"./useBaseUiId-CjAg3d2x.js";import"./InternalBackdrop-Cnqy7rAB.js";import"./composite-BtFR9AyU.js";import"./index-BGAR2WV5.js";import"./index-CAvTI1eZ.js";import"./index-CWeBKphS.js";import"./useEventCallback-mC5Yga5M.js";import"./SkeletonBar-DonoHcvy.js";import"./LoadingCell-BVdfkn4-.js";import"./ColumnConfigDialog-DeyfrV4T.js";import"./DraggableList-DZMy2f4Z.js";import"./search-DbUWdvo4.js";import"./Input-BN19GaFA.js";import"./useControlled-Cd5fwv74.js";import"./Button-B02mKxKl.js";import"./small-cross-CN6IgOj7.js";import"./ActionButton-BReFMhE9.js";import"./Checkbox-DbaUG-nH.js";import"./useValueChanged-CcB1RW0l.js";import"./CollapsiblePanel-BcGhusnI.js";import"./MultiColumnSortDialog-DpP6ynZO.js";import"./MenuTrigger-DV-GTusP.js";import"./CompositeItem-D1M30SFN.js";import"./ToolbarRootContext-D_n3oDJh.js";import"./getDisabledMountTransitionStyles-B6BG9y4W.js";import"./getPseudoElementBounds-DF7y15mT.js";import"./chevron-down-C0FvWU53.js";import"./index-CpJmD0Ia.js";import"./error-DmofQ1mT.js";import"./BaseCbacBanner-zXKcjduf.js";import"./makeExternalStore-CU3_vIk-.js";import"./Tooltip-BnRt9YuZ.js";import"./PopoverPopup-JMbPHmmA.js";import"./debounce-YqKHkVhy.js";import"./tick-EMCSZq0W.js";import"./DropdownField-Cxihov6u.js";import"./isEqual-BJfitUL_.js";import"./withOsdkMetrics-C20Si_tx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
