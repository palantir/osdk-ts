import{j as r}from"./iframe-6qR11Bx0.js";import{O as b}from"./object-table-BfBi8LVj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C_75i-Qk.js";import{u as g}from"./useOsdkClient-DnvX8IID.js";import"./preload-helper-B_Yy5CIH.js";import"./Table-DDiHOAxl.js";import"./index-i2tOtYR_.js";import"./Dialog-FvP3Lxw9.js";import"./cross-D7PjcS8z.js";import"./svgIconContainer-XlgOHF0q.js";import"./useBaseUiId-DlgiHfEc.js";import"./InternalBackdrop-AgwqTTbq.js";import"./composite-D16UZS_I.js";import"./index-B2X8PE9_.js";import"./index-DsOGlaAg.js";import"./index-BV0-TMAO.js";import"./useEventCallback-SlOcZxmd.js";import"./SkeletonBar-ycqW4z_S.js";import"./LoadingCell-B44i1nOx.js";import"./ColumnConfigDialog-Dkj9KAW2.js";import"./DraggableList-BOkavqxO.js";import"./search-ByKRFVJz.js";import"./Input-5sdYtdOv.js";import"./useControlled-Da-RuFP2.js";import"./Button-D5kP-zjx.js";import"./small-cross-C7nTj5uN.js";import"./ActionButton-u_S0n9qI.js";import"./Checkbox-yEpVdiPr.js";import"./useValueChanged-BZSxO_it.js";import"./CollapsiblePanel-DoWV0n-r.js";import"./MultiColumnSortDialog-CK2K0niX.js";import"./MenuTrigger-BQRJetgV.js";import"./CompositeItem-BVVIYYWe.js";import"./ToolbarRootContext-BFseEUjE.js";import"./getDisabledMountTransitionStyles-E2XqG_eb.js";import"./getPseudoElementBounds-CUAgg5Mk.js";import"./chevron-down-C16wVk20.js";import"./index-DPYKBcvA.js";import"./error-CXAefsdr.js";import"./BaseCbacBanner-CLTdhhiG.js";import"./makeExternalStore-UJLHcmUF.js";import"./Tooltip-BTLykIEU.js";import"./PopoverPopup-DGPSPBmG.js";import"./debounce-C6dFJgss.js";import"./tick-B7N7dfWe.js";import"./DropdownField-DUtfZmSY.js";import"./isEqual-CwgWlVS2.js";import"./withOsdkMetrics-5m6-j_Ap.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
