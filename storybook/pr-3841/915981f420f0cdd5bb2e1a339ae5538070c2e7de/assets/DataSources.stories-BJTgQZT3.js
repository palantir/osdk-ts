import{j as r}from"./iframe-BOmrqFPc.js";import{O as b}from"./object-table-CgTZhKfv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BWxiAyA0.js";import{u as g}from"./useOsdkClient-BKdn_EkF.js";import"./preload-helper-DHdkCmlX.js";import"./Table-BJpB3MpQ.js";import"./index-CsuBd3Ct.js";import"./Dialog-KCVIqPJc.js";import"./cross-C3JW1YVW.js";import"./svgIconContainer-BIv09OFd.js";import"./useBaseUiId-BbxoKReU.js";import"./InternalBackdrop-Bi_UxEim.js";import"./composite-DD_Mh2Hz.js";import"./index-CwZfU70k.js";import"./index-CmDTuj0A.js";import"./index-OMceiRFh.js";import"./useEventCallback-BCbidy2u.js";import"./SkeletonBar-CCtYn663.js";import"./LoadingCell-D20rDd7b.js";import"./ColumnConfigDialog-CMwN6Z58.js";import"./DraggableList-CvUF4ah5.js";import"./search-BDQnen_f.js";import"./Input-DztT7-KE.js";import"./useControlled-fJQSQ2l_.js";import"./Button-CzVdVKcN.js";import"./small-cross-DJnfj9QP.js";import"./ActionButton-BDtYk-kf.js";import"./Checkbox-zixLd25m.js";import"./useValueChanged-Dhmmb8Eg.js";import"./CollapsiblePanel-gIOqhaYB.js";import"./MultiColumnSortDialog-mZBPlG9r.js";import"./MenuTrigger-tX7EZ8Yt.js";import"./CompositeItem-BQhn1KAi.js";import"./ToolbarRootContext-CZljBiwl.js";import"./getDisabledMountTransitionStyles-BpRjKf3X.js";import"./getPseudoElementBounds-BxchgAnl.js";import"./chevron-down-CjR8Mc2-.js";import"./index-7ewfs4s5.js";import"./error-lpzYnACL.js";import"./BaseCbacBanner-CKztZQf-.js";import"./makeExternalStore-CIMBrNRu.js";import"./Tooltip-Cf3Cg01o.js";import"./PopoverPopup-CvmU8NRY.js";import"./debounce-CRQ5iXC9.js";import"./tick-DWpFBI3S.js";import"./DropdownField-Dbo12qhB.js";import"./isEqual-DZa_3meK.js";import"./withOsdkMetrics-CHgAtXdu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
