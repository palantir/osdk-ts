import{j as r}from"./iframe-DOeAYoRk.js";import{O as b}from"./object-table-BMbidIlQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-nAjcRiFy.js";import{u as g}from"./useOsdkClient-Bz-qXpDK.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BwDvF8K8.js";import"./index-C8enkHHH.js";import"./Dialog-DT-6RsPK.js";import"./cross-CTQfiCoc.js";import"./svgIconContainer-4JA-55AY.js";import"./useBaseUiId-CqKYfNUG.js";import"./InternalBackdrop-BLrtRR73.js";import"./composite-CxfEfgAE.js";import"./index-jM1sW0ik.js";import"./index-C3Zqf3YM.js";import"./index-Ca1wRqXA.js";import"./useEventCallback-BTk3Z6Qr.js";import"./SkeletonBar-Dmjzy1lt.js";import"./LoadingCell-DYH1qbvq.js";import"./ColumnConfigDialog-B6g0duZI.js";import"./DraggableList-DrVMbYk9.js";import"./search-SpwpHeSC.js";import"./Input-oDyylqSn.js";import"./useControlled-4ALZ6JWG.js";import"./isEqual-_B9NyKT8.js";import"./isObject-BGTx8vaf.js";import"./Button-Cdun-kQv.js";import"./ActionButton-DbCm8V1N.js";import"./Checkbox-BOHdBk7N.js";import"./useValueChanged-CbWVEL48.js";import"./CollapsiblePanel-DPDp83X3.js";import"./MultiColumnSortDialog-CIChi61X.js";import"./MenuTrigger-BhWhB7VG.js";import"./CompositeItem-DpuZl7_I.js";import"./ToolbarRootContext-DZ03LuRT.js";import"./getDisabledMountTransitionStyles-DBl444QP.js";import"./getPseudoElementBounds-Bo7TLJ0Y.js";import"./chevron-down-CKxHpqTt.js";import"./index-bOvw0pIt.js";import"./error-DvFfN3ld.js";import"./BaseCbacBanner-qyS-LwHQ.js";import"./makeExternalStore-DjKzDLfr.js";import"./Tooltip-BoEvhs6Q.js";import"./PopoverPopup-C5owdlCI.js";import"./toNumber-Cs6XeUud.js";import"./tick-afTKFpG8.js";import"./DropdownField-BwGsUJcf.js";import"./withOsdkMetrics-CP1ydFVJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
