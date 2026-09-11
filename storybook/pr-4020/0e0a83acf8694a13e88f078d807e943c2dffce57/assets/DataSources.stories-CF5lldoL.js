import{j as r}from"./iframe-t6gOiOpP.js";import{O as b}from"./object-table-jCj-jdV2.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B9pdEiN8.js";import{u as g}from"./useOsdkClient-lwd_qzlK.js";import"./preload-helper-CV5pzfbJ.js";import"./Table-CHURngd8.js";import"./index-B8f3749n.js";import"./Dialog-DZMmB0a5.js";import"./cross-DD5o22Zb.js";import"./svgIconContainer-B5Lj2eIE.js";import"./useBaseUiId-D0UWHXkS.js";import"./InternalBackdrop--ckurpTO.js";import"./composite-CFO_COst.js";import"./index-DaGdI8vt.js";import"./index-8kYg-C7M.js";import"./index-DxstgvF0.js";import"./useEventCallback-Ch6gIkUP.js";import"./SkeletonBar-CM0U4JXQ.js";import"./LoadingCell-CvILSvAL.js";import"./ColumnConfigDialog-tb2UPRLc.js";import"./DraggableList-Bey6PH__.js";import"./search-DBk5UsI-.js";import"./Input-DFrbhTU8.js";import"./useControlled-BZFiwdLD.js";import"./Button-CSkSEq0A.js";import"./small-cross-6H0sIvkE.js";import"./ActionButton-lPYhjhek.js";import"./Checkbox-BY24afgd.js";import"./useValueChanged-DdQntC3G.js";import"./CollapsiblePanel-Z1wCWvPx.js";import"./MultiColumnSortDialog--6aq8P5b.js";import"./MenuTrigger-BYAoIMpG.js";import"./CompositeItem-BYApWBRb.js";import"./ToolbarRootContext-DZ6RrQxV.js";import"./getDisabledMountTransitionStyles-CvywptPR.js";import"./getPseudoElementBounds-U7mN2tqj.js";import"./chevron-down-DJ9UCW_x.js";import"./index-Dqwb4kGz.js";import"./error-CgIajBJj.js";import"./BaseCbacBanner-CMR0iKug.js";import"./makeExternalStore-Y2a1OF7x.js";import"./Tooltip-C6huUy0h.js";import"./PopoverPopup-C9ka-zpy.js";import"./debounce-7GEDpMki.js";import"./tick-DyExF_WY.js";import"./DropdownField-BxmxCkTC.js";import"./isEqual-B1tWiUyp.js";import"./withOsdkMetrics-Bdbjb4hh.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
