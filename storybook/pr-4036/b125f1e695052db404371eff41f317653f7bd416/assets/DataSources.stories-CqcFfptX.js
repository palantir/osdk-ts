import{j as r}from"./iframe-BHoRCdfJ.js";import{O as b}from"./object-table-BT4epL3E.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C5X4YiAF.js";import{u as g}from"./useOsdkClient-CKwE1qLu.js";import"./preload-helper-PcfL1ZgJ.js";import"./Table-BogWTrQo.js";import"./index-CRbMuko2.js";import"./Dialog-CtEDH1Qe.js";import"./cross-o6c578IU.js";import"./svgIconContainer-Ddyj85do.js";import"./useBaseUiId-B3Ti1xga.js";import"./InternalBackdrop-C3Nd8T8u.js";import"./composite-DA-yFNZT.js";import"./index-KzV2K_a8.js";import"./index-BqxqbHVw.js";import"./index-1ksykTop.js";import"./useEventCallback-DvYBJvtj.js";import"./SkeletonBar-2AkWt2iD.js";import"./LoadingCell-BAYgpWEj.js";import"./ColumnConfigDialog-tSFHX2X-.js";import"./DraggableList-dOoeduXW.js";import"./search-CzBp321S.js";import"./Input-RRy85S6o.js";import"./useControlled-CXIbMiD_.js";import"./Button-GIqq_QaR.js";import"./small-cross-CbXKVrFp.js";import"./ActionButton-DaKwbCzu.js";import"./Checkbox-zBVDZpOJ.js";import"./useValueChanged-DU5TUzSb.js";import"./CollapsiblePanel-DeE2lA1F.js";import"./MultiColumnSortDialog-DxH9yAog.js";import"./MenuTrigger-Df17ZxAj.js";import"./CompositeItem-C8lI6v5m.js";import"./ToolbarRootContext-VQGHIcMO.js";import"./getDisabledMountTransitionStyles-BazN2qJZ.js";import"./getPseudoElementBounds-BKvO9qL5.js";import"./chevron-down-DCJDhdZ9.js";import"./index-CQXq0Q8i.js";import"./error-D1WxR2nX.js";import"./BaseCbacBanner-CmoBi3TT.js";import"./makeExternalStore-_J7Y5wzS.js";import"./Tooltip-4dHsdJ7I.js";import"./PopoverPopup-Cu_vPmGM.js";import"./debounce-Bv9XGbP2.js";import"./tick-C9oldqOI.js";import"./DropdownField-C17krznx.js";import"./isEqual-ld1BIUQT.js";import"./withOsdkMetrics-DiUqqX9-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
