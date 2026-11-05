import{j as r}from"./iframe-PwAIVm5u.js";import{O as b}from"./object-table-DY849b9y.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dxl81YNR.js";import{u as g}from"./useOsdkClient-PEgelIDi.js";import"./preload-helper-CQv3h1eP.js";import"./Table-DNejCOAN.js";import"./index-Ca_oKjEa.js";import"./Dialog-CeDh1vNg.js";import"./cross-GcEEbHxC.js";import"./svgIconContainer-HsDGQ90M.js";import"./useBaseUiId-BhpsHhZ2.js";import"./InternalBackdrop-CYy1iHZN.js";import"./composite-fUnz6yuB.js";import"./index-RdMLhv4M.js";import"./index-BihfBpP7.js";import"./index-Bviik-9F.js";import"./useEventCallback-Dm32TZ3_.js";import"./SkeletonBar-DN3kNMYz.js";import"./LoadingCell-3Qe48Snu.js";import"./ColumnConfigDialog-DKKYAnhw.js";import"./DraggableList-CRuyA61G.js";import"./search-Nx9kE-Q8.js";import"./Input-CPGzuvOj.js";import"./useControlled-_4ugvpeb.js";import"./Button-VHGYpAX6.js";import"./small-cross-B14kqehl.js";import"./ActionButton-CWjydIzu.js";import"./Checkbox-CQ2TGsAv.js";import"./useValueChanged-CkHl3qLX.js";import"./CollapsiblePanel-C0dv2KPd.js";import"./MultiColumnSortDialog-DIgP8_n1.js";import"./MenuTrigger-B-Ppd0wN.js";import"./CompositeItem-DPCNdhZq.js";import"./ToolbarRootContext-BB_k_Kqj.js";import"./getDisabledMountTransitionStyles-BRie3ZsF.js";import"./getPseudoElementBounds-bZ1W59vq.js";import"./chevron-down-BA5gqzEX.js";import"./index-hThCMCFD.js";import"./error-DMntN0M5.js";import"./BaseCbacBanner-D1NRoB1o.js";import"./makeExternalStore-CqOzjQXJ.js";import"./Tooltip-tjFL-LBL.js";import"./PopoverPopup-sM0UeHOu.js";import"./debounce-C27HzrcV.js";import"./tick-DC7CcLKp.js";import"./DropdownField-C6vsf0E7.js";import"./isEqual-BQTmfRt9.js";import"./withOsdkMetrics-38iXVMUT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
