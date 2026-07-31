import{j as r}from"./iframe-CvtO4IMB.js";import{O as b}from"./object-table-DAwtM7LZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DCIDPo6t.js";import{u as g}from"./useOsdkClient-DBTXLhaX.js";import"./preload-helper-BrvcVhe2.js";import"./Table-DOLAqO0k.js";import"./index-B_GzWBIK.js";import"./Dialog-D7OYP-dq.js";import"./cross-Odyniiv9.js";import"./svgIconContainer-CCvUYbsi.js";import"./useBaseUiId-Cttj69LG.js";import"./InternalBackdrop-C_JPQuma.js";import"./composite-jre0rmDk.js";import"./index-D86dfeRh.js";import"./index-B3UPezCW.js";import"./index-D10lt-2t.js";import"./useEventCallback-ZS4dwuNv.js";import"./SkeletonBar-dh8QhwTh.js";import"./LoadingCell-B8EBAx7k.js";import"./ColumnConfigDialog-DwtmwtSG.js";import"./DraggableList-Ccdp9-TJ.js";import"./search-CcdNkTVL.js";import"./Input-CZiCqG3l.js";import"./useControlled-DaXRoC7J.js";import"./isEqual-CH4q6F0W.js";import"./isObject-Dyg8l838.js";import"./Button-BGi-KOsB.js";import"./ActionButton-DwqtISZg.js";import"./Checkbox-BpcS_XKv.js";import"./useValueChanged-BqQd7JUI.js";import"./CollapsiblePanel-DpUk_I_t.js";import"./MultiColumnSortDialog-G06mBLA6.js";import"./MenuTrigger-BkAleJx0.js";import"./CompositeItem-BQrOCuSB.js";import"./ToolbarRootContext-D-1cr-4z.js";import"./getDisabledMountTransitionStyles-DoSX0V-e.js";import"./getPseudoElementBounds-D2XOf9CN.js";import"./chevron-down-C-SHqWoa.js";import"./index-D9z6kKbW.js";import"./error-Bz0GJG-G.js";import"./BaseCbacBanner-Us_BuLqF.js";import"./makeExternalStore-XAqN2zqJ.js";import"./Tooltip-Cn1_Mxal.js";import"./PopoverPopup-7xfh03GJ.js";import"./toNumber-RJZJcS_O.js";import"./tick-C_u5au6g.js";import"./DropdownField-CZ-LUhIW.js";import"./withOsdkMetrics-DEHLnQpj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
