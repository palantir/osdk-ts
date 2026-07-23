import{j as r}from"./iframe-CkbYc2pP.js";import{O as b}from"./object-table-CUpLjh1V.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cugv-XLM.js";import{u as g}from"./useOsdkClient-BpR3WLdC.js";import"./preload-helper-DWws0Fe8.js";import"./Table-BRLAersF.js";import"./index-B7qybUT7.js";import"./Dialog-BQ1LsR6o.js";import"./cross-B-KVwLek.js";import"./svgIconContainer-BePuMkB2.js";import"./useBaseUiId-vvHGjGIN.js";import"./InternalBackdrop-Z_-L2gMX.js";import"./composite-BMFfaa_y.js";import"./index-COpZ_srd.js";import"./index-BLluPW5F.js";import"./index-CHz79Cob.js";import"./useEventCallback-CT8_iKH-.js";import"./SkeletonBar-CXWwNKp3.js";import"./LoadingCell-BpT1Vpzy.js";import"./ColumnConfigDialog-gy3MtgbY.js";import"./DraggableList-D3xdxf9T.js";import"./search-4l5VikIh.js";import"./Input-TCA2ZWZm.js";import"./useControlled-BVzdlM3Q.js";import"./isEqual-D6wY5BBD.js";import"./isObject-CLSB1shT.js";import"./Button-BigCnc-F.js";import"./ActionButton-LCy3JXZ7.js";import"./Checkbox-Uuq4GMni.js";import"./useValueChanged-XJKlxe7a.js";import"./CollapsiblePanel-BnsHlHcz.js";import"./MultiColumnSortDialog-B4KTXyeq.js";import"./MenuTrigger-CxEOpvoP.js";import"./CompositeItem-BszmLGHn.js";import"./ToolbarRootContext-CzW8ESD7.js";import"./getDisabledMountTransitionStyles-PF9BIs3h.js";import"./getPseudoElementBounds-BonZGGeJ.js";import"./chevron-down-C4_wMWuh.js";import"./index-Burs7DZR.js";import"./error-dHO47Anr.js";import"./BaseCbacBanner-B6866jBg.js";import"./makeExternalStore-BkbUVh1s.js";import"./Tooltip-BDeVX6Eo.js";import"./PopoverPopup-DCEWnhQ4.js";import"./toNumber-D5eBbvyL.js";import"./tick-Bl3me1aB.js";import"./DropdownField-7aiTJRSK.js";import"./withOsdkMetrics-DQxmGXeb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
