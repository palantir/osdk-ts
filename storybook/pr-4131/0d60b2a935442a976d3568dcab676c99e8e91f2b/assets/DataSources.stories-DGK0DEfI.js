import{j as r}from"./iframe-youlX2De.js";import{O as b}from"./object-table-CZlqesvA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-IED6RsCJ.js";import{u as g}from"./useOsdkClient-11CkZQ2p.js";import"./preload-helper-DMj5aBc5.js";import"./Table-BUXNF9G6.js";import"./index-Dyy6V7kE.js";import"./Dialog-CEPS87HP.js";import"./cross-JeqqL3a9.js";import"./svgIconContainer-jpw1hIcy.js";import"./useBaseUiId-CNEu6f9Y.js";import"./InternalBackdrop-DrcATpaw.js";import"./composite-DF73ZPcS.js";import"./index-rZeAfKdB.js";import"./index-DQbJRRPB.js";import"./index-BKFOU1PI.js";import"./useEventCallback-CBEba5_p.js";import"./SkeletonBar-D9FqFwfd.js";import"./LoadingCell-BioKg3ey.js";import"./ColumnConfigDialog-BdeKS_jT.js";import"./DraggableList-CN91YWNw.js";import"./search-D5ZZMY1l.js";import"./Input-B5YU-z1C.js";import"./useControlled-DaSybbDg.js";import"./Button-CbOY6Chn.js";import"./small-cross-C88pqnLw.js";import"./ActionButton-B9nof7-y.js";import"./Checkbox-ALGSiDY-.js";import"./useValueChanged-CwfpjC1s.js";import"./CollapsiblePanel-DcdJjh9a.js";import"./MultiColumnSortDialog-Dquqxk1p.js";import"./MenuTrigger-Dt4-5A8f.js";import"./CompositeItem-Cml7HDGs.js";import"./ToolbarRootContext-CA4yJOZ7.js";import"./getDisabledMountTransitionStyles-CJj-Pq78.js";import"./getPseudoElementBounds-CGTU7rr0.js";import"./chevron-down-CmXpC65B.js";import"./index-wc1nMvwS.js";import"./error-BHWsO3Au.js";import"./BaseCbacBanner-DWHrmiV_.js";import"./makeExternalStore-qhtMEBHa.js";import"./Tooltip-DefV4BIS.js";import"./PopoverPopup-DhxeTh5N.js";import"./debounce-B4zD5peJ.js";import"./tick-DwbVRuy-.js";import"./DropdownField-DLS2xroO.js";import"./isEqual-Dc24nM2v.js";import"./withOsdkMetrics-BqmpDAQp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
