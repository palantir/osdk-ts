import{j as r}from"./iframe-C_XIQRaj.js";import{O as b}from"./object-table-BjgJV20o.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D-phCZdz.js";import{u as g}from"./useOsdkClient-DX8nswLQ.js";import"./preload-helper-yovbOiJH.js";import"./Table-pt3kJltT.js";import"./index-BeXNZw_x.js";import"./Dialog-UHsoLMa-.js";import"./cross-CUZU2tfy.js";import"./svgIconContainer-BNlRuGAK.js";import"./useBaseUiId-8inAF2n-.js";import"./InternalBackdrop-CVa7hO1U.js";import"./composite-DGI-ix3e.js";import"./index-BLFOZToo.js";import"./index-BLHmTRj_.js";import"./index-BBWBYdHe.js";import"./useEventCallback-DLCeib9r.js";import"./SkeletonBar-yWafqoD-.js";import"./LoadingCell-BAIKpw62.js";import"./ColumnConfigDialog-1AGcRHyc.js";import"./DraggableList-BC3BFZpg.js";import"./search-BE01uCTT.js";import"./Input-DAnQbmer.js";import"./useControlled-Ch9SndTb.js";import"./Button-dB7_sFTC.js";import"./small-cross-38kc_Q0Y.js";import"./ActionButton-D6EEbVJD.js";import"./Checkbox-Cefn8fFv.js";import"./useValueChanged-DzcQQ31i.js";import"./CollapsiblePanel-DHt-foUT.js";import"./MultiColumnSortDialog-Ck74_Wvq.js";import"./MenuTrigger-CsFi9KLa.js";import"./CompositeItem-BQROqFNc.js";import"./ToolbarRootContext-gbYyGpWk.js";import"./getDisabledMountTransitionStyles-BNbLHEBU.js";import"./getPseudoElementBounds-17tz2fhi.js";import"./chevron-down-9VTaJsMC.js";import"./index-DW1hnjgV.js";import"./error-B-SAi68c.js";import"./BaseCbacBanner-gyGh-cKU.js";import"./makeExternalStore-CTMv2DMh.js";import"./Tooltip-C9o7ip4U.js";import"./PopoverPopup-tjx05EUI.js";import"./debounce-C9ttcPrX.js";import"./tick-C4shc0EI.js";import"./DropdownField-oiVuVzvB.js";import"./isEqual-BXyydvGq.js";import"./withOsdkMetrics-CVYgQ3H4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
