import{j as r}from"./iframe-CMhSXf7u.js";import{O as b}from"./object-table-Mp8InD2l.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-9Rbus9vl.js";import{u as g}from"./useOsdkClient-v7ltKG8Z.js";import"./preload-helper-Brrs_dmH.js";import"./Table-DklL9Zy6.js";import"./index-D-EqtuMO.js";import"./Dialog-CC0lOn9D.js";import"./cross-CDflrrvD.js";import"./svgIconContainer-BI44O8kK.js";import"./useBaseUiId-DJLmBw3m.js";import"./InternalBackdrop-DM7i7wCP.js";import"./composite-CZ_sbuO7.js";import"./index-e3-NUaQu.js";import"./index-7out07OT.js";import"./index-D1lmcvuc.js";import"./useEventCallback-hoIOXFa_.js";import"./SkeletonBar-BFMS0GW4.js";import"./LoadingCell-DCwYyJZu.js";import"./ColumnConfigDialog-bLJOU6Di.js";import"./DraggableList-CFiryhMG.js";import"./search-D9SDfmhX.js";import"./Input-BdM-mg3J.js";import"./useControlled-Yx4KOLdx.js";import"./isEqual-KbtjeMQV.js";import"./isObject-BuUXoseV.js";import"./Button-CYNxWIo5.js";import"./ActionButton-jy2VWN7r.js";import"./Checkbox-B4EJG7JE.js";import"./useValueChanged-BUNxdFiJ.js";import"./CollapsiblePanel-Dd1M5TG9.js";import"./MultiColumnSortDialog-CFOj4bAs.js";import"./MenuTrigger-CQRFhwW_.js";import"./CompositeItem-B3dhh8ia.js";import"./ToolbarRootContext-Dt3o3mOm.js";import"./getDisabledMountTransitionStyles-2Y8GdGAv.js";import"./getPseudoElementBounds-BmO4MZ3H.js";import"./chevron-down-UD5qoask.js";import"./index-DRucm0b5.js";import"./error-Cia9mwql.js";import"./BaseCbacBanner-bC-IYL-r.js";import"./makeExternalStore-CmWedr43.js";import"./Tooltip-OPdt0l6L.js";import"./PopoverPopup-BxsPUhZJ.js";import"./toNumber-Bv0An-Lw.js";import"./tick-lvvqI-zN.js";import"./DropdownField-daOnZPEH.js";import"./withOsdkMetrics-C5gJ204R.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
