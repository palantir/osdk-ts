import{j as r}from"./iframe-B0W1tjyx.js";import{O as b}from"./object-table-ByW0iRN4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D456bz0k.js";import{u as g}from"./useOsdkClient-BzN2he8l.js";import"./preload-helper-9BNFzYVn.js";import"./Table-CDqAze49.js";import"./index-B0ZI_T4A.js";import"./Dialog-1Hc8hvmW.js";import"./cross-Bvf_hoCy.js";import"./svgIconContainer-JVsHGGQJ.js";import"./useBaseUiId-Dg0EtU88.js";import"./InternalBackdrop-pkhhExjC.js";import"./composite-BvCgECMb.js";import"./index-0JUS0bl9.js";import"./index-D_b8RHzl.js";import"./index-9KlYwXLT.js";import"./useEventCallback-D2l6XFwH.js";import"./SkeletonBar-SdaBCFfG.js";import"./LoadingCell-Cyl597ns.js";import"./ColumnConfigDialog-CEm1F5GG.js";import"./DraggableList-BIlxskkh.js";import"./search-BdvsCHgj.js";import"./Input-CJ9Yoyko.js";import"./useControlled-CFQJO6Op.js";import"./isEqual-kHHHMxlJ.js";import"./isObject-CEG66Ysn.js";import"./Button-CllyD5Fk.js";import"./ActionButton-FCYoe6pd.js";import"./Checkbox-ClP_IzO-.js";import"./useValueChanged-B7WAZ2Po.js";import"./CollapsiblePanel-C1SH974_.js";import"./MultiColumnSortDialog-BUH-mu_E.js";import"./MenuTrigger-DidihynY.js";import"./CompositeItem-B3C1me1o.js";import"./ToolbarRootContext-D6BYbpCQ.js";import"./getDisabledMountTransitionStyles-ClGEvYNq.js";import"./getPseudoElementBounds-S5ZjmQl8.js";import"./chevron-down-BO0Ma7WA.js";import"./index-B26rJ8sm.js";import"./error-hxPE7cUz.js";import"./BaseCbacBanner-BT_ehWB_.js";import"./makeExternalStore-s1PuIN2e.js";import"./Tooltip-ft-HOAV-.js";import"./PopoverPopup-DZUhAEPi.js";import"./toNumber-CjgDMmjI.js";import"./tick-BHbmMwuf.js";import"./DropdownField-D86cVelw.js";import"./withOsdkMetrics-Dl2A3XwS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
