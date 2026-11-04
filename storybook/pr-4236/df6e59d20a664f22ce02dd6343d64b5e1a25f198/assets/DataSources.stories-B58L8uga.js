import{j as r}from"./iframe-DrF4uDXw.js";import{O as b}from"./object-table-CM95MaM2.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-dQsqKwW6.js";import{u as g}from"./useOsdkClient-DIPpS90p.js";import"./preload-helper-u_zBXynr.js";import"./Table-kd6lbu9d.js";import"./index-CVI5kV9I.js";import"./Dialog-BrX1t0fv.js";import"./cross-CpHoxb52.js";import"./svgIconContainer-DTs7PmKd.js";import"./useBaseUiId-C9RyiOK8.js";import"./InternalBackdrop-DofvZUsK.js";import"./composite-Bq13iBNY.js";import"./index-BDX0ToeT.js";import"./index-CGWCVoH4.js";import"./index-BnGuicAT.js";import"./useEventCallback-BTghxZoS.js";import"./SkeletonBar-0N9X2Eze.js";import"./LoadingCell-BVuDg30F.js";import"./ColumnConfigDialog--izrLFr-.js";import"./DraggableList-CSNOh3nO.js";import"./search-CELVamy6.js";import"./Input-CdEHyPrX.js";import"./useControlled-CZU-WiQ8.js";import"./Button-YLbQ9ZAy.js";import"./small-cross-CJbFFKn2.js";import"./ActionButton-BLh9uJNd.js";import"./Checkbox-BhjXID7e.js";import"./useValueChanged-zSpMIuHM.js";import"./CollapsiblePanel-C9eazrfz.js";import"./MultiColumnSortDialog-DfEBvsXN.js";import"./MenuTrigger-CAXmNMT1.js";import"./CompositeItem-D46vdXYg.js";import"./ToolbarRootContext-C8VOBVuh.js";import"./getDisabledMountTransitionStyles-BEvFk-mr.js";import"./getPseudoElementBounds-D-ciol2Y.js";import"./chevron-down-DrKAguLe.js";import"./index-DyhoC8yA.js";import"./error-LoVtbcsO.js";import"./BaseCbacBanner-23rij7S2.js";import"./makeExternalStore-DYuKTott.js";import"./Tooltip-cvIFboQ2.js";import"./PopoverPopup-g1OrYGZg.js";import"./debounce-CWgpGISZ.js";import"./tick-DD1ZkEBA.js";import"./DropdownField-D6v5zaPU.js";import"./isEqual-DckClti8.js";import"./withOsdkMetrics-CRS-8bKl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
