import{j as r}from"./iframe-00do0GFe.js";import{O as b}from"./object-table-DiR-FaNs.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-GBvjb3rf.js";import{u as g}from"./useOsdkClient-0rxWFgg-.js";import"./preload-helper-BybtXQP0.js";import"./Table-BKn5_CcO.js";import"./index-BGd643c2.js";import"./Dialog-DZpgZl9y.js";import"./cross-nwDujSFV.js";import"./svgIconContainer-CFcIosnA.js";import"./useBaseUiId-C50NdykD.js";import"./InternalBackdrop-XKvPUnKv.js";import"./composite-CGwb3jqo.js";import"./index-DK-iGYU_.js";import"./index-ClkWJhJu.js";import"./index-BF61uIwD.js";import"./useEventCallback-CGFFFkW3.js";import"./SkeletonBar-DOhvYthq.js";import"./LoadingCell-BhVc_Ot-.js";import"./ColumnConfigDialog-CBPh_sEx.js";import"./DraggableList-BRKzpJry.js";import"./search-DAKi-R5m.js";import"./Input-CRsXFG3m.js";import"./useControlled-DE2hx_aJ.js";import"./Button-yWAqZOyg.js";import"./small-cross-kY3MxGtM.js";import"./ActionButton-CJdA5_XP.js";import"./Checkbox-Bjy1d07i.js";import"./useValueChanged-FfQ9ockF.js";import"./CollapsiblePanel-Dp6K32AY.js";import"./MultiColumnSortDialog-DGIUavBa.js";import"./MenuTrigger-lziekmwX.js";import"./CompositeItem-Ds6yjvWK.js";import"./ToolbarRootContext-Ck2kYzW4.js";import"./getDisabledMountTransitionStyles-B8mp5Bgl.js";import"./getPseudoElementBounds-DbGLAZdP.js";import"./chevron-down-CuokWr8C.js";import"./index-zNKGDfNB.js";import"./error-7ouMyDWT.js";import"./BaseCbacBanner-DvOVDYvy.js";import"./makeExternalStore-DtGkD75o.js";import"./Tooltip-9gQx4epj.js";import"./PopoverPopup-CgcJU5ml.js";import"./debounce-CxsjR9Qp.js";import"./tick-ClP-zKk3.js";import"./DropdownField-f3ouS_Ve.js";import"./isEqual-PkqQWSMC.js";import"./withOsdkMetrics-D58QOMrM.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
