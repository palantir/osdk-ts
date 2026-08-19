import{j as r}from"./iframe-Deq8U_R6.js";import{O as b}from"./object-table-Cpug1ggs.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CwX9nkXH.js";import{u as g}from"./useOsdkClient-DilVQuXF.js";import"./preload-helper-gHh2KtG1.js";import"./Table-DWbM6UyP.js";import"./index-DrQOBAHk.js";import"./Dialog-DeFeQfo-.js";import"./cross-CR8D9GYw.js";import"./svgIconContainer-Mlvk9_It.js";import"./useBaseUiId-BUXl0t0L.js";import"./InternalBackdrop-DBOPTR44.js";import"./composite-BNSug7gR.js";import"./index-BqwGDeu0.js";import"./index-DihHNdBD.js";import"./index-z73v20nY.js";import"./useEventCallback-Cg9CTnOy.js";import"./SkeletonBar-DEtf_a9V.js";import"./LoadingCell-poQ-JK4_.js";import"./ColumnConfigDialog-TFTfgcZL.js";import"./DraggableList-DF8fyUSQ.js";import"./search-YieMSLSV.js";import"./Input-BTtCqGCw.js";import"./useControlled-B13sGWuv.js";import"./Button-BwL9fd7Z.js";import"./small-cross-C_PTrjiz.js";import"./ActionButton-C0yk3VrH.js";import"./Checkbox-FT15qBLN.js";import"./useValueChanged-CP8dyd6H.js";import"./CollapsiblePanel-BPfxK78F.js";import"./MultiColumnSortDialog-DblIw7El.js";import"./MenuTrigger-C5F8Udzs.js";import"./CompositeItem-9mNZQz-k.js";import"./ToolbarRootContext-ujlL6MZj.js";import"./getDisabledMountTransitionStyles-BwqPeStH.js";import"./getPseudoElementBounds-ClknCJRS.js";import"./chevron-down-BX8QITO3.js";import"./index-B5E1rin5.js";import"./error-BGW1gWTs.js";import"./BaseCbacBanner-dwjT3eiM.js";import"./makeExternalStore-Da72kyzN.js";import"./Tooltip-CJe0q8p4.js";import"./PopoverPopup-7HBCutnS.js";import"./debounce-gp4V-tlI.js";import"./tick-DGNSJeUo.js";import"./DropdownField-H5OdYZ1y.js";import"./isEqual-CbCFbLcE.js";import"./withOsdkMetrics-CHdYjQDf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
