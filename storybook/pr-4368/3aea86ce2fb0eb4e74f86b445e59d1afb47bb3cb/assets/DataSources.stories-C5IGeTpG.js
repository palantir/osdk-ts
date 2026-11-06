import{j as r}from"./iframe-DTR6D-RF.js";import{O as b}from"./object-table-Bjfm0_ZT.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DZnVlEzC.js";import{u as g}from"./useOsdkClient-s4ovKcdr.js";import"./preload-helper-a_j-25GL.js";import"./Table-B0acF-0Q.js";import"./index-D7jWhYyZ.js";import"./Dialog-DqgJLJgO.js";import"./cross-DUXytXdv.js";import"./svgIconContainer-CTdZIA2H.js";import"./useBaseUiId-CSnUW2G1.js";import"./InternalBackdrop-CY4cyQPU.js";import"./composite-DubVH8wK.js";import"./index-CIoynBUP.js";import"./index-CeaWSZor.js";import"./index-DwZqbG9c.js";import"./useEventCallback-CPGNRTIC.js";import"./SkeletonBar-DG2N76Ak.js";import"./LoadingCell-Dk35W7vs.js";import"./ColumnConfigDialog-CF6C06HS.js";import"./DraggableList-CjhpS4Hz.js";import"./search-CA4ezTkI.js";import"./Input-BfVNpYWX.js";import"./useControlled-BQyYOX0S.js";import"./Button-B369yMXX.js";import"./small-cross-_n8UDI8I.js";import"./ActionButton-odMXA6JR.js";import"./Checkbox-C4M9YdoL.js";import"./useValueChanged-uq3nMm5M.js";import"./CollapsiblePanel-Cb8omPWi.js";import"./MultiColumnSortDialog-COoHnAmD.js";import"./MenuTrigger-BPyZedSc.js";import"./CompositeItem-DiX4k7Pe.js";import"./ToolbarRootContext-CUq0HOW2.js";import"./getDisabledMountTransitionStyles-sZ7HosF-.js";import"./getPseudoElementBounds-Bk-aKJSe.js";import"./chevron-down-D061nHxl.js";import"./index-DOZx46pQ.js";import"./error-ComocNo0.js";import"./BaseCbacBanner-CYKrO8dC.js";import"./makeExternalStore-HP359Ggt.js";import"./Tooltip-M1ezUcrB.js";import"./isObject-BdCdgIbL.js";import"./debounce-C9Yqr-CS.js";import"./tick-MViIMcR9.js";import"./DropdownField-pISV7PG6.js";import"./isEqual-CGllARYm.js";import"./_baseIsEqual-Ds4CNB4I.js";import"./withOsdkMetrics-BM7BKbHu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
