import{j as r}from"./iframe-CDhHfbZk.js";import{O as b}from"./object-table-BIIGIbV_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CYQKHoPP.js";import{u as g}from"./useOsdkClient-BN3vNMZc.js";import"./preload-helper-D9m9ft9F.js";import"./Table-B465KFbL.js";import"./index-vUAebvBG.js";import"./Dialog-C4wjWsAg.js";import"./cross-CLCYSP7-.js";import"./svgIconContainer-DP_9rndU.js";import"./useBaseUiId-BNzPhzzT.js";import"./InternalBackdrop-kU3g4qnB.js";import"./composite-zry2u9iy.js";import"./index-IitVmvoQ.js";import"./index-DDa4qDBw.js";import"./index-QX77SP4G.js";import"./useEventCallback-B7ZISNVL.js";import"./SkeletonBar-BnvFfaYp.js";import"./LoadingCell-jwwDjlQv.js";import"./ColumnConfigDialog-Dvr0Mgyu.js";import"./DraggableList-tNZKpXfZ.js";import"./search-Bcd3upv2.js";import"./Input-B4zROYTD.js";import"./useControlled-C9J3sV3W.js";import"./Button-Eng2VAlv.js";import"./small-cross-DV4dQjPE.js";import"./ActionButton-Tom3ILVB.js";import"./Checkbox-Bbi6BQXM.js";import"./useValueChanged-C52zQhOD.js";import"./CollapsiblePanel-CxG2E3R9.js";import"./MultiColumnSortDialog-DP92EJIX.js";import"./MenuTrigger-CtSJZt_C.js";import"./CompositeItem-CfrnZWNF.js";import"./ToolbarRootContext-BHNpAEXV.js";import"./getDisabledMountTransitionStyles-BsTot6L0.js";import"./getPseudoElementBounds-CQtQrLv_.js";import"./chevron-down-BrdASUtV.js";import"./index-CaQKQtm_.js";import"./error-CgXh1tPF.js";import"./BaseCbacBanner-0aUDutEj.js";import"./makeExternalStore-BkKmabtu.js";import"./Tooltip-BYY_Xvns.js";import"./PopoverPopup-D0oa-8rs.js";import"./debounce-CYPWazyu.js";import"./tick-Bxx5r_FA.js";import"./DropdownField-BBgRvZiW.js";import"./isEqual-BF0VAMYr.js";import"./withOsdkMetrics-BPDsAwtw.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
