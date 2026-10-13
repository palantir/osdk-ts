import{j as r}from"./iframe-DkjIhjOk.js";import{O as b}from"./object-table-DjhA7KTC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BM9e_0aA.js";import{u as g}from"./useOsdkClient-CXgoPmaj.js";import"./preload-helper-DUI5tsck.js";import"./Table-YRTYsQnk.js";import"./index-Ci1HsxQf.js";import"./Dialog-B-doa8PC.js";import"./cross-BOLu8mlC.js";import"./svgIconContainer-bvG5TW2Y.js";import"./useBaseUiId-Biend9O3.js";import"./InternalBackdrop-C_M3PWM9.js";import"./composite-DVDI3Vyc.js";import"./index-ey6hl2b8.js";import"./index--Nzol5yv.js";import"./index-C-30e07L.js";import"./useEventCallback-BcNnEe4O.js";import"./SkeletonBar-xPxJdYTs.js";import"./LoadingCell-RKWHNWRh.js";import"./ColumnConfigDialog-DcTSIA3i.js";import"./DraggableList-DelcAz5h.js";import"./search-BZ8v_096.js";import"./Input-D-eMrt1E.js";import"./useControlled-BTghw2bz.js";import"./Button-CwSvPgha.js";import"./small-cross-Bdoag7lD.js";import"./ActionButton-DnSGyXBp.js";import"./Checkbox-BUlFL2Ay.js";import"./useValueChanged-mGVslq15.js";import"./CollapsiblePanel-DeuzuEYY.js";import"./MultiColumnSortDialog-BW9H5Lbm.js";import"./MenuTrigger-JLOD6Cua.js";import"./CompositeItem-BNwAusbR.js";import"./ToolbarRootContext-6z2XExln.js";import"./getDisabledMountTransitionStyles-4RzuPJj6.js";import"./getPseudoElementBounds-Cjnm34tD.js";import"./chevron-down-DahpzRGw.js";import"./index-BSyqZrwB.js";import"./error-B5H2RzDH.js";import"./BaseCbacBanner-BRzJz9wR.js";import"./makeExternalStore-DV2VnHUE.js";import"./Tooltip-A5u3Ouiv.js";import"./PopoverPopup-D3VoNSFI.js";import"./debounce-JLt9Gzvl.js";import"./tick-PgSwRzNQ.js";import"./DropdownField-BL_jj1eH.js";import"./isEqual-BroWPddn.js";import"./withOsdkMetrics-CFjDkd46.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
