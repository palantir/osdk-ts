import{j as r}from"./iframe-4W_gqfri.js";import{O as b}from"./object-table-9J7pqHDM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Chn0tc2O.js";import{u as g}from"./useOsdkClient-Dm3jcQQp.js";import"./preload-helper-iH2eX15p.js";import"./Table-BjxlZ7nu.js";import"./index-BE7X2I8k.js";import"./Dialog-QjDlU9kM.js";import"./cross-DPXC28es.js";import"./svgIconContainer-DXl_IpNa.js";import"./useBaseUiId-CkmLLk3_.js";import"./InternalBackdrop-CUPpQvP1.js";import"./composite-iwN2p37r.js";import"./index-DIt5uu1h.js";import"./index-Xj4teAhO.js";import"./index-DOVruLCM.js";import"./useEventCallback-CfmYFYMZ.js";import"./SkeletonBar-Co4nSFIq.js";import"./LoadingCell-DoRpWxDA.js";import"./ColumnConfigDialog-CdVbA8k5.js";import"./DraggableList-C0lbi6DE.js";import"./search-BfzYHGGv.js";import"./Input-BayiWgWk.js";import"./useControlled-BKLbSuyG.js";import"./Button-DmhydU5X.js";import"./small-cross-brVItmZZ.js";import"./ActionButton-Qd3Ay8Ri.js";import"./Checkbox-06IyHyXP.js";import"./useValueChanged-7OtEnUZo.js";import"./CollapsiblePanel-CdkBP2mF.js";import"./MultiColumnSortDialog-Cc89E02k.js";import"./MenuTrigger-Cl4eIY0V.js";import"./CompositeItem-BflBgmdx.js";import"./ToolbarRootContext-DldxC3FJ.js";import"./getDisabledMountTransitionStyles-tXQmkZ9Q.js";import"./getPseudoElementBounds-CAzCOJ3L.js";import"./chevron-down-DAwV2NNc.js";import"./index-OuSfth0Z.js";import"./error-DvgnJEpu.js";import"./BaseCbacBanner-CA_tZLUE.js";import"./makeExternalStore-DcNKv6Lc.js";import"./Tooltip-D_C8QLsG.js";import"./PopoverPopup-BtHZXFbP.js";import"./debounce-WcXDhRUO.js";import"./tick-fx0AyRna.js";import"./DropdownField-DY4lNhEH.js";import"./isEqual-BRRPuctS.js";import"./withOsdkMetrics-CNNLqNUF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
