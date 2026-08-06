import{j as r}from"./iframe-DP3WXvf2.js";import{O as b}from"./object-table-CmVY_AZz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ck7kMEJ_.js";import{u as g}from"./useOsdkClient-DHaYNoSF.js";import"./preload-helper-BrwfpXMJ.js";import"./Table-BZMJkkfP.js";import"./index-tWkBFRv4.js";import"./Dialog-Bn0xrUiW.js";import"./cross-D7VOxDSd.js";import"./svgIconContainer-D5YO1S9t.js";import"./useBaseUiId-BOLy-sbk.js";import"./InternalBackdrop-kfOS6-6n.js";import"./composite-Bs_HXNR1.js";import"./index-4F4S8ihM.js";import"./index-dP7GtPgB.js";import"./index-D0i847yp.js";import"./useEventCallback-4WPVou47.js";import"./SkeletonBar-CQxkz69G.js";import"./LoadingCell-gmzsNyZZ.js";import"./ColumnConfigDialog-0wgW781K.js";import"./DraggableList-B5-sdrQx.js";import"./search-COU45aDA.js";import"./Input-C7i9bi6Y.js";import"./useControlled-DXyaPIDf.js";import"./isEqual-CxjDM9uY.js";import"./isObject-PPvT23lN.js";import"./Button-BlADiT-L.js";import"./ActionButton-CMlhPEAt.js";import"./Checkbox-BwX4PU9M.js";import"./useValueChanged-DQRuCOWP.js";import"./CollapsiblePanel-CPiAZkOy.js";import"./MultiColumnSortDialog-BQR6klSA.js";import"./MenuTrigger-B7KN4Klu.js";import"./CompositeItem-CAMOw487.js";import"./ToolbarRootContext-DomAOERZ.js";import"./getDisabledMountTransitionStyles-WVqhRiar.js";import"./getPseudoElementBounds-DyIib3FW.js";import"./chevron-down-DveMJf_3.js";import"./index-D_FYBlgp.js";import"./error-DEAaKdsx.js";import"./BaseCbacBanner-DHuOvfxS.js";import"./makeExternalStore-DqGepTDF.js";import"./Tooltip-CeGAKU6r.js";import"./PopoverPopup-BbWQWTj8.js";import"./toNumber-DgM7wa7_.js";import"./tick-CedZqE1V.js";import"./DropdownField-DLcwvT9B.js";import"./withOsdkMetrics-D03opsaL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
