import{j as r}from"./iframe-B0nz0RxR.js";import{O as b}from"./object-table-CP0p9slM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-3l480U62.js";import{u as g}from"./useOsdkClient-CPckGSeZ.js";import"./preload-helper-CF-MyLPB.js";import"./Table-BrJDxDiJ.js";import"./index-DW-ZtONF.js";import"./Dialog-Cr2A3kQz.js";import"./cross-f1j6tGxU.js";import"./svgIconContainer-BcZsRKUx.js";import"./useBaseUiId-Ghzmj7pG.js";import"./InternalBackdrop-rSHqMVGe.js";import"./composite-BzNBSeWl.js";import"./index-BMFV8-ce.js";import"./index-DeqT0Eb7.js";import"./index-B7gxoaLi.js";import"./useEventCallback-B4vbSQLp.js";import"./SkeletonBar-B5jtfUel.js";import"./LoadingCell-Bug_BUuO.js";import"./ColumnConfigDialog-BWJ5IN2M.js";import"./DraggableList-DHM4mlSv.js";import"./search-TA_vispt.js";import"./Input-D4YoHp_x.js";import"./useControlled-DRdL5BBf.js";import"./Button-oaCKos6Q.js";import"./small-cross-Zw7wlfAE.js";import"./ActionButton-CkF9PQ4R.js";import"./Checkbox-CIoLBrmc.js";import"./useValueChanged-DgmYsZA0.js";import"./CollapsiblePanel-Crj0pcOH.js";import"./MultiColumnSortDialog-D3gwJIcd.js";import"./MenuTrigger-CwjJKmwj.js";import"./CompositeItem-gUbeOnNS.js";import"./ToolbarRootContext-C9pMoC1w.js";import"./getDisabledMountTransitionStyles-Bt_08xQS.js";import"./getPseudoElementBounds-Dyl6SLRJ.js";import"./chevron-down-CvQujDzB.js";import"./index-B5Cb_2HF.js";import"./error-mP_--TcG.js";import"./BaseCbacBanner-DHxGb0MF.js";import"./makeExternalStore-_fQcqJ1G.js";import"./Tooltip-DbVNHIKo.js";import"./PopoverPopup-DQ08RGHM.js";import"./debounce-DisvDzGy.js";import"./tick-CAF8Q4Se.js";import"./DropdownField-DsagADFX.js";import"./isEqual-DBj3OHQt.js";import"./withOsdkMetrics-loWoDH6-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
