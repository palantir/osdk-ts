import{j as r}from"./iframe-BAIjVGVk.js";import{O as b}from"./object-table-CgRmp_wx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C1nrnBGW.js";import{u as g}from"./useOsdkClient-BGAxcLse.js";import"./preload-helper-DSHh_idH.js";import"./Table-DDAhnscq.js";import"./index-DXpX7Amm.js";import"./Dialog-DkpHA-m3.js";import"./cross-CMTVeRn5.js";import"./svgIconContainer-CyAzcMHP.js";import"./useBaseUiId-BWufarWX.js";import"./InternalBackdrop-CoKYeuWa.js";import"./composite-QKuz8rbt.js";import"./index-ClU-xGz3.js";import"./index-BsrAu5pi.js";import"./index-QT8bzbR-.js";import"./useEventCallback-CsCnypAM.js";import"./SkeletonBar-Bedjo_IK.js";import"./LoadingCell-15_H8fvU.js";import"./ColumnConfigDialog-CMLYXuJ3.js";import"./DraggableList-2Q7nVhxS.js";import"./search-CuXKgBVi.js";import"./Input-fl6Gg72N.js";import"./useControlled-DuNzm9BZ.js";import"./Button-YDlO7Iev.js";import"./small-cross-DhSNS2sx.js";import"./ActionButton-DTbF0D12.js";import"./Checkbox-B6DnqRZR.js";import"./useValueChanged-bKRsX5KW.js";import"./CollapsiblePanel-pLJveLE6.js";import"./MultiColumnSortDialog-4VLh05pQ.js";import"./MenuTrigger-BIzQg68D.js";import"./CompositeItem-D_qw6hBc.js";import"./ToolbarRootContext-cyL3JijA.js";import"./getDisabledMountTransitionStyles-DBk0gkcA.js";import"./getPseudoElementBounds-B2i1okA0.js";import"./chevron-down-CI5MTTqT.js";import"./index-BI7ItsTy.js";import"./error-BHvGZT3F.js";import"./BaseCbacBanner-BtTwoFWI.js";import"./makeExternalStore-BcjHsE3T.js";import"./Tooltip-DHp42P0G.js";import"./PopoverPopup-34srozDo.js";import"./debounce-DV255FUG.js";import"./tick-CNbryE7H.js";import"./DropdownField-Z7SF_GUg.js";import"./isEqual-CNxzTEUo.js";import"./withOsdkMetrics-bmWg7v3w.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
