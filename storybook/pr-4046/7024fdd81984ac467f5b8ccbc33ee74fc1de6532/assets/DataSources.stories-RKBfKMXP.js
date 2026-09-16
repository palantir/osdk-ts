import{j as r}from"./iframe-DaCuFEr4.js";import{O as b}from"./object-table-BLHNmO4Q.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cr2kfcOI.js";import{u as g}from"./useOsdkClient-D0YYFk-l.js";import"./preload-helper-CH__3C9o.js";import"./Table-BCCPtXPw.js";import"./index-DBgsNfjF.js";import"./Dialog-BGDE9Lmz.js";import"./cross-Dvh7Mb4q.js";import"./svgIconContainer-xI7GONU5.js";import"./useBaseUiId-ONC8Xt4g.js";import"./InternalBackdrop-IX1U8kwf.js";import"./composite-dd7jjZk4.js";import"./index-dtUyYAkL.js";import"./index-B2p2pg25.js";import"./index-CB1zNyDM.js";import"./useEventCallback-nN2qNTIn.js";import"./SkeletonBar-CQ0QNmxu.js";import"./LoadingCell-tcz8ADSH.js";import"./ColumnConfigDialog-BCPHsvLd.js";import"./DraggableList-Bbsa4S8M.js";import"./search-D050E2Ix.js";import"./Input-9OWE4hHY.js";import"./useControlled-qOz3lv_a.js";import"./Button-BSyutd6a.js";import"./small-cross-DG1zTSDP.js";import"./ActionButton-CLh4iGOc.js";import"./Checkbox-BsxvVU3e.js";import"./useValueChanged-ClwG0cRJ.js";import"./CollapsiblePanel-qk7TdI5O.js";import"./MultiColumnSortDialog-kJmtx_MZ.js";import"./MenuTrigger-Hn15FCcY.js";import"./CompositeItem-CUKWIiHk.js";import"./ToolbarRootContext-BhpmgE0w.js";import"./getDisabledMountTransitionStyles-CB7sZ96x.js";import"./getPseudoElementBounds-CqcAX_hh.js";import"./chevron-down-kPE5lOM8.js";import"./index-CGnRKytQ.js";import"./error-C-IGdotI.js";import"./BaseCbacBanner-B-l4fz7l.js";import"./makeExternalStore-DGayjJTu.js";import"./Tooltip-CT9sU2PZ.js";import"./PopoverPopup-DZltGoWp.js";import"./debounce-Bu5YTwKq.js";import"./tick-BTtRE0Kk.js";import"./DropdownField-bcPFxJTG.js";import"./isEqual-BXIGuTbA.js";import"./withOsdkMetrics-B-pgZqiw.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
