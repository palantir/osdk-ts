import{j as r}from"./iframe-Ck_GGLOI.js";import{O as b}from"./object-table-C7tDmf_D.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DUom2G2g.js";import{u as g}from"./useOsdkClient-BGBF5mdg.js";import"./preload-helper-Ct_SzjwP.js";import"./Table-Dq8cXEs5.js";import"./index-B89KqVgP.js";import"./Dialog-BETH_eCU.js";import"./cross-KWWBZC90.js";import"./svgIconContainer-r8zB-P6B.js";import"./useBaseUiId--oVgeq5T.js";import"./InternalBackdrop-CLsC1B9Y.js";import"./composite-C_8Q5Icy.js";import"./index-B_ig_9F1.js";import"./index-B25gAHKW.js";import"./index-Dx72QQXF.js";import"./useEventCallback-CdgHi6xx.js";import"./SkeletonBar-D8aEk5EA.js";import"./LoadingCell-DOH4Gt6_.js";import"./ColumnConfigDialog-Ca2xj7EI.js";import"./DraggableList-C1A26BSI.js";import"./search-BoCb61rS.js";import"./Input-Dc0pCVB2.js";import"./useControlled-DlHXi5tj.js";import"./isEqual-BpEk8K4b.js";import"./isObject-5B2Vzc2B.js";import"./Button-CbHH9XWB.js";import"./ActionButton-DYUehOvv.js";import"./Checkbox-DYQgTm4E.js";import"./useValueChanged-BtmCdoCW.js";import"./CollapsiblePanel-nuTsezv3.js";import"./MultiColumnSortDialog-D905AHLH.js";import"./MenuTrigger-DDFq-ctt.js";import"./CompositeItem-Cj_m-_Op.js";import"./ToolbarRootContext-D_d6MWRT.js";import"./getDisabledMountTransitionStyles-BXYuVhzR.js";import"./getPseudoElementBounds-CYW6Hr-n.js";import"./chevron-down-PHjoZosY.js";import"./index-C7igWU5b.js";import"./error-B_r0fBp9.js";import"./BaseCbacBanner-IXJ8JBnE.js";import"./makeExternalStore-95duhyix.js";import"./Tooltip-CXWZf8sP.js";import"./PopoverPopup-DT2q6fhx.js";import"./toNumber-BAJpYGnz.js";import"./tick-BLlHsMVG.js";import"./DropdownField-BxJHqCX2.js";import"./withOsdkMetrics-B4h9Dq5k.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
