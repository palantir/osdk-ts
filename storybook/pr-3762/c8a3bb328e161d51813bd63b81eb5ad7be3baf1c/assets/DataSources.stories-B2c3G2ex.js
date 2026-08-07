import{j as r}from"./iframe-MMW7dAwl.js";import{O as b}from"./object-table-Dgt1ZBxM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DhiAA12Y.js";import{u as g}from"./useOsdkClient-CYb4YJag.js";import"./preload-helper-B0ldkDPT.js";import"./Table-CdvMaQRE.js";import"./index-Bsiwb6dc.js";import"./Dialog-BdywO4X-.js";import"./cross-Cwg16VXF.js";import"./svgIconContainer-C6Uusp65.js";import"./useBaseUiId-HrNAgH2Y.js";import"./InternalBackdrop-0Uby9gaG.js";import"./composite-D2ldOjEm.js";import"./index-DB82zLXB.js";import"./index-C7Hp3s63.js";import"./index-D8BO4rXm.js";import"./useEventCallback-DLFdmovf.js";import"./SkeletonBar-CqhfCaj7.js";import"./LoadingCell-pf5zHAth.js";import"./ColumnConfigDialog-CIFV5N9M.js";import"./DraggableList-Clicz9dW.js";import"./search-9a9jkQTY.js";import"./Input-CNsR-Nss.js";import"./useControlled-BCMHUgBa.js";import"./isEqual-Ih5cTHZu.js";import"./isObject-DSXrQIzp.js";import"./Button-CTqxWZbn.js";import"./ActionButton-Cq4L4xrS.js";import"./Checkbox-BVAhjTaX.js";import"./useValueChanged-CvjF7j3z.js";import"./CollapsiblePanel-BfMo-BHq.js";import"./MultiColumnSortDialog-Bmn6qLGE.js";import"./MenuTrigger-DBsleKge.js";import"./CompositeItem--prBu0t1.js";import"./ToolbarRootContext-C9oTADe7.js";import"./getDisabledMountTransitionStyles-DJDJDpp2.js";import"./getPseudoElementBounds-QIVbBUrC.js";import"./chevron-down-CE52ay4J.js";import"./index-BbTzuwcU.js";import"./error-BMLkI-Ib.js";import"./BaseCbacBanner-DWoXo0sK.js";import"./makeExternalStore-CkcVg9cu.js";import"./Tooltip-RUhOEPf4.js";import"./PopoverPopup-XsYEH1Hz.js";import"./toNumber-BniOij62.js";import"./tick-B_RImugy.js";import"./DropdownField-DxdJvq24.js";import"./withOsdkMetrics-CLxjdcRk.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
