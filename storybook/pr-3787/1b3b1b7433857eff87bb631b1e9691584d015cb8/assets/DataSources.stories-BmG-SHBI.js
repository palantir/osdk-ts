import{j as r}from"./iframe-DFNsoP3X.js";import{O as b}from"./object-table-BscY91rZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CbvNFbJs.js";import{u as g}from"./useOsdkClient-D4rWAYEq.js";import"./preload-helper-BnvOcoub.js";import"./Table-DU7dSv7N.js";import"./index-BAf1JHF8.js";import"./Dialog-Dsto6OEC.js";import"./cross-Bg80tPH2.js";import"./svgIconContainer-aDF4o5gq.js";import"./useBaseUiId-DV1E2N8q.js";import"./InternalBackdrop-CT8CEw0I.js";import"./composite-DbYvbJJQ.js";import"./index-H_W3OuJT.js";import"./index-B-idBXyv.js";import"./index-ChWfa6Xl.js";import"./useEventCallback-BmJCRIu_.js";import"./SkeletonBar-D7BHkMhh.js";import"./LoadingCell-D2J55tP4.js";import"./ColumnConfigDialog-BxImmEMm.js";import"./DraggableList-CYHhOu3B.js";import"./search-bneiCuCd.js";import"./Input-BtXsYgmE.js";import"./useControlled-B1rQefwr.js";import"./isEqual-DaiDjNZz.js";import"./isObject-Cp-DXwTu.js";import"./Button-sZvKHtmc.js";import"./ActionButton-Byu3Iqfd.js";import"./Checkbox-CxipCycs.js";import"./useValueChanged-B1hVUmbL.js";import"./CollapsiblePanel-DQmSOxbK.js";import"./MultiColumnSortDialog-39qpvVJW.js";import"./MenuTrigger-DDzvNKzw.js";import"./CompositeItem-HoQHK7Za.js";import"./ToolbarRootContext-Cq_OLprv.js";import"./getDisabledMountTransitionStyles-Dor7m0yW.js";import"./getPseudoElementBounds-CQuPF0Bs.js";import"./chevron-down-BOoKZVr9.js";import"./index-DUsvYWV3.js";import"./error-Cyul2rOd.js";import"./BaseCbacBanner-C1Hn5TEH.js";import"./makeExternalStore-oXaeTCyi.js";import"./Tooltip-CF-CWCiv.js";import"./PopoverPopup-B_VzRe0Z.js";import"./toNumber-DIwTcT3k.js";import"./tick-GGFWcR03.js";import"./DropdownField-B58gPKPs.js";import"./withOsdkMetrics-C2t_lHCG.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
