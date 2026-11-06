import{j as r}from"./iframe-Dxf4Pfii.js";import{O as b}from"./object-table-teUVeBQF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DMkq4rDE.js";import{u as g}from"./useOsdkClient-5XyyZIRW.js";import"./preload-helper-Ci8NMOYF.js";import"./Table-Dq5REfPe.js";import"./index-BPBHjHBt.js";import"./Dialog-mndqTSLP.js";import"./cross-COrhxFBC.js";import"./svgIconContainer-BdxGOMXV.js";import"./useBaseUiId-BBachgDn.js";import"./InternalBackdrop-CFrJwRy4.js";import"./composite-BAA7WPxj.js";import"./index-Dsk0oEX3.js";import"./index-DlHivqB_.js";import"./index-CA0xM10N.js";import"./useEventCallback-DZCNq0Gg.js";import"./SkeletonBar-DyvtAZ1q.js";import"./LoadingCell-C9sMEV6k.js";import"./ColumnConfigDialog-CCDthIHA.js";import"./DraggableList-CqWC8oEM.js";import"./search-BYBW1CEy.js";import"./Input-Dc5nJgGF.js";import"./useControlled-40F8gIyz.js";import"./Button-DiZtkqKs.js";import"./small-cross-CUKjKhkC.js";import"./ActionButton-ABdmTgM9.js";import"./Checkbox-xERkEuYE.js";import"./useValueChanged-CIVU-p1z.js";import"./CollapsiblePanel-B4bl4mBR.js";import"./MultiColumnSortDialog-U_EzV9Kr.js";import"./MenuTrigger-DZh473oa.js";import"./CompositeItem-6maKJylY.js";import"./ToolbarRootContext-CAbW4J_e.js";import"./getDisabledMountTransitionStyles-BKzkpdmr.js";import"./getPseudoElementBounds-BYX5JyBU.js";import"./chevron-down-DG4gq9Kw.js";import"./index-C6hYmHGr.js";import"./error-Cp32RNcr.js";import"./BaseCbacBanner-DXgTdQpZ.js";import"./makeExternalStore-DOGp9SoX.js";import"./Tooltip-DsvfSe4i.js";import"./PopoverPopup-DlIAjFIG.js";import"./debounce-CqpSqGTT.js";import"./tick--0CHJ2Jw.js";import"./DropdownField-4kbww5nN.js";import"./isEqual-O4AuTBeS.js";import"./withOsdkMetrics-DGJIUSZ9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
