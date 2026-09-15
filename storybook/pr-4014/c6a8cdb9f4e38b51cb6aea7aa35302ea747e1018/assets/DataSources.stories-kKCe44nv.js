import{j as r}from"./iframe-5SoalxB8.js";import{O as b}from"./object-table-DcytYsBJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dq4unFV0.js";import{u as g}from"./useOsdkClient-Ct6jxELr.js";import"./preload-helper-B3AWIfbd.js";import"./Table-BhIfm7wU.js";import"./index-Cez1kwXk.js";import"./Dialog-Bdx_IH1I.js";import"./cross-C6M2F8_v.js";import"./svgIconContainer-ZIKM4LC1.js";import"./useBaseUiId-_hIxwWiU.js";import"./InternalBackdrop-BNnaRKAX.js";import"./composite-SE2iQFWF.js";import"./index-DT5Sidop.js";import"./index-OzD1TZjX.js";import"./index-DWklm5Nh.js";import"./useEventCallback-CoMxb96Z.js";import"./SkeletonBar-UdUH3l3g.js";import"./LoadingCell-Dy3t5IHW.js";import"./ColumnConfigDialog-CJ_Qxc9o.js";import"./DraggableList-D9zI9O9E.js";import"./search-7jKLWuvF.js";import"./Input-B7jz047V.js";import"./useControlled-WPjc1su4.js";import"./Button-C7yTVROs.js";import"./small-cross-BXQIwf9i.js";import"./ActionButton-vMTpem8c.js";import"./Checkbox-BxPwSiXj.js";import"./useValueChanged-BRgu9RH8.js";import"./CollapsiblePanel-BPbFINDF.js";import"./MultiColumnSortDialog-DG0uFl9D.js";import"./MenuTrigger-BhHI-4MQ.js";import"./CompositeItem-vz-X2T1a.js";import"./ToolbarRootContext-BawR_l4w.js";import"./getDisabledMountTransitionStyles-iftAt274.js";import"./getPseudoElementBounds-DeJjQFQA.js";import"./chevron-down-C4Jmkz2d.js";import"./index-DlMkNRxq.js";import"./error-_mgoiawP.js";import"./BaseCbacBanner-BMmA5ke7.js";import"./makeExternalStore-DfAT07Vb.js";import"./Tooltip-DyjzpvsB.js";import"./PopoverPopup-CZVBhwLf.js";import"./debounce-Cow5gaxU.js";import"./tick-b6pDkRL9.js";import"./DropdownField-B9xNR_1-.js";import"./isEqual-BBKpWkCo.js";import"./withOsdkMetrics-BjqDzNow.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
