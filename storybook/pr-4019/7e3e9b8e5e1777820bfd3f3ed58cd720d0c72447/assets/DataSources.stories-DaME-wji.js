import{j as r}from"./iframe-lKHX2RT0.js";import{O as b}from"./object-table-Bc4WIn5Y.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Be4vbPUS.js";import{u as g}from"./useOsdkClient-BttjugBK.js";import"./preload-helper-CPQlIB48.js";import"./Table-CL_aIROu.js";import"./index-DN0L_sQz.js";import"./Dialog-CTKIyT5I.js";import"./cross-BS8Ys0sh.js";import"./svgIconContainer-CI8K89aC.js";import"./useBaseUiId-BNpyRqoY.js";import"./InternalBackdrop-CN7gDkpU.js";import"./composite-Cid_avm0.js";import"./index-C5DiV1o7.js";import"./index-nDWqsS2b.js";import"./index-CIthZ6_f.js";import"./useEventCallback-BiQpxw87.js";import"./SkeletonBar-CjbRBu-J.js";import"./LoadingCell-CqqZdURq.js";import"./ColumnConfigDialog-DxRJKGk2.js";import"./DraggableList-yPuiK1Qh.js";import"./search-DYMiyHIs.js";import"./Input-Bw27QJ9U.js";import"./useControlled-CuEFhIkH.js";import"./Button-BEKYhgY7.js";import"./small-cross-gLhT5iIM.js";import"./ActionButton-5BHbkKfJ.js";import"./Checkbox-DsSCYp1f.js";import"./useValueChanged-CgAPPxks.js";import"./CollapsiblePanel-C2fgakez.js";import"./MultiColumnSortDialog-BclQGH37.js";import"./MenuTrigger-Cz8IFqra.js";import"./CompositeItem-YCGN9OAN.js";import"./ToolbarRootContext-DHnu7bP1.js";import"./getDisabledMountTransitionStyles-BaPsLnpd.js";import"./getPseudoElementBounds-CtuiofEl.js";import"./chevron-down-5rT0_jwP.js";import"./index-mAvkRfFj.js";import"./error-Zaa9-6nd.js";import"./BaseCbacBanner-B1P_USXd.js";import"./makeExternalStore-BxeHtCAo.js";import"./Tooltip-CxNH616S.js";import"./PopoverPopup-VlygiTLm.js";import"./debounce-CjBjqfvI.js";import"./tick-DFRjlTY6.js";import"./DropdownField-dvCdI0vW.js";import"./isEqual-6_xjYyh7.js";import"./withOsdkMetrics-BcneEdmh.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
