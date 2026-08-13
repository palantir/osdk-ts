import{j as r}from"./iframe-Ct8R5TQf.js";import{O as b}from"./object-table-xRIBPBGx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C6swro5H.js";import{u as g}from"./useOsdkClient-r4aP_XEn.js";import"./preload-helper-CmnAPtah.js";import"./Table-CHMoffmR.js";import"./index-BRgsegbN.js";import"./Dialog-sHJ-Lwpx.js";import"./cross-D1xZE6uN.js";import"./svgIconContainer-Duqk0EvN.js";import"./useBaseUiId-DoNgXT9k.js";import"./InternalBackdrop-CmAxUY43.js";import"./composite-Be4Z-niC.js";import"./index-BtTgSEhG.js";import"./index-4doTHW3z.js";import"./index-C1yjTJBR.js";import"./useEventCallback-BPwGWkYm.js";import"./SkeletonBar-D5z58f16.js";import"./LoadingCell-Dd9Y9O5K.js";import"./ColumnConfigDialog-VwsIjpmc.js";import"./DraggableList-BIPdkCGd.js";import"./search-CxT81SBo.js";import"./Input-887jmIgI.js";import"./useControlled-CKc1aHxj.js";import"./isEqual-B_1WvBBP.js";import"./isObject-DsLUKuNx.js";import"./Button-DAFBE6sk.js";import"./ActionButton-Dy803DLk.js";import"./Checkbox-C8Bm-09C.js";import"./useValueChanged-Dt5s7uy9.js";import"./CollapsiblePanel-CQSwWtqU.js";import"./MultiColumnSortDialog-C_BPKUJB.js";import"./MenuTrigger-B77a9xoL.js";import"./CompositeItem-sASbL7Ao.js";import"./ToolbarRootContext-BFoDjrVA.js";import"./getDisabledMountTransitionStyles-c53JuB2C.js";import"./getPseudoElementBounds-B19hTPqu.js";import"./chevron-down-hHedeX78.js";import"./index-B-_jawLE.js";import"./error-BzhSLAKe.js";import"./BaseCbacBanner-CZNuGQ2q.js";import"./makeExternalStore-D6qxd4Fu.js";import"./Tooltip-CEgxcaNi.js";import"./PopoverPopup-CD16ekSW.js";import"./toNumber-VtCCuLiZ.js";import"./tick-DY14VF5-.js";import"./DropdownField-CmEpGFBE.js";import"./withOsdkMetrics-DgiHV6Et.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
