import{j as r}from"./iframe-BqmsmROC.js";import{O as b}from"./object-table-BmRPizOX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-_MQxvyjO.js";import{u as g}from"./useOsdkClient-D-sadKnS.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CgrDiYbC.js";import"./index-DE_4plrx.js";import"./Dialog-uksgf5Bf.js";import"./cross-DfmyAU8B.js";import"./svgIconContainer-DwHFgry-.js";import"./useBaseUiId-C8C4OFgB.js";import"./InternalBackdrop-Cy1aLXhF.js";import"./composite-CiV_UR9j.js";import"./index-DFyqPKTO.js";import"./index-CWE85mCR.js";import"./index-Bey-y-w6.js";import"./useEventCallback-fsvAZTzq.js";import"./SkeletonBar-CniGFXhP.js";import"./LoadingCell-rXQWvxCs.js";import"./ColumnConfigDialog-BBlD2g_8.js";import"./DraggableList-BEFUbznw.js";import"./search-BBGycv-1.js";import"./Input-C3AYJYVI.js";import"./useControlled-DXWlWATE.js";import"./Button-zbZf0J9i.js";import"./small-cross-Bk6bCekb.js";import"./ActionButton-Lq8BIY2Z.js";import"./Checkbox-CPgQg4fN.js";import"./useValueChanged-BkcQ3FBO.js";import"./CollapsiblePanel-VNdFnwVY.js";import"./MultiColumnSortDialog-BrcQy9AT.js";import"./MenuTrigger-DN14xV_t.js";import"./CompositeItem-C1DMYRuJ.js";import"./ToolbarRootContext--CuPwDjZ.js";import"./getDisabledMountTransitionStyles-yrOwfUkE.js";import"./getPseudoElementBounds-CbKhuRFY.js";import"./chevron-down-s5zpD1xF.js";import"./index-B0TE2znt.js";import"./error-DKXNqTp4.js";import"./BaseCbacBanner-N_ry9LS-.js";import"./makeExternalStore-jkqHHCtl.js";import"./Tooltip-DHQwjn4a.js";import"./PopoverPopup-k-Hpnjxy.js";import"./debounce-DL2qpSTk.js";import"./tick-BOnCrQFY.js";import"./DropdownField-8ctGfF9y.js";import"./isEqual-Bzk8R1VE.js";import"./withOsdkMetrics-DVk1cW14.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
