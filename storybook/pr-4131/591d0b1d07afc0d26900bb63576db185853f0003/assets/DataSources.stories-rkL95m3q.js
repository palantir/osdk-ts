import{j as r}from"./iframe-DHfhGWcA.js";import{O as b}from"./object-table-OpoS1B5z.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-EQaSVIAh.js";import{u as g}from"./useOsdkClient-C7hhAH6C.js";import"./preload-helper-D14EGrrK.js";import"./Table-BBNuKozg.js";import"./index-CCF9MEs2.js";import"./Dialog-C7_tmS0A.js";import"./cross-Dj-fC_ys.js";import"./svgIconContainer-BaEBe_Ou.js";import"./useBaseUiId-BATl1CQr.js";import"./InternalBackdrop-Cg_x7WdZ.js";import"./composite-DbTWPUQ9.js";import"./index-Blf5so-r.js";import"./index-C5pfUNxc.js";import"./index-C0hgrkVR.js";import"./useEventCallback-CxgY780e.js";import"./SkeletonBar-K08P4YrG.js";import"./LoadingCell-Cqx9pCQ0.js";import"./ColumnConfigDialog-BqPXpyZ-.js";import"./DraggableList-8UAXAnVw.js";import"./search-DWYoVV2s.js";import"./Input-zMxDvO-I.js";import"./useControlled-Bxerh3bt.js";import"./Button-Dj3Gc0R8.js";import"./small-cross-oBABr6h6.js";import"./ActionButton-w10zUXoM.js";import"./Checkbox-BH1RcZqr.js";import"./useValueChanged-Bsu0ebqY.js";import"./CollapsiblePanel-tIBbRKCQ.js";import"./MultiColumnSortDialog-C97PbmGP.js";import"./MenuTrigger-C81rcI3P.js";import"./CompositeItem-CLlZ6Yb0.js";import"./ToolbarRootContext-erU_8-54.js";import"./getDisabledMountTransitionStyles-C5UuzqSY.js";import"./getPseudoElementBounds-D6EOINUP.js";import"./chevron-down-DR6eEQC2.js";import"./index-DFvQFeWQ.js";import"./error-CAZmovtj.js";import"./BaseCbacBanner-BS60J-Cr.js";import"./makeExternalStore-C1Pxa9L5.js";import"./Tooltip-nGSUir4H.js";import"./PopoverPopup-CLeXoVr6.js";import"./debounce-Di14C5je.js";import"./tick-BOovpBqZ.js";import"./DropdownField-BwayLWA9.js";import"./isEqual-8UhBnCWP.js";import"./withOsdkMetrics-DU0hnwkS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
