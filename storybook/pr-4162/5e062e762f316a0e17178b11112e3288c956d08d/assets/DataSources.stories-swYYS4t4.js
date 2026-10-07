import{j as r}from"./iframe-Cidbd9U_.js";import{O as b}from"./object-table-DOYUvVE2.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-XP5oSCNf.js";import{u as g}from"./useOsdkClient-BgKg3-oj.js";import"./preload-helper-CDZ9ml3u.js";import"./Table-Cm9n3Fcz.js";import"./index-DHtVl5lr.js";import"./Dialog-Cc422kNb.js";import"./cross-BTGq5cWg.js";import"./svgIconContainer-BRrBCQQQ.js";import"./useBaseUiId-qBbflN1T.js";import"./InternalBackdrop-CRTpZ3Mc.js";import"./composite-wQgj7E4E.js";import"./index-CvuA1U9Q.js";import"./index-B4TXSL8y.js";import"./index-ZSi5hxUD.js";import"./useEventCallback-CO_HzDJy.js";import"./SkeletonBar-DL5xvDTN.js";import"./LoadingCell-BXhBEBYw.js";import"./ColumnConfigDialog-O6Wlhrjg.js";import"./DraggableList-CZhlEIQW.js";import"./search-d8u8t1Cm.js";import"./Input-DOViwQP-.js";import"./useControlled-CD8kHrNC.js";import"./Button-B5k9EJ-k.js";import"./small-cross-DlRvHu10.js";import"./ActionButton-CipDVnp9.js";import"./Checkbox-BD3PmDNr.js";import"./useValueChanged-DYHqJuk7.js";import"./CollapsiblePanel-CDei_9JY.js";import"./MultiColumnSortDialog-MAcg3lHH.js";import"./MenuTrigger-DZEXzv0N.js";import"./CompositeItem-RBkj06fN.js";import"./ToolbarRootContext-CFGHeG8t.js";import"./getDisabledMountTransitionStyles-DeD1w0n_.js";import"./getPseudoElementBounds-BvCzK4YA.js";import"./chevron-down-gf2GhVLl.js";import"./index-CSBG_Ogr.js";import"./error-CLTZOyUS.js";import"./BaseCbacBanner-BadiuEUJ.js";import"./makeExternalStore-Cw6sOONN.js";import"./Tooltip-DjjgX0Td.js";import"./PopoverPopup-Bs69cHyF.js";import"./debounce-DvHpY4Ou.js";import"./tick-C2hQsqLU.js";import"./DropdownField-DiOH_8ae.js";import"./isEqual-L9bITeX8.js";import"./withOsdkMetrics-CFH71nhb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
