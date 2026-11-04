import{j as r}from"./iframe-CSosjOmv.js";import{O as b}from"./object-table-k0Pd3U0J.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BACBh9jV.js";import{u as g}from"./useOsdkClient-p2uvl16R.js";import"./preload-helper-C-gjDSXJ.js";import"./Table-D1ovXRRz.js";import"./index-DzdecULf.js";import"./Dialog-fffMjTb5.js";import"./cross-CBsOArVe.js";import"./svgIconContainer-C8vg2tag.js";import"./useBaseUiId-B_aLw92E.js";import"./InternalBackdrop-BxW846uB.js";import"./composite-CFm1NNj3.js";import"./index-BvXFeSY8.js";import"./index-C7NVW3nO.js";import"./index-CfZcDCWD.js";import"./useEventCallback-DOvtzK6I.js";import"./SkeletonBar-CbLIOtic.js";import"./LoadingCell-DaoBTPNn.js";import"./ColumnConfigDialog-WGiHcGK1.js";import"./DraggableList-BWfhlxg0.js";import"./search-1vXjOjjG.js";import"./Input-BYDbWdB8.js";import"./useControlled-DcuHztpz.js";import"./Button-CXkasH7A.js";import"./small-cross-DoPihXaf.js";import"./ActionButton-C_1ovufb.js";import"./Checkbox-DaMXtAIo.js";import"./useValueChanged-DnGO4l1i.js";import"./CollapsiblePanel-CDB1SVVs.js";import"./MultiColumnSortDialog-BcsfvTRY.js";import"./MenuTrigger-Cofu7USV.js";import"./CompositeItem-CDrUmRrI.js";import"./ToolbarRootContext-DYXzz-gp.js";import"./getDisabledMountTransitionStyles-DIK2usmu.js";import"./getPseudoElementBounds-DlEj5IwE.js";import"./chevron-down-C05xfaFU.js";import"./index-qg2om6Py.js";import"./error-C8uWSFuO.js";import"./BaseCbacBanner-BkrhTTig.js";import"./makeExternalStore-C3SFvB3D.js";import"./Tooltip-BMDob29c.js";import"./PopoverPopup-BSZvkPJG.js";import"./debounce-BzCw0aaH.js";import"./tick-DgeixQ7I.js";import"./DropdownField-CLwVEV16.js";import"./isEqual-C9GwESqS.js";import"./withOsdkMetrics-DObV_URP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
