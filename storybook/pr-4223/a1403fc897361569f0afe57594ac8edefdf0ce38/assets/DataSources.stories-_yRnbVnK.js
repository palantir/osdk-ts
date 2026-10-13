import{j as r}from"./iframe-BkcR1iue.js";import{O as b}from"./object-table-BcUcdCDw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CbUp0pHm.js";import{u as g}from"./useOsdkClient-BE9XndJ0.js";import"./preload-helper-DrQC6sAs.js";import"./Table-BAjYpOyb.js";import"./index-C48hokBn.js";import"./Dialog-BOX_hYeF.js";import"./cross-Dq5JHURf.js";import"./svgIconContainer-5EXbYaZG.js";import"./useBaseUiId-CMez3yYq.js";import"./InternalBackdrop-BrNgLYU2.js";import"./composite-BvN8B2j0.js";import"./index-BcdwcPhB.js";import"./index-B7w41dnZ.js";import"./index-BKyA0SCA.js";import"./useEventCallback-D_30EqT4.js";import"./SkeletonBar-BKmKsv8M.js";import"./LoadingCell-Ds-wFaWb.js";import"./ColumnConfigDialog-BAHtvu7w.js";import"./DraggableList-ByXDWqnG.js";import"./search--B6bPp9Q.js";import"./Input-7EUJZBSZ.js";import"./useControlled-DQuU9HTi.js";import"./Button-B40tdNrN.js";import"./small-cross-BP75-g7J.js";import"./ActionButton-CX5WcJy8.js";import"./Checkbox-Vz2qtBJd.js";import"./useValueChanged-tSsYdvqu.js";import"./CollapsiblePanel-BpfLB0ao.js";import"./MultiColumnSortDialog-BSR3YyAt.js";import"./MenuTrigger-DWJBs6c7.js";import"./CompositeItem-D6GgTBoR.js";import"./ToolbarRootContext--E-pClz6.js";import"./getDisabledMountTransitionStyles-hWWFi-qA.js";import"./getPseudoElementBounds-C9SU6CHl.js";import"./chevron-down-B8DDqxwj.js";import"./index-oeK8lm2i.js";import"./error-Dqr8KpcY.js";import"./BaseCbacBanner-CkxMaWmX.js";import"./makeExternalStore-DjRLK8zO.js";import"./Tooltip-C95BVVCQ.js";import"./PopoverPopup-BAQ5vkX7.js";import"./debounce-BR3HCMrO.js";import"./tick-qW1a1XW7.js";import"./DropdownField-Ddw27l5N.js";import"./isEqual-CEFtvlzz.js";import"./withOsdkMetrics-DHpidme4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
