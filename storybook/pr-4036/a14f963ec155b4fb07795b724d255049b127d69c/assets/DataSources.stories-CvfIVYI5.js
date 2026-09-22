import{j as r}from"./iframe-X-VSGX-m.js";import{O as b}from"./object-table-B2d0hZTW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DyRk3hmo.js";import{u as g}from"./useOsdkClient-BeU_8fLS.js";import"./preload-helper-BSxm0T4I.js";import"./Table-CNIiGJ4k.js";import"./index-CGDH48tf.js";import"./Dialog-tDFf3QqW.js";import"./cross-CrghqoWd.js";import"./svgIconContainer-BdGqJkEg.js";import"./useBaseUiId-BBsjPzS0.js";import"./InternalBackdrop-CcwzaUSK.js";import"./composite-BZ7oE03c.js";import"./index-DSvAdAem.js";import"./index-C6OnhXV1.js";import"./index-CsJagvQr.js";import"./useEventCallback-BQT_oghC.js";import"./SkeletonBar-BmODE2fF.js";import"./LoadingCell-cVz6RH1p.js";import"./ColumnConfigDialog-D0NNCoU5.js";import"./DraggableList-DF-Zow-U.js";import"./search-CzcR_jWd.js";import"./Input-CjGosPl8.js";import"./useControlled-CS7Ud3A1.js";import"./Button-BvYXLNva.js";import"./small-cross-uFhshZcJ.js";import"./ActionButton-6IO1Kg5J.js";import"./Checkbox-eVoBaSOe.js";import"./useValueChanged-D6DhfqaH.js";import"./CollapsiblePanel-Bg9eBIxx.js";import"./MultiColumnSortDialog-BASSaWaa.js";import"./MenuTrigger-bMq7gUJg.js";import"./CompositeItem-Dt-41Y4b.js";import"./ToolbarRootContext-CAbB3DSY.js";import"./getDisabledMountTransitionStyles-C88V7r9e.js";import"./getPseudoElementBounds-BMlsPGB0.js";import"./chevron-down-Z8wpnP0p.js";import"./index-Daq_EkrJ.js";import"./error-D6m_rkvI.js";import"./BaseCbacBanner-CByeRFhZ.js";import"./makeExternalStore-CDBEj4Yx.js";import"./Tooltip-DQt_Cnav.js";import"./PopoverPopup-CiCOaPLV.js";import"./debounce-Bzn4rKQW.js";import"./tick-BYWClfY9.js";import"./DropdownField-C4WdNJVH.js";import"./isEqual-Z7jCKQSG.js";import"./withOsdkMetrics-hcsSE1Yl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
