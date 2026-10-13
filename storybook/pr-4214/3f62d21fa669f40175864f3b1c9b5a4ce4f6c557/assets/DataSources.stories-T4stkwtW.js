import{j as r}from"./iframe-CofS9Mjv.js";import{O as b}from"./object-table-DAECEFk_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DRJf1Rsx.js";import{u as g}from"./useOsdkClient-CEI0BVbt.js";import"./preload-helper-DCg3GuVE.js";import"./Table-EqdpuzEw.js";import"./index-Dba1-hqN.js";import"./Dialog-lhlR2-KK.js";import"./cross-5sYjwK4P.js";import"./svgIconContainer-rLHaF5xG.js";import"./useBaseUiId-BkkGBRPa.js";import"./InternalBackdrop-qRjGdl8e.js";import"./composite-BDNG4DUT.js";import"./index-FNQL6Pr9.js";import"./index-KxxBCqJY.js";import"./index-BHS0czud.js";import"./useEventCallback-lNR3-f9S.js";import"./SkeletonBar-Aa10YgO8.js";import"./LoadingCell-By89uux3.js";import"./ColumnConfigDialog-IsC4-88V.js";import"./DraggableList-8GCsi5Wd.js";import"./search-CbFqNZT1.js";import"./Input-Bk5_B8IH.js";import"./useControlled-Dhms1Lp4.js";import"./Button-3zEBIt6E.js";import"./small-cross-DKt2prc5.js";import"./ActionButton-DNNEXv6M.js";import"./Checkbox-CniU0Q9L.js";import"./useValueChanged-BdhihQIl.js";import"./CollapsiblePanel-P6K_7Hb6.js";import"./MultiColumnSortDialog-q887Qwbf.js";import"./MenuTrigger-DUYeCOY7.js";import"./CompositeItem-GQbg_S7m.js";import"./ToolbarRootContext-B8GhaGLP.js";import"./getDisabledMountTransitionStyles-4uwyOcbE.js";import"./getPseudoElementBounds-YLTZgyuZ.js";import"./chevron-down-CACMHp08.js";import"./index-CfMbSRut.js";import"./error-DOmo2qFa.js";import"./BaseCbacBanner-Q1kDpWFI.js";import"./makeExternalStore-BJ0PmYe7.js";import"./Tooltip-Ceoi_Zxm.js";import"./PopoverPopup-CuVPSugr.js";import"./debounce-DZR19dzG.js";import"./tick-B5fekc3f.js";import"./DropdownField-Bix-FJpy.js";import"./isEqual-V26gfMdB.js";import"./withOsdkMetrics-PwzVtj_c.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
