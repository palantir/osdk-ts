import{j as r}from"./iframe-DXrbmFQU.js";import{O as b}from"./object-table-CZgdmLOz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BIV4Unq6.js";import{u as g}from"./useOsdkClient-DVkOG91y.js";import"./preload-helper-BpeD6mmz.js";import"./Table-C_vJuGXT.js";import"./index-CC0lkARs.js";import"./Dialog-BSRL8opj.js";import"./cross-CS_4qYPy.js";import"./svgIconContainer-D3MknpC0.js";import"./useBaseUiId-Bmo8e_yl.js";import"./InternalBackdrop-CZ7SS8XL.js";import"./composite-CtPqGv2Q.js";import"./index-C1FzfM-T.js";import"./index-F1aEIIjQ.js";import"./index-CIJdhEvE.js";import"./useEventCallback-D7stwHp4.js";import"./SkeletonBar-D5AKklLC.js";import"./LoadingCell-BVwkbAMD.js";import"./ColumnConfigDialog-CNe6t6jf.js";import"./DraggableList-D4sOGYVr.js";import"./search-B06mFuBu.js";import"./Input-sDtqAHjV.js";import"./useControlled-B7qMp3Jr.js";import"./Button-CaEsIWhF.js";import"./small-cross-op6IWr8S.js";import"./ActionButton-zcaUPaLa.js";import"./Checkbox-CrDOEg-9.js";import"./useValueChanged-DqKKufXw.js";import"./CollapsiblePanel-BcteEw7K.js";import"./MultiColumnSortDialog-CbkKxFNz.js";import"./MenuTrigger-DLWZFo83.js";import"./CompositeItem-BFe5eqlW.js";import"./ToolbarRootContext-D7OAZc3v.js";import"./getDisabledMountTransitionStyles-C_81mHPe.js";import"./getPseudoElementBounds-BxGouxy3.js";import"./chevron-down-Dt-I4rTn.js";import"./index-Cmhl-M1L.js";import"./error-DTlfxxBy.js";import"./BaseCbacBanner-CQVfVEFg.js";import"./makeExternalStore-CmG1_iz5.js";import"./Tooltip-DqU4cO90.js";import"./PopoverPopup-BkZ0u7Nq.js";import"./debounce-CPG8fLwA.js";import"./tick-BRRV4IxG.js";import"./DropdownField-B-USOmOG.js";import"./isEqual-0AwzXC1p.js";import"./withOsdkMetrics-CrZM7ObA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
