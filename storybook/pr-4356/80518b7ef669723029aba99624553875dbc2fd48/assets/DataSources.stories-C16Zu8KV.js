import{j as r}from"./iframe-CEcdsVJq.js";import{O as b}from"./object-table-kly_C4hy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CB7mSSsB.js";import{u as g}from"./useOsdkClient-BdsS4ftD.js";import"./preload-helper-CwdDwPFb.js";import"./Table-BuBnqDbM.js";import"./index-CYAMjkkg.js";import"./Dialog-BcKkBsF0.js";import"./cross-MZ6bg35c.js";import"./svgIconContainer-CM3Ra624.js";import"./useBaseUiId-DGCtOfjA.js";import"./InternalBackdrop-CrdF0gp5.js";import"./composite-Bw-yzexU.js";import"./index-ByC2L83v.js";import"./index-Dt5JenlP.js";import"./index-BqhjR31D.js";import"./useEventCallback-CoOaDXAk.js";import"./SkeletonBar-B0hbq4FE.js";import"./LoadingCell-DelqVOB6.js";import"./ColumnConfigDialog-Dl-d7U0a.js";import"./DraggableList-B5vt0VaS.js";import"./search-DyPNv9j0.js";import"./Input-tSgTwGI-.js";import"./useControlled-oPldRElz.js";import"./Button-DE6hvZhq.js";import"./small-cross-BAIe5upx.js";import"./ActionButton-O2R9i3U9.js";import"./Checkbox-CQCkwFw-.js";import"./useValueChanged-HH9MPtoe.js";import"./CollapsiblePanel-CfmGyi20.js";import"./MultiColumnSortDialog-CB7cRcpw.js";import"./MenuTrigger-DIyqzTda.js";import"./CompositeItem-DPYzCgzB.js";import"./ToolbarRootContext-CHwqmaMQ.js";import"./getDisabledMountTransitionStyles-CU0LRjik.js";import"./getPseudoElementBounds-CdIwqNAh.js";import"./chevron-down-C-qVIMYg.js";import"./index-BWNvfyzP.js";import"./error-B4aXreAp.js";import"./BaseCbacBanner-CFSt_HvR.js";import"./makeExternalStore-BPRH1LKG.js";import"./Tooltip-bo6C_98m.js";import"./PopoverPopup-DUz2sdVN.js";import"./debounce-CoMjtpmw.js";import"./tick-CP_0B18b.js";import"./DropdownField-ZmhVFUXY.js";import"./isEqual-BMJgaJ9U.js";import"./withOsdkMetrics-Mp4Rwj5-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
