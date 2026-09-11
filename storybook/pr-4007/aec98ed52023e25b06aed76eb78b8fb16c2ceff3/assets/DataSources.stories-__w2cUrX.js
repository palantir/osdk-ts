import{j as r}from"./iframe-B-AKwe0U.js";import{O as b}from"./object-table-BNOEdiM_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers--EPrDE0T.js";import{u as g}from"./useOsdkClient-DOwl5ySm.js";import"./preload-helper-f3uNRD8c.js";import"./Table-CO94dN8E.js";import"./index-BTKqd_0M.js";import"./Dialog-ibdXxOvJ.js";import"./cross-DA2KL76X.js";import"./svgIconContainer-sFjpt_d1.js";import"./useBaseUiId-BzL2rBHV.js";import"./InternalBackdrop-D0ckCYHs.js";import"./composite-C2ZOTtj7.js";import"./index-DbIw_M6r.js";import"./index-DK2QIJxh.js";import"./index-D6DA4SgY.js";import"./useEventCallback-qJT1RIau.js";import"./SkeletonBar-B_0fbXLl.js";import"./LoadingCell-BuvDz8J8.js";import"./ColumnConfigDialog-DmCUXP7L.js";import"./DraggableList-DDl0_2vl.js";import"./search-BeqvshXG.js";import"./Input-C_it6lB9.js";import"./useControlled-DAZJskjr.js";import"./Button-DSXsoF7A.js";import"./small-cross-Cnf0y2Tr.js";import"./ActionButton-3WTL5l5D.js";import"./Checkbox-DR5PD6Rb.js";import"./useValueChanged-CwePdTgQ.js";import"./CollapsiblePanel-T50sNV5u.js";import"./MultiColumnSortDialog-BHvWd_sC.js";import"./MenuTrigger-CTvmiXZ1.js";import"./CompositeItem-BmFykBzh.js";import"./ToolbarRootContext-CAFwtwDJ.js";import"./getDisabledMountTransitionStyles-CziK-4zN.js";import"./getPseudoElementBounds-Byk01WJS.js";import"./chevron-down-CI9pzF65.js";import"./index-ZM1N2Vft.js";import"./error-C0T-x3vg.js";import"./BaseCbacBanner-BEkgwvfz.js";import"./makeExternalStore-CwQpDBtV.js";import"./Tooltip-BUiog_49.js";import"./PopoverPopup-CXdC5QUX.js";import"./debounce-CTxyeqac.js";import"./tick-BFHv-Vnu.js";import"./DropdownField-YeSQmSBB.js";import"./isEqual-B1KV-EfI.js";import"./withOsdkMetrics-DWcYXPst.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
