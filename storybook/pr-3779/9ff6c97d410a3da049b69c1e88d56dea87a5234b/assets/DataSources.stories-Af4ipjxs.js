import{j as r}from"./iframe-BefR0BAx.js";import{O as b}from"./object-table-Cl1cxBhi.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DhBo_CFM.js";import{u as g}from"./useOsdkClient-C3lcOu7D.js";import"./preload-helper-D_muUgZZ.js";import"./Table-Bbsv4uan.js";import"./index-DI2v9xVU.js";import"./Dialog-D2CNWkJE.js";import"./cross-BihP7IYO.js";import"./svgIconContainer-CcaI0s95.js";import"./useBaseUiId-BnEhW10T.js";import"./InternalBackdrop-BaYjef9L.js";import"./composite-3yd-dfOO.js";import"./index-B0uyT0kH.js";import"./index-DHh2SPX3.js";import"./index-CmGKfrHw.js";import"./useEventCallback-RE9J9fb3.js";import"./SkeletonBar-BQEuDBTT.js";import"./LoadingCell-a1YjlDon.js";import"./ColumnConfigDialog-D8-Mz4_c.js";import"./DraggableList-8q3mEk2N.js";import"./search-BY8LPeq_.js";import"./Input-BgIQD_Ke.js";import"./useControlled-B0OAP1sO.js";import"./isEqual-DCCK4WBY.js";import"./isObject-DIUgRmYP.js";import"./Button-DI1B5wsL.js";import"./ActionButton-BTr_jfHn.js";import"./Checkbox-Dlu869_M.js";import"./useValueChanged-gDR6Oi3v.js";import"./CollapsiblePanel-DlAGvVsT.js";import"./MultiColumnSortDialog-B98AyuUx.js";import"./MenuTrigger-BG0GJahU.js";import"./CompositeItem-Bslbfoq2.js";import"./ToolbarRootContext-Bfg2cH-3.js";import"./getDisabledMountTransitionStyles-D-v5okLS.js";import"./getPseudoElementBounds-B_WYvVxH.js";import"./chevron-down-BfV0Otca.js";import"./index-CmoAwC0-.js";import"./error-DE1G-33b.js";import"./BaseCbacBanner-BMG75jme.js";import"./makeExternalStore-BWxrZDxx.js";import"./Tooltip-Dt-Twhia.js";import"./PopoverPopup-Bc50mxvp.js";import"./toNumber-4hosA8bD.js";import"./tick-CsCiMB1v.js";import"./DropdownField-CXf1ZULm.js";import"./withOsdkMetrics-BGhvxxIj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
