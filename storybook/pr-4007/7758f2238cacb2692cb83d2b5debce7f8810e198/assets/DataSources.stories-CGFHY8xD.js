import{j as r}from"./iframe-DugxyHXW.js";import{O as b}from"./object-table-7pPwAMRd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BZi5rOxm.js";import{u as g}from"./useOsdkClient-CjZHpbU9.js";import"./preload-helper-sKHH7dZZ.js";import"./Table-Fy8p0ukL.js";import"./index-BnymHSBX.js";import"./Dialog-hoMNh3xw.js";import"./cross-BSDPKBN8.js";import"./svgIconContainer-BhR3_WjC.js";import"./useBaseUiId-DXSoLqlj.js";import"./InternalBackdrop-C5PVGWxl.js";import"./composite-B6PfDTrv.js";import"./index-DEsgQO2-.js";import"./index-C1eIh-0N.js";import"./index-OCBhvrRs.js";import"./useEventCallback-BWN3beAb.js";import"./SkeletonBar-DTF20Ls3.js";import"./LoadingCell-Cs5Ui_Mh.js";import"./ColumnConfigDialog-BNfKn6pP.js";import"./DraggableList-Br-ROzH9.js";import"./search-HmVN54vs.js";import"./Input-D5dfXCf5.js";import"./useControlled-CrSksIZl.js";import"./Button-Dr2gNfRq.js";import"./small-cross-DLi0JibG.js";import"./ActionButton-PxTm-wqz.js";import"./Checkbox-DwqZQOlu.js";import"./useValueChanged-D8LItfM_.js";import"./CollapsiblePanel-EgTSYgZn.js";import"./MultiColumnSortDialog-CFQFDd5R.js";import"./MenuTrigger-CTsDP6tB.js";import"./CompositeItem-V75ZZ8Nq.js";import"./ToolbarRootContext-Cl7j9rKh.js";import"./getDisabledMountTransitionStyles-DB3JFAJ8.js";import"./getPseudoElementBounds-Ck5edXWa.js";import"./chevron-down-BHed8mrw.js";import"./index-BbAAxPka.js";import"./error-DAzclkpO.js";import"./BaseCbacBanner-BO6UZWW2.js";import"./makeExternalStore-WS2cTnp-.js";import"./Tooltip-GeR-nHC8.js";import"./PopoverPopup-lrG87DA3.js";import"./debounce-SsrRBLaw.js";import"./tick-BpCxOvMz.js";import"./DropdownField-Dd9c5Emh.js";import"./isEqual-8_9WHdsY.js";import"./withOsdkMetrics-x8dgsXC7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
