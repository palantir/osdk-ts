import{j as r}from"./iframe-ChS3imFp.js";import{O as b}from"./object-table-BPYfgJHo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-JEpf_mK9.js";import{u as g}from"./useOsdkClient-DGx74XLA.js";import"./preload-helper-CbLZMJZq.js";import"./Table-1iNzrKdw.js";import"./index-BhUaDBrt.js";import"./Dialog-CNUb0HiZ.js";import"./cross-B14JKiqa.js";import"./svgIconContainer-CrPK_Tf2.js";import"./useBaseUiId-D54mwsVu.js";import"./InternalBackdrop-BxgcnVtt.js";import"./composite-BXiRclhX.js";import"./index-q2j62sEE.js";import"./index-jVTOKRrt.js";import"./index-C5fCn2Oc.js";import"./useEventCallback-DkRfzjT3.js";import"./SkeletonBar-Cj6_TZPS.js";import"./LoadingCell-Bvndp_nD.js";import"./ColumnConfigDialog-6QS0FE1C.js";import"./DraggableList-4xfXmqhr.js";import"./search-DsoYH40Z.js";import"./Input-Ceo2lduN.js";import"./useControlled-BRbOyxdk.js";import"./Button-DheVbQ5T.js";import"./small-cross-BvcSZeK5.js";import"./ActionButton-5Bimgsql.js";import"./Checkbox-BeMf2eoX.js";import"./useValueChanged-BrvbqScR.js";import"./CollapsiblePanel-6nrQcjmf.js";import"./MultiColumnSortDialog-CRuuO82b.js";import"./MenuTrigger-C8EJ5VzV.js";import"./CompositeItem-Ciy3kTde.js";import"./ToolbarRootContext-Ciy-U0ts.js";import"./getDisabledMountTransitionStyles-CDYtl7Ns.js";import"./getPseudoElementBounds-j94sMqWn.js";import"./chevron-down-CE8oNUyN.js";import"./index-x3Y6GJ5x.js";import"./error-qSLqjDm7.js";import"./BaseCbacBanner-Ddq1Akzn.js";import"./makeExternalStore-vRVo58Vz.js";import"./Tooltip-Dttn_b8B.js";import"./PopoverPopup-C3wuDmxN.js";import"./debounce-DDb-9VWg.js";import"./tick-X11Khcsu.js";import"./DropdownField-DH0EEhyZ.js";import"./isEqual-CJd-aWLn.js";import"./withOsdkMetrics-uF3PiR7H.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
