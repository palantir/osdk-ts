import{j as r}from"./iframe-C1TIX5JI.js";import{O as b}from"./object-table-CMU-D2op.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DBfGRp5p.js";import{u as g}from"./useOsdkClient-D64jRzyq.js";import"./preload-helper-BtZpkMB0.js";import"./Table-C-Jt6DU2.js";import"./index-Gx0d5aEB.js";import"./Dialog-C3juZxFB.js";import"./cross-BhNrYvcF.js";import"./svgIconContainer-C8MADQYH.js";import"./useBaseUiId-DePiMeOB.js";import"./InternalBackdrop-3gKyBm5j.js";import"./composite-C4rxhLiP.js";import"./index-DJqIo3bD.js";import"./index-CIcyQnyh.js";import"./index-BzYFvMJd.js";import"./useEventCallback-CQj7Y2wd.js";import"./SkeletonBar-Byy-oVLe.js";import"./LoadingCell-CQuqCKwF.js";import"./ColumnConfigDialog-BPEUu41j.js";import"./DraggableList-CUP3XVuA.js";import"./search-LH-9seDT.js";import"./Input-bIhTrC5p.js";import"./useControlled-C6axbr2z.js";import"./Button-CpS9y80N.js";import"./small-cross-qJkEPBr6.js";import"./ActionButton-BHH4NDLY.js";import"./Checkbox-kmqqo5Xt.js";import"./useValueChanged-Bv8cfv1O.js";import"./CollapsiblePanel-mSd7yFQM.js";import"./MultiColumnSortDialog-C-hlH093.js";import"./MenuTrigger-CwAI2mp-.js";import"./CompositeItem-CBntDvdI.js";import"./ToolbarRootContext-B4mO9KPM.js";import"./getDisabledMountTransitionStyles-DAbJFScG.js";import"./getPseudoElementBounds-DEGLArUE.js";import"./chevron-down-CtHVru-S.js";import"./index-U8HSbgyt.js";import"./error-DkEU1DEd.js";import"./BaseCbacBanner-33-W2eHI.js";import"./makeExternalStore-DRXMdcub.js";import"./Tooltip-Cj81ITcV.js";import"./PopoverPopup-DiuwLzzF.js";import"./debounce-BJNuh3Yk.js";import"./tick-Cf1cYmcP.js";import"./DropdownField-B8kwWA0Z.js";import"./isEqual-tnTJm-mS.js";import"./withOsdkMetrics-BYJpc4fR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
