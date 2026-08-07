import{j as r}from"./iframe-D50gvACc.js";import{O as b}from"./object-table-ZrlfaP7L.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BC4pjv7N.js";import{u as g}from"./useOsdkClient-suy4OVOq.js";import"./preload-helper-m4a9UOSi.js";import"./Table-B6t6wwW-.js";import"./index-D9W_tl0t.js";import"./Dialog-CkVl3aVU.js";import"./cross-Pq5KldeO.js";import"./svgIconContainer-CrMVLaIb.js";import"./useBaseUiId-B4CrM7Z9.js";import"./InternalBackdrop-C90kG2yo.js";import"./composite-ZZ8bIc9H.js";import"./index-DV6IgZCx.js";import"./index-r25c1lQA.js";import"./index-DkDBiS-l.js";import"./useEventCallback-DQIC9jeP.js";import"./SkeletonBar-COAj0VN9.js";import"./LoadingCell-CFVOg4i3.js";import"./ColumnConfigDialog-C2En9dmD.js";import"./DraggableList-cBrulBDd.js";import"./search-B-iaR71s.js";import"./Input-BVlUigg9.js";import"./useControlled-DhIeaHMy.js";import"./isEqual-DC3R2B__.js";import"./isObject-BKu_NypX.js";import"./Button-Cc_XGaKn.js";import"./ActionButton-BnBWU7b6.js";import"./Checkbox-D0iA7QiN.js";import"./useValueChanged-Bv1-7XTv.js";import"./CollapsiblePanel-BK7f2JiZ.js";import"./MultiColumnSortDialog-Cu2Su_pp.js";import"./MenuTrigger-CPoMb3K-.js";import"./CompositeItem-nz8C8OlV.js";import"./ToolbarRootContext-Bo9_3IT0.js";import"./getDisabledMountTransitionStyles-CjBbMdti.js";import"./getPseudoElementBounds-CRj6P487.js";import"./chevron-down-Bre7sq7M.js";import"./index-CvJL4ig_.js";import"./error-D_eBDVCi.js";import"./BaseCbacBanner-D4hPwZ4m.js";import"./makeExternalStore-DAih4Bbz.js";import"./Tooltip-DofsflHR.js";import"./PopoverPopup-C7sk1G4a.js";import"./toNumber-CmflZWAm.js";import"./tick-BIdy8k4j.js";import"./DropdownField-CR50LWxf.js";import"./withOsdkMetrics-BboHIQkZ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
