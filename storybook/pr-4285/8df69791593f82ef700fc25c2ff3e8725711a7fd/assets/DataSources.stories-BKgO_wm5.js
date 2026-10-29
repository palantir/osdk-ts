import{j as r}from"./iframe-YB9hqlg8.js";import{O as b}from"./object-table-CD7SpME1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bdt4Ednp.js";import{u as g}from"./useOsdkClient-ZayO5M1-.js";import"./preload-helper-CTcVL9dw.js";import"./Table-DrHMf1Gd.js";import"./index-jQAJu0aU.js";import"./Dialog-DJHS4XZ-.js";import"./cross-CqHbx82J.js";import"./svgIconContainer-BewESC0Y.js";import"./useBaseUiId-BmL79WrH.js";import"./InternalBackdrop-BivpzZuB.js";import"./composite-DeqrZPcw.js";import"./index-BFeXeiP0.js";import"./index-Bs1x_wg2.js";import"./index-D3K0AaGz.js";import"./useEventCallback-CATv0rju.js";import"./SkeletonBar-jlasmcfA.js";import"./LoadingCell-VgJHmFvN.js";import"./ColumnConfigDialog-Cy0Jm0k3.js";import"./DraggableList-CBY145h4.js";import"./search-BY-8te7i.js";import"./Input-ZdgKVRhe.js";import"./useControlled-XI3b4Slf.js";import"./Button-BgGo20Fo.js";import"./small-cross-hcSISMg2.js";import"./ActionButton-XVSeG5b2.js";import"./Checkbox-L4D9I5_E.js";import"./useValueChanged-D9HByNMz.js";import"./CollapsiblePanel-g_xhSVun.js";import"./MultiColumnSortDialog-BrLJl6ZB.js";import"./MenuTrigger-Bhi0Gjm8.js";import"./CompositeItem-DRhQIZ9t.js";import"./ToolbarRootContext-DKnQVXJ0.js";import"./getDisabledMountTransitionStyles-CYvPsy0U.js";import"./getPseudoElementBounds-h_436N-i.js";import"./chevron-down-CLNGzp69.js";import"./index-BPsVLTCl.js";import"./error-C1jwt9uB.js";import"./BaseCbacBanner-BknyRiT5.js";import"./makeExternalStore-BXT9IRaw.js";import"./Tooltip-DZo35c7C.js";import"./PopoverPopup-DjR6kB2g.js";import"./debounce-CVTcs3d9.js";import"./tick-DcZMyZDK.js";import"./DropdownField-CxqUSWcN.js";import"./isEqual-Cv_n9nVu.js";import"./withOsdkMetrics-CyJ1msfC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
