import{j as r}from"./iframe-Bm3fa2Ga.js";import{O as b}from"./object-table-CN32R2L8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D27NsMn4.js";import{u as g}from"./useOsdkClient-BF01c34H.js";import"./preload-helper-D06pMuuX.js";import"./Table-CMOQFdw2.js";import"./index-exHa5srN.js";import"./Dialog-DPgA7HA4.js";import"./cross-BU7xL5ZY.js";import"./svgIconContainer-BMtH4hPo.js";import"./useBaseUiId-gpm2SMjj.js";import"./InternalBackdrop-Bhfp83tH.js";import"./composite-CeJsh_Dj.js";import"./index-LSlomKTu.js";import"./index-CSBVc4TV.js";import"./index-rk6eXQfS.js";import"./useEventCallback-CEmf2hqV.js";import"./SkeletonBar-Co7WW1h8.js";import"./LoadingCell-DbwzZSTM.js";import"./ColumnConfigDialog-BFIB5_qm.js";import"./DraggableList-BncsMZN7.js";import"./search-hZlNybQI.js";import"./Input-Bs9zmxov.js";import"./useControlled-CeZ9aCri.js";import"./isEqual-DYSA09uA.js";import"./isObject-BQ5tPhs4.js";import"./Button-CKJng19p.js";import"./ActionButton-FTSH7zNj.js";import"./Checkbox-De3q9A2T.js";import"./useValueChanged-8-72OZ4e.js";import"./CollapsiblePanel-BDf8BElQ.js";import"./MultiColumnSortDialog-C47pH7Rr.js";import"./MenuTrigger-txaj9CZA.js";import"./CompositeItem-DeL1bikB.js";import"./ToolbarRootContext-thHFFfWO.js";import"./getDisabledMountTransitionStyles-C3HmR4g3.js";import"./getPseudoElementBounds-n_2JPh_k.js";import"./chevron-down-CaanKCC-.js";import"./index-C8gxRxXp.js";import"./error-CUc3n5dL.js";import"./BaseCbacBanner-BsVIQ_Ip.js";import"./makeExternalStore-RYoaG-HB.js";import"./Tooltip-DKabOtn5.js";import"./PopoverPopup-C85aR5Bs.js";import"./toNumber-ChFXJ0W2.js";import"./tick-DSLlXIp8.js";import"./DropdownField-BAzEMy-q.js";import"./withOsdkMetrics-B-jEgCV5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
