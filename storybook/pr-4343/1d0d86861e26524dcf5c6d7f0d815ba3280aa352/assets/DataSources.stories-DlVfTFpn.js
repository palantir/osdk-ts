import{j as r}from"./iframe-DdqwQQfw.js";import{O as b}from"./object-table-DC2LuNpA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DiIQ4MuB.js";import{u as g}from"./useOsdkClient-DRVnONzi.js";import"./preload-helper-Do8DhNTP.js";import"./Table-DuFe3xsr.js";import"./index-BEo5fRZG.js";import"./Dialog-Cg65FL_X.js";import"./cross-D_2LRYUd.js";import"./svgIconContainer-z_HFHagN.js";import"./useBaseUiId-Bcpg3lGk.js";import"./InternalBackdrop-BI5ASDuz.js";import"./composite-BS7fyn0m.js";import"./index-DUGkPzpV.js";import"./index-DqbF2orL.js";import"./index-DGo2jayS.js";import"./useEventCallback-DRJH6OEM.js";import"./SkeletonBar-CxTwW2pN.js";import"./LoadingCell-T5dcwu1-.js";import"./ColumnConfigDialog-N9XdbNhr.js";import"./DraggableList-DpMAnnH0.js";import"./search-BAD3BF_p.js";import"./Input-Ddm5AThx.js";import"./useControlled-DlTcdMFR.js";import"./Button-D31p01oo.js";import"./small-cross-0mGWC0pa.js";import"./ActionButton-ixUyXV1s.js";import"./Checkbox-CJ9apblZ.js";import"./useValueChanged-DXSqqnXt.js";import"./CollapsiblePanel-DoAzLAFA.js";import"./MultiColumnSortDialog-DWe2imCo.js";import"./MenuTrigger-VDaXaEjF.js";import"./CompositeItem-rVjlE15s.js";import"./ToolbarRootContext-BDaRyBS_.js";import"./getDisabledMountTransitionStyles-BPMv8sxJ.js";import"./getPseudoElementBounds-CxeR3TvN.js";import"./chevron-down-RBc_HqKE.js";import"./index-ByyVIpwn.js";import"./error-BE-sE7Te.js";import"./BaseCbacBanner-9dan2OAm.js";import"./makeExternalStore-C_arn_CF.js";import"./Tooltip-CBEbeLyL.js";import"./PopoverPopup-CnpcTZxS.js";import"./debounce-C-_Fx2Z2.js";import"./tick-CVZaQjhe.js";import"./DropdownField-DSWv5JEX.js";import"./isEqual-KM0nLl8C.js";import"./withOsdkMetrics-VwlQjk8h.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
