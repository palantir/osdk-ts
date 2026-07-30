import{j as r}from"./iframe-bqNDes0h.js";import{O as b}from"./object-table-Bo7ZzyOs.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BNC-WKWg.js";import{u as g}from"./useOsdkClient-C5axgICL.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-KbNypInQ.js";import"./index-D-kpR4U5.js";import"./Dialog-DBt6SKPv.js";import"./cross-D-HBFxBZ.js";import"./svgIconContainer-nN-O7odi.js";import"./useBaseUiId-BdVIrhLm.js";import"./InternalBackdrop-jCgELips.js";import"./composite-Bes1Kf7p.js";import"./index-CQpE82He.js";import"./index-KCfabZ1g.js";import"./index-DuHyQ_BY.js";import"./useEventCallback-BVtK7C84.js";import"./SkeletonBar-BVWt6TzE.js";import"./LoadingCell-BB2VWb1o.js";import"./ColumnConfigDialog-DB-SaiNF.js";import"./DraggableList-BjBpafGP.js";import"./search-DkS45smT.js";import"./Input-Dg6Zh6vs.js";import"./useControlled-BXUawHF3.js";import"./isEqual-CxKcdXuf.js";import"./isObject-D5Xm145F.js";import"./Button-BOlqyk1x.js";import"./ActionButton-Bb4ArXLq.js";import"./Checkbox-D_4CQR_a.js";import"./useValueChanged-BmACd2KS.js";import"./CollapsiblePanel-D76wv8TD.js";import"./MultiColumnSortDialog-BptSZ354.js";import"./MenuTrigger-hKGw6jH7.js";import"./CompositeItem-CdBWSXyW.js";import"./ToolbarRootContext-B-Yq57Bt.js";import"./getDisabledMountTransitionStyles-7Pr0gztR.js";import"./getPseudoElementBounds-DSu5pY6s.js";import"./chevron-down-BfCtZkjC.js";import"./index-Gm4DsetC.js";import"./error-rjrh1Exq.js";import"./BaseCbacBanner-ColLsRFK.js";import"./makeExternalStore-Cz-ju0RG.js";import"./Tooltip-CyTiQ41n.js";import"./PopoverPopup-eUWm8DRH.js";import"./toNumber-C9-sS8P1.js";import"./tick-DPgqlyJG.js";import"./DropdownField-DgPlq2BT.js";import"./withOsdkMetrics-BOXWJewy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
