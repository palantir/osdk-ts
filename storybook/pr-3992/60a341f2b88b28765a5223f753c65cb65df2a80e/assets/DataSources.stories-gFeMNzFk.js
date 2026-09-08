import{j as r}from"./iframe-BOYcc0dJ.js";import{O as b}from"./object-table-DNOgP_yp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DrDufXEx.js";import{u as g}from"./useOsdkClient-ByhMOOB7.js";import"./preload-helper-BnWf8j3v.js";import"./Table-BPr2wWW7.js";import"./index-Yg2EcgVZ.js";import"./Dialog-uqbm0xGp.js";import"./cross-M1Qm_DTM.js";import"./svgIconContainer-dI8qqoMC.js";import"./useBaseUiId-DX9ZiXGI.js";import"./InternalBackdrop-BY0lRnfR.js";import"./composite-D8na-rSh.js";import"./index-BkqK32VC.js";import"./index-CCBfJ9eW.js";import"./index-C7Thu-2O.js";import"./useEventCallback-BVAeoTDg.js";import"./SkeletonBar-DqbjZsF-.js";import"./LoadingCell-DTpk0hTa.js";import"./ColumnConfigDialog-BVTIv4zw.js";import"./DraggableList-C30YVydB.js";import"./search-BW9zSgLT.js";import"./Input-BJWiKc9C.js";import"./useControlled-D-ZDbicW.js";import"./Button-hF353HMT.js";import"./small-cross-CF-XSTuz.js";import"./ActionButton-BfTy6GeE.js";import"./Checkbox-CGB2f6cn.js";import"./useValueChanged-h230bsbd.js";import"./CollapsiblePanel-Sxqk5N-n.js";import"./MultiColumnSortDialog-BEP6YjUS.js";import"./MenuTrigger-BpWk4Win.js";import"./CompositeItem-Bx5eT0s8.js";import"./ToolbarRootContext-Do3BrLln.js";import"./getDisabledMountTransitionStyles-BbJt8_w5.js";import"./getPseudoElementBounds-DV4HYuIT.js";import"./chevron-down-DcL5hgyv.js";import"./index-BDkH7Rg4.js";import"./error-JJ7_ntNs.js";import"./BaseCbacBanner-DDh3O6m0.js";import"./makeExternalStore-Cl0TwftQ.js";import"./Tooltip-ERPEKtIR.js";import"./PopoverPopup-PDZ-29T5.js";import"./debounce-BmvCkScQ.js";import"./tick-DMFuzZwx.js";import"./DropdownField-BBsngSoK.js";import"./isEqual-ChJ06NMp.js";import"./withOsdkMetrics-BIq6FQjv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
