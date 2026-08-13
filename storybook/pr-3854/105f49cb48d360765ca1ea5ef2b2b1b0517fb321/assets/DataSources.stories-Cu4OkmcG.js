import{j as r}from"./iframe-DB-361_v.js";import{O as b}from"./object-table-DygeJIg-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CzPHabeq.js";import{u as g}from"./useOsdkClient-Rh48KMqD.js";import"./preload-helper-zvjHNL09.js";import"./Table-BMddCm1U.js";import"./index-DdwLnrfs.js";import"./Dialog-C_ZEA6-F.js";import"./cross-CgBmw6jw.js";import"./svgIconContainer-tDogG8TB.js";import"./useBaseUiId-Dyby1NGR.js";import"./InternalBackdrop-DH85mJku.js";import"./composite-CEGpAhVN.js";import"./index-Bd_TtvqJ.js";import"./index-LD-tkTix.js";import"./index-BdeL7aWA.js";import"./useEventCallback-BkCnz6o6.js";import"./SkeletonBar-CNIBkP7B.js";import"./LoadingCell-BzxB7WCq.js";import"./ColumnConfigDialog-DE30qmZG.js";import"./DraggableList-UkQ3xT_w.js";import"./search-Y_2o6rdR.js";import"./Input-Du43rCnX.js";import"./useControlled-B9yE7kao.js";import"./isEqual-Dc-n6KEk.js";import"./isObject-CfOFIxrc.js";import"./Button-B9h9wyoq.js";import"./ActionButton-BLU-1Wm8.js";import"./Checkbox-Daxi2-nV.js";import"./useValueChanged-SAxhXoib.js";import"./CollapsiblePanel-Cb4bdYA2.js";import"./MultiColumnSortDialog-CtDren4G.js";import"./MenuTrigger-mj7T66LW.js";import"./CompositeItem-DCbSD_ZK.js";import"./ToolbarRootContext-DLRpCM8y.js";import"./getDisabledMountTransitionStyles-xd7EQLxb.js";import"./getPseudoElementBounds-qNjk-dq5.js";import"./chevron-down-DXD_htwf.js";import"./index-z1u9RwtB.js";import"./error-B4op4QY1.js";import"./BaseCbacBanner-Cw82aSH0.js";import"./makeExternalStore-D-AXHTbe.js";import"./Tooltip-BYVX-p84.js";import"./PopoverPopup-CdAETliG.js";import"./toNumber-D4zUsFv4.js";import"./tick-DIaQ-Rv8.js";import"./DropdownField-CO0ZSj3k.js";import"./withOsdkMetrics-5AfJM7Y3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
