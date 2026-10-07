import{j as r}from"./iframe-Dsupwakr.js";import{O as b}from"./object-table-w2-fiDar.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DDXdt6s7.js";import{u as g}from"./useOsdkClient-3MHXKvwo.js";import"./preload-helper-CR7mXLCL.js";import"./Table-BOxk3yVu.js";import"./index-CkpgR3fu.js";import"./Dialog-CmgL-5Qa.js";import"./cross-CWb-HvPA.js";import"./svgIconContainer-C-Aw8Ccc.js";import"./useBaseUiId-DzCfcDkQ.js";import"./InternalBackdrop-TqY-ZmCF.js";import"./composite-HdCWnL8f.js";import"./index-B_g_AMfh.js";import"./index-ChctX4zI.js";import"./index-CkY0X6aD.js";import"./useEventCallback-hg8NIUwU.js";import"./SkeletonBar-CS_2Phj-.js";import"./LoadingCell-DAV-Cnle.js";import"./ColumnConfigDialog-FZLRyMnP.js";import"./DraggableList-BlXMBhwx.js";import"./search-B3WEXmh0.js";import"./Input-C5vpLtnd.js";import"./useControlled-CqadE3GD.js";import"./Button-D1tcxnZe.js";import"./small-cross-lpp9GSO5.js";import"./ActionButton-DFIDoYFE.js";import"./Checkbox-B32Wz5CE.js";import"./useValueChanged-D8HWHRkD.js";import"./CollapsiblePanel-DHvmYoFQ.js";import"./MultiColumnSortDialog-DB5S2PrC.js";import"./MenuTrigger-sLihCRYM.js";import"./CompositeItem-B9L7nJBI.js";import"./ToolbarRootContext-BtvPE-us.js";import"./getDisabledMountTransitionStyles-C4yseyHM.js";import"./getPseudoElementBounds-C9z3taTH.js";import"./chevron-down-CDVIUa1b.js";import"./index-J7JFMYQD.js";import"./error-CLndc-8a.js";import"./BaseCbacBanner-BdKOGSlG.js";import"./makeExternalStore-cmPwX49q.js";import"./Tooltip-CcYrLi8s.js";import"./PopoverPopup-BdZyFeD4.js";import"./debounce-FnFOEK_K.js";import"./tick-hPempDzT.js";import"./DropdownField-7N09oAJb.js";import"./isEqual-DdnTZVHH.js";import"./withOsdkMetrics-Chrjv6Bf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
