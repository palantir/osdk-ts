import{j as r}from"./iframe-gl1D0cYu.js";import{O as b}from"./object-table-DWlqOrB0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-tNgwJn7U.js";import{u as g}from"./useOsdkClient-BBR-XdUj.js";import"./preload-helper-DqgH6sT8.js";import"./Table-05mb1aST.js";import"./index-D5PLyZrU.js";import"./Dialog-YNb8BJSN.js";import"./cross-nvwlJ43b.js";import"./svgIconContainer-D2ylg-hx.js";import"./useBaseUiId-DaNXLH9o.js";import"./InternalBackdrop-B2oQrtyL.js";import"./composite-mmowW-5S.js";import"./index-DZJG8XPS.js";import"./index-DYOboT0w.js";import"./index-DpfgomRZ.js";import"./useEventCallback-BMDTzt3U.js";import"./SkeletonBar-Djy6KVIi.js";import"./LoadingCell-BahYtaDB.js";import"./ColumnConfigDialog-Da-NI91w.js";import"./DraggableList-BT0QdQr8.js";import"./search-DuJOx_mq.js";import"./Input-DikxtY8U.js";import"./useControlled-D-vu1Iu-.js";import"./Button-Dyc2i6Ov.js";import"./small-cross-BShBRTCB.js";import"./ActionButton-CTRf1gwO.js";import"./Checkbox-1LqBOyyG.js";import"./useValueChanged-B5BKkZsH.js";import"./CollapsiblePanel-BQtLzhJx.js";import"./MultiColumnSortDialog-BlgyqvG6.js";import"./MenuTrigger-DaW5jwCf.js";import"./CompositeItem-hGM9YKcr.js";import"./ToolbarRootContext-DUK6v5QM.js";import"./getDisabledMountTransitionStyles-CEC9IPnY.js";import"./getPseudoElementBounds-1Yev2lnF.js";import"./chevron-down-B--bqcM3.js";import"./index-Cevn-2DA.js";import"./error-CF31ifZ8.js";import"./BaseCbacBanner-Bp4FPOAe.js";import"./makeExternalStore-mCeZ-qAv.js";import"./Tooltip-TuG8zUYZ.js";import"./PopoverPopup-OUHi2kGW.js";import"./debounce-C5VfxwkA.js";import"./tick-CMBEryyP.js";import"./DropdownField-CUCj8DNZ.js";import"./isEqual-VJmxrJq2.js";import"./withOsdkMetrics-qXzvdtsT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
