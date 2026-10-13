import{j as r}from"./iframe-CBRNe0Dg.js";import{O as b}from"./object-table-BAGMdVtf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DiKPibO6.js";import{u as g}from"./useOsdkClient-AKuj0MEq.js";import"./preload-helper-DJi7bbUl.js";import"./Table-B6sIuEtI.js";import"./index-BSRDLVEM.js";import"./Dialog-7DhHMlhh.js";import"./cross-DAsoWhzO.js";import"./svgIconContainer-BBVFHmV2.js";import"./useBaseUiId-D_HMOfD5.js";import"./InternalBackdrop-KEsOgzDz.js";import"./composite-BuD5KbGT.js";import"./index-DyLUaQFL.js";import"./index-BL4-PH8Q.js";import"./index-BiTypZqh.js";import"./useEventCallback-D4SpnnAU.js";import"./SkeletonBar-olnbAch4.js";import"./LoadingCell-Bbdx2Tuz.js";import"./ColumnConfigDialog-DfhZEQxL.js";import"./DraggableList-CkYWh6sa.js";import"./search-vRSw7SVB.js";import"./Input-DE2kadHj.js";import"./useControlled-DvLu4sEA.js";import"./Button-BwFbzqgO.js";import"./small-cross-PLNqiuOL.js";import"./ActionButton-DKIq8eOB.js";import"./Checkbox-C94siIa5.js";import"./useValueChanged-CFTTzEg_.js";import"./CollapsiblePanel-B4faU3Bh.js";import"./MultiColumnSortDialog-DsDFOMHG.js";import"./MenuTrigger-DVdt-2IF.js";import"./CompositeItem-Di3J0NmB.js";import"./ToolbarRootContext-DULN64W3.js";import"./getDisabledMountTransitionStyles-BaZsOBxZ.js";import"./getPseudoElementBounds-B95LpML9.js";import"./chevron-down-B0oPEK-O.js";import"./index-BZ5chbDc.js";import"./error-BdLYnG0k.js";import"./BaseCbacBanner-r6MsogDY.js";import"./makeExternalStore-BNcpWlh9.js";import"./Tooltip--QZaQjFA.js";import"./PopoverPopup-09yaNLgW.js";import"./debounce-B56v9xFw.js";import"./tick-B2SeXnIY.js";import"./DropdownField-BFeUwC4l.js";import"./isEqual-tg2tvR8k.js";import"./withOsdkMetrics-BL4vab8_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
