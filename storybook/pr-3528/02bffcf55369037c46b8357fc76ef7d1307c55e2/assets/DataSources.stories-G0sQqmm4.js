import{j as r}from"./iframe-DFpZdgNU.js";import{O as b}from"./object-table-BzZFLfSB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BBywCvdq.js";import{u as g}from"./useOsdkClient-BVnzibDe.js";import"./preload-helper-BiKApNs9.js";import"./Table-CC9Camr0.js";import"./index-DlVDHp89.js";import"./Dialog-CJ3HaTy4.js";import"./cross-BHvoIDr_.js";import"./svgIconContainer-Bn3Ri9oc.js";import"./useBaseUiId-0zduKOPk.js";import"./InternalBackdrop-DRGhJgBK.js";import"./composite-CM1n6GcK.js";import"./index-DMpyqEyR.js";import"./index-CZjMLcuo.js";import"./index-Cq3lo4z7.js";import"./useEventCallback-YkuA_1L6.js";import"./SkeletonBar-eYoNq5WF.js";import"./LoadingCell-BnTfQ31G.js";import"./ColumnConfigDialog-pw8oR0pV.js";import"./DraggableList-x5sgzpnu.js";import"./search-B6WVYs54.js";import"./Input-BpHQpMpf.js";import"./useControlled-hOadE75D.js";import"./Button-BHbgtEyL.js";import"./small-cross-D42tWcxj.js";import"./ActionButton-CDJ_DkbP.js";import"./Checkbox-BdJ__OMn.js";import"./useValueChanged-BqSpbqAV.js";import"./CollapsiblePanel-BtVU-N7R.js";import"./MultiColumnSortDialog-uOASletb.js";import"./MenuTrigger-hRi5Jjk9.js";import"./CompositeItem-CHtvYS6F.js";import"./ToolbarRootContext-BYbbUH6Y.js";import"./getDisabledMountTransitionStyles-wG4lhnAQ.js";import"./getPseudoElementBounds-DyopGY8r.js";import"./chevron-down-DGAHgV3w.js";import"./index-CP7LKd11.js";import"./error-DAvK-lhg.js";import"./BaseCbacBanner-Qoz9aZU3.js";import"./makeExternalStore-CAJutcEV.js";import"./Tooltip-DXygPOKv.js";import"./PopoverPopup-D8Q_qkL_.js";import"./debounce-BCq9jsqw.js";import"./tick-C1HKmB3O.js";import"./DropdownField-BWCkuBcO.js";import"./isEqual-Bcz7pOKA.js";import"./withOsdkMetrics-vWdfyIwO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
