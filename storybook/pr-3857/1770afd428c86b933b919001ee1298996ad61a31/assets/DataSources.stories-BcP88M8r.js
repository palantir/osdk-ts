import{j as r}from"./iframe-CpI7FB-T.js";import{O as b}from"./object-table-Dexfdtqv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CizDLm1-.js";import{u as g}from"./useOsdkClient-I2HrApfP.js";import"./preload-helper-B_hE2pBz.js";import"./Table-REyfQMd2.js";import"./index-Dd3y5ah7.js";import"./Dialog-KBoNfEPI.js";import"./cross-B20tfhAE.js";import"./svgIconContainer-CEg1T5tk.js";import"./useBaseUiId-CmfBo7dj.js";import"./InternalBackdrop-DZmYO_AD.js";import"./composite-BR65LiyS.js";import"./index-BPRvbx56.js";import"./index-DosPUwQU.js";import"./index-BDUgGgA4.js";import"./useEventCallback-B9o36XEn.js";import"./SkeletonBar-ULydxLuj.js";import"./LoadingCell-Z0bla46n.js";import"./ColumnConfigDialog-D-rJXor5.js";import"./DraggableList-xopIjLi6.js";import"./search-e6ClQ_VS.js";import"./Input-DdDoLRi6.js";import"./useControlled-CzotDDz1.js";import"./isEqual-DDC7Ff_s.js";import"./isObject-tXEwv9PV.js";import"./Button-CLOyqypH.js";import"./ActionButton-U9TB8zhE.js";import"./Checkbox-BH0H9xke.js";import"./useValueChanged-C9asjQNV.js";import"./CollapsiblePanel-CbWZAJxM.js";import"./MultiColumnSortDialog-CE_KwoFj.js";import"./MenuTrigger-C1BfiMac.js";import"./CompositeItem-CCWclQxp.js";import"./ToolbarRootContext-Bq8pd6_h.js";import"./getDisabledMountTransitionStyles-BO8zIF7H.js";import"./getPseudoElementBounds-sBl5ZUwT.js";import"./chevron-down-JaiM5xR9.js";import"./index-DzEbTyMP.js";import"./error-DM5U_BtV.js";import"./BaseCbacBanner-Dr_UpDH_.js";import"./makeExternalStore-NLBkDu7_.js";import"./Tooltip-EwE4yKNF.js";import"./PopoverPopup-CURpd358.js";import"./toNumber-yBJeXRUy.js";import"./tick-DdhDmdN8.js";import"./DropdownField-DL3w_3o5.js";import"./withOsdkMetrics-ADEd6SH7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
