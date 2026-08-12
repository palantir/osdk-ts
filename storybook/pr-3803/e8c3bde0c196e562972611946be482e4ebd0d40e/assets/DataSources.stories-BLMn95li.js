import{j as r}from"./iframe-B4bpzrvR.js";import{O as b}from"./object-table-BVvsWR2G.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-KqBjQ7CD.js";import{u as g}from"./useOsdkClient-DshaS5p6.js";import"./preload-helper-ygR31QqW.js";import"./Table-CjzDjeDQ.js";import"./index-BsbymTi9.js";import"./Dialog-ChKLN39C.js";import"./cross-n7An2nll.js";import"./svgIconContainer-_zfJv1vm.js";import"./useBaseUiId-DQnro2m8.js";import"./InternalBackdrop-kI4blW8q.js";import"./composite-CWXRwiuA.js";import"./index-sIpWfZRY.js";import"./index-BCiKLWSQ.js";import"./index-OGlUltzw.js";import"./useEventCallback-Qs8lz6jg.js";import"./SkeletonBar-96pcsO9R.js";import"./LoadingCell-B0dGcpUe.js";import"./ColumnConfigDialog-i8-Tjv7R.js";import"./DraggableList-BSdUre9g.js";import"./search-Cyz40xHr.js";import"./Input-ruAaTYrP.js";import"./useControlled-c3mF7Crf.js";import"./isEqual-FyxATBS-.js";import"./isObject-B3oaV668.js";import"./Button-CsATp9gq.js";import"./ActionButton-BZfgIiZS.js";import"./Checkbox-3BCsJkkb.js";import"./useValueChanged-B4Q2Bujm.js";import"./CollapsiblePanel-GhnpHLbS.js";import"./MultiColumnSortDialog-SWAflGub.js";import"./MenuTrigger-Db98uiN-.js";import"./CompositeItem-CBqdXCF4.js";import"./ToolbarRootContext-BdeRPzt2.js";import"./getDisabledMountTransitionStyles-BnPQ5JOv.js";import"./getPseudoElementBounds-BXLfPEf2.js";import"./chevron-down-BzusAapG.js";import"./index-CurRzgfb.js";import"./error-CD3Qxrj1.js";import"./BaseCbacBanner-B3ZHEXJ1.js";import"./makeExternalStore-qWLMmryU.js";import"./Tooltip-CFElPJb6.js";import"./PopoverPopup-C7HXd2s5.js";import"./toNumber-CmfNCgBV.js";import"./tick-BPDBLuOM.js";import"./DropdownField-DLROjcIJ.js";import"./withOsdkMetrics-srCrwIqC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
