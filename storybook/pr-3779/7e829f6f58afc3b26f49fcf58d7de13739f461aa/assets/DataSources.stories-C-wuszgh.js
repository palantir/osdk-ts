import{j as r}from"./iframe-C4zdqVWj.js";import{O as b}from"./object-table-5y_eVbGC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CjmV3CHn.js";import{u as g}from"./useOsdkClient-DE0gigoB.js";import"./preload-helper-B7IRCv2i.js";import"./Table-BWPn6ED7.js";import"./index-CDa3Dpks.js";import"./Dialog-MY0z2_xP.js";import"./cross-CcKzwauY.js";import"./svgIconContainer-Dl60orHi.js";import"./useBaseUiId-C3-O81r1.js";import"./InternalBackdrop-DqCdUi6X.js";import"./composite-BOKzBbqE.js";import"./index-C-EVsM9H.js";import"./index-Bm-WBCaz.js";import"./index-CSSkJhd4.js";import"./useEventCallback-DzWmOzmx.js";import"./SkeletonBar-DJaveH5w.js";import"./LoadingCell-zoMfqBjd.js";import"./ColumnConfigDialog-DLxA3N4e.js";import"./DraggableList-DnQXeKHB.js";import"./search-D_jp9buf.js";import"./Input-CS5KY3Rt.js";import"./useControlled-BrGKFAOi.js";import"./isEqual-C0_uJpan.js";import"./isObject-NBpvH-VP.js";import"./Button-DnwMOogo.js";import"./ActionButton-CMS_gGpM.js";import"./Checkbox-DtK7jRa-.js";import"./useValueChanged-C4h3bH8g.js";import"./CollapsiblePanel-DA_mKU-k.js";import"./MultiColumnSortDialog-CLR96K0C.js";import"./MenuTrigger-CKsgtdQN.js";import"./CompositeItem-BBqAN0oe.js";import"./ToolbarRootContext-Cs3bwfMD.js";import"./getDisabledMountTransitionStyles-vcPfD5Po.js";import"./getPseudoElementBounds-BCuazdjb.js";import"./chevron-down-BfWdzJim.js";import"./index-DaQh8MoE.js";import"./error--oEoM1lA.js";import"./BaseCbacBanner-BNR_qvcW.js";import"./makeExternalStore-DB6uj4vP.js";import"./Tooltip-Cg1rzKhs.js";import"./PopoverPopup-BOpSDf1z.js";import"./toNumber-CVAuJ7yr.js";import"./tick-CYjee-q_.js";import"./DropdownField-Bdhoiu2-.js";import"./withOsdkMetrics-1nDs0-t4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
