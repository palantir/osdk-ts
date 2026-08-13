import{j as r}from"./iframe-BjnPtOz_.js";import{O as b}from"./object-table-zIzp69cD.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CdRTTSam.js";import{u as g}from"./useOsdkClient-B2zBLF21.js";import"./preload-helper-DvpFqhNW.js";import"./Table-COsXx5hz.js";import"./index-B-VO8ckc.js";import"./Dialog-CqCeMiee.js";import"./cross-Dor8dRPD.js";import"./svgIconContainer-CMItwta7.js";import"./useBaseUiId-smhGGpwO.js";import"./InternalBackdrop-BXVLkMxu.js";import"./composite-_Pzh5Y_l.js";import"./index-CIJ2rBTU.js";import"./index-C4D01Ue3.js";import"./index-DNE-sCgP.js";import"./useEventCallback-BzItO3JI.js";import"./SkeletonBar-DwjyCsyI.js";import"./LoadingCell-Ck2EC4mw.js";import"./ColumnConfigDialog-DbHBC-09.js";import"./DraggableList-c6-ZcjMb.js";import"./search-OEEiuMQK.js";import"./Input-SUEmcWu4.js";import"./useControlled-BbAelK_j.js";import"./Button-Cxf8-3hK.js";import"./small-cross-D2oHW2nL.js";import"./ActionButton-l6-GCpK2.js";import"./Checkbox-DBdKnyBo.js";import"./useValueChanged-C5P2XyrK.js";import"./CollapsiblePanel-BjAK6Orf.js";import"./MultiColumnSortDialog-KzJc224-.js";import"./MenuTrigger-DGQUU3YK.js";import"./CompositeItem-CQIJeL3v.js";import"./ToolbarRootContext-GKohB1Vi.js";import"./getDisabledMountTransitionStyles-DumrMjAd.js";import"./getPseudoElementBounds-6oxs1p6q.js";import"./chevron-down-RU6ZJ7SE.js";import"./index-505RtiSa.js";import"./error-Df9MLz6T.js";import"./BaseCbacBanner-BXiUKVyr.js";import"./makeExternalStore-N4sJbBYc.js";import"./Tooltip-Dnqgpj59.js";import"./PopoverPopup-B20RcrSM.js";import"./toNumber-BL1xMckt.js";import"./tick-BPQqxqWd.js";import"./DropdownField-Q5XGg2hM.js";import"./withOsdkMetrics-sn_AdfzF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};
