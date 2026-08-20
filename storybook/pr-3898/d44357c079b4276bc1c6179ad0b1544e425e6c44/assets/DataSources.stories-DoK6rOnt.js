import{j as r}from"./iframe-t1WFPDhw.js";import{O as b}from"./object-table-CM4LWrT7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-stvAeGGn.js";import{u as g}from"./useOsdkClient--18P-rAC.js";import"./preload-helper-Da1tS92Z.js";import"./Table-D9YyYKJG.js";import"./index-B1GoUeLu.js";import"./Dialog-iYk-qLDT.js";import"./cross-Da_GAL_u.js";import"./svgIconContainer-BUiS1VCJ.js";import"./useBaseUiId-DK5GeXHs.js";import"./InternalBackdrop-X4TLWAFu.js";import"./composite-CDJe9A1X.js";import"./index-BzHvcWdE.js";import"./index-Dip6e6D7.js";import"./index-CCSLCfC8.js";import"./useEventCallback-D5whHqAd.js";import"./SkeletonBar-0mKrafZV.js";import"./LoadingCell-CzahNsbw.js";import"./ColumnConfigDialog-VgnAAr63.js";import"./DraggableList-CZWbxLce.js";import"./search-CoPwATRc.js";import"./Input-YG1B-d52.js";import"./useControlled-IVlR0_Jk.js";import"./Button-DqjYckjv.js";import"./small-cross-Y2YAVcxh.js";import"./ActionButton-CSa1amr2.js";import"./Checkbox-XNLLdOyi.js";import"./useValueChanged-DnMgpkTo.js";import"./CollapsiblePanel-C4bYsB-J.js";import"./MultiColumnSortDialog-kqu51bhw.js";import"./MenuTrigger-B4Wp0rdW.js";import"./CompositeItem-LJuZmcxS.js";import"./ToolbarRootContext-B23-OKwl.js";import"./getDisabledMountTransitionStyles-N6Q2XM1y.js";import"./getPseudoElementBounds-DH13kVRk.js";import"./chevron-down-qM8DZerS.js";import"./index-Cro2QC3a.js";import"./error-DceejFAv.js";import"./BaseCbacBanner-DOwOWdTM.js";import"./makeExternalStore-Dd5JFSU6.js";import"./Tooltip-LZicG85w.js";import"./PopoverPopup-DGsDtEIW.js";import"./debounce-VPb6bal0.js";import"./tick-D8Y9Kfxj.js";import"./DropdownField-CkzRub5e.js";import"./isEqual-BXF7jnDz.js";import"./withOsdkMetrics-BIBpp3u3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
