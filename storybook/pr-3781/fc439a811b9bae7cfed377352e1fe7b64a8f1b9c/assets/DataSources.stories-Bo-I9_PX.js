import{j as r}from"./iframe-B-JTL6t_.js";import{O as b}from"./object-table-FNJFEKEW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D2vyNiNQ.js";import{u as g}from"./useOsdkClient-DcpOzUwu.js";import"./preload-helper-DJ_hAMVg.js";import"./Table-Dg7aaslH.js";import"./index-BVBufCln.js";import"./Dialog-WOLPrhdU.js";import"./cross-3QOYISjX.js";import"./svgIconContainer-CiyL_qiy.js";import"./useBaseUiId-CUEnf41u.js";import"./InternalBackdrop-DjxTY25E.js";import"./composite-VcmuBxGV.js";import"./index-BA2SfPb-.js";import"./index-D9XzKchN.js";import"./index-VPeaEhQ2.js";import"./useEventCallback-ChtJeHxU.js";import"./SkeletonBar-DXHB1vtB.js";import"./LoadingCell-CPyzJPjv.js";import"./ColumnConfigDialog-DLNzwBWy.js";import"./DraggableList-C2RirL5h.js";import"./search-CU5MGZ4i.js";import"./Input-BaVlDPE6.js";import"./useControlled-ATGUHDV2.js";import"./isEqual-BSpE638U.js";import"./isObject-D90CYxLm.js";import"./Button-BlExWpZe.js";import"./ActionButton-L1IYyJOK.js";import"./Checkbox-Dr1WIlPV.js";import"./useValueChanged-ZCwCC8lo.js";import"./CollapsiblePanel-u1hLg1cv.js";import"./MultiColumnSortDialog-BU3jZhRe.js";import"./MenuTrigger-BaCTkUfs.js";import"./CompositeItem-DdntBB6P.js";import"./ToolbarRootContext-JmY-spmC.js";import"./getDisabledMountTransitionStyles-DZYVkC85.js";import"./getPseudoElementBounds-DswZmhB0.js";import"./chevron-down-BU52dZSy.js";import"./index-B57PfW1U.js";import"./error-CRuUFItf.js";import"./BaseCbacBanner-B6ISRA4O.js";import"./makeExternalStore-CdrDMmD2.js";import"./Tooltip-DgWDKpH1.js";import"./PopoverPopup-B7Sonn9Z.js";import"./toNumber-BYWFkk3t.js";import"./tick-BpWGEPsZ.js";import"./DropdownField--LFlJ0eP.js";import"./withOsdkMetrics-DmIxOOZN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
