import{j as r}from"./iframe-BkUB1z-0.js";import{O as b}from"./object-table-B0QkY8pq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BU5zEsfv.js";import{u as g}from"./useOsdkClient-BbELsNFg.js";import"./preload-helper-BCudyj9Z.js";import"./Table-D7nmPrIe.js";import"./index-BCGsaIlh.js";import"./Dialog-OQ_7fT6e.js";import"./cross-CTUau5h8.js";import"./svgIconContainer-CGIj3k_X.js";import"./useBaseUiId-B8T1UKcT.js";import"./InternalBackdrop-H5sSfb4n.js";import"./composite-DN3Oh5mU.js";import"./index-BQjDuZGx.js";import"./index-D6in26WZ.js";import"./index-CvdNlkb_.js";import"./useEventCallback-Cxr3bwfn.js";import"./SkeletonBar-CDJ42pSX.js";import"./LoadingCell-Bg2VT36p.js";import"./ColumnConfigDialog-CU0uQ1_j.js";import"./DraggableList-DG9sSi1E.js";import"./search-BtcHq1ld.js";import"./Input-C4TK9SWN.js";import"./useControlled-CUAQStBL.js";import"./Button-DSZL0uVg.js";import"./small-cross-BAPz52fQ.js";import"./ActionButton-9cqEoefe.js";import"./Checkbox-QYXnRQej.js";import"./useValueChanged-BT-2a7nr.js";import"./CollapsiblePanel-q_QI9iZH.js";import"./MultiColumnSortDialog-D_Gp9N_w.js";import"./MenuTrigger-DCv1PXh0.js";import"./CompositeItem-Bq1Yg5Uc.js";import"./ToolbarRootContext-But4UFVK.js";import"./getDisabledMountTransitionStyles-DT8C5L09.js";import"./getPseudoElementBounds-BRtlcmQu.js";import"./chevron-down-C-Az15Kw.js";import"./index-Cx3qLWLm.js";import"./error-yvAwMgsa.js";import"./BaseCbacBanner-Cjp0jT5t.js";import"./makeExternalStore-CT_-UtYV.js";import"./Tooltip-B4XqSu-L.js";import"./PopoverPopup-ozcNWDZ5.js";import"./debounce-BLWM42lG.js";import"./tick-C2mVcAcj.js";import"./DropdownField-0exMnQkH.js";import"./isEqual-DS9l3kd2.js";import"./withOsdkMetrics-a2YFnMdP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
