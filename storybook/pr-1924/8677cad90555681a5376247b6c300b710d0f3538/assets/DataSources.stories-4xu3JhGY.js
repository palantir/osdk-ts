import{j as r}from"./iframe-CQyGqSJ2.js";import{O as b}from"./object-table-BWxi0zmX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B_9qR4zf.js";import{u as g}from"./useOsdkClient-DCaJw-IL.js";import"./preload-helper-ClClUiX7.js";import"./Table-Yn2naZit.js";import"./index-CTpVcWtj.js";import"./Dialog-CnwYTvBT.js";import"./cross-BWGdF31s.js";import"./svgIconContainer-Bbpye-X7.js";import"./useBaseUiId-B26AdHtG.js";import"./InternalBackdrop-DmLp5Gl4.js";import"./composite-C5TUu6hJ.js";import"./index-BW6-nEus.js";import"./index-D1lXuc4_.js";import"./index-B3kybnc3.js";import"./useEventCallback-CqxfjtdI.js";import"./SkeletonBar-B2QyIJUx.js";import"./LoadingCell-dQ7R5Hpj.js";import"./ColumnConfigDialog-BwS2PpVu.js";import"./DraggableList-f4GxRlGj.js";import"./search-x6pHaO-A.js";import"./Input-CCQVhRPw.js";import"./useControlled-B7OjwH49.js";import"./Button-BVydS5Yy.js";import"./small-cross-nxex0ZkC.js";import"./ActionButton-kDaP1zFI.js";import"./Checkbox-CKrVqXvH.js";import"./useValueChanged-DK0qo_26.js";import"./CollapsiblePanel-BSMYMTBM.js";import"./MultiColumnSortDialog-B18EqFte.js";import"./MenuTrigger-BPYWGQ03.js";import"./CompositeItem-BYWBWUfU.js";import"./ToolbarRootContext-C3_9j6Sh.js";import"./getDisabledMountTransitionStyles-3Vc1pogz.js";import"./getPseudoElementBounds-Cj_uTRK0.js";import"./chevron-down-C10qSii-.js";import"./index-BgtiYt9F.js";import"./error-DJLHZkng.js";import"./BaseCbacBanner-BRSfR0vr.js";import"./makeExternalStore-D5YfmHD0.js";import"./Tooltip-D0ez9myK.js";import"./PopoverPopup-8yoX8IlU.js";import"./debounce-BUg8UsLy.js";import"./tick-MOe4HZvJ.js";import"./DropdownField-CqsPWfQt.js";import"./isEqual-BmJmFeHQ.js";import"./withOsdkMetrics-LQabL3nD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
