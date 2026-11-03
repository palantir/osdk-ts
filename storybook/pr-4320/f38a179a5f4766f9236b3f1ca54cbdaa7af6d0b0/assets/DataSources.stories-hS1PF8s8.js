import{j as r}from"./iframe-DvvsknHZ.js";import{O as b}from"./object-table-B7Fjhpk3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BRuAqF2O.js";import{u as g}from"./useOsdkClient-COXkAQJS.js";import"./preload-helper-B7RcIo-x.js";import"./Table-CDrZK7oT.js";import"./index-BXq-npjw.js";import"./Dialog-DN7kteIN.js";import"./cross-CVayjJ6n.js";import"./svgIconContainer-B68gmxzG.js";import"./useBaseUiId-pUFvyVHu.js";import"./InternalBackdrop-8CXRVLpP.js";import"./composite-B7vL0viI.js";import"./index-BvLG983R.js";import"./index-B-EIevQb.js";import"./index-CjvFBH5-.js";import"./useEventCallback-CnE_RJva.js";import"./SkeletonBar-Bi99HG7c.js";import"./LoadingCell-BADy_T3j.js";import"./ColumnConfigDialog-dMBAE_Bg.js";import"./DraggableList-CB5et2oc.js";import"./search-DO24WHTI.js";import"./Input-BoS4yQSc.js";import"./useControlled-DdoeZPFa.js";import"./Button-D89LqMeP.js";import"./small-cross-CjoP5etI.js";import"./ActionButton-DPMqraix.js";import"./Checkbox-CRkJSNAJ.js";import"./useValueChanged-C8_UfD93.js";import"./CollapsiblePanel-Chc1gEI_.js";import"./MultiColumnSortDialog-CYLBLJyV.js";import"./MenuTrigger-Dhoyxi7v.js";import"./CompositeItem-CPdzs_zJ.js";import"./ToolbarRootContext-wkwm_H2V.js";import"./getDisabledMountTransitionStyles-Ndk95izG.js";import"./getPseudoElementBounds-CZDJgWkH.js";import"./chevron-down-C_1zArjr.js";import"./index-5sndl28g.js";import"./error-b08krvJC.js";import"./BaseCbacBanner-CFgS8zqR.js";import"./makeExternalStore-tEc9bJ3H.js";import"./Tooltip-BFA62Jc4.js";import"./PopoverPopup-CUfcT_az.js";import"./debounce-7jKtScuE.js";import"./tick-DLmYlJNm.js";import"./DropdownField-keYRULb0.js";import"./isEqual-D7-eQiR0.js";import"./withOsdkMetrics-DvI-Ja_4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
