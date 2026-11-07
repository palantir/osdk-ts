import{j as r}from"./iframe-DaWek49r.js";import{O as b}from"./object-table-B-XjcBbq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BBXcT-_i.js";import{u as g}from"./useOsdkClient-B9Apk1sW.js";import"./preload-helper-CpWLgODR.js";import"./Table-C3kjScnV.js";import"./index-7xB0j-h3.js";import"./Dialog-oZD8Leel.js";import"./cross-BTg86JZI.js";import"./svgIconContainer-BLvyKKH5.js";import"./useBaseUiId-BS0koSYJ.js";import"./InternalBackdrop-BtnFxY7R.js";import"./composite-3FCOWJk0.js";import"./index-CmmmgmWL.js";import"./index-B6v8umRH.js";import"./index-Ci53BpX5.js";import"./useEventCallback-ROl2U3Zc.js";import"./SkeletonBar-DiJ1Hvir.js";import"./LoadingCell-Cd0U2uhn.js";import"./ColumnConfigDialog-DgNXnEmf.js";import"./DraggableList-CiqeYUhd.js";import"./search-DAzvWU8V.js";import"./Input-RkKX3V5Z.js";import"./useControlled-CPSRk279.js";import"./Button-QRlJPal1.js";import"./small-cross-BIIMg4DU.js";import"./ActionButton-DaPNcgvE.js";import"./Checkbox-C1O-p1-8.js";import"./useValueChanged-BmCio-Qe.js";import"./CollapsiblePanel-DKLWDwCu.js";import"./MultiColumnSortDialog-C5iXwZRR.js";import"./MenuTrigger-ImRWkubh.js";import"./CompositeItem-C0lAIjsd.js";import"./ToolbarRootContext-B9vHR48n.js";import"./getDisabledMountTransitionStyles-Cr6AUOCj.js";import"./getPseudoElementBounds-DArBdZgv.js";import"./chevron-down-Cos6kkQA.js";import"./index-DdMC5lnj.js";import"./error-AanNsvpp.js";import"./BaseCbacBanner-f5h26H1M.js";import"./makeExternalStore-Dui8kxii.js";import"./Tooltip-D6D1ArJb.js";import"./isObject-W7GYGzhg.js";import"./debounce-DcMgEISB.js";import"./tick-DTzur8x4.js";import"./DropdownField-BHLcVE6g.js";import"./isEqual-DGz_SmIW.js";import"./_baseIsEqual-BQRjoz-i.js";import"./withOsdkMetrics-DPmknckC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
