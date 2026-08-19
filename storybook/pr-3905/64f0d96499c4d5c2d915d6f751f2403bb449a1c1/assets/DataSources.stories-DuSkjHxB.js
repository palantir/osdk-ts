import{j as r}from"./iframe-Wmfq-VZM.js";import{O as b}from"./object-table-DuFaRQDQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-z25Ml3Tp.js";import{u as g}from"./useOsdkClient-CNJuRTO6.js";import"./preload-helper-Du2S85FQ.js";import"./Table-gAslYiRN.js";import"./index-CS0Yy-a9.js";import"./Dialog-CMr0H3Ms.js";import"./cross-DVOMc_IS.js";import"./svgIconContainer-Dr38566j.js";import"./useBaseUiId-BxqdO-OV.js";import"./InternalBackdrop-Dt5EJaJf.js";import"./composite-D8Nselg9.js";import"./index-BACLQbWX.js";import"./index-Cyb_urLR.js";import"./index-CkgQRnS-.js";import"./useEventCallback-CFjZA5qB.js";import"./SkeletonBar-Dwj78qcB.js";import"./LoadingCell-tVyhyGyF.js";import"./ColumnConfigDialog-C-2FyhzQ.js";import"./DraggableList-4Q6sDfeT.js";import"./search-DztiYnhe.js";import"./Input-64OaWLA3.js";import"./useControlled-DYwC9uvx.js";import"./Button-KnZtOZhW.js";import"./small-cross-D2I3HjLn.js";import"./ActionButton-Cw-6679X.js";import"./Checkbox-BtVHm2N0.js";import"./useValueChanged-Dm27a27U.js";import"./CollapsiblePanel-Czhz75oi.js";import"./MultiColumnSortDialog-CAr0PnYK.js";import"./MenuTrigger-BYwMSIdZ.js";import"./CompositeItem-DfjKuZSp.js";import"./ToolbarRootContext-DDVqMWIS.js";import"./getDisabledMountTransitionStyles-DUfcCrkU.js";import"./getPseudoElementBounds-IxJEcHej.js";import"./chevron-down-BMFuph0I.js";import"./index-BXiERbEc.js";import"./error-DX3SW9eg.js";import"./BaseCbacBanner-ByUAxktr.js";import"./makeExternalStore-DELeA3LK.js";import"./Tooltip-CGPj4Dbd.js";import"./PopoverPopup-DK71CzjP.js";import"./debounce-DwY3sqQK.js";import"./tick-CWFk4NDt.js";import"./DropdownField-DrVsqmrK.js";import"./isEqual-BBQhxmN8.js";import"./withOsdkMetrics-Csx3CAie.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
