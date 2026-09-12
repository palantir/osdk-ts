import{j as r}from"./iframe-kpUBKcBo.js";import{O as b}from"./object-table-DVI3tGuH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Btm5SQlY.js";import{u as g}from"./useOsdkClient-BcqrqAzc.js";import"./preload-helper-CEFfxAxV.js";import"./Table-BiN_aC4V.js";import"./index-CzIfSD2x.js";import"./Dialog-hBnbAc_e.js";import"./cross-CsmLqXcs.js";import"./svgIconContainer-D1XUyLZc.js";import"./useBaseUiId-eq47N9Yh.js";import"./InternalBackdrop-DVlojBH2.js";import"./composite-DqwQEgXz.js";import"./index-Cg38QLat.js";import"./index-nssiJGD2.js";import"./index-6t1ngEdK.js";import"./useEventCallback-BdQ28hwQ.js";import"./SkeletonBar-DS70zOH6.js";import"./LoadingCell-LNiY6iol.js";import"./ColumnConfigDialog-DIRwtqwm.js";import"./DraggableList-D6O5_Ce_.js";import"./search-D4qHiAMZ.js";import"./Input-xZVHbMZj.js";import"./useControlled-C4e8W1YD.js";import"./Button-IGB5Y7yU.js";import"./small-cross-CiRkoian.js";import"./ActionButton-Ro556bBe.js";import"./Checkbox-BMh40uEe.js";import"./useValueChanged-DJoTowgi.js";import"./CollapsiblePanel-BOpgrZXx.js";import"./MultiColumnSortDialog-CIWBS5RX.js";import"./MenuTrigger-DduVQheP.js";import"./CompositeItem-ChylY6HS.js";import"./ToolbarRootContext-CcFhYs5t.js";import"./getDisabledMountTransitionStyles-_MqiT5fI.js";import"./getPseudoElementBounds-DZf2g3Nn.js";import"./chevron-down-CeKigphE.js";import"./index-fVh42c2P.js";import"./error-DS4cKU2L.js";import"./BaseCbacBanner-BFifP6cY.js";import"./makeExternalStore-DQTLFAQr.js";import"./Tooltip-uU_kBQ9q.js";import"./PopoverPopup-D3WckLAC.js";import"./debounce-ClFDaysW.js";import"./tick-BmvMnIBg.js";import"./DropdownField-BrydZO3u.js";import"./isEqual-Bqos626r.js";import"./withOsdkMetrics-DpMhi7xT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
