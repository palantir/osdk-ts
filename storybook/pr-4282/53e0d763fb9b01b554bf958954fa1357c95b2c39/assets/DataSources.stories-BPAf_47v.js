import{j as r}from"./iframe-nukQkA9I.js";import{O as b}from"./object-table-K9D0nuN0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BdSS3Cz9.js";import{u as g}from"./useOsdkClient-DiA-yxQE.js";import"./preload-helper-SAYG1EIe.js";import"./Table-DKXqaPRr.js";import"./index-D-GlitYq.js";import"./Dialog-Dnpt6yRQ.js";import"./cross-AUKdXd6S.js";import"./svgIconContainer-BRLU7q7E.js";import"./useBaseUiId-DDz0NCTS.js";import"./InternalBackdrop-a-wOXysB.js";import"./composite-C4ibImfR.js";import"./index-C3FqsozF.js";import"./index-BNEnQN8B.js";import"./index-DB5tfdIB.js";import"./useEventCallback-D6wC1Sto.js";import"./SkeletonBar-Bo4glzOY.js";import"./LoadingCell-zTTgdgYS.js";import"./ColumnConfigDialog-Djcvk-p7.js";import"./DraggableList-DfxHwUAO.js";import"./search-DU9QOFIa.js";import"./Input-BpkcbvD3.js";import"./useControlled-CCaNPmgV.js";import"./Button-DH7_1I4V.js";import"./small-cross-Djgqv-i1.js";import"./ActionButton-CRB-SEkc.js";import"./Checkbox-DuAOV7nQ.js";import"./useValueChanged-ChdRJ_58.js";import"./CollapsiblePanel-Cjaojbm_.js";import"./MultiColumnSortDialog-RiPM62Ra.js";import"./MenuTrigger-eSY_j9xA.js";import"./CompositeItem-FfzK-6cQ.js";import"./ToolbarRootContext-fpQvlLhR.js";import"./getDisabledMountTransitionStyles-DDgFSqxd.js";import"./getPseudoElementBounds-m5PwG0QT.js";import"./chevron-down-A-s4tptO.js";import"./index-DHZErGjk.js";import"./error-Btym7AAe.js";import"./BaseCbacBanner-Cli9v28S.js";import"./makeExternalStore-BULRIBYo.js";import"./Tooltip-B7VRWvgf.js";import"./PopoverPopup-ZbVHJ-GH.js";import"./debounce-DVmJRHR5.js";import"./tick-y2AICyxl.js";import"./DropdownField-DOfjncwG.js";import"./isEqual-ANSE0uXE.js";import"./withOsdkMetrics--rpBEpu9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
