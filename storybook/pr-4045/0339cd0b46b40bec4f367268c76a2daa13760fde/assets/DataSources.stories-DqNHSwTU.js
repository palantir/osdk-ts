import{j as r}from"./iframe-CEjFXQ7i.js";import{O as b}from"./object-table-DSkg1M1h.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-f8N58gNV.js";import{u as g}from"./useOsdkClient-CvwDornw.js";import"./preload-helper-DLeq1RMI.js";import"./Table-B9fOVtho.js";import"./index-D6JFDMhk.js";import"./Dialog-DzFXgghC.js";import"./cross-D6CNu_FK.js";import"./svgIconContainer-BmnNwyNQ.js";import"./useBaseUiId-DIsNXkIK.js";import"./InternalBackdrop-cEsiiajq.js";import"./composite-YofervN4.js";import"./index-DRlQNLpD.js";import"./index-B-VVrHtR.js";import"./index-D4xdv--D.js";import"./useEventCallback-DO0KrF-A.js";import"./SkeletonBar-DT9hE4gv.js";import"./LoadingCell-D85PK5AJ.js";import"./ColumnConfigDialog-D46zVtcj.js";import"./DraggableList-BZyIdZBv.js";import"./search-BURF39r2.js";import"./Input-CyL2x7p2.js";import"./useControlled-Bactb4pm.js";import"./Button-4xVurfNi.js";import"./small-cross-OzagSQJN.js";import"./ActionButton-ChX-Jzpd.js";import"./Checkbox-C7AiSlR0.js";import"./useValueChanged-BcDYkwEW.js";import"./CollapsiblePanel-fy30LupE.js";import"./MultiColumnSortDialog-DtTQpKwf.js";import"./MenuTrigger-JipuUt4m.js";import"./CompositeItem-B1vfMTcy.js";import"./ToolbarRootContext-CM1Snkhx.js";import"./getDisabledMountTransitionStyles-CCQ6XSw9.js";import"./getPseudoElementBounds-CVu5NcY5.js";import"./chevron-down-B26wW5MT.js";import"./index-Dwcp4INV.js";import"./error-Bcog9g9V.js";import"./BaseCbacBanner-CprDDsaN.js";import"./makeExternalStore-79RiVGfc.js";import"./Tooltip-BN52KZ5N.js";import"./PopoverPopup-2vrtL-xw.js";import"./debounce-CTnh9aDY.js";import"./tick-lx03iSJA.js";import"./DropdownField-vSNq3qus.js";import"./isEqual-D3NHAHrR.js";import"./withOsdkMetrics-DOR5d9wI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
