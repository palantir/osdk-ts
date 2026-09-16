import{j as r}from"./iframe-BOatYE2J.js";import{O as b}from"./object-table-B_GKwaoz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-qvVsQxOW.js";import{u as g}from"./useOsdkClient-DdxPj0N7.js";import"./preload-helper-Chit4ifE.js";import"./Table-2wznzWpW.js";import"./index-BTbb2drj.js";import"./Dialog-BwPuGRRl.js";import"./cross-DZBv_JyD.js";import"./svgIconContainer-BIZPnmJE.js";import"./useBaseUiId-C3kAyh59.js";import"./InternalBackdrop-B0G1EUFd.js";import"./composite-Cutn8tDa.js";import"./index-CYDTlvor.js";import"./index-B1tLDNpR.js";import"./index-CxfJdBYp.js";import"./useEventCallback-CHJ8IA9Z.js";import"./SkeletonBar-DBIjsYWu.js";import"./LoadingCell-d-h7484d.js";import"./ColumnConfigDialog-rxN8c4np.js";import"./DraggableList-DJcegf_n.js";import"./search-DeiNtXAA.js";import"./Input-CNyJfF3s.js";import"./useControlled-Gz1ZIwEo.js";import"./Button-BPHruMxe.js";import"./small-cross-Cr4POQeq.js";import"./ActionButton-D0XX66qy.js";import"./Checkbox-Cy69mI4B.js";import"./useValueChanged-DaoI3wNN.js";import"./CollapsiblePanel-DuRPtwt5.js";import"./MultiColumnSortDialog-BTXotG44.js";import"./MenuTrigger-aW11Js_E.js";import"./CompositeItem-Cc_WknAx.js";import"./ToolbarRootContext-DP6Z5eRQ.js";import"./getDisabledMountTransitionStyles-C5-4kkSQ.js";import"./getPseudoElementBounds-D7Flotzx.js";import"./chevron-down-qv6CxIZl.js";import"./index-C7IRvIDp.js";import"./error-SJA0nUb8.js";import"./BaseCbacBanner-PumyHqdF.js";import"./makeExternalStore-uURBDsal.js";import"./Tooltip-BrfRi3aQ.js";import"./PopoverPopup-BHiQJeAc.js";import"./debounce-CCaPPTId.js";import"./tick-Dz18GSdv.js";import"./DropdownField-DbWikUpM.js";import"./isEqual-DbaqOO8-.js";import"./withOsdkMetrics-C8K4o6bx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
