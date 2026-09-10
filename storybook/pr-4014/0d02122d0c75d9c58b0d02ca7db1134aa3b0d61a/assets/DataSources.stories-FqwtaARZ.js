import{j as r}from"./iframe-DtoP6UZw.js";import{O as b}from"./object-table-D_3I45zD.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-hppniNW3.js";import{u as g}from"./useOsdkClient-DBRAdTeM.js";import"./preload-helper-CFHJtsfx.js";import"./Table-BtMZ3tb4.js";import"./index-By2xjehZ.js";import"./Dialog-DI6oESBL.js";import"./cross-Bz8JPJRT.js";import"./svgIconContainer-DfGYICSx.js";import"./useBaseUiId-C9myCpxn.js";import"./InternalBackdrop-DpFHb2md.js";import"./composite-ZO42S3vI.js";import"./index-CeUVbJds.js";import"./index-D5DGgDMX.js";import"./index-qPBLNpVs.js";import"./useEventCallback-DjN8mM0o.js";import"./SkeletonBar-BvasMIuf.js";import"./LoadingCell-DVmQY3DI.js";import"./ColumnConfigDialog-Bqnkldiu.js";import"./DraggableList-DAiHAfLp.js";import"./search-BGmMu9uk.js";import"./Input-Cj3lDoEk.js";import"./useControlled-CLD2ZIzN.js";import"./Button-MPweKG2u.js";import"./small-cross-CuZnJmiX.js";import"./ActionButton-Q7OU6HgZ.js";import"./Checkbox-CoU6iSAR.js";import"./useValueChanged-DuhnSJjf.js";import"./CollapsiblePanel-Cmkp7L83.js";import"./MultiColumnSortDialog-MmoilBcM.js";import"./MenuTrigger-DRMD-66M.js";import"./CompositeItem-8ApCVdWW.js";import"./ToolbarRootContext-Chftn44K.js";import"./getDisabledMountTransitionStyles-wDP_kl-U.js";import"./getPseudoElementBounds-DVsLrH1i.js";import"./chevron-down-Cp3kMwRT.js";import"./index-D-jbKgqf.js";import"./error-BgO9vMGd.js";import"./BaseCbacBanner-DhhX6HVL.js";import"./makeExternalStore-CFHh14tM.js";import"./Tooltip-D8pj6bCS.js";import"./PopoverPopup-T9050naI.js";import"./debounce-C7WOXlCO.js";import"./tick-ql6tnj8R.js";import"./DropdownField-nkpjhsB4.js";import"./isEqual-CygTYWpT.js";import"./withOsdkMetrics-BylLLJIu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
