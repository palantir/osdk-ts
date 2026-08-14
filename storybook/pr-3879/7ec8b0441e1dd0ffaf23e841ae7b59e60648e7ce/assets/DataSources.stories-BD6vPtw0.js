import{j as r}from"./iframe-Brg8J0Ke.js";import{O as b}from"./object-table-hZeo6LTs.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-dihU3Nly.js";import{u as g}from"./useOsdkClient-CxAGnIHh.js";import"./preload-helper-COdZ72nO.js";import"./Table-BA7Eukxq.js";import"./index-COQGlG7M.js";import"./Dialog-Dpe3KvI5.js";import"./cross-Dp_9NLmV.js";import"./svgIconContainer-CyLntXpn.js";import"./useBaseUiId-CrEPTlGa.js";import"./InternalBackdrop-CBy9ibFR.js";import"./composite-DMhIOFCK.js";import"./index-CsKHzp-V.js";import"./index-BFTo3SXS.js";import"./index-5K_31Uqj.js";import"./useEventCallback-CqQAX7QT.js";import"./SkeletonBar-B-Br-cAJ.js";import"./LoadingCell-Cv1tKHkq.js";import"./ColumnConfigDialog-nf2k-ETq.js";import"./DraggableList-CEgOhlWZ.js";import"./search-DHxEqs_E.js";import"./Input-DQYgvQ0f.js";import"./useControlled-fDswUz3Y.js";import"./isEqual-CBqNX-fs.js";import"./isObject-g0d4C94m.js";import"./Button-BOmasYpo.js";import"./ActionButton-BoL1Ad6J.js";import"./Checkbox-B5T3IccL.js";import"./useValueChanged-BYytUOjM.js";import"./CollapsiblePanel-CjSF9Vu7.js";import"./MultiColumnSortDialog-DiJobGuY.js";import"./MenuTrigger-CZinzVD5.js";import"./CompositeItem-6pHUtZM5.js";import"./ToolbarRootContext-UDxMOJnp.js";import"./getDisabledMountTransitionStyles-D--Cx6cu.js";import"./getPseudoElementBounds-m3pFiWCe.js";import"./chevron-down-WgnX3I4t.js";import"./index-2yQ9AWXN.js";import"./error-DsaiNbdM.js";import"./BaseCbacBanner-DyTn3oZP.js";import"./makeExternalStore-B_s6eB60.js";import"./Tooltip-8riLFYLa.js";import"./PopoverPopup-CL5hQeyv.js";import"./toNumber-6L-Q2eKa.js";import"./tick-BE21jO5W.js";import"./DropdownField-BZE4mokC.js";import"./withOsdkMetrics-D_xYxDWs.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
