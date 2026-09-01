import{j as r}from"./iframe-C3MdTHLQ.js";import{O as b}from"./object-table-HC9G0-zB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BwbaXLYB.js";import{u as g}from"./useOsdkClient-D17MJqfm.js";import"./preload-helper-3M0V84kL.js";import"./Table-CF61Igz5.js";import"./index-BgVlrX6R.js";import"./Dialog-ArQrHAg9.js";import"./cross-Bgd4sC_w.js";import"./svgIconContainer-CipT1sHW.js";import"./useBaseUiId-BY9bLyd_.js";import"./InternalBackdrop-DAk90e5g.js";import"./composite-BNzQ7X-x.js";import"./index-CbVfK8fT.js";import"./index-BHAP5gqn.js";import"./index-DQ3V0Ck8.js";import"./useEventCallback-B9GmybVM.js";import"./SkeletonBar-NdZnQaRq.js";import"./LoadingCell-2W3SA1-R.js";import"./ColumnConfigDialog-EDoh1yDU.js";import"./DraggableList-BXNUpJnm.js";import"./search-7cyOXxuf.js";import"./Input-Dv1jlKn1.js";import"./useControlled-BVKJ7vS7.js";import"./Button-cJHIlP8z.js";import"./small-cross-DPNpbIW3.js";import"./ActionButton-BSVEJ7Hr.js";import"./Checkbox-epqZ-xFx.js";import"./useValueChanged-DxMDIhq4.js";import"./CollapsiblePanel-CsBBS9Ht.js";import"./MultiColumnSortDialog-DN6j5kZS.js";import"./MenuTrigger-C76cZwo1.js";import"./CompositeItem-DM0NOOVO.js";import"./ToolbarRootContext-DIyGn2ca.js";import"./getDisabledMountTransitionStyles-DS8Fcflj.js";import"./getPseudoElementBounds-5xT67UCu.js";import"./chevron-down-kdwD8AzF.js";import"./index-CoAkWlDV.js";import"./error-Kr8BQL-e.js";import"./BaseCbacBanner-DMT9YJWJ.js";import"./makeExternalStore-CDdlC2MZ.js";import"./Tooltip-DUCX4E7k.js";import"./PopoverPopup-CKTWXUlx.js";import"./debounce-BXkGDWS-.js";import"./tick-CMLsuHuf.js";import"./DropdownField-BHHdSfJN.js";import"./isEqual-BPwUsz3X.js";import"./withOsdkMetrics-C_vOiZra.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
