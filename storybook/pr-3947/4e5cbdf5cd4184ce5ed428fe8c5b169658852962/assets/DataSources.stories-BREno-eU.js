import{j as r}from"./iframe-B9vRr-8o.js";import{O as b}from"./object-table-Cy9_ddQq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-76ofUwl9.js";import{u as g}from"./useOsdkClient-XUvdpQCP.js";import"./preload-helper-CT6yiVJK.js";import"./Table-BUC41EyK.js";import"./index-Db6wxNSm.js";import"./Dialog-DrfWv6lO.js";import"./cross-DS9XOep9.js";import"./svgIconContainer-jTmjY-5C.js";import"./useBaseUiId-Zy-hPVme.js";import"./InternalBackdrop-Dkt-LU98.js";import"./composite-D-Ig3PPA.js";import"./index-BqLTNrL3.js";import"./index-BP6meDIf.js";import"./index-DiOfrt9y.js";import"./useEventCallback-Dnwjatgq.js";import"./SkeletonBar-DDQ6bK0h.js";import"./LoadingCell-h6-IYD-k.js";import"./ColumnConfigDialog-DSyqhsd5.js";import"./DraggableList-BEY5F6_e.js";import"./search-BLFbd71b.js";import"./Input-49lOIosv.js";import"./useControlled-Czmg4_Mq.js";import"./Button-DInSh6Mg.js";import"./small-cross-g5g4iWLv.js";import"./ActionButton-VuwZ2TlI.js";import"./Checkbox-DD1_NRcm.js";import"./useValueChanged-CZWNgrSk.js";import"./CollapsiblePanel-BYu6tsP9.js";import"./MultiColumnSortDialog-C54yM2eA.js";import"./MenuTrigger-k50_Svx1.js";import"./CompositeItem-CAhsvlmM.js";import"./ToolbarRootContext-BnF1ucj1.js";import"./getDisabledMountTransitionStyles-DR1DqNS1.js";import"./getPseudoElementBounds-B9b1zlvs.js";import"./chevron-down-KfZfPmTG.js";import"./index-DmmkcNZh.js";import"./error-DU5bvt7m.js";import"./BaseCbacBanner-BIhbpkTr.js";import"./makeExternalStore-CO4PrvZd.js";import"./Tooltip-Iu1ebRAa.js";import"./PopoverPopup-1FDqfr6m.js";import"./debounce-CTdyZ7c7.js";import"./tick-HHcjPpdd.js";import"./DropdownField-D-lyti30.js";import"./isEqual-BHuMrP_U.js";import"./withOsdkMetrics-BZu7xMYv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
