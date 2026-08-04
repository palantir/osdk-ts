import{j as r}from"./iframe-B312ejAg.js";import{O as b}from"./object-table-DnoG2D9F.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DDbJg05w.js";import{u as g}from"./useOsdkClient-CmtDNjlP.js";import"./preload-helper-y_TwqfdY.js";import"./Table-CWU8juG-.js";import"./index-M8CqzHEe.js";import"./Dialog-tA5-WrCl.js";import"./cross-fdsbY64l.js";import"./svgIconContainer-CzNhgEtv.js";import"./useBaseUiId-anpR_KLF.js";import"./InternalBackdrop-Igg-F26O.js";import"./composite-EvWupaEF.js";import"./index-Cf0quKT1.js";import"./index-DAOTkIj1.js";import"./index-kf4fDJGN.js";import"./useEventCallback-BmcDVE9F.js";import"./SkeletonBar-Cp--rqZE.js";import"./LoadingCell-CxO_8mfq.js";import"./ColumnConfigDialog-BJ33PpUQ.js";import"./DraggableList-CqqS-PfK.js";import"./search-DkAQ0ID2.js";import"./Input-hV3H3zUc.js";import"./useControlled-Dbu3jRTE.js";import"./isEqual-DX8Pba1x.js";import"./isObject-BmWUUYs3.js";import"./Button-CREGuHb1.js";import"./ActionButton-BO9c2wPo.js";import"./Checkbox-oHmNLRGC.js";import"./useValueChanged-6i9rivvp.js";import"./CollapsiblePanel-BNxxYAyz.js";import"./MultiColumnSortDialog-CEYgGiwr.js";import"./MenuTrigger-CQVoOi76.js";import"./CompositeItem-B5kZOPHG.js";import"./ToolbarRootContext-CZlcd-GQ.js";import"./getDisabledMountTransitionStyles-DsLtSiiY.js";import"./getPseudoElementBounds-DikY_gPm.js";import"./chevron-down-DR1l8zQy.js";import"./index-OifC9Xwy.js";import"./error-CcgwDgNh.js";import"./BaseCbacBanner-BXUATeZK.js";import"./makeExternalStore-UZoMjkrc.js";import"./Tooltip-DSWFjtCt.js";import"./PopoverPopup-D2zQwFUn.js";import"./toNumber-D7Zr4H5G.js";import"./tick-BV5lo1Vw.js";import"./DropdownField-RaJqOZ62.js";import"./withOsdkMetrics-BvU1ehSn.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
