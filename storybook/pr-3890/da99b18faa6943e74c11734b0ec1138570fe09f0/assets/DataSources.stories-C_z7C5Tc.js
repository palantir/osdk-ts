import{j as r}from"./iframe-Dg0RA47C.js";import{O as b}from"./object-table-Ch_8JgH_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cfe7hG7p.js";import{u as g}from"./useOsdkClient-CcJxi233.js";import"./preload-helper-C2cTZMmE.js";import"./Table-BtRGV6ru.js";import"./index-CP0v3oc4.js";import"./Dialog-Bg9UgGZY.js";import"./cross-CAoQgAes.js";import"./svgIconContainer-MFwXKo8a.js";import"./useBaseUiId-cAnpWjx3.js";import"./InternalBackdrop-CNYdc8fE.js";import"./composite-BCKGU-V6.js";import"./index-BWQjYTbn.js";import"./index-Bs4XxOPg.js";import"./index-BPZvYme6.js";import"./useEventCallback-CdoEXUNW.js";import"./SkeletonBar-DCV28cXp.js";import"./LoadingCell-CIfY_GiG.js";import"./ColumnConfigDialog-Nrle8fdX.js";import"./DraggableList-CLg9nbKr.js";import"./search-D2EDy9ee.js";import"./Input-CFaw-jkU.js";import"./useControlled-BIwik4nh.js";import"./Button-C34VLXt7.js";import"./small-cross-DIALysvM.js";import"./ActionButton-DZ0__bGy.js";import"./Checkbox-DL79bvRy.js";import"./useValueChanged-DuBO4zjF.js";import"./CollapsiblePanel-LAaM01Kd.js";import"./MultiColumnSortDialog-BnOVVE1O.js";import"./MenuTrigger-Di-taYBD.js";import"./CompositeItem-BNj1W7kt.js";import"./ToolbarRootContext-vZD2WDzJ.js";import"./getDisabledMountTransitionStyles-DHm_dR8N.js";import"./getPseudoElementBounds-tHI-ecWk.js";import"./chevron-down-Cbs30_CT.js";import"./index-hS7TW2Ac.js";import"./error-BL9dqZOx.js";import"./BaseCbacBanner-D7QVun9Q.js";import"./makeExternalStore-D8EkG36v.js";import"./Tooltip-CAu-WbGU.js";import"./PopoverPopup-BH-V_4IA.js";import"./debounce-DSxzzjdA.js";import"./tick-B0YgN-Jb.js";import"./DropdownField-DWLgtaf3.js";import"./isEqual-DMtrq5mO.js";import"./withOsdkMetrics-D5C1Gkqy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
