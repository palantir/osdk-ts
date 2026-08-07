import{j as r}from"./iframe-CPz4EE4b.js";import{O as b}from"./object-table-Bpb6cItY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bze1xKla.js";import{u as g}from"./useOsdkClient-4vxdzy5u.js";import"./preload-helper-BF9ZU9L2.js";import"./Table-DWzIvv-t.js";import"./index-DPQnz2kY.js";import"./Dialog-DC1UFKx2.js";import"./cross-B6wcH7NV.js";import"./svgIconContainer-DvQDx7ps.js";import"./useBaseUiId-DA8N-Cu-.js";import"./InternalBackdrop-e3bdAVp_.js";import"./composite-DC2iaAhD.js";import"./index-YkFTybZ5.js";import"./index-CJDK8JNQ.js";import"./index-B58hFV_H.js";import"./useEventCallback-B7Q5VopY.js";import"./SkeletonBar-C5i76X_E.js";import"./LoadingCell-M2C2qZG3.js";import"./ColumnConfigDialog-Byl7XMyX.js";import"./DraggableList-CD4BIzfT.js";import"./search-CXWbO0Ru.js";import"./Input-BPvVCqJh.js";import"./useControlled-CcD5XhNi.js";import"./isEqual-Bcuklsmv.js";import"./isObject-BYf5ICrk.js";import"./Button-C0KwGN38.js";import"./ActionButton-uEQ50Sca.js";import"./Checkbox-DUfZ5CUi.js";import"./useValueChanged-DRK6-_yq.js";import"./CollapsiblePanel-CYdZ8nbz.js";import"./MultiColumnSortDialog-VpgOvgtI.js";import"./MenuTrigger-DGvICw92.js";import"./CompositeItem-DCP0DZpD.js";import"./ToolbarRootContext-BXV7NB_D.js";import"./getDisabledMountTransitionStyles-DVGMUieh.js";import"./getPseudoElementBounds-D8m_aFdX.js";import"./chevron-down-BgJNP9vx.js";import"./index-8dkGhFzU.js";import"./error-CgKzZzah.js";import"./BaseCbacBanner-BAvvwpCO.js";import"./makeExternalStore-CPJA5Zb3.js";import"./Tooltip-CiRczL5H.js";import"./PopoverPopup-BMq3Yh3-.js";import"./toNumber-CkzBscM2.js";import"./tick-BagwPZ-4.js";import"./DropdownField-B0L3JmJr.js";import"./withOsdkMetrics-CPx-A9BJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
