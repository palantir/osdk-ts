import{j as r}from"./iframe-B2Hbgk_7.js";import{O as b}from"./object-table-TTmYKvxF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CBpRyAEn.js";import{u as g}from"./useOsdkClient--TStUSqZ.js";import"./preload-helper-BIOghnjg.js";import"./Table-BobHU4WV.js";import"./index-DrosstMD.js";import"./Dialog-nRqw2oyt.js";import"./cross-CMOlEEKU.js";import"./svgIconContainer-kTH1S9JE.js";import"./useBaseUiId-El1KPGB5.js";import"./InternalBackdrop-ZJrbhxPy.js";import"./composite-C00UUeG4.js";import"./index-BElQuRwB.js";import"./index-y9S8xmis.js";import"./index-DRG_YeJ3.js";import"./useEventCallback-DLOU8qGC.js";import"./SkeletonBar-gVSZNwCd.js";import"./LoadingCell-NcPon7Hr.js";import"./ColumnConfigDialog-DZJPchLf.js";import"./DraggableList-C_pfPm07.js";import"./search-Dge6vq_P.js";import"./Input-C7VTBgbc.js";import"./useControlled-Y-hNBLuR.js";import"./Button-ChD0uv2M.js";import"./small-cross-vAFwZtSV.js";import"./ActionButton-DLmadiS3.js";import"./Checkbox-D_5Ownj5.js";import"./useValueChanged-Dpnjqk8r.js";import"./CollapsiblePanel-pfoTWKHp.js";import"./MultiColumnSortDialog-P02OhBBe.js";import"./MenuTrigger-DQPx8r-g.js";import"./CompositeItem-CUZ4C8IA.js";import"./ToolbarRootContext-deiGRCW1.js";import"./getDisabledMountTransitionStyles-DrqZTZzZ.js";import"./getPseudoElementBounds-BgsAZpVp.js";import"./chevron-down-BIdOqTL3.js";import"./index-BZMUxiku.js";import"./error-CG38qSaD.js";import"./BaseCbacBanner-5led0h6U.js";import"./makeExternalStore-BIZDH2fs.js";import"./Tooltip-COASp5Bq.js";import"./PopoverPopup-Cp5uUE9r.js";import"./debounce-Xb7mC0HA.js";import"./tick-7D0Lucc7.js";import"./DropdownField-DIFmpXyB.js";import"./isEqual-CbYfRPeI.js";import"./withOsdkMetrics-Cum7Zc0o.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
