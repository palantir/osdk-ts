import{j as r}from"./iframe-Dnji8ErS.js";import{O as b}from"./object-table-BcZuD4QU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-_235m5MS.js";import{u as g}from"./useOsdkClient-CR7GyxlC.js";import"./preload-helper-DBdP8Q4o.js";import"./Table-B3iD-gZe.js";import"./index-BNoiE65C.js";import"./Dialog-C-SVK6-Y.js";import"./cross-BWKDw-8_.js";import"./svgIconContainer-B0znNA-B.js";import"./useBaseUiId-ScNjevUP.js";import"./InternalBackdrop-9jtE3fb7.js";import"./composite-Bo0dFacb.js";import"./index-Calwhz4q.js";import"./index-BVgNOwgs.js";import"./index-Bka3S9OK.js";import"./useEventCallback-56O3ZT4v.js";import"./SkeletonBar-gGwHwvfg.js";import"./LoadingCell-DEtBbjKP.js";import"./ColumnConfigDialog-D2x2SSdm.js";import"./DraggableList-Cm9hxWQ5.js";import"./search-C5sdVGIt.js";import"./Input-DyynrLgV.js";import"./useControlled-DmavZ4hp.js";import"./Button-D-1VZnj-.js";import"./small-cross-wM2Fg1Ze.js";import"./ActionButton-B5ftVOcR.js";import"./Checkbox-IsH8M5rS.js";import"./useValueChanged-GZrrpvDZ.js";import"./CollapsiblePanel-BYjZCBYa.js";import"./MultiColumnSortDialog-CYJMBYTR.js";import"./MenuTrigger-oZZDVCJq.js";import"./CompositeItem-YgQK4Acr.js";import"./ToolbarRootContext-BPwepJKC.js";import"./getDisabledMountTransitionStyles-DeZ02XBV.js";import"./getPseudoElementBounds-C5houf6l.js";import"./chevron-down-r7E6FDSt.js";import"./index-Cj0RyZw2.js";import"./error-CpTRDjda.js";import"./BaseCbacBanner-C1c3Q8Aj.js";import"./makeExternalStore-BNNlgyK5.js";import"./Tooltip-DMaI5dDd.js";import"./PopoverPopup-DmROoIcA.js";import"./debounce-BAxkMmEn.js";import"./tick-PvaRxYp4.js";import"./DropdownField-Lc5xugId.js";import"./isEqual-B5K4ZASA.js";import"./withOsdkMetrics-DdDqJJvP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
