import{j as r}from"./iframe-CGQ3pPyN.js";import{O as b}from"./object-table-DKrb4-FI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-4yS_Km1z.js";import{u as g}from"./useOsdkClient-onJqe-G0.js";import"./preload-helper-B0d8w61e.js";import"./Table-DoBnIyhe.js";import"./index-D5ulmSp4.js";import"./Dialog-Do0260gu.js";import"./cross-CaCixUkz.js";import"./svgIconContainer-PA2ZuagG.js";import"./useBaseUiId-D18qpYhV.js";import"./InternalBackdrop-DjO1M3j9.js";import"./composite-DdxnokEw.js";import"./index-DCTecv-n.js";import"./index-D6WjugAr.js";import"./index-BHKY8INM.js";import"./useEventCallback-BwYR426g.js";import"./SkeletonBar-DqORL0HU.js";import"./LoadingCell-DjGijCZw.js";import"./ColumnConfigDialog-C2jkpvMm.js";import"./DraggableList-Dz-wLxSF.js";import"./search-CFopY9hG.js";import"./Input-BT1Rp4mr.js";import"./useControlled-C3Ct7rRf.js";import"./isEqual-Ciq06rbL.js";import"./isObject-Dy21rycA.js";import"./Button-BXSTotUw.js";import"./ActionButton-C4bCZpUy.js";import"./Checkbox-COHiMF3O.js";import"./useValueChanged-CQYNvT_3.js";import"./CollapsiblePanel-BEauxQqy.js";import"./MultiColumnSortDialog-JeiG0Daz.js";import"./MenuTrigger-BUPHpPWe.js";import"./CompositeItem--3EFQsH0.js";import"./ToolbarRootContext-KxLfRu1W.js";import"./getDisabledMountTransitionStyles-D9Sj_mnF.js";import"./getPseudoElementBounds-inYkQB6U.js";import"./chevron-down-psR5H-K5.js";import"./index-D4-y_jb8.js";import"./error-DEEH7noa.js";import"./BaseCbacBanner-BHOTaf-T.js";import"./makeExternalStore-l1enNhmQ.js";import"./Tooltip-D2rI2oj9.js";import"./PopoverPopup-CCxZUCV2.js";import"./toNumber-D_eyv4TQ.js";import"./tick-BO5FA_vb.js";import"./DropdownField-BJGMhAE7.js";import"./withOsdkMetrics-13L2_Pyz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
