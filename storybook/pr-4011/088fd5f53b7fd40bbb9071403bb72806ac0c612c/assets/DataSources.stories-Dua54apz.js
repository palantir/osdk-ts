import{j as r}from"./iframe-Cjq1ziW_.js";import{O as b}from"./object-table-D6EdSbIy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BKqTDpVK.js";import{u as g}from"./useOsdkClient-D16wWo5-.js";import"./preload-helper-Bu64T0VB.js";import"./Table-DX-6NG8S.js";import"./index-DYLMtBRZ.js";import"./Dialog-CUVldmmV.js";import"./cross-5C9tDAb9.js";import"./svgIconContainer-eE0nci6v.js";import"./useBaseUiId-BOmEy4R4.js";import"./InternalBackdrop-DVWahY-J.js";import"./composite-DKerRgJC.js";import"./index-jdj57Z6r.js";import"./index-BNrT0csI.js";import"./index-B4fNfQ4Q.js";import"./useEventCallback-hAeTEmUL.js";import"./SkeletonBar-CxWNqWqz.js";import"./LoadingCell-CEZ_xtS5.js";import"./ColumnConfigDialog-JWUub0AX.js";import"./DraggableList-BTT7l4Iu.js";import"./search-CW8m2x0D.js";import"./Input-CltcJXck.js";import"./useControlled-B86_FVha.js";import"./Button-Sk9sqn-x.js";import"./small-cross-DpmUsxoH.js";import"./ActionButton-Bkt5pjan.js";import"./Checkbox-DwFQfO_0.js";import"./useValueChanged-Dp6WnvdX.js";import"./CollapsiblePanel-DZj9a81F.js";import"./MultiColumnSortDialog-BgeVtZYK.js";import"./MenuTrigger-vwiILOdw.js";import"./CompositeItem-BkoI9BcF.js";import"./ToolbarRootContext-D9vPb_4g.js";import"./getDisabledMountTransitionStyles-Dcwh1Csu.js";import"./getPseudoElementBounds-DZitm35h.js";import"./chevron-down-BLZAfqaw.js";import"./index-BlBIR37s.js";import"./error-BTbs61-N.js";import"./BaseCbacBanner-BKFpuCn3.js";import"./makeExternalStore-MDXzkZI-.js";import"./Tooltip-BbVYH3II.js";import"./PopoverPopup-DmxPEDNt.js";import"./debounce-CGyXk-2p.js";import"./tick-B9mB2gxh.js";import"./DropdownField-Bw_qvOxg.js";import"./isEqual-2eOY9j-u.js";import"./withOsdkMetrics-DX_450NL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
