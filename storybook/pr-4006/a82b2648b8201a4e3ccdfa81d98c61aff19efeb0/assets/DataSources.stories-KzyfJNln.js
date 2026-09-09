import{j as r}from"./iframe-JXLKLe4j.js";import{O as b}from"./object-table-BSBUtwZw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BU5HVuO5.js";import{u as g}from"./useOsdkClient-Bd8Cmg0y.js";import"./preload-helper-KxhExJZe.js";import"./Table-qjFQ-LV4.js";import"./index-CxCVEUEK.js";import"./Dialog-BAHFhmeR.js";import"./cross-DOXYOKC7.js";import"./svgIconContainer-39ufch0k.js";import"./useBaseUiId-D2ECG8pj.js";import"./InternalBackdrop-BAhO0rZ6.js";import"./composite-B1xcP3KB.js";import"./index-CU7Uodcw.js";import"./index-KYXcc3Yr.js";import"./index-D0eNlerC.js";import"./useEventCallback-CwcpFxjU.js";import"./SkeletonBar-BO4kxP3D.js";import"./LoadingCell-BXQ-UV07.js";import"./ColumnConfigDialog-BPCYXCVh.js";import"./DraggableList-BPhMewNT.js";import"./search-3vsZ9AKM.js";import"./Input-Cp2KEsjw.js";import"./useControlled-BlJ0csd0.js";import"./Button-Cg6Es2oR.js";import"./small-cross-Bm-1zFL_.js";import"./ActionButton-DABDZfMp.js";import"./Checkbox-7tyUFDb-.js";import"./useValueChanged-76jQ3f4t.js";import"./CollapsiblePanel-BetHwBDr.js";import"./MultiColumnSortDialog-DOqOmKA9.js";import"./MenuTrigger-DPnFUnbb.js";import"./CompositeItem-CHr0cHjc.js";import"./ToolbarRootContext-Dtg0Oro0.js";import"./getDisabledMountTransitionStyles-rcpG9bQ-.js";import"./getPseudoElementBounds-Bnkuh_Gq.js";import"./chevron-down-OJuk8g-X.js";import"./index-DoaZjYqH.js";import"./error-CCMzsuJP.js";import"./BaseCbacBanner-D1xPrtuz.js";import"./makeExternalStore-CPv_2K4j.js";import"./Tooltip-DVRBwT79.js";import"./PopoverPopup-CvtiR2Lg.js";import"./debounce-CiOfWDDO.js";import"./tick-g-QdmJj0.js";import"./DropdownField-DgrKVFWZ.js";import"./isEqual-C9hHIdql.js";import"./withOsdkMetrics-OXe-gHpY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
