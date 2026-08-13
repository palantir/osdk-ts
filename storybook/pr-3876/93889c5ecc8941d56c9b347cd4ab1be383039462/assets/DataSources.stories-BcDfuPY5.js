import{j as r}from"./iframe-B8ibQjKF.js";import{O as b}from"./object-table-9vqfk3fk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dd3dGzIE.js";import{u as g}from"./useOsdkClient-CNSoK_jG.js";import"./preload-helper-CMD4l3O3.js";import"./Table-f9R4UMOG.js";import"./index-B--aNSCd.js";import"./Dialog-BSpD68-v.js";import"./cross-uGZs9fgx.js";import"./svgIconContainer-DuFhrdn4.js";import"./useBaseUiId-BxWBC6a-.js";import"./InternalBackdrop-CCxZSbaK.js";import"./composite-CAyfL59E.js";import"./index-BCjJY3yP.js";import"./index-DBfTlL85.js";import"./index-DrgkSuUF.js";import"./useEventCallback-DePWrBVy.js";import"./SkeletonBar-DE8ZQ6J2.js";import"./LoadingCell-Bp02iLbu.js";import"./ColumnConfigDialog-DZlI4Qsl.js";import"./DraggableList-ByHOcy7f.js";import"./search-Cf8PmQT0.js";import"./Input-B1tchOJx.js";import"./useControlled-Cii-y7gH.js";import"./Button-A4muZh2M.js";import"./small-cross-DdjbaLVn.js";import"./ActionButton-DqU28EvH.js";import"./Checkbox-CA6_XMTm.js";import"./useValueChanged-7WVLzbi3.js";import"./CollapsiblePanel-z3aLJBjW.js";import"./MultiColumnSortDialog-CfWO-If5.js";import"./MenuTrigger-CJ44DmRX.js";import"./CompositeItem-BRMst1Om.js";import"./ToolbarRootContext-CK_0JlCI.js";import"./getDisabledMountTransitionStyles-BJ46NQkw.js";import"./getPseudoElementBounds-xIxeLL80.js";import"./chevron-down-DnT6V3B_.js";import"./index-CS7J2oP3.js";import"./error-B5tJ6HNC.js";import"./BaseCbacBanner-Dpz_8FPC.js";import"./makeExternalStore-PzBycvZ3.js";import"./Tooltip-BT2aBHPW.js";import"./PopoverPopup-B0Ae0Now.js";import"./debounce-CE6scw_c.js";import"./tick-CNDf03QZ.js";import"./DropdownField-ChRNI13x.js";import"./isEqual-CMa4Cmoc.js";import"./withOsdkMetrics-DLhXO-aP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
