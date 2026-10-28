import{j as r}from"./iframe-BeH6Kgtk.js";import{O as b}from"./object-table-C7FluA5B.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cs5NJ3Il.js";import{u as g}from"./useOsdkClient-8GVphyRP.js";import"./preload-helper-DIEhRyUP.js";import"./Table-D525YSUk.js";import"./index-DFSFBHkF.js";import"./Dialog-BCu81KDD.js";import"./cross-CX4SHNo3.js";import"./svgIconContainer-Bb-RAJkY.js";import"./useBaseUiId-CtZE3HDc.js";import"./InternalBackdrop-tGSxu3X-.js";import"./composite-oEq7yTUS.js";import"./index-Bi2hqiVi.js";import"./index-DgDaT3k8.js";import"./index-B83GxJH9.js";import"./useEventCallback-C6Ywg3fj.js";import"./SkeletonBar-Cef5YzUY.js";import"./LoadingCell-CQuJ0e2d.js";import"./ColumnConfigDialog-Dx1mF4-4.js";import"./DraggableList-vejvpVIl.js";import"./search-CAOX7A7K.js";import"./Input-RgiEvmaC.js";import"./useControlled-Bdo1gXa6.js";import"./Button-Cy9t27DN.js";import"./small-cross-BIL5QE4b.js";import"./ActionButton-Dn_I3vRk.js";import"./Checkbox-BnU9aEnD.js";import"./useValueChanged-GpyRtBxV.js";import"./CollapsiblePanel-DEBXY80q.js";import"./MultiColumnSortDialog-AOlm58uI.js";import"./MenuTrigger-pGKSNFFq.js";import"./CompositeItem-BFteZ_HC.js";import"./ToolbarRootContext-Dd5p2hpI.js";import"./getDisabledMountTransitionStyles-TI3kKTby.js";import"./getPseudoElementBounds-XJNejySA.js";import"./chevron-down-BQRyOpPG.js";import"./index-BxZQFTTq.js";import"./error-Dyg0hO9Y.js";import"./BaseCbacBanner-C7opKen9.js";import"./makeExternalStore-CtDF7lCi.js";import"./Tooltip-BqIx27JT.js";import"./isObject-raxYKDb4.js";import"./debounce-DQFTeh52.js";import"./tick-CnxOlA-z.js";import"./DropdownField-BjkAOtL1.js";import"./isEqual-CkU-cJx5.js";import"./_baseIsEqual-BNTB2wLf.js";import"./withOsdkMetrics-Dy2obrep.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
