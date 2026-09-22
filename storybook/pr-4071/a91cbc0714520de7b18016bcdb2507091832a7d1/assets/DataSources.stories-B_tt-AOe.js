import{j as r}from"./iframe-m0ugFJ_n.js";import{O as b}from"./object-table-DmJiYE4x.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C_v0cxk1.js";import{u as g}from"./useOsdkClient-BOwEJ48t.js";import"./preload-helper-KeOwj4qj.js";import"./Table-BEcMkdo0.js";import"./index-CrjphzT5.js";import"./Dialog-pTZq51tA.js";import"./cross-BQwE0Wie.js";import"./svgIconContainer-Y7-V7Oui.js";import"./useBaseUiId-DnAq2IXn.js";import"./InternalBackdrop-CRgyIZok.js";import"./composite-CkzXePM6.js";import"./index-FGKMGa8g.js";import"./index-Cv1cYxMy.js";import"./index-CJxlEYMP.js";import"./useEventCallback-Cuom9Pax.js";import"./SkeletonBar-C5qsauJF.js";import"./LoadingCell-RgHR2Fb3.js";import"./ColumnConfigDialog-D-PMs8be.js";import"./DraggableList-QqAiUCMs.js";import"./search-BBD2MUX2.js";import"./Input-BmzIYnaH.js";import"./useControlled-Cbg37gEr.js";import"./Button-BYPOjnzJ.js";import"./small-cross-DLIPGDB9.js";import"./ActionButton-75hIFgs2.js";import"./Checkbox-ISw-vbZ6.js";import"./useValueChanged-CtZddPP0.js";import"./CollapsiblePanel-D7qJlDW0.js";import"./MultiColumnSortDialog-Be6oA0fc.js";import"./MenuTrigger-B-okH4na.js";import"./CompositeItem-DwEHzZa4.js";import"./ToolbarRootContext-DuKgQD9s.js";import"./getDisabledMountTransitionStyles-CQzsyu-N.js";import"./getPseudoElementBounds-B0jU5gJz.js";import"./chevron-down-CRZsF1SF.js";import"./index-BchCr8yn.js";import"./error-C7YpCdj7.js";import"./BaseCbacBanner-BTNPmbKP.js";import"./makeExternalStore-gYyz61fG.js";import"./Tooltip-BRPBf4sJ.js";import"./PopoverPopup-DtCGLRJW.js";import"./debounce-B4kVVAWf.js";import"./tick-Bn7hFcMc.js";import"./DropdownField-Dv2YzHOX.js";import"./isEqual-DIxe2VxH.js";import"./withOsdkMetrics-B3S-uWw6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
