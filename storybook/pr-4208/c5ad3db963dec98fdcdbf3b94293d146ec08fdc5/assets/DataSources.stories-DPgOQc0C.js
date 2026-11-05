import{j as r}from"./iframe-CW0iR0MW.js";import{O as b}from"./object-table-CrA9n11I.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CFB3Al_m.js";import{u as g}from"./useOsdkClient-D98LXdIX.js";import"./preload-helper-DPNRA16C.js";import"./Table-BDGBmK8s.js";import"./index-R4-e3PKI.js";import"./Dialog-CHAkM0Dh.js";import"./cross-CVgDD36J.js";import"./svgIconContainer-DRg1K7b0.js";import"./useBaseUiId-bY0lVTzO.js";import"./InternalBackdrop-Al1qNZ5B.js";import"./composite-CEDiNU-s.js";import"./index-Bj6P2ewC.js";import"./index-Wh16gVsR.js";import"./index-2WJCxASE.js";import"./useEventCallback-69j61YHl.js";import"./SkeletonBar-D-B4kIIV.js";import"./LoadingCell-SCdbsDKo.js";import"./ColumnConfigDialog-BbGcrO0V.js";import"./DraggableList-B9g0bCHY.js";import"./search-DRF2IcSw.js";import"./Input-CEvDm9oX.js";import"./useControlled-BZraJw4c.js";import"./Button-IemAbPn8.js";import"./small-cross-DgOHAIuf.js";import"./ActionButton-DRpKJjXE.js";import"./Checkbox-CKlutVsm.js";import"./useValueChanged-DMC3zyLc.js";import"./CollapsiblePanel-CvSxsX2O.js";import"./MultiColumnSortDialog-Bx89fbf_.js";import"./MenuTrigger-CM7WtocU.js";import"./CompositeItem-nFLipZIC.js";import"./ToolbarRootContext-Dfjrxij8.js";import"./getDisabledMountTransitionStyles-Do6amAXt.js";import"./getPseudoElementBounds-CdhAL6Na.js";import"./chevron-down-ChPXe2UO.js";import"./index-CQ_ZQBXs.js";import"./error-QdPzuwdp.js";import"./BaseCbacBanner-QNuKrHdU.js";import"./makeExternalStore-GoUNmYeo.js";import"./Tooltip-VY0XkLAP.js";import"./PopoverPopup-CHZlmgc5.js";import"./debounce-B76dCMlT.js";import"./tick-D-TsA4-V.js";import"./DropdownField-CxC5gxxi.js";import"./isEqual-DV8lhnxQ.js";import"./withOsdkMetrics-CaRNNLKc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
