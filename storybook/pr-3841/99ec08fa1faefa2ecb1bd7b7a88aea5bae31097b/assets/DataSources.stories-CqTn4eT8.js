import{j as r}from"./iframe-B9azDZlz.js";import{O as b}from"./object-table-QQXxCQbo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-sqeqaI0u.js";import{u as g}from"./useOsdkClient-DfxUO55U.js";import"./preload-helper-Bm0hX83b.js";import"./Table-BcdhfCUI.js";import"./index-Gnn4IAPK.js";import"./Dialog-BL5Xt88J.js";import"./cross-DH7Phj5l.js";import"./svgIconContainer-BSqh8zzQ.js";import"./useBaseUiId-B5AQ3HFN.js";import"./InternalBackdrop-CVYwGey5.js";import"./composite-DG0rNHFY.js";import"./index-DG7p6B41.js";import"./index-D0fYYncd.js";import"./index-0NY8KgBX.js";import"./useEventCallback-CKNYTi7U.js";import"./SkeletonBar-QxJNYOQi.js";import"./LoadingCell-CkafHKo1.js";import"./ColumnConfigDialog-CmRx7Ibx.js";import"./DraggableList-Oqv7j_Rf.js";import"./search-D-Pd3u3n.js";import"./Input-6Xi2oRl5.js";import"./useControlled-CIIQ6AdN.js";import"./Button-ByY1VR_F.js";import"./small-cross-BErTRTeO.js";import"./ActionButton-CtxrjN50.js";import"./Checkbox-COQa-sEG.js";import"./useValueChanged-YxrolQP8.js";import"./CollapsiblePanel-BWH5sgwq.js";import"./MultiColumnSortDialog-d0_k3Eoy.js";import"./MenuTrigger-BAknza5f.js";import"./CompositeItem-23Xg-PrO.js";import"./ToolbarRootContext-H0Ylxwtf.js";import"./getDisabledMountTransitionStyles-D26pQLY4.js";import"./getPseudoElementBounds-DOsvVJTW.js";import"./chevron-down-CDhI7Cg9.js";import"./index-BqVQ5c0B.js";import"./error-B89KPxvz.js";import"./BaseCbacBanner-C61KBizI.js";import"./makeExternalStore-Sb074CVY.js";import"./Tooltip-BiRF5TgT.js";import"./PopoverPopup-BoIWrT_I.js";import"./debounce-B2RJoylZ.js";import"./tick-BDEOlM-s.js";import"./DropdownField-B0WGKaAs.js";import"./isEqual-CcChNOPP.js";import"./withOsdkMetrics-BCygmhUI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
