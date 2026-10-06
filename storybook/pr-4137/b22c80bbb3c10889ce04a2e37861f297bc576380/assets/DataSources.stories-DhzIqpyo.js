import{j as r}from"./iframe-OTC_SZd0.js";import{O as b}from"./object-table-DJdw5Y3U.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C6Q0CjKQ.js";import{u as g}from"./useOsdkClient-DCm7AWwJ.js";import"./preload-helper-1vGzY75P.js";import"./Table-YbkGpIvE.js";import"./index-BoJX-ksu.js";import"./Dialog-Bn1d6Lwf.js";import"./cross-DqMcRqPP.js";import"./svgIconContainer-BcCPLcaR.js";import"./useBaseUiId-CX-b-AU2.js";import"./InternalBackdrop-C2smTE49.js";import"./composite-DmMBTPuj.js";import"./index-CvsR1t9J.js";import"./index-UWWplry5.js";import"./index-BSLVBTuk.js";import"./useEventCallback-69mtBwYt.js";import"./SkeletonBar-B9Sf-YB8.js";import"./LoadingCell-ba9qrIBe.js";import"./ColumnConfigDialog-BHEFKSzZ.js";import"./DraggableList-CphGWXXO.js";import"./search-CqHOzh_J.js";import"./Input-RoK9jBHN.js";import"./useControlled-VRarZ-1e.js";import"./Button-Cp-yQ_WA.js";import"./small-cross-BSXT4voL.js";import"./ActionButton-B6wO2OKA.js";import"./Checkbox-iWY9dY4i.js";import"./useValueChanged-BI84kVyH.js";import"./CollapsiblePanel-C1ftD3Jy.js";import"./MultiColumnSortDialog-DP2VsSjs.js";import"./MenuTrigger-aZDl9AA7.js";import"./CompositeItem-JGQEQxmA.js";import"./ToolbarRootContext-BqVPJrpg.js";import"./getDisabledMountTransitionStyles-Djfv408z.js";import"./getPseudoElementBounds-CucAzF8-.js";import"./chevron-down-Bq3D3uVm.js";import"./index-D_oKlTjT.js";import"./error-DRGNiszN.js";import"./BaseCbacBanner-ClL40Yjf.js";import"./makeExternalStore-CJLgs2ND.js";import"./Tooltip-Cx2J9Tyo.js";import"./PopoverPopup-gvz3_YST.js";import"./debounce-CKQsYhti.js";import"./tick-CiIM5WDj.js";import"./DropdownField-fJtfAUzJ.js";import"./isEqual-33bb34dj.js";import"./withOsdkMetrics-BAfhlptC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
