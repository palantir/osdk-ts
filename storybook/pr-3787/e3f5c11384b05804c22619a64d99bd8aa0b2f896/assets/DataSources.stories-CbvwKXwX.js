import{j as r}from"./iframe-BAKEq5ES.js";import{O as b}from"./object-table-Ddwo7DKX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DMDQbSrS.js";import{u as g}from"./useOsdkClient-CAYIjkz_.js";import"./preload-helper-hQV8mcMW.js";import"./Table-DbimKmt7.js";import"./index-CeH782l-.js";import"./Dialog-Bpsn0GLy.js";import"./cross-Dt1bkvKA.js";import"./svgIconContainer-Dld9ETuT.js";import"./useBaseUiId-Brauy9uT.js";import"./InternalBackdrop-NRUCG-Md.js";import"./composite-O5N4yrKG.js";import"./index-DYnXO_K1.js";import"./index-PP-_CbbK.js";import"./index-BDWn8ZeD.js";import"./useEventCallback-BDdj97xr.js";import"./SkeletonBar-B00BTsTN.js";import"./LoadingCell-DnX7Bc7N.js";import"./ColumnConfigDialog-Dyp7TOc-.js";import"./DraggableList-D_5qh-dT.js";import"./search-DZax2fsM.js";import"./Input-BCff3WUP.js";import"./useControlled-C2UCFEFv.js";import"./isEqual-XRwfgd-m.js";import"./isObject-BZwXx0fx.js";import"./Button-BLWiXJyw.js";import"./ActionButton-3nDneS0_.js";import"./Checkbox-ooMD5k0t.js";import"./useValueChanged-BHOBEpWe.js";import"./CollapsiblePanel-DdLf54qL.js";import"./MultiColumnSortDialog-MvZfwoN0.js";import"./MenuTrigger-CICrC1Rd.js";import"./CompositeItem-B-aPUg7M.js";import"./ToolbarRootContext-yZJwFATi.js";import"./getDisabledMountTransitionStyles-BaT6iZCs.js";import"./getPseudoElementBounds-odxOPIS-.js";import"./chevron-down-DfHSBo5l.js";import"./index-Bqra-U7q.js";import"./error-BY45CvKu.js";import"./BaseCbacBanner-25jzrQhL.js";import"./makeExternalStore-DSwBTdjj.js";import"./Tooltip-bjnxpKvh.js";import"./PopoverPopup-DzJnb2E8.js";import"./toNumber-CtHLA5nh.js";import"./tick-CQsbinFG.js";import"./DropdownField-zarVigm0.js";import"./withOsdkMetrics-DsMB6nls.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
