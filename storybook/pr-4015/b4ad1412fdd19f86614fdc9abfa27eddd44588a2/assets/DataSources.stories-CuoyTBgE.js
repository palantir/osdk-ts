import{j as r}from"./iframe-vupRmrl1.js";import{O as b}from"./object-table-BhZpyXrV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B-j_6blh.js";import{u as g}from"./useOsdkClient-LWof9usE.js";import"./preload-helper-gDtGaGRc.js";import"./Table-BhkPCP2Y.js";import"./index-DyT3w31I.js";import"./Dialog-BkfrMvl2.js";import"./cross-DtkFdwBY.js";import"./svgIconContainer-BMvPRZYr.js";import"./useBaseUiId-BHpjHq0v.js";import"./InternalBackdrop-cx_OFO3C.js";import"./composite-D7MQDgRI.js";import"./index-ByLKmROF.js";import"./index-CNpYqLTE.js";import"./index-F5fjgwJh.js";import"./useEventCallback-DHCVut8W.js";import"./SkeletonBar-xIK3fn_d.js";import"./LoadingCell-Ct0NaKdA.js";import"./ColumnConfigDialog-CTLgRMm4.js";import"./DraggableList-Df9M_FoJ.js";import"./search-DJT3mMGf.js";import"./Input-3k8TfuM7.js";import"./useControlled-DsYwW81O.js";import"./Button-DJ6M6HmU.js";import"./small-cross-buimVDlm.js";import"./ActionButton-Dc8eWvAd.js";import"./Checkbox-D2IGozPx.js";import"./useValueChanged-BYJmb_es.js";import"./CollapsiblePanel-CwbSoIsS.js";import"./MultiColumnSortDialog-D1-IQV-T.js";import"./MenuTrigger-C1lcDrTT.js";import"./CompositeItem-D7w73J8v.js";import"./ToolbarRootContext-C266FSVf.js";import"./getDisabledMountTransitionStyles-CfnsRoCh.js";import"./getPseudoElementBounds-Buq5V0z-.js";import"./chevron-down-LKL_MfU5.js";import"./index-Ko_HwzJV.js";import"./error-Ccrq6RR-.js";import"./BaseCbacBanner-DWSqI5hZ.js";import"./makeExternalStore-D9V5Ayqr.js";import"./Tooltip-BEypgjel.js";import"./PopoverPopup-zyqahA1m.js";import"./debounce-CYhWcO7f.js";import"./tick-De0oRo06.js";import"./DropdownField-DSd0Acyw.js";import"./isEqual-JS74y3x-.js";import"./withOsdkMetrics-CfzTocUk.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
