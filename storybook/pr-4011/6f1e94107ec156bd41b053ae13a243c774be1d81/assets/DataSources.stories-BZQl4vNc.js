import{j as r}from"./iframe-CxIn-rG9.js";import{O as b}from"./object-table-BfEJJ2X7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DoqEz9tK.js";import{u as g}from"./useOsdkClient-BIrOkiuO.js";import"./preload-helper-X6xNaBfi.js";import"./Table-CJ2ctgD3.js";import"./index-DFQNuVuF.js";import"./Dialog-UFtp53bO.js";import"./cross-TMn9ETj9.js";import"./svgIconContainer-c9igszEF.js";import"./useBaseUiId-B2Xt2brM.js";import"./InternalBackdrop-Du9CNWbl.js";import"./composite-BqqFykrE.js";import"./index-DDGK9wch.js";import"./index-CC8ad_XL.js";import"./index-Dk7lf_Pd.js";import"./useEventCallback-B1iES3kj.js";import"./SkeletonBar-BBK8X7z7.js";import"./LoadingCell-B3Ij3jGR.js";import"./ColumnConfigDialog-vcj3cdm_.js";import"./DraggableList-Bol2-xJB.js";import"./search-jqi3oncJ.js";import"./Input-DMEekJro.js";import"./useControlled-DojYWrxF.js";import"./Button-B9HFamKv.js";import"./small-cross-BY7zwxBs.js";import"./ActionButton-qIvloGNZ.js";import"./Checkbox-LMTBOVPC.js";import"./useValueChanged-Cykl9Has.js";import"./CollapsiblePanel-LVh3LC_t.js";import"./MultiColumnSortDialog-DEaQClJA.js";import"./MenuTrigger-CfZj9Quh.js";import"./CompositeItem-AwSF7S2C.js";import"./ToolbarRootContext-O9MvMR3V.js";import"./getDisabledMountTransitionStyles-DlmAc0el.js";import"./getPseudoElementBounds-8yyQ5dXu.js";import"./chevron-down-kODRI2uy.js";import"./index-K4d5SQDR.js";import"./error-LS_wz8gU.js";import"./BaseCbacBanner-Bo1wfMOY.js";import"./makeExternalStore-CFux59qT.js";import"./Tooltip-BY1oJx1C.js";import"./PopoverPopup-BndJ4L0f.js";import"./debounce-DN6pYKk6.js";import"./tick-DnpOCE6f.js";import"./DropdownField-e5290CV8.js";import"./isEqual-CGMN573Q.js";import"./withOsdkMetrics-Ci9E-Vmh.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
