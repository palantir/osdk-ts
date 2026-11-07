import{j as r}from"./iframe-DlL407jt.js";import{O as b}from"./object-table-Jb4dJd6e.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CDy_v6j3.js";import{u as g}from"./useOsdkClient-DuswpGgS.js";import"./preload-helper-BJD3fY2z.js";import"./Table-BbpOY9kf.js";import"./index-DZmZFRgP.js";import"./Dialog-D8kM7xr2.js";import"./cross-CzAlhRHv.js";import"./svgIconContainer-C3aprzty.js";import"./useBaseUiId-kFFF_95H.js";import"./InternalBackdrop-1eYHITMY.js";import"./composite-CnW58q4R.js";import"./index-h5_pJtzr.js";import"./index-CTSKtE65.js";import"./index-CD3lFFWF.js";import"./useEventCallback-CP9Yx8kI.js";import"./SkeletonBar-BGe_x6tw.js";import"./LoadingCell-tNR0WluI.js";import"./ColumnConfigDialog-DkL1WAnR.js";import"./DraggableList-30IfpOtK.js";import"./search-CHs1cMQF.js";import"./Input-D4IoTLF7.js";import"./useControlled-BgQSSZgH.js";import"./Button-DMVMokIc.js";import"./small-cross-CVMu3gSR.js";import"./ActionButton-eiflqw4G.js";import"./Checkbox-D8SK4Agj.js";import"./useValueChanged-TEcie-Mz.js";import"./CollapsiblePanel-DQTz5N7k.js";import"./MultiColumnSortDialog-B4-PluNb.js";import"./MenuTrigger-jjfhmBQz.js";import"./CompositeItem-EF9Yfn-T.js";import"./ToolbarRootContext-FpY3GT5-.js";import"./getDisabledMountTransitionStyles-Cs7LUNTv.js";import"./getPseudoElementBounds-CS3-8zt_.js";import"./chevron-down-D5Po3Ct_.js";import"./index-DkvAjmmx.js";import"./error-BAaXixX9.js";import"./BaseCbacBanner-DcoIEnYg.js";import"./makeExternalStore-DASQ1Znf.js";import"./Tooltip-DBCzdDEt.js";import"./isObject-BLEUFFKV.js";import"./debounce-CQmlcroi.js";import"./tick-CyzaHOGg.js";import"./DropdownField-o_FquzSc.js";import"./isEqual-NGl5w6F-.js";import"./_baseIsEqual-DJgdVIs-.js";import"./withOsdkMetrics-C_49vYYy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
