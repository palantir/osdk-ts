import{j as r}from"./iframe-DgffzXcd.js";import{O as b}from"./object-table-fY9Xd0yZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BZWJMl3g.js";import{u as g}from"./useOsdkClient-DKu9s4PU.js";import"./preload-helper-cnms5IGS.js";import"./Table-CzDvDm7i.js";import"./index-BBLuu-Hq.js";import"./Dialog-BCwFL75a.js";import"./cross-BSsj-b40.js";import"./svgIconContainer-Blhk3Pl5.js";import"./useBaseUiId-D8q2NPVv.js";import"./InternalBackdrop-Bgldltbx.js";import"./composite-CF6w6iAh.js";import"./index-CAwd0aO9.js";import"./index-CeFEKlyx.js";import"./index-Cef6tpmG.js";import"./useEventCallback-DtRRBbn7.js";import"./SkeletonBar-CE1Y87-p.js";import"./LoadingCell-CsHmwUPd.js";import"./ColumnConfigDialog-astW80O7.js";import"./DraggableList-B1uaj-eR.js";import"./search-CJlxOI-X.js";import"./Input-c6SLv_Xy.js";import"./useControlled-BV_EXpzJ.js";import"./Button-UP0puh42.js";import"./small-cross-BBQkhsLR.js";import"./ActionButton-BaBnxcfR.js";import"./Checkbox-RB80j2cY.js";import"./useValueChanged-aTAAjdkj.js";import"./CollapsiblePanel-DXdXfeG6.js";import"./MultiColumnSortDialog-DDvpuTsH.js";import"./MenuTrigger-DCg3dPT6.js";import"./CompositeItem-BH2gdPXz.js";import"./ToolbarRootContext-DEjBOujG.js";import"./getDisabledMountTransitionStyles-Db73lXfO.js";import"./getPseudoElementBounds-DD-pb8mO.js";import"./chevron-down-B-BBWbod.js";import"./index-AOiW_Fy4.js";import"./error-C62WbJ6c.js";import"./BaseCbacBanner-tjiO2qm2.js";import"./makeExternalStore-FJNApXaM.js";import"./Tooltip-Ddt-e1A4.js";import"./PopoverPopup-YsjB_oA6.js";import"./debounce-KT7GVLZu.js";import"./tick-DXpn86OC.js";import"./DropdownField-FoaA7AiA.js";import"./isEqual-XaPl52Ec.js";import"./withOsdkMetrics-BMLt42BN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
