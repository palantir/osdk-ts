import{j as r}from"./iframe-6-lsrwMw.js";import{O as b}from"./object-table-BD5fLK_U.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-aOD7t1dH.js";import{u as g}from"./useOsdkClient-Ds0tcoZm.js";import"./preload-helper-Db94U03p.js";import"./Table-CkrRI7-F.js";import"./index-DH_wHqGf.js";import"./Dialog-r2SlhXyP.js";import"./cross-YaAg5Emc.js";import"./svgIconContainer-XYTAu43b.js";import"./useBaseUiId-CL8n1QSk.js";import"./InternalBackdrop-B6K0nBuz.js";import"./composite-49wknnqt.js";import"./index-Bw-N-TJf.js";import"./index-1sUFjhZs.js";import"./index-DzLg0_9K.js";import"./useEventCallback-CfIHiVet.js";import"./SkeletonBar-Cpo0DVFp.js";import"./LoadingCell-Dpvyiyjr.js";import"./ColumnConfigDialog--fXwNZ3n.js";import"./DraggableList-CMebvrw0.js";import"./search-DcT9O0hm.js";import"./Input-DmhHRvF_.js";import"./useControlled-Do4cdAri.js";import"./Button-BajEEQr1.js";import"./small-cross-DrQAtv1a.js";import"./ActionButton-DdMfURgP.js";import"./Checkbox-95Z5M751.js";import"./useValueChanged-9nNSuzsu.js";import"./CollapsiblePanel-BsHL6Fuo.js";import"./MultiColumnSortDialog-PE-F8gRf.js";import"./MenuTrigger-4UQAkATc.js";import"./CompositeItem-B37GUCR2.js";import"./ToolbarRootContext-DZy52B3w.js";import"./getDisabledMountTransitionStyles-DSJQnDkW.js";import"./getPseudoElementBounds-docA_U__.js";import"./chevron-down-CRB-_0Nc.js";import"./index-DfdKE2my.js";import"./error-B3oxwr-6.js";import"./BaseCbacBanner-DwZ57uy4.js";import"./makeExternalStore-7KIsSfAR.js";import"./Tooltip-BeHTL_ss.js";import"./PopoverPopup-Ct_ibkbw.js";import"./debounce-Dbd1txbU.js";import"./tick-S3MoWbWh.js";import"./DropdownField-B4-i467w.js";import"./isEqual-DDH6bZop.js";import"./withOsdkMetrics-B8Q-upjJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
