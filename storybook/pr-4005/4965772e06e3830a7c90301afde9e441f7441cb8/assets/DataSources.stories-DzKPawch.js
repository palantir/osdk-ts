import{j as r}from"./iframe-BgIqeTr7.js";import{O as b}from"./object-table-BgPRUOdG.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CaTYG_UF.js";import{u as g}from"./useOsdkClient-DqUO6npy.js";import"./preload-helper-BbBE06U6.js";import"./Table-DRFmM6r6.js";import"./index-OeIAiwUu.js";import"./Dialog-BBAVymUP.js";import"./cross-Wbc8t1qS.js";import"./svgIconContainer-BtrJOEHF.js";import"./useBaseUiId-CgOsBxCj.js";import"./InternalBackdrop-DMG6Kgao.js";import"./composite-BF8O5dbv.js";import"./index-D9MNyfPv.js";import"./index-ef3bSd-w.js";import"./index-Zndx6d0R.js";import"./useEventCallback-NCRuje_c.js";import"./SkeletonBar-C2xca__T.js";import"./LoadingCell-Czld3W6q.js";import"./ColumnConfigDialog-juQqa1AG.js";import"./DraggableList-69AwVVwc.js";import"./search-BF7QrwO6.js";import"./Input-Ccm-R2od.js";import"./useControlled-DoFIiJ6c.js";import"./Button-WSqWRGZH.js";import"./small-cross-CIyGzgJb.js";import"./ActionButton-CAHKDpnU.js";import"./Checkbox-kISLw2AE.js";import"./useValueChanged-DLQjxulr.js";import"./CollapsiblePanel-CAigpV3T.js";import"./MultiColumnSortDialog-B4RUkkWy.js";import"./MenuTrigger-B4L1Oaqi.js";import"./CompositeItem-D2E5MTZ0.js";import"./ToolbarRootContext-XHaZZ7gx.js";import"./getDisabledMountTransitionStyles-DcXdOVhf.js";import"./getPseudoElementBounds-CACZ6uIC.js";import"./chevron-down-CZAmY7BW.js";import"./index-DA3CS0qW.js";import"./error-DvPLPT6J.js";import"./BaseCbacBanner-D_K-65aL.js";import"./makeExternalStore-_B_am4pH.js";import"./Tooltip-B4cDBo-J.js";import"./PopoverPopup-DNjj31SM.js";import"./debounce-l2WN3UdY.js";import"./tick-BuwupeKW.js";import"./DropdownField-q8PA-aTt.js";import"./isEqual-XkXlL3kg.js";import"./withOsdkMetrics-D9CYPZjX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
