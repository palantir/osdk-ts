import{j as r}from"./iframe-ByH6cwcC.js";import{O as b}from"./object-table-vIIHUQVm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BrR33hK_.js";import{u as g}from"./useOsdkClient-BInBbtyf.js";import"./preload-helper-CTHNm7Zf.js";import"./Table-UkNmrvXR.js";import"./index-BffOjmGP.js";import"./Dialog-DPTNFvmX.js";import"./cross-CUNO9jlI.js";import"./svgIconContainer-C59hMuAg.js";import"./useBaseUiId-rCCQLDzE.js";import"./InternalBackdrop-BOvoVjdH.js";import"./composite-DsmzMxzf.js";import"./index-N0N9SzuH.js";import"./index-B9rySOnb.js";import"./index-DwSNPP4c.js";import"./useEventCallback-5-9ioIJ9.js";import"./SkeletonBar-DH4wpQvw.js";import"./LoadingCell-BHyVKnhe.js";import"./ColumnConfigDialog-CDpP6W2F.js";import"./DraggableList-nivrjWVF.js";import"./search-Do_ND450.js";import"./Input-BQqKdvxX.js";import"./useControlled-CiJux5fd.js";import"./Button-CPqebLlQ.js";import"./small-cross-Cax6JCvi.js";import"./ActionButton-CSu9cdVs.js";import"./Checkbox-B0BvBwx1.js";import"./useValueChanged-CR5RlyXy.js";import"./CollapsiblePanel-CxxueGOW.js";import"./MultiColumnSortDialog-BhxHso4-.js";import"./MenuTrigger-Da8FkEAr.js";import"./CompositeItem-BAQU7622.js";import"./ToolbarRootContext-BlxbtcnM.js";import"./getDisabledMountTransitionStyles-DT4C1Ry1.js";import"./getPseudoElementBounds-hG2SWQQo.js";import"./chevron-down-Dat11n9w.js";import"./index-OS6ALw7f.js";import"./error-Di2DxefB.js";import"./BaseCbacBanner-BXetmlOi.js";import"./makeExternalStore-DxT_f6S6.js";import"./Tooltip-D62erufF.js";import"./PopoverPopup-BCbNGrfj.js";import"./debounce-CGwOWugm.js";import"./tick-abIWECA9.js";import"./DropdownField-BLckusfA.js";import"./isEqual-t7rQRmdo.js";import"./withOsdkMetrics-DSJJhCCa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
