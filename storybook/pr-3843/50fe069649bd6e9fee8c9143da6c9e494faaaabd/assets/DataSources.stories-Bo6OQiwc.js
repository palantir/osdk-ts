import{j as r}from"./iframe-0M63JHCf.js";import{O as b}from"./object-table-2mMzzfs7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CtEjTtRo.js";import{u as g}from"./useOsdkClient-DV-CPQEw.js";import"./preload-helper-yRY4DJID.js";import"./Table-C4CARdpZ.js";import"./index-DCLstkM0.js";import"./Dialog-DhVwm5-L.js";import"./cross-Dx7TBNdy.js";import"./svgIconContainer-Ba-VjDLq.js";import"./useBaseUiId-C4hkh7ZQ.js";import"./InternalBackdrop-HX2Lu_fI.js";import"./composite-BGTmrBgq.js";import"./index-DfbbdQ9g.js";import"./index-BN_1v8m8.js";import"./index--Mgh_lWx.js";import"./useEventCallback-BFmOLSII.js";import"./SkeletonBar-DmlJks1A.js";import"./LoadingCell-ClHYUGsW.js";import"./ColumnConfigDialog-kgzLiGtM.js";import"./DraggableList-BiAe_XK2.js";import"./search-BHMf8zxq.js";import"./Input-BySgS7sE.js";import"./useControlled-Bfcb3jbt.js";import"./isEqual-CwyeCwkZ.js";import"./isObject-OMMx7eDJ.js";import"./Button-yHWtoMo0.js";import"./ActionButton-YGuniLSR.js";import"./Checkbox-B-PW90Rg.js";import"./useValueChanged-BToEeRdF.js";import"./CollapsiblePanel-BfU0Af3S.js";import"./MultiColumnSortDialog-2YO5ARfD.js";import"./MenuTrigger-BoIum8c4.js";import"./CompositeItem-DykB-jR3.js";import"./ToolbarRootContext-4caIMlji.js";import"./getDisabledMountTransitionStyles-BG8GaNm1.js";import"./getPseudoElementBounds-onK_gGUB.js";import"./chevron-down-CJX5oFSg.js";import"./index-BhO_dAvP.js";import"./error-DtkpoifS.js";import"./BaseCbacBanner-CiuaOWIH.js";import"./makeExternalStore-BOJmpgSR.js";import"./Tooltip-DTY2SBSt.js";import"./PopoverPopup-Bj_qNAcN.js";import"./toNumber-Dzlq76X1.js";import"./tick-Bibjqq1N.js";import"./DropdownField-BLsGqkq4.js";import"./withOsdkMetrics-DCNaRoie.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
