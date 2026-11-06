import{j as r}from"./iframe-CMiiEF1b.js";import{O as b}from"./object-table-oQWMyJiq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-uzbyPdza.js";import{u as g}from"./useOsdkClient-DkekLomq.js";import"./preload-helper-2rscAx0o.js";import"./Table-DXwxQvdR.js";import"./index-DRZQ1ZuZ.js";import"./Dialog-BGwEB59l.js";import"./cross-DmjzAf0-.js";import"./svgIconContainer-DmZ8fHpX.js";import"./useBaseUiId-EgPXNEt2.js";import"./InternalBackdrop-U0kfyJ5Z.js";import"./composite-DqjfxZG9.js";import"./index-goWiuive.js";import"./index-Dtqd3tNX.js";import"./index-vCHhqi_x.js";import"./useEventCallback-e3py3zZO.js";import"./SkeletonBar-D_pLrG8I.js";import"./LoadingCell-DegLzQmp.js";import"./ColumnConfigDialog-B6kG6pez.js";import"./DraggableList-qXLjxEkd.js";import"./search-0aDkREOD.js";import"./Input-B0ji1_35.js";import"./useControlled-CaNRytWe.js";import"./Button-CDnIVBQ_.js";import"./small-cross-DGkNWAjz.js";import"./ActionButton-B5NjKg_P.js";import"./Checkbox-evxW-yIF.js";import"./useValueChanged-hWOBB7lU.js";import"./CollapsiblePanel-DHD1Piul.js";import"./MultiColumnSortDialog-B7lXp9Me.js";import"./MenuTrigger-yrWPKLRn.js";import"./CompositeItem-D4B_FL8U.js";import"./ToolbarRootContext-UxomdOwp.js";import"./getDisabledMountTransitionStyles-MJ90XzR7.js";import"./getPseudoElementBounds-TefPeSXP.js";import"./chevron-down-BtRtOYI2.js";import"./index-DVpvfzZ8.js";import"./error-IdCbvwbX.js";import"./BaseCbacBanner-klveZ2h3.js";import"./makeExternalStore-BeAQwjdH.js";import"./Tooltip-Dg78gXhb.js";import"./PopoverPopup-DAxHwasP.js";import"./debounce-DhU-bxB_.js";import"./tick-CPg-6I2-.js";import"./DropdownField-B_Y4KBs-.js";import"./isEqual-DpDCxrI8.js";import"./withOsdkMetrics-BucKtTdS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
