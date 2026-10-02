import{j as r}from"./iframe-CKrQ01Tw.js";import{O as b}from"./object-table-BrklFnTe.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-8ueBC8yD.js";import{u as g}from"./useOsdkClient-Cx-PCDzm.js";import"./preload-helper-ChvNP4Pl.js";import"./Table-CTe43hEg.js";import"./index-BIdRQM2S.js";import"./Dialog-CkUz6oIc.js";import"./cross-Bj1Rnssl.js";import"./svgIconContainer-BWrjI0N2.js";import"./useBaseUiId-B2KTelTM.js";import"./InternalBackdrop-DZCFtxK4.js";import"./composite-CgNTf1JJ.js";import"./index-xXO27wOh.js";import"./index-OkCRkK7-.js";import"./index-CIIKdpni.js";import"./useEventCallback-CgTz_qfp.js";import"./SkeletonBar-BoUHhX8q.js";import"./LoadingCell-CH7OlUFO.js";import"./ColumnConfigDialog-DmW2Vozj.js";import"./DraggableList-BU-lHS4a.js";import"./search-G6EfpRFi.js";import"./Input-Cq0Ol3YB.js";import"./useControlled-BlU5vlUe.js";import"./Button-Cq8nZ_ey.js";import"./small-cross-CZEI8mhu.js";import"./ActionButton-BCIDvNWh.js";import"./Checkbox-DOfZvhoo.js";import"./useValueChanged-I3JyBt64.js";import"./CollapsiblePanel-Chcrgg3J.js";import"./MultiColumnSortDialog-IfxNGyXy.js";import"./MenuTrigger-Dc4-fsw5.js";import"./CompositeItem-Bisu6D-H.js";import"./ToolbarRootContext-DNlCsrGQ.js";import"./getDisabledMountTransitionStyles-Cj27Wpwi.js";import"./getPseudoElementBounds-Bcz462pH.js";import"./chevron-down-BWfpQhPj.js";import"./index-BgdQNo10.js";import"./error-BeLhzW1q.js";import"./BaseCbacBanner-D-n0oCTz.js";import"./makeExternalStore-DmTWPGlO.js";import"./Tooltip-DNNmdmtX.js";import"./PopoverPopup-BoVZQgTK.js";import"./debounce-BBFO8SUe.js";import"./tick-sRemk3LV.js";import"./DropdownField-CstOe1Ir.js";import"./isEqual-BEtTnJ8J.js";import"./withOsdkMetrics-5P2QGy1j.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
