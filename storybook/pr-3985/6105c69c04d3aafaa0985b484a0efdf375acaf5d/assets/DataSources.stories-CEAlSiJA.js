import{j as r}from"./iframe-D07nCh-w.js";import{O as b}from"./object-table-BsFPf6cF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-gFh_DKzc.js";import{u as g}from"./useOsdkClient-Bz66Th9p.js";import"./preload-helper-CmcD2_D_.js";import"./Table-BUkXhyz1.js";import"./index-BuDZJHpF.js";import"./Dialog-BqExHdSf.js";import"./cross-CTO9sPn-.js";import"./svgIconContainer-PtRD7k8A.js";import"./useBaseUiId-psA3q1id.js";import"./InternalBackdrop-CoeQ5ndg.js";import"./composite-C9jYcXJr.js";import"./index-BIjdr9-z.js";import"./index-BrNSxG5V.js";import"./index-CeN_u9Sa.js";import"./useEventCallback-BpGNXSJx.js";import"./SkeletonBar-Dpb84ZTI.js";import"./LoadingCell-BIwNmKsO.js";import"./ColumnConfigDialog-CBgEanuv.js";import"./DraggableList-CwS18mwK.js";import"./search-CytW_RDV.js";import"./Input-98CZZbi3.js";import"./useControlled-CXqQNY_F.js";import"./Button-DEuGu2m_.js";import"./small-cross--WdO_ezs.js";import"./ActionButton-BtMU_wua.js";import"./Checkbox-C-8bjav5.js";import"./useValueChanged-C_Y8WMPp.js";import"./CollapsiblePanel-C4kSjDma.js";import"./MultiColumnSortDialog-Tfzuj_KT.js";import"./MenuTrigger-f1OBuoEa.js";import"./CompositeItem-Br0cx3Iq.js";import"./ToolbarRootContext-DqdX595l.js";import"./getDisabledMountTransitionStyles-B1bj1ZX9.js";import"./getPseudoElementBounds-BBf48KpN.js";import"./chevron-down-dIbn2_mD.js";import"./index-a0NtOl0y.js";import"./error-ByDyMI-d.js";import"./BaseCbacBanner-Bvqf0NRj.js";import"./makeExternalStore-D0hTV5Nv.js";import"./Tooltip-CtckguA7.js";import"./PopoverPopup-De9oms5K.js";import"./debounce-CLiKICQw.js";import"./tick-C06-S_iw.js";import"./DropdownField-DWMnKMar.js";import"./isEqual-BvIrIFjk.js";import"./withOsdkMetrics-BiT0eK7g.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
