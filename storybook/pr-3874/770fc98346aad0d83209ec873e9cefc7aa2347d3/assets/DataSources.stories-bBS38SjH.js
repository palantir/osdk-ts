import{j as r}from"./iframe-UkB5vgVG.js";import{O as b}from"./object-table--6JN6yLk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D1ZHUy3z.js";import{u as g}from"./useOsdkClient-CN5kE_kM.js";import"./preload-helper-CVf8llwS.js";import"./Table-CjCohFn6.js";import"./index-qp1j7wJC.js";import"./Dialog-CZ_x9J9x.js";import"./cross-BdVzNhJI.js";import"./svgIconContainer-DayxyL3r.js";import"./useBaseUiId-Dn0EoDTA.js";import"./InternalBackdrop-C7U9xWxA.js";import"./composite-BGwzEdrp.js";import"./index-Bi4xYXRw.js";import"./index-e4diuhxy.js";import"./index-DfHcWnOV.js";import"./useEventCallback-Ct4SjjN5.js";import"./SkeletonBar-jc8wsvoD.js";import"./LoadingCell-Drwaf3vU.js";import"./ColumnConfigDialog-DICfUWLH.js";import"./DraggableList-DezpGo4i.js";import"./search-CsKKjabz.js";import"./Input-CB29R5Tw.js";import"./useControlled-Clgvd4Wq.js";import"./Button-C-9R3Dge.js";import"./small-cross-BhTFlBDt.js";import"./ActionButton-gCoOaLsR.js";import"./Checkbox-D2_TGGsM.js";import"./useValueChanged-8upR9kV4.js";import"./CollapsiblePanel-OMF1Q75F.js";import"./MultiColumnSortDialog-COAhezi2.js";import"./MenuTrigger-qboTs4ql.js";import"./CompositeItem-UlYd9APp.js";import"./ToolbarRootContext-m-lFbgU6.js";import"./getDisabledMountTransitionStyles-B6fypB_z.js";import"./getPseudoElementBounds-BaPROP5U.js";import"./chevron-down-CKWbFOWn.js";import"./index-CLbtj4dS.js";import"./error-uoew32RU.js";import"./BaseCbacBanner-C9O888Wq.js";import"./makeExternalStore-B3cxenBa.js";import"./Tooltip-BGpYaoin.js";import"./PopoverPopup-CiCjFpg3.js";import"./debounce-OlKnPm4h.js";import"./tick-Blswzu6W.js";import"./DropdownField-8gcZzb7t.js";import"./isEqual-J8qJ1onM.js";import"./withOsdkMetrics-dDcxjbTR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
