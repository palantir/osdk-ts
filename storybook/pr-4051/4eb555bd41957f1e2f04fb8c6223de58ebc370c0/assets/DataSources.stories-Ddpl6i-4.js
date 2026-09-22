import{j as r}from"./iframe-D6GK-HvP.js";import{O as b}from"./object-table-c5-yuc1V.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BFWveTT2.js";import{u as g}from"./useOsdkClient-B41IHrdM.js";import"./preload-helper-BFH31g1G.js";import"./Table-KaTG4LsG.js";import"./index-B8Opp0Aq.js";import"./Dialog-BMlaZ5OW.js";import"./cross-Dd2BFVFf.js";import"./svgIconContainer-CSrNgshe.js";import"./useBaseUiId-8c0vpIbF.js";import"./InternalBackdrop-HHAKufKS.js";import"./composite-CrjUHFOu.js";import"./index-P8xupo9q.js";import"./index-BJnCsIvw.js";import"./index-BnURt9pi.js";import"./useEventCallback-SOIvlHLC.js";import"./SkeletonBar-F48-D9OO.js";import"./LoadingCell-CnqEJ9mH.js";import"./ColumnConfigDialog-DC09W4dG.js";import"./DraggableList-pqCMT3mz.js";import"./search-BIJa8P83.js";import"./Input-CEqlI-vi.js";import"./useControlled-DuFMSGQq.js";import"./Button-oq6XXTdR.js";import"./small-cross-poVqs8u3.js";import"./ActionButton-Bub0N-0E.js";import"./Checkbox-CyQO4MFp.js";import"./useValueChanged-re7ueQpT.js";import"./CollapsiblePanel-Cj9OvKAd.js";import"./MultiColumnSortDialog-uinvQw2f.js";import"./MenuTrigger-2Gpj1hX5.js";import"./CompositeItem-XBxLSQGB.js";import"./ToolbarRootContext-DGSqIy6x.js";import"./getDisabledMountTransitionStyles-CPvJg8iL.js";import"./getPseudoElementBounds-DSxspgXt.js";import"./chevron-down-B7x3jao1.js";import"./index-C08EsZev.js";import"./error-CecGBnpf.js";import"./BaseCbacBanner-BVqhNcwk.js";import"./makeExternalStore-DeRAagV9.js";import"./Tooltip-xOoakjaD.js";import"./PopoverPopup-YhXneox5.js";import"./debounce-Cn0q10eM.js";import"./tick-BvUp_jCe.js";import"./DropdownField-BocBrIvP.js";import"./isEqual-BDeh4Ts9.js";import"./withOsdkMetrics-D368-fbW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
