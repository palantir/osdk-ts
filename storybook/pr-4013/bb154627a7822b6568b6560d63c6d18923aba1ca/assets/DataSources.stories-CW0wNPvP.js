import{j as r}from"./iframe-DUDgTVFJ.js";import{O as b}from"./object-table-DyoOaMNB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CngdX85z.js";import{u as g}from"./useOsdkClient-CjQ9m3w5.js";import"./preload-helper-BVnI7eCi.js";import"./Table-DJgEpKA7.js";import"./index-BmzW3lpk.js";import"./Dialog-NEcdClbd.js";import"./cross-BTajFNgg.js";import"./svgIconContainer-ZlCTpn06.js";import"./useBaseUiId-HT4h8TUv.js";import"./InternalBackdrop-orJ-1rnF.js";import"./composite-CECNeh7S.js";import"./index-BvrArIP3.js";import"./index-CRuY3Py7.js";import"./index-5E34Oclp.js";import"./useEventCallback-RvE4_tE9.js";import"./SkeletonBar-BmHP5YBu.js";import"./LoadingCell-BDDtdYeF.js";import"./ColumnConfigDialog-ChYt04UQ.js";import"./DraggableList-C1sNICyS.js";import"./search-Bwn6tzKV.js";import"./Input-BDNTdkOr.js";import"./useControlled-CmefEzCZ.js";import"./Button-CYnqWeJV.js";import"./small-cross-C1-JOpz-.js";import"./ActionButton-Cm6sCZem.js";import"./Checkbox-B3XNkDYw.js";import"./useValueChanged-0LeWa10K.js";import"./CollapsiblePanel-U3s49rkR.js";import"./MultiColumnSortDialog-DZ3aR6O1.js";import"./MenuTrigger-CP-hOUMN.js";import"./CompositeItem-DvLeoEHv.js";import"./ToolbarRootContext-DjTtqRzV.js";import"./getDisabledMountTransitionStyles-PDb0y-1q.js";import"./getPseudoElementBounds-BcqNmoHZ.js";import"./chevron-down-uyo8SlXE.js";import"./index-C5bsaNnW.js";import"./error-BKqtxFEE.js";import"./BaseCbacBanner-ukxOelGX.js";import"./makeExternalStore-Dj0x5GDa.js";import"./Tooltip-DHx44fzb.js";import"./PopoverPopup-DYDRvlYs.js";import"./debounce-BtF1TExq.js";import"./tick-DynTPC9F.js";import"./DropdownField-C0q1F6hz.js";import"./isEqual-Bq2QWyT2.js";import"./withOsdkMetrics-BxFc9ce-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
