import{j as r}from"./iframe-DHBngpjq.js";import{O as b}from"./object-table-B-4Z36fW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CJVY0eTz.js";import{u as g}from"./useOsdkClient-BEYvK_M3.js";import"./preload-helper-CDXIiz1j.js";import"./Table-CAt6E8NK.js";import"./index-By-FRoq9.js";import"./Dialog-DTy86Hr1.js";import"./cross-DvvrZ3YV.js";import"./svgIconContainer-BAywG5PI.js";import"./useBaseUiId-CzQMC21v.js";import"./InternalBackdrop-B-hQyGJ7.js";import"./composite-uu2-UFVd.js";import"./index-CTfQVRtO.js";import"./index-DVFITc1l.js";import"./index-DyyHxHFI.js";import"./useEventCallback-CEjVJsJU.js";import"./SkeletonBar-Bx3kLW2f.js";import"./LoadingCell-F_Yvkiqb.js";import"./ColumnConfigDialog-BbX1YfOb.js";import"./DraggableList-CmuSJnA2.js";import"./search-CiPmNh0i.js";import"./Input-Br87LXH7.js";import"./useControlled-BLsTwB3H.js";import"./Button-HCu8xw6G.js";import"./small-cross-D3Sp72qo.js";import"./ActionButton-DvzRdD4b.js";import"./Checkbox-CtcVdKF4.js";import"./useValueChanged-DcmPguL4.js";import"./CollapsiblePanel-BFOnfV46.js";import"./MultiColumnSortDialog-DscDt943.js";import"./MenuTrigger-DFB9LyKR.js";import"./CompositeItem-CbJoHss2.js";import"./ToolbarRootContext-B_eHvjGz.js";import"./getDisabledMountTransitionStyles-BaYxFf8Q.js";import"./getPseudoElementBounds-Cbeakq3j.js";import"./chevron-down-D5Z6pf30.js";import"./index-BTrtZCFe.js";import"./error-CH1gecQ4.js";import"./BaseCbacBanner-Dx1BBmkJ.js";import"./makeExternalStore-CSHIV8LM.js";import"./Tooltip-Cb5l8A2K.js";import"./isObject-BGFfVhib.js";import"./debounce-1_s8xuqw.js";import"./tick-pBtnCrq_.js";import"./DropdownField-DyD41Pi-.js";import"./isEqual-COgumFBZ.js";import"./_baseIsEqual-t-rM1bL4.js";import"./withOsdkMetrics-DVTP8TQr.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
