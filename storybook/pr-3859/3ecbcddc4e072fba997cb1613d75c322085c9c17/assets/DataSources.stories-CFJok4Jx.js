import{j as r}from"./iframe-DqNwpodn.js";import{O as b}from"./object-table-CndYUbpU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BO_FiWUr.js";import{u as g}from"./useOsdkClient-DJJkzB6p.js";import"./preload-helper-Cozt92uG.js";import"./Table-CXew3kSo.js";import"./index-CQGcEopW.js";import"./Dialog-DYBN3w-h.js";import"./cross-ZDjiMYg9.js";import"./svgIconContainer-C0i7IGlc.js";import"./useBaseUiId-D0IRY_xq.js";import"./InternalBackdrop-bq37mfFN.js";import"./composite-CSLCI2p4.js";import"./index-Bhsl5-6I.js";import"./index-Bhb5doz-.js";import"./index-Bj_LoOtk.js";import"./useEventCallback-ChBBAdDe.js";import"./SkeletonBar-CA3-8q0G.js";import"./LoadingCell-_NAbetJ9.js";import"./ColumnConfigDialog-C5283-BB.js";import"./DraggableList-7y4TwzOW.js";import"./search-iXI7_iDk.js";import"./Input-dxlaYnFR.js";import"./useControlled-5kZb40iP.js";import"./isEqual-DLP-WK2H.js";import"./isObject-BRUxE1BI.js";import"./Button-yW5WqrcK.js";import"./ActionButton-DZE22GuX.js";import"./Checkbox-BaCUu8TS.js";import"./useValueChanged-DH14YV6T.js";import"./CollapsiblePanel-1B--EGV-.js";import"./MultiColumnSortDialog-BK4Wy9qy.js";import"./MenuTrigger-DSRQj8Ru.js";import"./CompositeItem-DRCpZxZT.js";import"./ToolbarRootContext-DNu-sflf.js";import"./getDisabledMountTransitionStyles-VX6CDH_F.js";import"./getPseudoElementBounds-t8ALxim5.js";import"./chevron-down-CkHwZ2js.js";import"./index-Bd8jGuQf.js";import"./error-QvLeIger.js";import"./BaseCbacBanner-vtKG92ma.js";import"./makeExternalStore-Bbu0t-Pj.js";import"./Tooltip-BMr5xNxI.js";import"./PopoverPopup-XHTPxMzD.js";import"./toNumber-BQcG8fNf.js";import"./tick-DP_4Q22L.js";import"./DropdownField-GXJNahHs.js";import"./withOsdkMetrics-DueETg7y.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
