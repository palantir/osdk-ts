import{j as r}from"./iframe-DJFzVHUY.js";import{O as b}from"./object-table-DZ1ElxZ0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D6ZuOFSR.js";import{u as g}from"./useOsdkClient-MqvBzpue.js";import"./preload-helper-2WGoxQfc.js";import"./Table-DLA0ay-U.js";import"./index-C8WJuqok.js";import"./Dialog-CAHAZJON.js";import"./cross-DNlGV5O4.js";import"./svgIconContainer-DHr-sOOW.js";import"./useBaseUiId-CGrSWTyF.js";import"./InternalBackdrop-B8XgOXJ8.js";import"./composite-CnhtXZjf.js";import"./index-DTSqGPNo.js";import"./index-DWlt5OtE.js";import"./index-Dq8k5apt.js";import"./useEventCallback-Ci1tWv_-.js";import"./SkeletonBar-46sSVcFY.js";import"./LoadingCell-BfoJJmHR.js";import"./ColumnConfigDialog-DWa2QIa2.js";import"./DraggableList-BatBu2Wo.js";import"./search-CWhFAg8g.js";import"./Input-D3nPOBMY.js";import"./useControlled-B01s-9H8.js";import"./isEqual-BsgyJ2f-.js";import"./isObject-9ANvhOR1.js";import"./Button-BDBMJl_t.js";import"./ActionButton-BY6r5N3V.js";import"./Checkbox-EiJFw0o_.js";import"./useValueChanged-Pst2Fxoc.js";import"./CollapsiblePanel-D5sFaQ_2.js";import"./MultiColumnSortDialog-D79W9Fza.js";import"./MenuTrigger-BManj4QB.js";import"./CompositeItem-tYIQGoUN.js";import"./ToolbarRootContext-ZgWiotCD.js";import"./getDisabledMountTransitionStyles-DeI9-n_T.js";import"./getPseudoElementBounds-Cx-1Ks2h.js";import"./chevron-down-boODY68H.js";import"./index-dZ139dm-.js";import"./error-DIyK6hbL.js";import"./BaseCbacBanner-BkuCMRW4.js";import"./makeExternalStore-Dlph1PzJ.js";import"./Tooltip-DKt55s1B.js";import"./PopoverPopup-vJBslg_h.js";import"./toNumber-BuE48Tud.js";import"./tick-B68tua9r.js";import"./DropdownField-DeThirSU.js";import"./withOsdkMetrics-sbsVHgwY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
