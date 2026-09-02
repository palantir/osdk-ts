import{j as r}from"./iframe-NaI848Pw.js";import{O as b}from"./object-table-DGgHE6S2.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers--RiqnGKz.js";import{u as g}from"./useOsdkClient-56kdB1m-.js";import"./preload-helper-Da-cK7y6.js";import"./Table-B2aU0OJ_.js";import"./index-ByD4yBnp.js";import"./Dialog-ylH5D2Mp.js";import"./cross-DZQZ8aN4.js";import"./svgIconContainer-ByuHBSGQ.js";import"./useBaseUiId-1fZcoCV9.js";import"./InternalBackdrop-Cv3pqYz2.js";import"./composite-C-xyZ2AO.js";import"./index-DK-1aFjN.js";import"./index-uEx2XW2m.js";import"./index-DcFw2uH3.js";import"./useEventCallback-_nGrLZqG.js";import"./SkeletonBar-Bu2x3QDl.js";import"./LoadingCell-BUGk1zUZ.js";import"./ColumnConfigDialog-DPKcVM17.js";import"./DraggableList-DNjSWAxt.js";import"./search-BU5VoOWM.js";import"./Input-CiWsOGB4.js";import"./useControlled-DJRTNEAD.js";import"./Button-C5kZ5tdC.js";import"./small-cross-DMotjJBE.js";import"./ActionButton-3u2nKuiZ.js";import"./Checkbox-JyHzB6tA.js";import"./useValueChanged-D7TKryoJ.js";import"./CollapsiblePanel-tRloNykG.js";import"./MultiColumnSortDialog-3CJF9g3e.js";import"./MenuTrigger-CpUNPK5g.js";import"./CompositeItem-Ci20bb3i.js";import"./ToolbarRootContext-wPP71u3n.js";import"./getDisabledMountTransitionStyles-B4FRcemG.js";import"./getPseudoElementBounds-B9b_nORq.js";import"./chevron-down-Cd6DrKf8.js";import"./index-C7BYYXHx.js";import"./error-DzctpUji.js";import"./BaseCbacBanner-GlkTUOC4.js";import"./makeExternalStore-BKziC80i.js";import"./Tooltip-C9WwAWNN.js";import"./PopoverPopup-DTLzPYyL.js";import"./debounce-BGQuEffv.js";import"./tick-zOXaxw1M.js";import"./DropdownField-BG_oDUOB.js";import"./isEqual-z-7Yb-t2.js";import"./withOsdkMetrics-Bsb41CEs.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
