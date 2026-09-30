import{j as r}from"./iframe-B2ksOBZK.js";import{O as b}from"./object-table-DXi_UZ_4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bu_JB8c0.js";import{u as g}from"./useOsdkClient-BexeExeh.js";import"./preload-helper-DwVeKaeD.js";import"./Table-op2dMwT3.js";import"./index-C0qxAnyg.js";import"./Dialog-CrBw7OS3.js";import"./cross-DpwDHxX0.js";import"./svgIconContainer-BoLDP-in.js";import"./useBaseUiId-DBFPNCWo.js";import"./InternalBackdrop-Dzi45WTy.js";import"./composite-B-vnab_Z.js";import"./index-DyyxI-I6.js";import"./index-rll2Ydt2.js";import"./index-TB7zAsKF.js";import"./useEventCallback-CtJLJCiI.js";import"./SkeletonBar-CKJLp3uZ.js";import"./LoadingCell-BLeRCr8T.js";import"./ColumnConfigDialog-xgCk8V1O.js";import"./DraggableList-Br7k7oey.js";import"./search-BcOh8Jgz.js";import"./Input-DCyHQ82M.js";import"./useControlled-BKEjqMno.js";import"./Button-CWbg3cyR.js";import"./small-cross-Di5tDJTq.js";import"./ActionButton-D7Cv_dvM.js";import"./Checkbox-Dg6aqmsT.js";import"./useValueChanged-B3jNUwWr.js";import"./CollapsiblePanel-B4WKaPJO.js";import"./MultiColumnSortDialog-BEJMs8gv.js";import"./MenuTrigger-BLgXVcM0.js";import"./CompositeItem-BrQKGcIu.js";import"./ToolbarRootContext-BqtVZI5F.js";import"./getDisabledMountTransitionStyles-CQawNBlY.js";import"./getPseudoElementBounds-B8e6uiFl.js";import"./chevron-down-D80xuDhn.js";import"./index-D8M1fsCH.js";import"./error-BDJdlY4T.js";import"./BaseCbacBanner-DfBvktQ3.js";import"./makeExternalStore-7lDBXMAq.js";import"./Tooltip-D7V59zE7.js";import"./PopoverPopup-CefU-B1a.js";import"./debounce-DrXd2sNW.js";import"./tick-qqyLXFxc.js";import"./DropdownField-DLqjzm9N.js";import"./isEqual-CcFEOkDy.js";import"./withOsdkMetrics-Da6CzeGO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
