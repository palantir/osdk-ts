import{j as r}from"./iframe-CI_HynUY.js";import{O as b}from"./object-table-BKiuEgSl.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D8Y1oD2M.js";import{u as g}from"./useOsdkClient-Cz_MMEOS.js";import"./preload-helper-CIV_stCl.js";import"./Table-Bdxi8Ji2.js";import"./index-0kQGtEwV.js";import"./Dialog-DmIoMb6K.js";import"./cross-BfUKNbpN.js";import"./svgIconContainer-CBJHfw9Y.js";import"./useBaseUiId-CLhtbhfw.js";import"./InternalBackdrop-2mD5okmV.js";import"./composite-ChmQoEk2.js";import"./index-DyCxF_Yp.js";import"./index-BkBZKr2_.js";import"./index-CuvLYwNQ.js";import"./useEventCallback-LvVc03lO.js";import"./SkeletonBar-BqtbT4_L.js";import"./LoadingCell-BR6Jc_kG.js";import"./ColumnConfigDialog-VArGH5Un.js";import"./DraggableList-DNw4NfZ0.js";import"./search-DA24byco.js";import"./Input-Cb1k9hUL.js";import"./useControlled-CEg8frKf.js";import"./isEqual-njDV2lTg.js";import"./isObject-y8UFtvsy.js";import"./Button-BHVlE6--.js";import"./ActionButton-DBOJ-o3j.js";import"./Checkbox-ClCwaXFv.js";import"./useValueChanged-CbXoGVGF.js";import"./CollapsiblePanel-BNbnAlQH.js";import"./MultiColumnSortDialog-DbgN10xZ.js";import"./MenuTrigger-DtKC9G_6.js";import"./CompositeItem-D6h7EiM2.js";import"./ToolbarRootContext-Bg59D_CY.js";import"./getDisabledMountTransitionStyles-BgQ6Y6en.js";import"./getPseudoElementBounds-Djlx0q2A.js";import"./chevron-down-BLW-Pg3l.js";import"./index-BdlH6Nzm.js";import"./error-C7hCYMbm.js";import"./BaseCbacBanner-DRPBT1G1.js";import"./makeExternalStore-DhTdoCR8.js";import"./Tooltip-Baji5KPr.js";import"./PopoverPopup-CBR7iU58.js";import"./toNumber-Q3gPj6MM.js";import"./tick-BDXCYJjJ.js";import"./DropdownField-BnBpVV6_.js";import"./withOsdkMetrics-CWUy-TNv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
