import{j as r}from"./iframe-GU9uuCxz.js";import{O as b}from"./object-table-D1ni6jd4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C-ZSTDQv.js";import{u as g}from"./useOsdkClient-Cw50fjDU.js";import"./preload-helper-DiuBXggc.js";import"./Table-Bfyuy1vX.js";import"./index-wbqNQUCN.js";import"./Dialog-D9fiqstc.js";import"./cross-lUtkcXvq.js";import"./svgIconContainer-lMVp7Q5D.js";import"./useBaseUiId-izgrlbm8.js";import"./InternalBackdrop-JyM_yboG.js";import"./composite-D5bxH43Y.js";import"./index-BiQmph9i.js";import"./index-CWdNU6XI.js";import"./useEventCallback-DbxWTdO3.js";import"./SkeletonBar-DsaZzNM8.js";import"./LoadingCell-oN6k6fLQ.js";import"./ColumnConfigDialog-DuU5N0AY.js";import"./DraggableList-ynrUIkKs.js";import"./search-BwM3LpYv.js";import"./Input-D7wHTW3A.js";import"./useControlled-DeKlo4Fr.js";import"./Button-BfmdkMAB.js";import"./small-cross-CD2Qn0fR.js";import"./ActionButton-1COA3Sdw.js";import"./Checkbox-nA6cG1JI.js";import"./useValueChanged-DwRKotGN.js";import"./CollapsiblePanel-BW9VYb1e.js";import"./MultiColumnSortDialog-C4P1ac3Y.js";import"./MenuTrigger-DvRL7yRT.js";import"./CompositeItem-Cx8rt4Os.js";import"./ToolbarRootContext-CAN5koek.js";import"./getDisabledMountTransitionStyles-C9feCk9b.js";import"./getPseudoElementBounds-D5nIJXlV.js";import"./chevron-down-TCTUxLeS.js";import"./index-C3igxD5N.js";import"./error-BZwp4K-_.js";import"./BaseCbacBanner-sJ6Gr1uy.js";import"./makeExternalStore-B8P6l5nx.js";import"./Tooltip-T6_qKaR2.js";import"./isObject-iIy0QNEy.js";import"./debounce-CRbn1ibT.js";import"./tick-C-CpglM8.js";import"./DropdownField-DIOwQMdG.js";import"./isEqual-DZy78p28.js";import"./_baseIsEqual-Dd9svSeM.js";import"./withOsdkMetrics-BKdRrZP1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
