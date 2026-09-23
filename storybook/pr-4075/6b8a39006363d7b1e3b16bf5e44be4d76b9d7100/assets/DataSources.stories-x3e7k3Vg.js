import{j as r}from"./iframe-34VatmEZ.js";import{O as b}from"./object-table-p59KuVgv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DXGRl_Pv.js";import{u as g}from"./useOsdkClient-gxJLLGj5.js";import"./preload-helper-DV4gmwFB.js";import"./Table-D9uD0s7O.js";import"./index-BlAm73td.js";import"./Dialog-D1opey4t.js";import"./cross-DvtnLYbI.js";import"./svgIconContainer-_GM_NvIc.js";import"./useBaseUiId-DeI-Jtiv.js";import"./InternalBackdrop-CvK5FjjA.js";import"./composite-1B_4pEYH.js";import"./index-Fj7eg8Eu.js";import"./index-BTVWVA6f.js";import"./index-ADGNjetD.js";import"./useEventCallback-hRIxgR6L.js";import"./SkeletonBar-VDjUVVNd.js";import"./LoadingCell-nvl0Gc8h.js";import"./ColumnConfigDialog-Cq5xAnqD.js";import"./DraggableList-jT1qIjvE.js";import"./search-CVdCifPG.js";import"./Input-BKrVXT7B.js";import"./useControlled-DVccPDBX.js";import"./Button-DV1A9r6F.js";import"./small-cross-CZHtyfX7.js";import"./ActionButton-Czi1TMhc.js";import"./Checkbox-CTzLXv4K.js";import"./useValueChanged-DCa4_FQi.js";import"./CollapsiblePanel-D3pf9y50.js";import"./MultiColumnSortDialog-D1Tv8ymd.js";import"./MenuTrigger-B9hxhTmU.js";import"./CompositeItem-DOiHkRNL.js";import"./ToolbarRootContext-CiWe9x3z.js";import"./getDisabledMountTransitionStyles-DZUNER2j.js";import"./getPseudoElementBounds-IeKEehJb.js";import"./chevron-down-BtQO1pkc.js";import"./index-Dm8AHk8O.js";import"./error-C-NsPFd6.js";import"./BaseCbacBanner-CDA2PalL.js";import"./makeExternalStore-D4cd6CTa.js";import"./Tooltip-Ce33QJzg.js";import"./PopoverPopup-CSKaTK3m.js";import"./debounce-CrVZzVbG.js";import"./tick-DnmbfsGi.js";import"./DropdownField-BL1cfRQ0.js";import"./isEqual-CGwKoNOy.js";import"./withOsdkMetrics-XZ0oOnyA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
