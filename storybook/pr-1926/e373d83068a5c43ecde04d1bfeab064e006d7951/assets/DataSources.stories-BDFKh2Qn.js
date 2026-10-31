import{j as r}from"./iframe-0Iz5vwcT.js";import{O as b}from"./object-table-DKWAT-Fj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-EHBYiR5h.js";import{u as g}from"./useOsdkClient-BuNKTI6L.js";import"./preload-helper-DPuYeI1F.js";import"./Table-DQnxVUz9.js";import"./index-CwqL2BSp.js";import"./Dialog-zoM-tL9f.js";import"./cross-zS2Wnz2V.js";import"./svgIconContainer--rVYZd1H.js";import"./useBaseUiId-BzcgVOgr.js";import"./InternalBackdrop-CIp9NUV4.js";import"./composite-N0Lz-u2v.js";import"./index-Fpqw52jH.js";import"./index-CJbD8PH4.js";import"./index-BZki0KLB.js";import"./useEventCallback-OZngxyt9.js";import"./SkeletonBar-B5YslJhy.js";import"./LoadingCell-P7TCSaZN.js";import"./ColumnConfigDialog-4xk1CJcu.js";import"./DraggableList-DWCTZj5F.js";import"./search-C60pdPoy.js";import"./Input-CxV_aY0Y.js";import"./useControlled-BgJ32gqU.js";import"./Button-DmPkGrX2.js";import"./small-cross-CVGlFgTv.js";import"./ActionButton-C5FOmGzz.js";import"./Checkbox-DsJE1lPn.js";import"./useValueChanged-C8jXi1Db.js";import"./CollapsiblePanel-BCIeAMta.js";import"./MultiColumnSortDialog-DGCz0v4U.js";import"./MenuTrigger-DTlZrVLo.js";import"./CompositeItem-DmRUbVI5.js";import"./ToolbarRootContext-C3DWskzf.js";import"./getDisabledMountTransitionStyles-Cx-ixMqU.js";import"./getPseudoElementBounds-BUv5HBAP.js";import"./chevron-down-BAJ5mZyN.js";import"./index-Cl9Abjho.js";import"./error-D9h6iLxx.js";import"./BaseCbacBanner-CQg0ZUIR.js";import"./makeExternalStore-CFnbMMz3.js";import"./Tooltip-BVWIJEtT.js";import"./PopoverPopup-CowTNg7A.js";import"./debounce-B18_zKUH.js";import"./tick-Jp1l8F3U.js";import"./DropdownField-DFrco9Qo.js";import"./isEqual-DzmNlRkK.js";import"./withOsdkMetrics-kzWOWE3o.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
