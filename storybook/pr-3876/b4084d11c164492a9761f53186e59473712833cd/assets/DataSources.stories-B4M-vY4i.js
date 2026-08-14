import{j as r}from"./iframe-BLv43k9J.js";import{O as b}from"./object-table-CfqzNlg3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C4AUDv9N.js";import{u as g}from"./useOsdkClient-nxHTLk5y.js";import"./preload-helper-BWK7XSWt.js";import"./Table-Cd-K4oo0.js";import"./index-DnJ2XWrc.js";import"./Dialog-_2cjytIi.js";import"./cross-DZXT4_BE.js";import"./svgIconContainer-lFjoNcIE.js";import"./useBaseUiId-CsF7lQng.js";import"./InternalBackdrop-CvobybXb.js";import"./composite-Vd-yFJr-.js";import"./index-DH-aFVg8.js";import"./index-DBEuXQAb.js";import"./index-DFDkrfgO.js";import"./useEventCallback-YEBD5x35.js";import"./SkeletonBar-D_bW7dyd.js";import"./LoadingCell-CRtzj3qs.js";import"./ColumnConfigDialog-DyjLMgrD.js";import"./DraggableList-Dq696kRu.js";import"./search-BWAauGWf.js";import"./Input-H0U0jFqR.js";import"./useControlled-B_Pv1aNz.js";import"./Button-DoM6qM8k.js";import"./small-cross-BcoMLS_p.js";import"./ActionButton-CJ4K9Met.js";import"./Checkbox-DNXGCy1w.js";import"./useValueChanged-ChySQNHi.js";import"./CollapsiblePanel-BiT66lzW.js";import"./MultiColumnSortDialog-CsfDm5BD.js";import"./MenuTrigger-CgS7ClOi.js";import"./CompositeItem-NoKSjGCV.js";import"./ToolbarRootContext-iQjixVp7.js";import"./getDisabledMountTransitionStyles-y1SnP05P.js";import"./getPseudoElementBounds-91yw0TMr.js";import"./chevron-down-ZtIbBqb_.js";import"./index-C3haW_Xn.js";import"./error-DcpnTrTJ.js";import"./BaseCbacBanner-CJR8Hsvn.js";import"./makeExternalStore-DEk6s8Wu.js";import"./Tooltip-9IRQ37U3.js";import"./PopoverPopup-CdXttUjH.js";import"./debounce-B4MZBVPv.js";import"./tick-Cc0iQIqY.js";import"./DropdownField-BRIST8Bj.js";import"./isEqual-DIZ2BKPq.js";import"./withOsdkMetrics-Dp2Ae3-Q.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
