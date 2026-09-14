import{j as r}from"./iframe-BpUcg2zG.js";import{O as b}from"./object-table-BXzXnMPi.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BnxRUTwZ.js";import{u as g}from"./useOsdkClient-Dnj4xecm.js";import"./preload-helper-B2UTcXFP.js";import"./Table-C8Mqu-X6.js";import"./index-7N6MUyxI.js";import"./Dialog-B6nwdW0S.js";import"./cross-Qiz9Cl6T.js";import"./svgIconContainer-g6F9ILDM.js";import"./useBaseUiId-Bv3X91q5.js";import"./InternalBackdrop-DMk-kvEU.js";import"./composite-CFjjm5Bq.js";import"./index-DI63_yx7.js";import"./index-CvEJHu1s.js";import"./index-C3OHRfdp.js";import"./useEventCallback-CpJFT7Nx.js";import"./SkeletonBar-YHGj4uus.js";import"./LoadingCell-0KwxVok-.js";import"./ColumnConfigDialog-DfxH2UYm.js";import"./DraggableList-DhI9Nd92.js";import"./search-BLWHV2Ka.js";import"./Input-DaPfruQG.js";import"./useControlled-DdOa4Phy.js";import"./Button-DFuiuLIT.js";import"./small-cross-Bb_UEV9u.js";import"./ActionButton-daXbDUYm.js";import"./Checkbox-KmgOVCCy.js";import"./useValueChanged-DQZMmpA-.js";import"./CollapsiblePanel-Dn0E0YbQ.js";import"./MultiColumnSortDialog-C-lsqtR_.js";import"./MenuTrigger-DddfjYoS.js";import"./CompositeItem-C2o4b7lZ.js";import"./ToolbarRootContext-J_sWFt16.js";import"./getDisabledMountTransitionStyles-sJoPqg4c.js";import"./getPseudoElementBounds-BdWd26b0.js";import"./chevron-down-C_xyEVbG.js";import"./index-jSPKquLn.js";import"./error-DVz4lqLc.js";import"./BaseCbacBanner-Dgd3clMy.js";import"./makeExternalStore-Cwp1LGPC.js";import"./Tooltip-kYiBGujl.js";import"./PopoverPopup-CyIGwRoM.js";import"./debounce-CXzI_OHH.js";import"./tick-B3uICQ16.js";import"./DropdownField-Br3l3qOB.js";import"./isEqual-BE6QLmil.js";import"./withOsdkMetrics-D52jnuF5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
