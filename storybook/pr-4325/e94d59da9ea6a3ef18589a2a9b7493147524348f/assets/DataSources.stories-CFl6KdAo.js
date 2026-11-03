import{j as r}from"./iframe-D0BcpvbQ.js";import{O as b}from"./object-table-PqC7FE-O.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-PkksVNwx.js";import{u as g}from"./useOsdkClient-D3fIC1F8.js";import"./preload-helper-25-JBzXD.js";import"./Table-BEsaXFi1.js";import"./index-J-5LjNrj.js";import"./Dialog-vNOQWlw1.js";import"./cross-CjHwEj-1.js";import"./svgIconContainer-C3Yfvyd2.js";import"./useBaseUiId-DKDRPBwJ.js";import"./InternalBackdrop-DYHVppNb.js";import"./composite-oTuSysNj.js";import"./index-DnyQlPpk.js";import"./index-Boycosi1.js";import"./index-DZk3VDH-.js";import"./useEventCallback-CFJPyiwb.js";import"./SkeletonBar-By0yALek.js";import"./LoadingCell-Bax77anx.js";import"./ColumnConfigDialog-BHuWFt8t.js";import"./DraggableList-6e2N0cSH.js";import"./search-CSQzmj9y.js";import"./Input-CmqnqFxK.js";import"./useControlled-2QWb7bZB.js";import"./Button-X3pcCJxf.js";import"./small-cross-qu8LZoy6.js";import"./ActionButton-Do_ZLaI6.js";import"./Checkbox-DsaK4CC-.js";import"./useValueChanged-Da2WPzqs.js";import"./CollapsiblePanel-DUiPkmDM.js";import"./MultiColumnSortDialog-BKzxXvjt.js";import"./MenuTrigger-DmSEvktb.js";import"./CompositeItem-CKKkXKKr.js";import"./ToolbarRootContext-4_oBwQs6.js";import"./getDisabledMountTransitionStyles-BmtzZkd7.js";import"./getPseudoElementBounds-CLq8MpBn.js";import"./chevron-down-WrvVs3Y7.js";import"./index-Ujvos5Bu.js";import"./error-BGGXhU_S.js";import"./BaseCbacBanner-Bwe36--Z.js";import"./makeExternalStore-NS27kiyv.js";import"./Tooltip-h5iXzAIl.js";import"./PopoverPopup-BZJMElBM.js";import"./debounce-C4dGlWDp.js";import"./tick-DXX_EiYG.js";import"./DropdownField-CUMisXrx.js";import"./isEqual-DkQgEU8T.js";import"./withOsdkMetrics-DmAggtUS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
