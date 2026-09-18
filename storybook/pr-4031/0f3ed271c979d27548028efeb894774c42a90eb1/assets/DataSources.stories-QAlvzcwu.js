import{j as r}from"./iframe-BHPDqCFq.js";import{O as b}from"./object-table-CX4l4Dfs.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ChlgCrlh.js";import{u as g}from"./useOsdkClient-DdfWwqYU.js";import"./preload-helper-C8dKT6c-.js";import"./Table-C8-fBgPi.js";import"./index-Cxj4mfK8.js";import"./Dialog-CwB0Ilia.js";import"./cross-BHJaWm-f.js";import"./svgIconContainer-COam26m3.js";import"./useBaseUiId-CT4jboOp.js";import"./InternalBackdrop-Csoal8gm.js";import"./composite-BIm8cUf1.js";import"./index-DJH664Hp.js";import"./index-JmqbywhK.js";import"./index-DX8xiCXa.js";import"./useEventCallback-Ddnv-q8o.js";import"./SkeletonBar-P8jlFumX.js";import"./LoadingCell-Btv4P7kZ.js";import"./ColumnConfigDialog-R1h9StJE.js";import"./DraggableList-DDTm5yW2.js";import"./search-ROafySNP.js";import"./Input-BmuqUAJQ.js";import"./useControlled-BLanU1Cz.js";import"./Button-D6w0YH3F.js";import"./small-cross-DRE_PaJF.js";import"./ActionButton--zxznfMJ.js";import"./Checkbox-jOQfJbyM.js";import"./useValueChanged-D1mPBuzM.js";import"./CollapsiblePanel-COsf17xI.js";import"./MultiColumnSortDialog-MYyYNbXm.js";import"./MenuTrigger-OO1PFXFs.js";import"./CompositeItem-BRFTKS6k.js";import"./ToolbarRootContext-BieBN5Ud.js";import"./getDisabledMountTransitionStyles-BYu2K8x7.js";import"./getPseudoElementBounds-CM7RrIA6.js";import"./chevron-down-X9qExTnz.js";import"./index-DGoUYVsX.js";import"./error-Wz7v_t0s.js";import"./BaseCbacBanner-D6ekieQG.js";import"./makeExternalStore-CIZbbQ8M.js";import"./Tooltip-CCOQG__R.js";import"./PopoverPopup-CnlmGlie.js";import"./debounce-DVRH7VUD.js";import"./tick-CJnrQrNa.js";import"./DropdownField-CDw7d_jR.js";import"./isEqual-DZlpwNeT.js";import"./withOsdkMetrics-Ben-Mf35.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
