import{j as r}from"./iframe-BlDiaW1h.js";import{O as b}from"./object-table-Ce-hqaoS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DQAiSncP.js";import{u as g}from"./useOsdkClient-0OHPk9sh.js";import"./preload-helper-PtL6Kd_x.js";import"./Table-Ca7ofY9H.js";import"./index-DfWhxneD.js";import"./Dialog-C0LenXNZ.js";import"./cross-e0aRrlM-.js";import"./svgIconContainer-kniEZwHz.js";import"./useBaseUiId-CNzKZZyr.js";import"./InternalBackdrop-CknQDtg2.js";import"./composite-RC4cbmpt.js";import"./index-CaosaIAK.js";import"./index-ClB2daRU.js";import"./index-C44_u6Fw.js";import"./useEventCallback-DsUQ3PVF.js";import"./SkeletonBar-CPfB3dvv.js";import"./LoadingCell-4skw1OEJ.js";import"./ColumnConfigDialog-DrvuPspn.js";import"./DraggableList-BbYQHNIJ.js";import"./search-BTwweTf6.js";import"./Input-Bii20VeK.js";import"./useControlled-DBQ0gE6b.js";import"./Button-BcWNCj5I.js";import"./small-cross-1dCALZ0r.js";import"./ActionButton-DCdCIlKP.js";import"./Checkbox-BFzsHOZs.js";import"./useValueChanged-Ig3qxvFS.js";import"./CollapsiblePanel-BeO6_bQ6.js";import"./MultiColumnSortDialog-DY1R-uWF.js";import"./MenuTrigger-CAVJV5J3.js";import"./CompositeItem-OhI6t6UV.js";import"./ToolbarRootContext-B0Ir569T.js";import"./getDisabledMountTransitionStyles-Oq1-yxTZ.js";import"./getPseudoElementBounds-IJPs3uLW.js";import"./chevron-down-CQlGXejk.js";import"./index-DIgLDkvV.js";import"./error-DI0bgW6O.js";import"./BaseCbacBanner-Bp7AuwxH.js";import"./makeExternalStore-BGsi_gFr.js";import"./Tooltip-Cay9QyIc.js";import"./PopoverPopup-CQXuiQcH.js";import"./debounce-Byq2NX1_.js";import"./tick-a-bDbPLS.js";import"./DropdownField-RavzYQu_.js";import"./isEqual-B5seZJ2p.js";import"./withOsdkMetrics-BxS0W9JC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
