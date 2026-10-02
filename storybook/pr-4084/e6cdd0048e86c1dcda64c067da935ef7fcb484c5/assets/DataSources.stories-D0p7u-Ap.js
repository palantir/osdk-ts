import{j as r}from"./iframe-DopY1iFB.js";import{O as b}from"./object-table-DrHRM2Vu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-0s3sbTQ3.js";import{u as g}from"./useOsdkClient-BB4N8s6G.js";import"./preload-helper-vT8POVDR.js";import"./Table-BtDoN67p.js";import"./index-CCfIWMGJ.js";import"./Dialog-DxxR-Nq8.js";import"./cross-y3ZfqzAA.js";import"./svgIconContainer-DKL3lG_j.js";import"./useBaseUiId-z-VkK_Xn.js";import"./InternalBackdrop-DaE_AKxd.js";import"./composite-BGFtTgn-.js";import"./index-CsUmhPmI.js";import"./index-CI3yqxJd.js";import"./index-C_zMkdHf.js";import"./useEventCallback-D2MDEmYo.js";import"./SkeletonBar-DK89tHws.js";import"./LoadingCell-DVfOKHP2.js";import"./ColumnConfigDialog-B8UtcMyX.js";import"./DraggableList-BJ6dbmeK.js";import"./search-CxfNGXVV.js";import"./Input-DdA-yANI.js";import"./useControlled-ClnCU8CR.js";import"./Button-BegRP6Wf.js";import"./small-cross-B8texXT0.js";import"./ActionButton-BHuru14O.js";import"./Checkbox-Dbl_-bLm.js";import"./useValueChanged-3u49EqeQ.js";import"./CollapsiblePanel-BqNboL-f.js";import"./MultiColumnSortDialog-DwldqtuV.js";import"./MenuTrigger-BuV2I-Gd.js";import"./CompositeItem-D98VU1_Q.js";import"./ToolbarRootContext-CFKLRcpG.js";import"./getDisabledMountTransitionStyles-DGXlslWy.js";import"./getPseudoElementBounds-_OfctKy9.js";import"./chevron-down-Cn7sl9Ua.js";import"./index-BlOFqzc6.js";import"./error-CTe9ttET.js";import"./BaseCbacBanner-bFfRsFJv.js";import"./makeExternalStore-B0UtzOn_.js";import"./Tooltip-qqUuKaYI.js";import"./PopoverPopup-CUxKzeOX.js";import"./debounce-B5Mx60fy.js";import"./tick-_PIvioO0.js";import"./DropdownField-hIeQcSW8.js";import"./isEqual-BBHg5dQ3.js";import"./withOsdkMetrics-BFGwpRHC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
