import{j as r}from"./iframe-CjvYcpTc.js";import{O as b}from"./object-table-Cr4f5Dyz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DJor6iLQ.js";import{u as g}from"./useOsdkClient-DyGGfFqC.js";import"./preload-helper-CwAZ_RFp.js";import"./Table-OGDc2Vu9.js";import"./index-DuZ19wcn.js";import"./Dialog-AmWXXXAn.js";import"./cross-C7lWgdj2.js";import"./svgIconContainer-B4kwPvVG.js";import"./useBaseUiId-CZUJXt98.js";import"./InternalBackdrop-Cvpmom_D.js";import"./composite-Dv8ZzttY.js";import"./index-CEXd5f6A.js";import"./index-DNoEMSLE.js";import"./index-CMgAql6Y.js";import"./useEventCallback-ByweALPq.js";import"./SkeletonBar-CEUKT4EZ.js";import"./LoadingCell-BHA_MaqJ.js";import"./ColumnConfigDialog-k2ALTpny.js";import"./DraggableList-b_HqS-PO.js";import"./search-C9XpCEsC.js";import"./Input-B4ChrBJV.js";import"./useControlled-BgiktbGb.js";import"./Button-x48_kffx.js";import"./small-cross-DrNdp9td.js";import"./ActionButton-CNilsdeF.js";import"./Checkbox-C7J_efzv.js";import"./useValueChanged-jVldrQSp.js";import"./CollapsiblePanel-BOX1nR00.js";import"./MultiColumnSortDialog-RIUXj6qp.js";import"./MenuTrigger-C7JnYkRW.js";import"./CompositeItem-CrZyp1SA.js";import"./ToolbarRootContext-H5FrOgLL.js";import"./getDisabledMountTransitionStyles-D8pKVFxg.js";import"./getPseudoElementBounds-zCP0_jeb.js";import"./chevron-down-B6AkEAGC.js";import"./index-BaiLSRkn.js";import"./error-DdgUBnOy.js";import"./BaseCbacBanner-fTPjPnTf.js";import"./makeExternalStore-CTMnuTK_.js";import"./Tooltip-B-fFKI94.js";import"./PopoverPopup-DhrzdhL9.js";import"./debounce-d3qhgy8J.js";import"./tick-DHMwXqUI.js";import"./DropdownField-CSAcVewx.js";import"./isEqual-Bh14zo85.js";import"./withOsdkMetrics-c8up4Ye7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
