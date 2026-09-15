import{j as r}from"./iframe-CfT8oSzl.js";import{O as b}from"./object-table-D-zdFh4O.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BPVQCCdy.js";import{u as g}from"./useOsdkClient-CeYb4mIi.js";import"./preload-helper-Ck2G3lhL.js";import"./Table-G9pXBYqy.js";import"./index-BpawNvzq.js";import"./Dialog-CdzqfLeL.js";import"./cross-BDq3cq5E.js";import"./svgIconContainer-ya4CV7y2.js";import"./useBaseUiId-D4xhi0G6.js";import"./InternalBackdrop-DbdxTKbh.js";import"./composite-CCZTgGc-.js";import"./index-DvoLa0A4.js";import"./index-UxUlnqFt.js";import"./index-ClAIatsn.js";import"./useEventCallback-CSvW4qDl.js";import"./SkeletonBar-CQtM8ssv.js";import"./LoadingCell-efDHe_sF.js";import"./ColumnConfigDialog-LKXN3hyw.js";import"./DraggableList-D1pXLlwE.js";import"./search-CeTlWaJs.js";import"./Input-frvZccMj.js";import"./useControlled-C4oVQ_PT.js";import"./Button-RnGlAnHy.js";import"./small-cross-B1GJDPeO.js";import"./ActionButton-Ce-MUeV5.js";import"./Checkbox-BsFDLi46.js";import"./useValueChanged-D06smhY0.js";import"./CollapsiblePanel-CHkL4bVQ.js";import"./MultiColumnSortDialog-DvaS2aUX.js";import"./MenuTrigger-CSaaZI9V.js";import"./CompositeItem-B7Z5vov3.js";import"./ToolbarRootContext-CiSOROzl.js";import"./getDisabledMountTransitionStyles-DSlo8AiB.js";import"./getPseudoElementBounds-B5D0r4zv.js";import"./chevron-down-hfFWURIG.js";import"./index-Ajqy3tvo.js";import"./error-CTOxDA6S.js";import"./BaseCbacBanner-D5RmPoWA.js";import"./makeExternalStore-Bq85hlSU.js";import"./Tooltip-DolSoQfn.js";import"./PopoverPopup-D5R3Wt8N.js";import"./debounce-eSR8WnsM.js";import"./tick-3Sqmfbum.js";import"./DropdownField-cTMj70TI.js";import"./isEqual-D62eLK_x.js";import"./withOsdkMetrics-BzsRVIUg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
