import{j as r}from"./iframe-8nXJMjDB.js";import{O as b}from"./object-table-C1y8_Cff.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DqwYuqcu.js";import{u as g}from"./useOsdkClient-DlZIRDE7.js";import"./preload-helper-CJKRkHxR.js";import"./Table-cSlmjIo0.js";import"./index-DJbKq1-5.js";import"./Dialog-CeUIfP7J.js";import"./cross-CpVH0STr.js";import"./svgIconContainer-olalqAcz.js";import"./useBaseUiId-DpDF9vet.js";import"./InternalBackdrop-BwllQc25.js";import"./composite-Bp-oM0Et.js";import"./index-CEoWz6xw.js";import"./index-2q5Mchef.js";import"./index-BXuWsT-u.js";import"./useEventCallback-Cb1n4noc.js";import"./SkeletonBar-D3HcZ6cf.js";import"./LoadingCell-DNVjwROJ.js";import"./ColumnConfigDialog-DP_5GMTQ.js";import"./DraggableList-BYVD_cJw.js";import"./search-Bnief77D.js";import"./Input-QBUJ65eb.js";import"./useControlled-CUJ7pCf5.js";import"./Button-BIf78uDw.js";import"./small-cross-7ULJZ0Aq.js";import"./ActionButton-BVPquFXf.js";import"./Checkbox-Cv4_Iq6h.js";import"./useValueChanged-Dzpnds2M.js";import"./CollapsiblePanel-C7gxpTye.js";import"./MultiColumnSortDialog-B0xMWyyj.js";import"./MenuTrigger-BwWfXhSx.js";import"./CompositeItem-CfRgOFRs.js";import"./ToolbarRootContext-BLLK3VJo.js";import"./getDisabledMountTransitionStyles-yJ-bhU6o.js";import"./getPseudoElementBounds-BTPVoCRU.js";import"./chevron-down-Cc9laCGb.js";import"./index-C0-gYeVA.js";import"./error-BhxtiV9P.js";import"./BaseCbacBanner-KbhteuMc.js";import"./makeExternalStore-DMgVpl9f.js";import"./Tooltip-DYQoxjoJ.js";import"./PopoverPopup-iFnEjeGR.js";import"./debounce-CLt3Mm3K.js";import"./tick-DDh-ihWu.js";import"./DropdownField-C3Grldi_.js";import"./isEqual-B38MWf1z.js";import"./withOsdkMetrics-C8MRYO6c.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
