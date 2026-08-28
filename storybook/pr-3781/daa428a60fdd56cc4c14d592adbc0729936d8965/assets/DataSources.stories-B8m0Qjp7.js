import{j as r}from"./iframe-CdXRgAZ5.js";import{O as b}from"./object-table-CN8kwCL4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cv37vUxz.js";import{u as g}from"./useOsdkClient-DfLv09Cv.js";import"./preload-helper-CitRRdiQ.js";import"./Table-CDJRnX7-.js";import"./index-D9vry920.js";import"./Dialog-DchmYRhm.js";import"./cross-BSpE7ik9.js";import"./svgIconContainer-DDpGR0K9.js";import"./useBaseUiId-C4Byj8B0.js";import"./InternalBackdrop-DO-4mexr.js";import"./composite-in5-wL5z.js";import"./index-EqByydDb.js";import"./index-ltWxUmJy.js";import"./index-CNFDJENd.js";import"./useEventCallback-Bz8KBaS5.js";import"./SkeletonBar-Yb2Ri3_7.js";import"./LoadingCell-Dg6H086G.js";import"./ColumnConfigDialog-DbRCU5iz.js";import"./DraggableList-DYta_Y7r.js";import"./search-CBule6p8.js";import"./Input-CSHvQsfp.js";import"./useControlled-DSrBRiZ_.js";import"./Button-vMf8G5_Y.js";import"./small-cross-DywfSgOm.js";import"./ActionButton-D_fOZp6Y.js";import"./Checkbox-DC-aG5Bo.js";import"./useValueChanged-BKvMUlXV.js";import"./CollapsiblePanel-O4VAn8Gx.js";import"./MultiColumnSortDialog-BRiBPLiI.js";import"./MenuTrigger-ow0lXlSw.js";import"./CompositeItem-DuqUtFNG.js";import"./ToolbarRootContext-D-BSwljH.js";import"./getDisabledMountTransitionStyles-T20fe8L9.js";import"./getPseudoElementBounds-DDHCJymJ.js";import"./chevron-down-BymEN6Iw.js";import"./index-B4exONM0.js";import"./error-DZGmcMd6.js";import"./BaseCbacBanner-DQSCEX4v.js";import"./makeExternalStore-D0rHK4H4.js";import"./Tooltip-BrmNiBdj.js";import"./PopoverPopup-DD3bpHRz.js";import"./debounce-nRF8PGBP.js";import"./tick-B4Cn5MSM.js";import"./DropdownField-Dc5QpqIC.js";import"./isEqual-CkwefDw5.js";import"./withOsdkMetrics-DQE_UW0r.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
