import{j as r}from"./iframe-B28z8hIY.js";import{O as b}from"./object-table-DuX6yprJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-cDy1jtu_.js";import{u as g}from"./useOsdkClient-CV7QSUV2.js";import"./preload-helper-D8qOl9Xf.js";import"./Table-CkDfUUL2.js";import"./index-DMpY9C2v.js";import"./Dialog-Bp7hHvol.js";import"./cross-CDkShHPW.js";import"./svgIconContainer-Dhm8X-BV.js";import"./useBaseUiId-DM58hJy6.js";import"./InternalBackdrop-CeDlVTrh.js";import"./composite-DNMsan99.js";import"./index-djAwGKCo.js";import"./index-Bq3ZgDfN.js";import"./index-BlVCSLA8.js";import"./useEventCallback-DrAp6rDo.js";import"./SkeletonBar-DXYlcYZk.js";import"./LoadingCell-Djdd6Yw8.js";import"./ColumnConfigDialog-D9VX9ial.js";import"./DraggableList-CMVFvtRa.js";import"./search-CmPRdAAA.js";import"./Input-DcxMr_KP.js";import"./useControlled-ss5L4whE.js";import"./isEqual-CO9g_nbd.js";import"./isObject-DSQXr_fO.js";import"./Button-uH6gdAsd.js";import"./ActionButton-D748JeaI.js";import"./Checkbox-C6RfZG6k.js";import"./useValueChanged-tTHj3kBw.js";import"./CollapsiblePanel-BQoexJm7.js";import"./MultiColumnSortDialog-Bnz8XLD9.js";import"./MenuTrigger-BmcDv0Yc.js";import"./CompositeItem-Bq1q5tVI.js";import"./ToolbarRootContext-D22XPhTr.js";import"./getDisabledMountTransitionStyles-B48XXR4D.js";import"./getPseudoElementBounds-MzI8NVer.js";import"./chevron-down-D_GWy34J.js";import"./index-BZgkCUQe.js";import"./error-CObZLwnt.js";import"./BaseCbacBanner-D7jyfgJe.js";import"./makeExternalStore-Dcx7-1vD.js";import"./Tooltip-DdCN7MaI.js";import"./PopoverPopup-D6bOInCn.js";import"./toNumber-CS-3Wsgc.js";import"./tick-DSR81z-h.js";import"./DropdownField-CUOugPeD.js";import"./withOsdkMetrics-GTEGqRPt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
