import{j as r}from"./iframe-_z3jDROO.js";import{O as b}from"./object-table-DgJqHMWn.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BH5TBnE0.js";import{u as g}from"./useOsdkClient-Di9178CQ.js";import"./preload-helper-Cp-TKz0z.js";import"./Table-BQ2ymhm1.js";import"./index-Q8EEyY0v.js";import"./Dialog-C2fl4M1v.js";import"./cross-D6Si-XhJ.js";import"./svgIconContainer-B7vtt4qG.js";import"./useBaseUiId-kiHD9n4O.js";import"./InternalBackdrop-CTq-483m.js";import"./composite-C0nd1t90.js";import"./index-DD50tvSO.js";import"./index-BunQhVyv.js";import"./index-Df7tufwq.js";import"./useEventCallback-B6QkgUyp.js";import"./SkeletonBar-CaokAZBs.js";import"./LoadingCell-Cac1cdLc.js";import"./ColumnConfigDialog-B6F30hN8.js";import"./DraggableList-DilBMzIC.js";import"./search-BaaSJoub.js";import"./Input-dTB1h5Gz.js";import"./useControlled-jrF362GW.js";import"./isEqual-Dys6_89E.js";import"./isObject-DECzZNaF.js";import"./Button-BM6D-CE6.js";import"./ActionButton-BFy74EOV.js";import"./Checkbox-Bw0S4q5H.js";import"./useValueChanged-CVJcad2L.js";import"./CollapsiblePanel-CCr6fiwE.js";import"./MultiColumnSortDialog-B7Gfn13C.js";import"./MenuTrigger-BCOBhzIQ.js";import"./CompositeItem-C1yClhJ6.js";import"./ToolbarRootContext-ClX35K5_.js";import"./getDisabledMountTransitionStyles-i99itILM.js";import"./getPseudoElementBounds-PgK5udBn.js";import"./chevron-down-DKrfrKEw.js";import"./index-B39ZDa_b.js";import"./error-CHbuT9qj.js";import"./BaseCbacBanner-w5DUGluQ.js";import"./makeExternalStore-Zu8KmZY0.js";import"./Tooltip-BZZ1ZjWO.js";import"./PopoverPopup-CN4czWCI.js";import"./toNumber-BsV4f3nC.js";import"./tick-D1SNio7c.js";import"./DropdownField-DhaGXRA9.js";import"./withOsdkMetrics-BH6dSoSr.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
