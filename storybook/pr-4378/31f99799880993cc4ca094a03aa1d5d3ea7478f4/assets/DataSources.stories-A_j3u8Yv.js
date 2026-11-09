import{j as r}from"./iframe-C-VQV1kk.js";import{O as b}from"./object-table-CxH1WG92.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CQ7-0c76.js";import{u as g}from"./useOsdkClient-fG21vCjJ.js";import"./preload-helper-DAFvkMcS.js";import"./Table-BxJIg6as.js";import"./index-Br3mcMRO.js";import"./Dialog-BcS09eX8.js";import"./cross-B26OHCdD.js";import"./svgIconContainer-CJnwzucZ.js";import"./useBaseUiId-CDIBpZbW.js";import"./InternalBackdrop-CrKl0Qys.js";import"./composite-GjU-j0CL.js";import"./index-BAOIGUAP.js";import"./index-DPEqsBnM.js";import"./index-C81NLsPb.js";import"./useEventCallback-CrzZq1A8.js";import"./SkeletonBar-BkJDoVVR.js";import"./LoadingCell-DidOQItD.js";import"./ColumnConfigDialog-DQEeQvz7.js";import"./DraggableList-qga-VF-f.js";import"./search-D0wtlqkl.js";import"./Input-C1vD7nT2.js";import"./useControlled-BadNojnw.js";import"./Button-BLvWajsq.js";import"./small-cross-DQKRtPL4.js";import"./ActionButton-BbdrlCMk.js";import"./Checkbox-1Rigo1b4.js";import"./useValueChanged-CTLWVytN.js";import"./CollapsiblePanel-DF08KEFn.js";import"./MultiColumnSortDialog-W8LwXs3d.js";import"./MenuTrigger-E2JdOber.js";import"./CompositeItem-CceR4qkm.js";import"./ToolbarRootContext-m881A_zR.js";import"./getDisabledMountTransitionStyles-lRegSDO5.js";import"./getPseudoElementBounds-CaioDmeF.js";import"./chevron-down-CPUFW1cF.js";import"./index-BFFBOJxl.js";import"./error-5dXKQyhU.js";import"./BaseCbacBanner-C1hA4dbq.js";import"./makeExternalStore-BIjV_Sjd.js";import"./Tooltip-yfSghmxo.js";import"./isObject-IGANmsxM.js";import"./debounce-BgKrWPP2.js";import"./tick-CGn7jNwS.js";import"./DropdownField-Gr8cO_hh.js";import"./isEqual-D3Uy-qVH.js";import"./_baseIsEqual-ApqE7jKt.js";import"./withOsdkMetrics-c7bdsNh3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
