import{j as r}from"./iframe-C35uGTor.js";import{O as b}from"./object-table-BMvG9R9k.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DdySQxJz.js";import{u as g}from"./useOsdkClient-DCbEGB5n.js";import"./preload-helper-F3EFc52l.js";import"./Table-SEATd5pV.js";import"./index-Dc24XYXq.js";import"./Dialog-Dq6arkge.js";import"./cross-C0_UaP8E.js";import"./svgIconContainer-BAWtvYDY.js";import"./useBaseUiId-D-k3osuz.js";import"./InternalBackdrop-Bs1cpNOT.js";import"./composite-C_6udYfh.js";import"./index-DRW9cQCp.js";import"./index-Dgf1QELO.js";import"./index-Ca4jpz09.js";import"./useEventCallback-Cf-0ooWK.js";import"./SkeletonBar-CPo4uDcQ.js";import"./LoadingCell-Cnax0wEX.js";import"./ColumnConfigDialog-BP1UEYm7.js";import"./DraggableList-Dr_uKQUn.js";import"./search-Omk4RfaQ.js";import"./Input-CtTyrSxh.js";import"./useControlled-jxUnEnFw.js";import"./Button-BAtng8PD.js";import"./small-cross-93J9MDZj.js";import"./ActionButton-DHb-zf9N.js";import"./Checkbox-v-LG2738.js";import"./useValueChanged-Cx6EL_oM.js";import"./CollapsiblePanel-sHrc_PW6.js";import"./MultiColumnSortDialog-vnZWR3AB.js";import"./MenuTrigger-9YjlyO6G.js";import"./CompositeItem-Cst7sX19.js";import"./ToolbarRootContext-Do8xptiZ.js";import"./getDisabledMountTransitionStyles-Cd_D1FIL.js";import"./getPseudoElementBounds-BSTYbltd.js";import"./chevron-down-CyTbMtgy.js";import"./index-CQ0b7fbb.js";import"./error-BP_tygeo.js";import"./BaseCbacBanner-CN7_0G8f.js";import"./makeExternalStore-ROa8cnCZ.js";import"./Tooltip-cI_3eo19.js";import"./PopoverPopup-BOg0baOJ.js";import"./debounce-Csr1B-r9.js";import"./tick-CP39Td_J.js";import"./DropdownField-DItTqqK3.js";import"./isEqual-BmCMSC_D.js";import"./withOsdkMetrics-BEBYlr-F.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
