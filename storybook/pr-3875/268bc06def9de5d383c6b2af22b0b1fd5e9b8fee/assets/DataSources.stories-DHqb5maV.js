import{j as r}from"./iframe-5bssl6VS.js";import{O as b}from"./object-table-BbXBLAoq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers--Duq67Zy.js";import{u as g}from"./useOsdkClient-BTz6SXdT.js";import"./preload-helper-BHXvjcwa.js";import"./Table-DuplKoEt.js";import"./index-B13HoCGw.js";import"./Dialog-Dagr4xYg.js";import"./cross-DxgHVtzX.js";import"./svgIconContainer-DrtwtWvp.js";import"./useBaseUiId-Dh4eINWl.js";import"./InternalBackdrop-gF6cp71q.js";import"./composite-Btg8TS6e.js";import"./index-BOy4EylD.js";import"./index-nZ8SppMu.js";import"./index-D6UnHnWh.js";import"./useEventCallback-D8RU-Nt1.js";import"./SkeletonBar-jq5pbuMG.js";import"./LoadingCell-BT9Hgziu.js";import"./ColumnConfigDialog-1HCkOSYn.js";import"./DraggableList-DOc9gEAb.js";import"./search-VkpzhyZf.js";import"./Input-Cn-NeA9g.js";import"./useControlled-DiYZsjSM.js";import"./Button-DlzEigHK.js";import"./small-cross-BP7K_1-R.js";import"./ActionButton-WlOudVkr.js";import"./Checkbox-c1OEAWMk.js";import"./useValueChanged-DhkyBG2M.js";import"./CollapsiblePanel-D0mcSh8k.js";import"./MultiColumnSortDialog-EOtasI8f.js";import"./MenuTrigger-B0zTqH6h.js";import"./CompositeItem-BARyggcS.js";import"./ToolbarRootContext-BS1iuPdd.js";import"./getDisabledMountTransitionStyles-BMdgnVVy.js";import"./getPseudoElementBounds-DhRDGSxS.js";import"./chevron-down-CFvJBTG-.js";import"./index-BLEwjvAg.js";import"./error-BGrVIj_t.js";import"./BaseCbacBanner-BnA-PWSg.js";import"./makeExternalStore-BheM4fhK.js";import"./Tooltip-8Z9hfeDS.js";import"./PopoverPopup-BeZaAXer.js";import"./debounce-BgFOafJA.js";import"./tick-CQ8SUApn.js";import"./DropdownField-BbRynaXk.js";import"./isEqual-leOPEBrs.js";import"./withOsdkMetrics-CZkoO3-I.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
