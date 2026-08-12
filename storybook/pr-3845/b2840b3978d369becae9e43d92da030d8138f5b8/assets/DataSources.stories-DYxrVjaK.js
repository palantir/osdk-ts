import{j as r}from"./iframe-zt8gp64C.js";import{O as b}from"./object-table-C4SE7jNv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CpojIKNV.js";import{u as g}from"./useOsdkClient-DVQ-u_Rd.js";import"./preload-helper-D2a9Td0v.js";import"./Table-C5TohfrD.js";import"./index-DoHyhu1H.js";import"./Dialog-CSUVimF5.js";import"./cross-De0nnUUS.js";import"./svgIconContainer-0IC9WVdo.js";import"./useBaseUiId-CCqwL6UI.js";import"./InternalBackdrop-DGaBLeqk.js";import"./composite-CiBYjtJq.js";import"./index-D5-rUW4c.js";import"./index-DKrLb4UT.js";import"./index-C2mA5K1h.js";import"./useEventCallback-COQUG7k2.js";import"./SkeletonBar-C0ADBR4Q.js";import"./LoadingCell-CrnRbXzY.js";import"./ColumnConfigDialog-CCtelOOx.js";import"./DraggableList-BKsEAfzj.js";import"./search-CkhkhpUr.js";import"./Input-CSTLDdZZ.js";import"./useControlled-B2Qs_OA4.js";import"./isEqual-B7ANsJ7b.js";import"./isObject-CuTVL94r.js";import"./Button-DeMnr8Np.js";import"./ActionButton-BjjkzeEb.js";import"./Checkbox-CvK_053Z.js";import"./useValueChanged-CEhTPnLC.js";import"./CollapsiblePanel-BSJO1h1v.js";import"./MultiColumnSortDialog-C0HuG-FX.js";import"./MenuTrigger-CcISEL9A.js";import"./CompositeItem-Brt2sv8U.js";import"./ToolbarRootContext-C57K8W0-.js";import"./getDisabledMountTransitionStyles-BpPAz8nb.js";import"./getPseudoElementBounds-BMx_lEUq.js";import"./chevron-down-CBSyC7tf.js";import"./index-D_xoP6e4.js";import"./error-9mYmZixJ.js";import"./BaseCbacBanner-DvyF_XxH.js";import"./makeExternalStore-kuj4NcTB.js";import"./Tooltip-C97TE3_V.js";import"./PopoverPopup-DVY_tgYX.js";import"./toNumber-CLCJ8uM8.js";import"./tick-DGaV7WNd.js";import"./DropdownField-DELSMJny.js";import"./withOsdkMetrics-C6hfCkXD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
