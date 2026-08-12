import{j as r}from"./iframe-BBEE1fcd.js";import{O as b}from"./object-table-CizW9k1k.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CFdIVroP.js";import{u as g}from"./useOsdkClient-D2UUcxHQ.js";import"./preload-helper-BxA6CJ-D.js";import"./Table-Cpsh9vSd.js";import"./index-BD-kAubo.js";import"./Dialog-ej2bxdDy.js";import"./cross-Di1f7Jtb.js";import"./svgIconContainer-CXhq7QF6.js";import"./useBaseUiId-DA_UWaVl.js";import"./InternalBackdrop-DcwfHm6T.js";import"./composite-aN5etqXc.js";import"./index-CqSSuO0g.js";import"./index-BgH3bF5f.js";import"./index-D_x-kXlz.js";import"./useEventCallback-DllGfArL.js";import"./SkeletonBar-0dsrYZxO.js";import"./LoadingCell-BH3B3g3p.js";import"./ColumnConfigDialog-B8QRS1ap.js";import"./DraggableList-CiRBEWSA.js";import"./search-CRkLehCt.js";import"./Input-DxM0pKmj.js";import"./useControlled-B-EIx2lA.js";import"./isEqual-B6nI0qZj.js";import"./isObject-DqDSXA2A.js";import"./Button-NXakGZes.js";import"./ActionButton-c4QHUsT7.js";import"./Checkbox-dobUxrMZ.js";import"./useValueChanged-DDjVOmRV.js";import"./CollapsiblePanel-QEwDQib-.js";import"./MultiColumnSortDialog-DZNl0gFJ.js";import"./MenuTrigger-DFOSWFfa.js";import"./CompositeItem-56QVPZAb.js";import"./ToolbarRootContext-BMnS3VWT.js";import"./getDisabledMountTransitionStyles-W-FCQJty.js";import"./getPseudoElementBounds-BOSpUzeO.js";import"./chevron-down-By7dAtgj.js";import"./index-Dj26UzNn.js";import"./error-rupeo4en.js";import"./BaseCbacBanner-CCtFuv6w.js";import"./makeExternalStore-DcP_Mz2E.js";import"./Tooltip-Phla1AWu.js";import"./PopoverPopup-CsmvOzIb.js";import"./toNumber-DGMU6B_l.js";import"./tick-D-5cHhdL.js";import"./DropdownField-BsqxfHny.js";import"./withOsdkMetrics-BNDO0u89.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
