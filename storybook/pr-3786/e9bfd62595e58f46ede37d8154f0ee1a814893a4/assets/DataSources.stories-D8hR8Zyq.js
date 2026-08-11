import{j as r}from"./iframe-YvYOR2wq.js";import{O as b}from"./object-table-DFp50YJS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DVMstBDK.js";import{u as g}from"./useOsdkClient-DpDEjnV-.js";import"./preload-helper-CzbLUeKx.js";import"./Table-DgmuGDrA.js";import"./index-Dg2Ua59f.js";import"./Dialog-BOksrRjX.js";import"./cross-DN6PKsRx.js";import"./svgIconContainer-BkbpeeEh.js";import"./useBaseUiId-DIa8CEVr.js";import"./InternalBackdrop-C1_8LOV1.js";import"./composite-BRTo3g9o.js";import"./index-w--EL4PT.js";import"./index-DS0htV8G.js";import"./index-Coel4Jgz.js";import"./useEventCallback-C3JYfwwo.js";import"./SkeletonBar-CMZ34MM-.js";import"./LoadingCell-DRNmp-08.js";import"./ColumnConfigDialog-YczIbXzh.js";import"./DraggableList-kcEMvLS0.js";import"./search-C6slhSf_.js";import"./Input-Au_NktxX.js";import"./useControlled-BaKiUohk.js";import"./isEqual-BT4XKmjn.js";import"./isObject-CGKerAkV.js";import"./Button-yaRm4n4E.js";import"./ActionButton-D3qEnWxR.js";import"./Checkbox-C7KgpzBK.js";import"./useValueChanged-BzhpnMSP.js";import"./CollapsiblePanel-DIz_ZpXy.js";import"./MultiColumnSortDialog-DC7hRVhI.js";import"./MenuTrigger-kYteRUU6.js";import"./CompositeItem-Tos5QYfq.js";import"./ToolbarRootContext-DvVNq82_.js";import"./getDisabledMountTransitionStyles-Bt7RtkHz.js";import"./getPseudoElementBounds-DEObypw2.js";import"./chevron-down-DjeSf-LC.js";import"./index-tjquBYxZ.js";import"./error-BN9FB_kM.js";import"./BaseCbacBanner-pHLTCldx.js";import"./makeExternalStore-Bf2AXbqX.js";import"./Tooltip-DBvEwoA0.js";import"./PopoverPopup-C4rnnz4U.js";import"./toNumber-BlqZmOuH.js";import"./tick-Df1dDSk-.js";import"./DropdownField-Bty5TdGt.js";import"./withOsdkMetrics-BC7VO-wU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
