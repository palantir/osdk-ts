import{j as r}from"./iframe-DsRLlUaX.js";import{O as b}from"./object-table-C6ocuAmU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CUcvYOeI.js";import{u as g}from"./useOsdkClient-odhqC5VJ.js";import"./preload-helper-C3_l2Hl0.js";import"./Table-B5YW4b-i.js";import"./index-BjtlPBUb.js";import"./Dialog-NmSshLSo.js";import"./cross-BZKb8UMR.js";import"./svgIconContainer-zp1B85KB.js";import"./useBaseUiId-C4i6MKWL.js";import"./InternalBackdrop-nEq0F95e.js";import"./composite-DOMJJy3E.js";import"./index-n_UhMgqI.js";import"./index-Bav5EGdy.js";import"./index-BzAzXXv_.js";import"./useEventCallback-DmbMgs2A.js";import"./SkeletonBar-RdAIK3SY.js";import"./LoadingCell-CxPz7u6p.js";import"./ColumnConfigDialog-BIlxFV8w.js";import"./DraggableList-CQ2CxVlc.js";import"./search-SgUD_ncl.js";import"./Input-DZ_xmuAk.js";import"./useControlled-DEedTOrX.js";import"./Button-DOnuCfPD.js";import"./small-cross-CPUMrn4k.js";import"./ActionButton-DcRLI80N.js";import"./Checkbox-Anj4p3QX.js";import"./useValueChanged-C110ouPx.js";import"./CollapsiblePanel-Cs4tbvDj.js";import"./MultiColumnSortDialog-DlgXXTmU.js";import"./MenuTrigger-FQSVvGxv.js";import"./CompositeItem-DfeVObqB.js";import"./ToolbarRootContext-B0k-j8eq.js";import"./getDisabledMountTransitionStyles-CuDFXdCB.js";import"./getPseudoElementBounds-BKZ8iNlw.js";import"./chevron-down-BpedfE0t.js";import"./index-C9cwWX6g.js";import"./error-CaruzJxR.js";import"./BaseCbacBanner-JMChXCpR.js";import"./makeExternalStore-0t40E2-H.js";import"./Tooltip-Bb-4nM7_.js";import"./PopoverPopup-C20EJZAo.js";import"./debounce-BdN6OVW0.js";import"./tick-Bf8GrdTl.js";import"./DropdownField-B8gE2PDv.js";import"./isEqual-Caes_N__.js";import"./withOsdkMetrics-BDhrFxgU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
