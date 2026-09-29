import{j as r}from"./iframe-CAlFL39P.js";import{O as b}from"./object-table-UQy4RF9D.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CiBdnZOJ.js";import{u as g}from"./useOsdkClient-BWqfO9Ex.js";import"./preload-helper-Di8UnZgY.js";import"./Table-DsU3_Ge1.js";import"./index-Btel0vm8.js";import"./Dialog-CrbdkfzJ.js";import"./cross-C-7oEPIv.js";import"./svgIconContainer-B3bjsS48.js";import"./useBaseUiId-DZP7PN-D.js";import"./InternalBackdrop-CJFWdMDJ.js";import"./composite-Do6HvbOs.js";import"./index-CFlCfQcw.js";import"./index-BkqKFdv7.js";import"./index-vkk_5yOj.js";import"./useEventCallback-DuUtYSXt.js";import"./SkeletonBar-D07kBYWy.js";import"./LoadingCell-Btiev75L.js";import"./ColumnConfigDialog-D9yGeKRs.js";import"./DraggableList-pJ6FsEp7.js";import"./search-B49Txj1R.js";import"./Input-BBwNdl2L.js";import"./useControlled-CagAHQp0.js";import"./Button-C360afnZ.js";import"./small-cross-BLQbHCb6.js";import"./ActionButton-DjRyKh7y.js";import"./Checkbox-B2NUrj_g.js";import"./useValueChanged-BMf8iwn2.js";import"./CollapsiblePanel-EQ6Qu2qu.js";import"./MultiColumnSortDialog-6JpRNIIu.js";import"./MenuTrigger-BMrrXs9Q.js";import"./CompositeItem-BD07_lL8.js";import"./ToolbarRootContext-NYYVBOfJ.js";import"./getDisabledMountTransitionStyles-C65SjH8s.js";import"./getPseudoElementBounds-DAJFGzrR.js";import"./chevron-down-C4L1Vt1n.js";import"./index-DlRk9Ig6.js";import"./error-DNzjg8ag.js";import"./BaseCbacBanner-BozJzFUC.js";import"./makeExternalStore-H3EygE5L.js";import"./Tooltip-DivaijH4.js";import"./PopoverPopup-CDqtgdJD.js";import"./debounce-sXHlCwpy.js";import"./tick-C2A5bpz7.js";import"./DropdownField-DbH7bzp-.js";import"./isEqual-UK523JPQ.js";import"./withOsdkMetrics-D_LiGSK5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
