import{j as r}from"./iframe-BPFPjQfN.js";import{O as b}from"./object-table-Y0mlN0Vb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DdEwH1uq.js";import{u as g}from"./useOsdkClient-e-CK1Pug.js";import"./preload-helper-BS5sFlIZ.js";import"./Table-CguB3Bpq.js";import"./index-DLsuK50b.js";import"./Dialog-Dg-1TYJ4.js";import"./cross-jacAbTr1.js";import"./svgIconContainer-BCrLikms.js";import"./useBaseUiId-XR0mowR0.js";import"./InternalBackdrop-Df1he87e.js";import"./composite--6cSo0WV.js";import"./index-B2XioIrj.js";import"./index-BOMANPh2.js";import"./index-Biydlrf3.js";import"./useEventCallback-DNQjSEKX.js";import"./SkeletonBar-CMuVE2LV.js";import"./LoadingCell-BlrvphZB.js";import"./ColumnConfigDialog-BbWkPFl5.js";import"./DraggableList-BUUF-S7z.js";import"./search-CZtJ4QjI.js";import"./Input-Cbr4DxDr.js";import"./useControlled-DWmknCjz.js";import"./Button-MukxU7Us.js";import"./small-cross-yjorOgrv.js";import"./ActionButton-CQmjB9pW.js";import"./Checkbox-DfSpVE3t.js";import"./useValueChanged-CuY1VjDq.js";import"./CollapsiblePanel-DYgAn-VX.js";import"./MultiColumnSortDialog-DgiO0ntJ.js";import"./MenuTrigger-CGQOXJie.js";import"./CompositeItem-BU1kZ6Zk.js";import"./ToolbarRootContext-DvfgzgjU.js";import"./getDisabledMountTransitionStyles-BoepTDS0.js";import"./getPseudoElementBounds-CV-CmjZt.js";import"./chevron-down-U37QTCrW.js";import"./index-D2ej1Jb2.js";import"./error-DEs_Iieb.js";import"./BaseCbacBanner-D18zz_iP.js";import"./makeExternalStore-BJ259EIr.js";import"./Tooltip-3bmH_QUq.js";import"./PopoverPopup-Bn_qWbD4.js";import"./debounce-CINcFD0i.js";import"./tick-DSAjIfQR.js";import"./DropdownField-Bu6RRAh2.js";import"./isEqual-DcRXgc-e.js";import"./withOsdkMetrics-DyIxSijK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
