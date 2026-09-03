import{j as r}from"./iframe-O11Zq4F1.js";import{O as b}from"./object-table-gqoQGdoV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dn0x9-R3.js";import{u as g}from"./useOsdkClient-BQdHiZjk.js";import"./preload-helper-DlwmVUfx.js";import"./Table-CPb-_s45.js";import"./index-JCX27zQ_.js";import"./Dialog-BThl-qtY.js";import"./cross-CgbZ2Lur.js";import"./svgIconContainer-niJASFYH.js";import"./useBaseUiId-Cu9t8yGo.js";import"./InternalBackdrop-Bmok97NN.js";import"./composite-CXM_4XfT.js";import"./index-D4Y1diP4.js";import"./index-CZs8bj4M.js";import"./index-BOHBCutb.js";import"./useEventCallback-BYLo8DjX.js";import"./SkeletonBar-Dbg84bcv.js";import"./LoadingCell-BKtbAGZ7.js";import"./ColumnConfigDialog-B6e2BpfX.js";import"./DraggableList-D4B0pU47.js";import"./search-Cj99250y.js";import"./Input-KS7sPzNw.js";import"./useControlled-B8YHL1ap.js";import"./Button-C08V9i3x.js";import"./small-cross-6TCOHgWS.js";import"./ActionButton-DwwC6gXd.js";import"./Checkbox-CxNgOj-_.js";import"./useValueChanged-D4OR8Hts.js";import"./CollapsiblePanel-DrNBsuTo.js";import"./MultiColumnSortDialog-aKqJlpMT.js";import"./MenuTrigger-BB0NeSp-.js";import"./CompositeItem-DLmG3BnZ.js";import"./ToolbarRootContext-tyPorBFs.js";import"./getDisabledMountTransitionStyles-BgcrLDKx.js";import"./getPseudoElementBounds-B3Xs9Miq.js";import"./chevron-down-vcyh2ihf.js";import"./index-BZM-lKSg.js";import"./error-Cg1niATE.js";import"./BaseCbacBanner-BSLN0WdA.js";import"./makeExternalStore-DxYkAphJ.js";import"./Tooltip-B3y41h0B.js";import"./PopoverPopup-DJWamGiS.js";import"./debounce-Dl6mTpZa.js";import"./tick-BEQDUDLL.js";import"./DropdownField-CiK_mq9u.js";import"./isEqual-BFwmF2pp.js";import"./withOsdkMetrics-5_bEfQA7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
