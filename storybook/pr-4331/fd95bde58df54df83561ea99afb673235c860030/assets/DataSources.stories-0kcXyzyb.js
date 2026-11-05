import{j as r}from"./iframe-DfKl0JGk.js";import{O as b}from"./object-table-dUfpxSwm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CJXZkwZc.js";import{u as g}from"./useOsdkClient-D-epmGHT.js";import"./preload-helper-D2qZKtpg.js";import"./Table-CGlr-_aD.js";import"./index-aB099sio.js";import"./Dialog-C1AxpQJF.js";import"./cross-BNEnN7HL.js";import"./svgIconContainer-BAQrNZDY.js";import"./useBaseUiId-BFnbzIXU.js";import"./InternalBackdrop-DQiuVbxP.js";import"./composite-DoivXE_r.js";import"./index-CPvTwKaJ.js";import"./index-Cu8ZN5fR.js";import"./index-CKLNQuck.js";import"./useEventCallback-BPj-zmzp.js";import"./SkeletonBar-C3WAp5HN.js";import"./LoadingCell-Co75bDke.js";import"./ColumnConfigDialog-DLt-N818.js";import"./DraggableList-BmxyglgV.js";import"./search-BwIUQD_S.js";import"./Input-DOLGbI8I.js";import"./useControlled-CuqWKABX.js";import"./Button-B7sS73TJ.js";import"./small-cross-l23fMmT-.js";import"./ActionButton-BwTBHLns.js";import"./Checkbox-CpB2lS1k.js";import"./useValueChanged-BcrLWEfZ.js";import"./CollapsiblePanel-CgKpLYfM.js";import"./MultiColumnSortDialog-C1kscGYQ.js";import"./MenuTrigger-DB-s2Xyj.js";import"./CompositeItem-DCu8K_u-.js";import"./ToolbarRootContext-Djhkt96c.js";import"./getDisabledMountTransitionStyles-CvD_X3uJ.js";import"./getPseudoElementBounds-CiQNVwt7.js";import"./chevron-down-CdRuI-bU.js";import"./index-B1rjjc3Y.js";import"./error-Ci3w5MtL.js";import"./BaseCbacBanner-A-HZBMDm.js";import"./makeExternalStore-CSIEjtLx.js";import"./Tooltip-bZjfkZin.js";import"./isObject-D8Oji8bH.js";import"./debounce-BoOWLf3v.js";import"./tick-Bf5SboOl.js";import"./DropdownField-DWj7vxDR.js";import"./isEqual-Cw-Jmji8.js";import"./_baseIsEqual-DR0ymikg.js";import"./withOsdkMetrics-DiSdxyjG.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
