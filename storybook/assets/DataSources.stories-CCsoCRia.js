import{j as r}from"./iframe-wexfgXTt.js";import{O as b}from"./object-table-CFybmj8k.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-lR64lDLW.js";import{u as g}from"./useOsdkClient-CEoThPb2.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C9v061-q.js";import"./index-5jQIelx0.js";import"./Dialog-BQZf2JRs.js";import"./cross-FTqBbSE_.js";import"./svgIconContainer-BE9D8hDG.js";import"./useBaseUiId-tTVgJH6a.js";import"./InternalBackdrop-CDWG4aG1.js";import"./composite-CdBx6VEN.js";import"./index-BurzpHQL.js";import"./index-TxpmNhC2.js";import"./index-DOxlq5kL.js";import"./useEventCallback-CcaR15TA.js";import"./SkeletonBar-DJLe3kJ-.js";import"./LoadingCell-DAJAPapT.js";import"./ColumnConfigDialog-L08jlpQ_.js";import"./DraggableList-Ccq_tIpn.js";import"./search-XEMgs_jY.js";import"./Input-CWdLE-mu.js";import"./useControlled-Brxeqh9t.js";import"./Button-ChxS4llL.js";import"./small-cross-DboWXgDg.js";import"./ActionButton-VgKWBxX4.js";import"./Checkbox-DrBlztvV.js";import"./useValueChanged-Fh4Y4yhu.js";import"./CollapsiblePanel-OJ6hTRI8.js";import"./MultiColumnSortDialog-U-Q4J8yu.js";import"./MenuTrigger-B80w7aFS.js";import"./CompositeItem-vT5UWhUx.js";import"./ToolbarRootContext-Co9O2tJK.js";import"./getDisabledMountTransitionStyles-oJIOUneY.js";import"./getPseudoElementBounds-CwltS7Dj.js";import"./chevron-down-D1BLGLwp.js";import"./index-KggX9Fax.js";import"./error-B2QY0TvC.js";import"./BaseCbacBanner-CeE6PuNF.js";import"./makeExternalStore-CYRdbRiy.js";import"./Tooltip-Dm1DzSzF.js";import"./PopoverPopup-B0NfuOs8.js";import"./debounce-ZweGI_tC.js";import"./tick-D1NWQC9V.js";import"./DropdownField-Cv81jICY.js";import"./isEqual-BLiyP4A_.js";import"./withOsdkMetrics-C9edCeaC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
