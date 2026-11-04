import{j as r}from"./iframe-BrmQZ3gv.js";import{O as b}from"./object-table-CEcHHP_q.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CJZSr8Vw.js";import{u as g}from"./useOsdkClient-DMIbxZRi.js";import"./preload-helper-bFlMnFhE.js";import"./Table-DnUpQkRl.js";import"./index-BukqnFRF.js";import"./Dialog-C7vXG1dO.js";import"./cross-CyQ2LR1N.js";import"./svgIconContainer-1ZxcqWPt.js";import"./useBaseUiId-DOEJb2YQ.js";import"./InternalBackdrop-B6fWmh38.js";import"./composite-CToHHLnK.js";import"./index-DrxXiExk.js";import"./index-BHysiYNZ.js";import"./index-PCKTTVVz.js";import"./useEventCallback-D7yysNmp.js";import"./SkeletonBar-Bnl4zbTE.js";import"./LoadingCell-645SZiNQ.js";import"./ColumnConfigDialog-BOerTDNx.js";import"./DraggableList-VQAbVc9N.js";import"./search-3yVqV9Ja.js";import"./Input-CJbUQK7W.js";import"./useControlled-BKcLfL-m.js";import"./Button-DFW8ZRr_.js";import"./small-cross-DWB62PqX.js";import"./ActionButton-Cvda-cXU.js";import"./Checkbox-D2C-eWc7.js";import"./useValueChanged-B2eN2qPg.js";import"./CollapsiblePanel-C6bZdZ49.js";import"./MultiColumnSortDialog-DRMFjLTN.js";import"./MenuTrigger-CuPbLnV7.js";import"./CompositeItem-Cj9sjJEA.js";import"./ToolbarRootContext-DVJYWBBz.js";import"./getDisabledMountTransitionStyles-oZQkDeF-.js";import"./getPseudoElementBounds-GhphztYg.js";import"./chevron-down-DjoNZ0eU.js";import"./index-Lz8g2hRL.js";import"./error-BoTJC5k7.js";import"./BaseCbacBanner-Df4PMHpV.js";import"./makeExternalStore-B5wDpA-S.js";import"./Tooltip-B67VaBcv.js";import"./PopoverPopup-CsNA8h91.js";import"./debounce-DktWngHR.js";import"./tick-DQnQI0KH.js";import"./DropdownField-BDpM5rcW.js";import"./isEqual-DRj2__AA.js";import"./withOsdkMetrics-CjsWDT1I.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
