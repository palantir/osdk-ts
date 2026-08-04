import{j as r}from"./iframe-Ch4YG9zO.js";import{O as b}from"./object-table-DwAUiwcL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-RMJK3sYw.js";import{u as g}from"./useOsdkClient-DspnLF5w.js";import"./preload-helper-B2FbqY3N.js";import"./Table-BLltzhIi.js";import"./index-Tj0gjODi.js";import"./Dialog-BNJ1i_u1.js";import"./cross-BsOxLVVI.js";import"./svgIconContainer-Cn1U1N9z.js";import"./useBaseUiId-n1xJoDj4.js";import"./InternalBackdrop-Buu-6QXj.js";import"./composite-Bj5YxLBn.js";import"./index-C9z0_KHF.js";import"./index-B1Pg27bT.js";import"./index-DQmnZDrR.js";import"./useEventCallback-1xds4HE8.js";import"./SkeletonBar-DC1PVcIm.js";import"./LoadingCell-D637ZThr.js";import"./ColumnConfigDialog-CIXD4mum.js";import"./DraggableList-BZENnRUa.js";import"./search-Dl_XkKU0.js";import"./Input-BqjoA6Wr.js";import"./useControlled-DDKlVuXM.js";import"./isEqual-BZeBOh-G.js";import"./isObject-BdykLpCq.js";import"./Button-BwCFldKH.js";import"./ActionButton-CTyZ0DCW.js";import"./Checkbox-CYouGi2t.js";import"./useValueChanged-D2NB_sbf.js";import"./CollapsiblePanel-26O5LN4W.js";import"./MultiColumnSortDialog-BEI-x7RL.js";import"./MenuTrigger-CCNiVl3M.js";import"./CompositeItem-D7zxms0O.js";import"./ToolbarRootContext-DFHW9hl5.js";import"./getDisabledMountTransitionStyles-Ceyf3F0l.js";import"./getPseudoElementBounds-ClJsMx2c.js";import"./chevron-down-BNKmlKfx.js";import"./index-DmkOCqw0.js";import"./error-KSQFRnjc.js";import"./BaseCbacBanner-B3WI1t1e.js";import"./makeExternalStore-Bqt01k7N.js";import"./Tooltip-BjX1cDFv.js";import"./PopoverPopup-C1JJDSzg.js";import"./toNumber-Dxpg4zZN.js";import"./tick-BL75HJvL.js";import"./DropdownField-C-VLwocU.js";import"./withOsdkMetrics-DjmuwpSc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
