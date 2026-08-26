import{j as r}from"./iframe-gVAmUTQg.js";import{O as b}from"./object-table-D9jtfPUd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-MV-dZacT.js";import{u as g}from"./useOsdkClient-CD_W310F.js";import"./preload-helper-3Sf5Feu3.js";import"./Table-Bn8VFvlv.js";import"./index-BeeoVX-q.js";import"./Dialog-BPW7Fnqp.js";import"./cross-jlTg3KlE.js";import"./svgIconContainer-B4Z8Cc9p.js";import"./useBaseUiId-CHWfe0kM.js";import"./InternalBackdrop-MQIEsE87.js";import"./composite-DuUe5pNY.js";import"./index-J26Dm_pE.js";import"./index-G-6YzhfM.js";import"./index-ZTHZOD5S.js";import"./useEventCallback-BGxuyWEQ.js";import"./SkeletonBar-Dr7WQbwR.js";import"./LoadingCell-DXD9SzMl.js";import"./ColumnConfigDialog-BsHyb-5Z.js";import"./DraggableList-CAsDI2FA.js";import"./search-BaBEiFT5.js";import"./Input-BkbQvjPR.js";import"./useControlled-CdRGPDPf.js";import"./isEqual-UcadrFyw.js";import"./isObject-BiW_nSk5.js";import"./Button-Dr-T1AFV.js";import"./ActionButton-CqliKloO.js";import"./Checkbox-D2PC0jxt.js";import"./useValueChanged-ByAqqMPO.js";import"./CollapsiblePanel-wCqvJGO2.js";import"./MultiColumnSortDialog-BN0XCeIQ.js";import"./MenuTrigger-CKbR4gwr.js";import"./CompositeItem-ieCqGqC2.js";import"./ToolbarRootContext-ByYznoe0.js";import"./getDisabledMountTransitionStyles-BQxyBjfI.js";import"./getPseudoElementBounds-Bv56xCKO.js";import"./chevron-down-C1g0o6pf.js";import"./index-CR2aVeKh.js";import"./error-tp1IHQ0n.js";import"./BaseCbacBanner-ATQ7faMG.js";import"./makeExternalStore-DdyFijLM.js";import"./Tooltip-BPUhfpna.js";import"./PopoverPopup-CaEv5Luc.js";import"./toNumber-kAKe2Owq.js";import"./tick-5ftwsX0l.js";import"./DropdownField-DzuaA_EY.js";import"./withOsdkMetrics-F5cMDIFA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
