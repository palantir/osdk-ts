import{j as r}from"./iframe-C3XbZWen.js";import{O as b}from"./object-table-6roN3fnf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D3y5dT9V.js";import{u as g}from"./useOsdkClient-C2mkXTFj.js";import"./preload-helper-Bd8vTro1.js";import"./Table-D7RKx9UH.js";import"./index-Cbx6a8hz.js";import"./Dialog-CmTFGtwU.js";import"./cross-CPx39Rqk.js";import"./svgIconContainer-MmaHaGlI.js";import"./useBaseUiId-DhsKY9ve.js";import"./InternalBackdrop-QCSxKShv.js";import"./composite-DWbLdHMu.js";import"./index-DIlMfn_R.js";import"./index-BjtPHMiR.js";import"./index-B1lp1N2Z.js";import"./useEventCallback-CpM6E-JP.js";import"./SkeletonBar-mZUFcLb-.js";import"./LoadingCell-oXQ47sGg.js";import"./ColumnConfigDialog-BjA5WfGE.js";import"./DraggableList-DxLeHlTQ.js";import"./search-BWwFBwJa.js";import"./Input-C6CMN-6w.js";import"./useControlled-RhoVVMbd.js";import"./Button-D5gsrDav.js";import"./small-cross-BsVnexPM.js";import"./ActionButton-BsycIRPd.js";import"./Checkbox-C4-C-7mU.js";import"./useValueChanged-Dt05zWq3.js";import"./CollapsiblePanel-CH5HVZ_W.js";import"./MultiColumnSortDialog-BHkGXMnA.js";import"./MenuTrigger-CS6NiigY.js";import"./CompositeItem-CDPEnVwM.js";import"./ToolbarRootContext-CLeDTtLu.js";import"./getDisabledMountTransitionStyles-QJ6Sy96Q.js";import"./getPseudoElementBounds-DtIXpuuI.js";import"./chevron-down-DqIBtDWK.js";import"./index-LyhSYXkQ.js";import"./error-BB9ysK2b.js";import"./BaseCbacBanner-sgH90S1X.js";import"./makeExternalStore-DZjltypg.js";import"./Tooltip-DAvT5ZSN.js";import"./PopoverPopup-USAcLK7W.js";import"./debounce-CIDwCQJK.js";import"./tick-Dimo0cUA.js";import"./DropdownField-vrHc5lZl.js";import"./isEqual-GbIpCj4g.js";import"./withOsdkMetrics-B9g6zipx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
