import{j as r}from"./iframe-BgoKo-i2.js";import{O as b}from"./object-table-CI8YfS4h.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CO_If2Wx.js";import{u as g}from"./useOsdkClient-BVkWLcTH.js";import"./preload-helper-DIrScT_n.js";import"./Table-diMd5iNY.js";import"./index-3V6CRxOT.js";import"./Dialog-Ltm4-WQh.js";import"./cross-pMkSGJpw.js";import"./svgIconContainer-Co1wj9K_.js";import"./useBaseUiId-DS7J75OO.js";import"./InternalBackdrop-kJ7I3CoG.js";import"./composite-CMVBbtsk.js";import"./index-Bdsk4x9T.js";import"./index-B65kqQu_.js";import"./index-BmEzYu9v.js";import"./useEventCallback-D_OYMyA3.js";import"./SkeletonBar-TBBsHigX.js";import"./LoadingCell-DJPy-_Il.js";import"./ColumnConfigDialog-W7fHJ_NL.js";import"./DraggableList-DUOjZipc.js";import"./search-C9CyrmBD.js";import"./Input-CjhSYZMH.js";import"./useControlled-DShEq97X.js";import"./isEqual-C90e21Bj.js";import"./isObject-swjZWcT8.js";import"./Button-CreK4JWQ.js";import"./ActionButton-D_CIcEZj.js";import"./Checkbox-BLUN__dJ.js";import"./useValueChanged-Dkb-WKVE.js";import"./CollapsiblePanel-CDbG0DY0.js";import"./MultiColumnSortDialog-DBNQOGqf.js";import"./MenuTrigger-Mw5Zxb32.js";import"./CompositeItem-DXRUm4lR.js";import"./ToolbarRootContext-CNkC_ExZ.js";import"./getDisabledMountTransitionStyles-CPZmqG2A.js";import"./getPseudoElementBounds-Cpf5jJJ0.js";import"./chevron-down-BW1Jk0Gy.js";import"./index-CPVhZyIF.js";import"./error-ChPfLHEW.js";import"./BaseCbacBanner-BPiM2zMm.js";import"./makeExternalStore-BwEONY5Y.js";import"./Tooltip-BFkoO91K.js";import"./PopoverPopup-CwVzquJ3.js";import"./toNumber-BDMOOKGE.js";import"./tick-T4PfDILy.js";import"./DropdownField-CUdK6Ljc.js";import"./withOsdkMetrics-DwfUgwww.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
