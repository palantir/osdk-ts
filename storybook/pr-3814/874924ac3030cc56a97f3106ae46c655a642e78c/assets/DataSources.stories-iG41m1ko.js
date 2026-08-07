import{j as r}from"./iframe-B9T5oMDr.js";import{O as b}from"./object-table-DZNFhRRA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BPXefgCM.js";import{u as g}from"./useOsdkClient-DNxheivJ.js";import"./preload-helper-BPAbrKbo.js";import"./Table-CIGinEoD.js";import"./index-BbzHpAd2.js";import"./Dialog-D85F-kac.js";import"./cross-B02AaJUG.js";import"./svgIconContainer-DzM4Ci-u.js";import"./useBaseUiId-B_QbIUqB.js";import"./InternalBackdrop-wHc4Xe94.js";import"./composite-youxeV_z.js";import"./index-BDL1OtV7.js";import"./index-mRe9n3gj.js";import"./index-Cmo-Ost7.js";import"./useEventCallback-DuSPeUKo.js";import"./SkeletonBar-Bv69qq-0.js";import"./LoadingCell-DGtbyqSk.js";import"./ColumnConfigDialog-C9t4Em6N.js";import"./DraggableList-BwPDHFS6.js";import"./search-BibTnjwg.js";import"./Input-k9vi4ZnU.js";import"./useControlled-B65L2iRV.js";import"./isEqual-DgNUFbmc.js";import"./isObject-BgKMqNpZ.js";import"./Button-jzGBL2cN.js";import"./small-cross-BtSe1Br5.js";import"./ActionButton-BQALkdcW.js";import"./Checkbox-BSPhRBEZ.js";import"./useValueChanged-DAeaTOF1.js";import"./CollapsiblePanel-CB2C8DyA.js";import"./MultiColumnSortDialog-CqSPDtnN.js";import"./MenuTrigger-Bm4TpnTD.js";import"./CompositeItem-_z9g8yfT.js";import"./ToolbarRootContext-BsgfQ9_l.js";import"./getDisabledMountTransitionStyles-CabTrKoF.js";import"./getPseudoElementBounds-CawSqWOn.js";import"./chevron-down-BEQDQVHr.js";import"./index-Bq_KCjK9.js";import"./error-Con-Q4S3.js";import"./BaseCbacBanner-BUKiEgFB.js";import"./makeExternalStore-5V9xTDRp.js";import"./Tooltip-BoO118pB.js";import"./PopoverPopup-CdrQPjRj.js";import"./toNumber-B7xpL-i_.js";import"./tick-kXmQYu5u.js";import"./DropdownField-CSSNURoZ.js";import"./withOsdkMetrics-D1MjRaaQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
