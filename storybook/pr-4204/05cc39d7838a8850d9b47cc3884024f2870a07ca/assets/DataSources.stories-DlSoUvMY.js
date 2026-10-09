import{j as r}from"./iframe-7DO_hgMQ.js";import{O as b}from"./object-table-DzRSMbhZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-pfkkWBec.js";import{u as g}from"./useOsdkClient-CzqB3KxT.js";import"./preload-helper-B5hnoC7R.js";import"./Table-Cs3qJJzJ.js";import"./index-C29pOm1T.js";import"./Dialog-33AZHfcx.js";import"./cross-D_9OLgop.js";import"./svgIconContainer-DzpdNPkA.js";import"./useBaseUiId-Oq1MgnVD.js";import"./InternalBackdrop-Dl6a1-jN.js";import"./composite-BIyzFJw4.js";import"./index-CpBs9sRH.js";import"./index-kxscKf13.js";import"./index-B0-vcEDH.js";import"./useEventCallback-DxKGXWo7.js";import"./SkeletonBar-Dtl4JXfg.js";import"./LoadingCell-CSOm7JED.js";import"./ColumnConfigDialog-GUNvAyiE.js";import"./DraggableList-BCoI0rXg.js";import"./search-BiYpAlM6.js";import"./Input-BSSTxlm0.js";import"./useControlled-C5lH_kP3.js";import"./Button-CG_O6ptK.js";import"./small-cross-CU3PqcXv.js";import"./ActionButton-mzmJtNoX.js";import"./Checkbox-EtAi-RKo.js";import"./useValueChanged-DqawIZVU.js";import"./CollapsiblePanel-Bp7Wi5LO.js";import"./MultiColumnSortDialog-t6Q-Jcrf.js";import"./MenuTrigger-D9AV9YJR.js";import"./CompositeItem-CRzuvZSB.js";import"./ToolbarRootContext-D-ECRYtl.js";import"./getDisabledMountTransitionStyles-DSUse_yu.js";import"./getPseudoElementBounds-CjuU1qh7.js";import"./chevron-down-Cv_rBr5Q.js";import"./index-DAoZpWAc.js";import"./error-CYThlbbP.js";import"./BaseCbacBanner-D0oQx4Si.js";import"./makeExternalStore-C0_o8WAL.js";import"./Tooltip-DvjdNXO5.js";import"./PopoverPopup-OXRN3eBM.js";import"./debounce-fWQ1Uyi8.js";import"./tick-CX03s7uJ.js";import"./DropdownField-DfRF7x4Q.js";import"./isEqual-C20Mk7vo.js";import"./withOsdkMetrics-BBFkx9l4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
