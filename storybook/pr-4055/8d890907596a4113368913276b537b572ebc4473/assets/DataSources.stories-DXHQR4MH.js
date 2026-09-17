import{j as r}from"./iframe-D8ujQKLt.js";import{O as b}from"./object-table-F88ZK3D3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bb099huJ.js";import{u as g}from"./useOsdkClient-C0xSXgiQ.js";import"./preload-helper-DFSc6wRM.js";import"./Table-DSfHpMVD.js";import"./index-9VE5Mn4e.js";import"./Dialog-DDQcNK5N.js";import"./cross-DL4CxuoW.js";import"./svgIconContainer-CCFPJCSW.js";import"./useBaseUiId-DQIJbvft.js";import"./InternalBackdrop-DOlkcASB.js";import"./composite-CqKkE9Tf.js";import"./index-Df4arEo8.js";import"./index-4dyiHwoW.js";import"./index-DcCMilJn.js";import"./useEventCallback-LXYYJHZR.js";import"./SkeletonBar-DGLHZxCg.js";import"./LoadingCell-DJ4HAk4z.js";import"./ColumnConfigDialog-Cu1Jh9Bn.js";import"./DraggableList-D780i88F.js";import"./search-lCLNBJzK.js";import"./Input-BAcEpIh9.js";import"./useControlled-CNmeKwYL.js";import"./Button-DP0uEAZL.js";import"./small-cross-D2ydpxtR.js";import"./ActionButton-mq8eWvOP.js";import"./Checkbox-BDbPm4Oc.js";import"./useValueChanged-D9rrTa67.js";import"./CollapsiblePanel-CrroEgz8.js";import"./MultiColumnSortDialog-BWeQjT91.js";import"./MenuTrigger-Ccyf87By.js";import"./CompositeItem-D1_uZNYL.js";import"./ToolbarRootContext-DDpleV8W.js";import"./getDisabledMountTransitionStyles-DmViJQ0X.js";import"./getPseudoElementBounds-Bt81s7c9.js";import"./chevron-down-Dy0uKQHu.js";import"./index-DEgBJtF2.js";import"./error-e8Ui46gA.js";import"./BaseCbacBanner-x-LLCXPg.js";import"./makeExternalStore-BCYZ0dRc.js";import"./Tooltip-xRA7nyQ0.js";import"./PopoverPopup-BoTh3yWt.js";import"./debounce-Bq0XVY4d.js";import"./tick-DqmzPeDQ.js";import"./DropdownField-BvV_qCDF.js";import"./isEqual-Dbwb_nfU.js";import"./withOsdkMetrics-CoHNSoOK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
