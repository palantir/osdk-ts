import{j as r}from"./iframe-Y1CUkKP1.js";import{O as b}from"./object-table-DQBuNMdk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B3bWar_x.js";import{u as g}from"./useOsdkClient-D-yv75yo.js";import"./preload-helper-8Wffe73s.js";import"./Table-De-sUE09.js";import"./index-BgIb3D7l.js";import"./Dialog-zJinfTJn.js";import"./cross-C6CQ-Bph.js";import"./svgIconContainer-zBluTTvF.js";import"./useBaseUiId-AScn4b_2.js";import"./InternalBackdrop-BL3OC3Mi.js";import"./composite-BF49Bsji.js";import"./index-iBVyzjTo.js";import"./index-Bp2ZqYOt.js";import"./index-5n049uw8.js";import"./useEventCallback-563WN3on.js";import"./SkeletonBar-DGyBVuc7.js";import"./LoadingCell-C7zfzXwS.js";import"./ColumnConfigDialog-Dir9H2W4.js";import"./DraggableList-DOUwftOK.js";import"./search-kvTlC8VP.js";import"./Input-Db9jSpBp.js";import"./useControlled-21Syoeuq.js";import"./Button-DxN7lWSP.js";import"./small-cross-CpXS7-E7.js";import"./ActionButton-C9oPSSlN.js";import"./Checkbox-C7L-VnPz.js";import"./useValueChanged-tlFrKVn1.js";import"./CollapsiblePanel-Bb6ZrGRp.js";import"./MultiColumnSortDialog-D9dYaX6J.js";import"./MenuTrigger-DcnlfWyX.js";import"./CompositeItem-Dj9wX2bL.js";import"./ToolbarRootContext-MbtwPZ1o.js";import"./getDisabledMountTransitionStyles-DoO-DKYl.js";import"./getPseudoElementBounds-BBCNTbus.js";import"./chevron-down-AzVM-11H.js";import"./index-DGNKT7_4.js";import"./error-CxOGSZqi.js";import"./BaseCbacBanner-CD-E-bUb.js";import"./makeExternalStore-BeEve9Lc.js";import"./Tooltip-DFQq_M9K.js";import"./PopoverPopup-C3sIFE_l.js";import"./debounce-DaCmMChm.js";import"./tick-1VZvyctz.js";import"./DropdownField-CeKz5eyy.js";import"./isEqual-Dt2RGhpW.js";import"./withOsdkMetrics-B3ENf8sD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
