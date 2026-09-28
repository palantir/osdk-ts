import{j as r}from"./iframe-BDPC3MGU.js";import{O as b}from"./object-table-Bel4yIfS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Eqdy-FSR.js";import{u as g}from"./useOsdkClient-D8d5JuS7.js";import"./preload-helper-DqLc1wpe.js";import"./Table-Dgr-gIm8.js";import"./index-wr-Wa-rJ.js";import"./Dialog-DTR1MYhK.js";import"./cross-DYURuHsA.js";import"./svgIconContainer-BbA1ZoWr.js";import"./useBaseUiId-98Vlp7TA.js";import"./InternalBackdrop-Cgbf8eQA.js";import"./composite-BmeraXkj.js";import"./index-BCVo02gU.js";import"./index--VX9rzYc.js";import"./index-BRzzcBKu.js";import"./useEventCallback-ButC9m8B.js";import"./SkeletonBar-CsWliIs4.js";import"./LoadingCell-Dqufu0HX.js";import"./ColumnConfigDialog-By9TyQEv.js";import"./DraggableList-DQNrHfSk.js";import"./search-CHOuY8gu.js";import"./Input-q3l62r8C.js";import"./useControlled-BH2-CGJ0.js";import"./Button-BuWPanNZ.js";import"./small-cross-Cmb1RV_x.js";import"./ActionButton-B2xYsKtl.js";import"./Checkbox-HciCFw3O.js";import"./useValueChanged-CMbbAfeq.js";import"./CollapsiblePanel-hce81KCR.js";import"./MultiColumnSortDialog-BWmVf4xL.js";import"./MenuTrigger-DYNmmqOz.js";import"./CompositeItem-Glk6Ljpg.js";import"./ToolbarRootContext-gDYw7M9I.js";import"./getDisabledMountTransitionStyles-Ca5SDU94.js";import"./getPseudoElementBounds-1wBk6-FK.js";import"./chevron-down-B2ocyj_k.js";import"./index-DH6huj2W.js";import"./error-BZbzk8xv.js";import"./BaseCbacBanner-BBCBr5LI.js";import"./makeExternalStore-zlVMHsWj.js";import"./Tooltip-B8W6XcXq.js";import"./PopoverPopup-Dx8llI49.js";import"./debounce-Dm3_movg.js";import"./tick-Csqr7cIl.js";import"./DropdownField-zGmV-Acf.js";import"./isEqual-C7uizYde.js";import"./withOsdkMetrics-Dge8_qYA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
