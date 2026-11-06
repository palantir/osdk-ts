import{j as r}from"./iframe-CNCsodpO.js";import{O as b}from"./object-table-XuAfOsME.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Co3d_hQb.js";import{u as g}from"./useOsdkClient-D5sei-fs.js";import"./preload-helper-BcSdXRr8.js";import"./Table-Bwb-19Mt.js";import"./index-DZaiIimE.js";import"./Dialog-D6UwLMk_.js";import"./cross-ByI78NKq.js";import"./svgIconContainer-D0BYcghd.js";import"./useBaseUiId-BM8If8HJ.js";import"./InternalBackdrop-DpvX0-2J.js";import"./composite-D-lHYX2y.js";import"./index-JERw882y.js";import"./index-BiV4_PIL.js";import"./index-DnBAC0DA.js";import"./useEventCallback-BC6LGbHR.js";import"./SkeletonBar-CtqMhpLq.js";import"./LoadingCell-USQtKWyS.js";import"./ColumnConfigDialog-Cfc9mSRc.js";import"./DraggableList-e3jVF2rK.js";import"./search-BLGSqUK3.js";import"./Input-DEq1aCXP.js";import"./useControlled-jyzXrKzG.js";import"./Button-DdjGWYgj.js";import"./small-cross-bytaAr9i.js";import"./ActionButton-DJLD6pzf.js";import"./Checkbox-DS6veKru.js";import"./useValueChanged-B79ahhhf.js";import"./CollapsiblePanel-Bey-NPEU.js";import"./MultiColumnSortDialog-B0nX3_Xv.js";import"./MenuTrigger-CSit46lD.js";import"./CompositeItem-CznsiIYk.js";import"./ToolbarRootContext-D2snF5qH.js";import"./getDisabledMountTransitionStyles-CZyt8PVf.js";import"./getPseudoElementBounds-CBt4F6dS.js";import"./chevron-down-QtQgwZHW.js";import"./index-ikLawp9H.js";import"./error-vSyclIj9.js";import"./BaseCbacBanner-CSV7xl3u.js";import"./makeExternalStore-MQ-cLLpt.js";import"./Tooltip-A2wRUbEy.js";import"./isObject-BeJ3unj3.js";import"./debounce-BN80GkFI.js";import"./tick-B29x5y3C.js";import"./DropdownField-ChmGLrin.js";import"./isEqual-CCg3GprE.js";import"./_baseIsEqual-h7eCMjyK.js";import"./withOsdkMetrics-DJIl7LC3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
