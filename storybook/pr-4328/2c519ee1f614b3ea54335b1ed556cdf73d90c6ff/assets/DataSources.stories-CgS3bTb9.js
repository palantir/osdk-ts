import{j as r}from"./iframe-lON5AZ3L.js";import{O as b}from"./object-table-CY1HhWS5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-bxOjwZYw.js";import{u as g}from"./useOsdkClient-mvo5kAdP.js";import"./preload-helper-CII01xYb.js";import"./Table-BSsDoVm_.js";import"./index-BbInquUP.js";import"./Dialog-DwoswbFK.js";import"./cross-CZfg3piu.js";import"./svgIconContainer-CX_rozDa.js";import"./useBaseUiId-COzPbt8W.js";import"./InternalBackdrop-BUdtJ2mO.js";import"./composite-ChlDDG92.js";import"./index-U5f43BN7.js";import"./index-CcwZGg1N.js";import"./index-D88RmGRP.js";import"./useEventCallback-ChKmlvki.js";import"./SkeletonBar-BoIeke2n.js";import"./LoadingCell-Di0K-zen.js";import"./ColumnConfigDialog-J1QlLMH5.js";import"./DraggableList-DQx5w-9B.js";import"./search-ZnUmH3zZ.js";import"./Input-BTUHBzsz.js";import"./useControlled-Bg_lHZoo.js";import"./Button-NLlVT-nC.js";import"./small-cross-E0MhYcPt.js";import"./ActionButton-fF4x8pwf.js";import"./Checkbox-BlCTNtaZ.js";import"./useValueChanged-DBAEDgpw.js";import"./CollapsiblePanel-CLfLwLQM.js";import"./MultiColumnSortDialog-DKk8lIBH.js";import"./MenuTrigger-o3B51z0I.js";import"./CompositeItem-ppbsSdS6.js";import"./ToolbarRootContext-Dh8fWcX2.js";import"./getDisabledMountTransitionStyles-Cfd1b-as.js";import"./getPseudoElementBounds-D_X7OILl.js";import"./chevron-down-B6vOrraR.js";import"./index-BDhDrjkY.js";import"./error-B77E7aT6.js";import"./BaseCbacBanner-BFErWSQa.js";import"./makeExternalStore-BPZMGY7I.js";import"./Tooltip-BEGKa3-T.js";import"./isObject-DX3EuMyF.js";import"./debounce-BWiznTrv.js";import"./tick-DG2wS06_.js";import"./DropdownField-CDUsrETz.js";import"./isEqual-bz5Rcl9o.js";import"./_baseIsEqual-DQZzxLKC.js";import"./withOsdkMetrics-CXO0MkNI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
