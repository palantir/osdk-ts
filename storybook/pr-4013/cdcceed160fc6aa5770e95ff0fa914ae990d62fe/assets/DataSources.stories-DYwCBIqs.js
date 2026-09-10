import{j as r}from"./iframe-DbFztG_g.js";import{O as b}from"./object-table-DakC0UvK.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DnWUIVAn.js";import{u as g}from"./useOsdkClient-Ds-rIrkC.js";import"./preload-helper-5yPlXN3h.js";import"./Table-DXhvFm28.js";import"./index-BNGbb9rK.js";import"./Dialog-q53uo3YQ.js";import"./cross-DGv6zSaG.js";import"./svgIconContainer-BS_91pYI.js";import"./useBaseUiId-BJNUcsKi.js";import"./InternalBackdrop-CURYnF5m.js";import"./composite-DmkJ6YWF.js";import"./index-CjeOPmmS.js";import"./index-DUEaSppR.js";import"./index-B0uGE4ks.js";import"./useEventCallback-F0l_MlCv.js";import"./SkeletonBar-D8SjsLKR.js";import"./LoadingCell-Cj4TVOF3.js";import"./ColumnConfigDialog-Dn26_iFA.js";import"./DraggableList-C3mC8XZq.js";import"./search-BDnZaHng.js";import"./Input-C-K2OOHO.js";import"./useControlled-CtpQZwRP.js";import"./Button-UBStgghd.js";import"./small-cross-CiVArRcv.js";import"./ActionButton-DsNauwQt.js";import"./Checkbox-Yc4IFuTT.js";import"./useValueChanged-DOektkSI.js";import"./CollapsiblePanel-DDI1QtmT.js";import"./MultiColumnSortDialog-COhhLmwJ.js";import"./MenuTrigger-ZUe1vObH.js";import"./CompositeItem-Of_bmSJ2.js";import"./ToolbarRootContext-DsXUgMuU.js";import"./getDisabledMountTransitionStyles-Dc2XzWk7.js";import"./getPseudoElementBounds-CpWrqgEu.js";import"./chevron-down-teVJIekx.js";import"./index-aejPdgJq.js";import"./error-0lPH6zk9.js";import"./BaseCbacBanner-DWr_tjn4.js";import"./makeExternalStore-BJK_8FWf.js";import"./Tooltip-giWbl0Po.js";import"./PopoverPopup-DN6pjWYz.js";import"./debounce-CDd2V2U5.js";import"./tick-B71QKXh9.js";import"./DropdownField-DfoJZ2WC.js";import"./isEqual-Bot5OO9s.js";import"./withOsdkMetrics-C9cTzLSh.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
