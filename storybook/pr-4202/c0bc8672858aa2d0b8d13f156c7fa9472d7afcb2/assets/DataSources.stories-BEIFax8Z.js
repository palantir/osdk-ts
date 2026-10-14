import{j as r}from"./iframe-DIE5EIel.js";import{O as b}from"./object-table-CaoiWXaB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-hFeTwdib.js";import{u as g}from"./useOsdkClient-DwzaMKsX.js";import"./preload-helper-CcEYMKBV.js";import"./Table-D9AdOswb.js";import"./index-gAWb2dR9.js";import"./Dialog-BP0ffE7w.js";import"./cross-siN9VgW1.js";import"./svgIconContainer-Rj0rqZar.js";import"./useBaseUiId-DU3L5eHE.js";import"./InternalBackdrop-bmHbSXL3.js";import"./composite-DJfb-Teu.js";import"./index-C3GNYR7s.js";import"./index-DMxLJ88X.js";import"./index-BZq84Z7C.js";import"./useEventCallback-B0bLIt0P.js";import"./SkeletonBar-D76bwfQy.js";import"./LoadingCell-B6b6ghEr.js";import"./ColumnConfigDialog-B6ZffT4C.js";import"./DraggableList-DI8sydkc.js";import"./search-UnQR1AsU.js";import"./Input-Co7zI1L-.js";import"./useControlled-ddG6ulVP.js";import"./Button-DGriahwu.js";import"./small-cross-lJu3Ep8h.js";import"./ActionButton-8CkxKFOD.js";import"./Checkbox-BJkvdg_F.js";import"./useValueChanged-DM4JlENq.js";import"./CollapsiblePanel-DQyn2L9g.js";import"./MultiColumnSortDialog-CqpZOBHM.js";import"./MenuTrigger-C2K-9tUf.js";import"./CompositeItem-Crvs63Hb.js";import"./ToolbarRootContext-DFNBF5NL.js";import"./getDisabledMountTransitionStyles-CwBqMOC1.js";import"./getPseudoElementBounds-Bwg4v7rW.js";import"./chevron-down-CUqhLbkD.js";import"./index-CPNhCNUx.js";import"./error-aWHvmhUp.js";import"./BaseCbacBanner-CDjIDA9k.js";import"./makeExternalStore-DI81UbPt.js";import"./Tooltip-Cned3Nwd.js";import"./PopoverPopup-CLAGuQ7U.js";import"./debounce-DepqpmZg.js";import"./tick-C7X7rsGG.js";import"./DropdownField-C-mwMtZa.js";import"./isEqual-CABNp4vG.js";import"./withOsdkMetrics-BWchHor7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
