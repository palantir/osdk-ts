import{j as r}from"./iframe-DWrTLUp6.js";import{O as b}from"./object-table-DGdX9mh7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C9h0YFgk.js";import{u as g}from"./useOsdkClient-DR78McuN.js";import"./preload-helper-G5GldQrR.js";import"./Table-IjxdH2zn.js";import"./index-tEnhVYEp.js";import"./Dialog-CjltaoNi.js";import"./cross-rPpE888H.js";import"./svgIconContainer-BsgOYiaE.js";import"./useBaseUiId-X8UvLlac.js";import"./InternalBackdrop-CyXd8Wg7.js";import"./composite-CZ2VobqK.js";import"./index-m17_hvWN.js";import"./index-DtPEGSb3.js";import"./index-B_mSXvUP.js";import"./useEventCallback-DDhfB_BM.js";import"./SkeletonBar-BIwjOvZv.js";import"./LoadingCell-Bn-kLl6N.js";import"./ColumnConfigDialog-YlA6oMxt.js";import"./DraggableList-DVYU7G2N.js";import"./search-Cj067yfV.js";import"./Input-Dd76dU6P.js";import"./useControlled-BL4uBJXc.js";import"./Button-kvP0U3yl.js";import"./small-cross-B8JdY_sl.js";import"./ActionButton-Ce4LrRpa.js";import"./Checkbox-Cl9gpo5R.js";import"./useValueChanged-DT_nuOVZ.js";import"./CollapsiblePanel-B0Fh3EI1.js";import"./MultiColumnSortDialog-HVKSzssd.js";import"./MenuTrigger-KWYSGIaD.js";import"./CompositeItem-BpSxYl_N.js";import"./ToolbarRootContext-Bh1zwv5x.js";import"./getDisabledMountTransitionStyles-CGESU4zi.js";import"./getPseudoElementBounds-CjM3OLtE.js";import"./chevron-down-BdqS2CCw.js";import"./index-C7nt3-Ul.js";import"./error-mT38HeTS.js";import"./BaseCbacBanner-BgX_EjQ-.js";import"./makeExternalStore-BVTsUjUO.js";import"./Tooltip-sCGgggo5.js";import"./PopoverPopup-CSl22ryn.js";import"./debounce-Bw-UdsSq.js";import"./tick-C8bPj3R_.js";import"./DropdownField-CQ3rIRKm.js";import"./isEqual-DIHVKk1K.js";import"./withOsdkMetrics-DjJmHGOy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
