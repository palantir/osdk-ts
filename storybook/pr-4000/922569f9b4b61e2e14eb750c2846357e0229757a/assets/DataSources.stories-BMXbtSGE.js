import{j as r}from"./iframe-BBZCzStV.js";import{O as b}from"./object-table-DapV3Rol.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dar-yLib.js";import{u as g}from"./useOsdkClient-qOAfm0EP.js";import"./preload-helper-5SQDyWdl.js";import"./Table-fxlaPCGo.js";import"./index-B0mBcXI4.js";import"./Dialog-B-85Rx-2.js";import"./cross-CPvMVENn.js";import"./svgIconContainer-DfBgJD9-.js";import"./useBaseUiId-B2Dwi3UQ.js";import"./InternalBackdrop-B_1kGoJ6.js";import"./composite-CFasADcm.js";import"./index-Cj4Q5m-x.js";import"./index-V3B_uiL2.js";import"./index-Csh22FK0.js";import"./useEventCallback-C7wdVJUu.js";import"./SkeletonBar-Dh6u025G.js";import"./LoadingCell-CXYGJFXm.js";import"./ColumnConfigDialog-CV8tcLtB.js";import"./DraggableList-ed1YuQHx.js";import"./search-vc9aoGpm.js";import"./Input-CSnQRyFu.js";import"./useControlled-DoPklQtk.js";import"./Button-CfbDmY7F.js";import"./small-cross-DTHtoiVl.js";import"./ActionButton-NPe1j-Pf.js";import"./Checkbox-BBvJmZ_C.js";import"./useValueChanged-DDicrYhc.js";import"./CollapsiblePanel-DRW0CG7D.js";import"./MultiColumnSortDialog-uU-I92Wo.js";import"./MenuTrigger-CcvPK_Ol.js";import"./CompositeItem-DCNZBIgo.js";import"./ToolbarRootContext-BJ5gq2Ug.js";import"./getDisabledMountTransitionStyles-p7s1v2Wq.js";import"./getPseudoElementBounds-CGyVBiW9.js";import"./chevron-down-CMFHrqJp.js";import"./index-DbFsgQOw.js";import"./error-DTmGvXOz.js";import"./BaseCbacBanner-CQos4IsY.js";import"./makeExternalStore-C0iVHY1V.js";import"./Tooltip-CIld4EMB.js";import"./PopoverPopup-Ct6679Cx.js";import"./debounce-CV2RI2D0.js";import"./tick-BCDmZou0.js";import"./DropdownField-CcyuWoJs.js";import"./isEqual-QmNJKBr8.js";import"./withOsdkMetrics-mfymYHOu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
