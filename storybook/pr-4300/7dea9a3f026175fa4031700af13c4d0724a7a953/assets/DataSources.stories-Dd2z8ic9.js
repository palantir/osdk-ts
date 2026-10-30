import{j as r}from"./iframe-D3mBTfqd.js";import{O as b}from"./object-table-BmSiyhH0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cibdx7Vx.js";import{u as g}from"./useOsdkClient-BXgSuM8y.js";import"./preload-helper-RhNKQ2Pa.js";import"./Table-D5-h2zwh.js";import"./index-DCS7OdDx.js";import"./Dialog-DbVEFERY.js";import"./cross-Cs7mtZ7v.js";import"./svgIconContainer-CwmlAS-2.js";import"./useBaseUiId-hynuT-IP.js";import"./InternalBackdrop-DNSxnLlU.js";import"./composite-BE_H9BAX.js";import"./index-YNTwsynL.js";import"./index-Ch5DNylK.js";import"./index-yxRsWDJt.js";import"./useEventCallback-CEvZMKXh.js";import"./SkeletonBar-BORqTxsq.js";import"./LoadingCell-Bx56T2Bi.js";import"./ColumnConfigDialog-DzzE2iwn.js";import"./DraggableList-DF47COil.js";import"./search-CxMCC1Wj.js";import"./Input-eLGPTS9w.js";import"./useControlled-k1vl1-pB.js";import"./Button-B0c6HnvU.js";import"./small-cross-C_POnZQE.js";import"./ActionButton-y2sXfkTG.js";import"./Checkbox-QvPT4pF7.js";import"./useValueChanged-i2iant8L.js";import"./CollapsiblePanel-GMK9kxHe.js";import"./MultiColumnSortDialog-C_VRaZdF.js";import"./MenuTrigger-DOHOHG30.js";import"./CompositeItem-20RMszAx.js";import"./ToolbarRootContext-DKBBgUjn.js";import"./getDisabledMountTransitionStyles-CltXDkvP.js";import"./getPseudoElementBounds-uAR-4phM.js";import"./chevron-down-CTo4p9pl.js";import"./index-BL026QrW.js";import"./error-ifBqoXQc.js";import"./BaseCbacBanner-Be8DWF3Z.js";import"./makeExternalStore-D3BDuZOH.js";import"./Tooltip-D4jJN_ia.js";import"./PopoverPopup-BlPyX7uT.js";import"./debounce-8v_G0MM7.js";import"./tick-Bdbhcehw.js";import"./DropdownField-BFO3Yx-p.js";import"./isEqual-BvS6zo9P.js";import"./withOsdkMetrics-Crg_ITzK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
