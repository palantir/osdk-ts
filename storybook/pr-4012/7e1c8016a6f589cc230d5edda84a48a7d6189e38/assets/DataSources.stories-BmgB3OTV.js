import{j as r}from"./iframe-BrWV3VGg.js";import{O as b}from"./object-table-CrendqfR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DzIMCNhG.js";import{u as g}from"./useOsdkClient-BN__21fG.js";import"./preload-helper-D6ZQDyfK.js";import"./Table-DYCqxzSX.js";import"./index-DYvdPCiw.js";import"./Dialog-DvKX2myG.js";import"./cross-BVo6wQKR.js";import"./svgIconContainer-BUmNfWM-.js";import"./useBaseUiId-C6P9jJC8.js";import"./InternalBackdrop-D1UeMOCj.js";import"./composite-CPJHb2Y2.js";import"./index-D9RcQQYw.js";import"./index-BNPYibjQ.js";import"./index-C83r31cI.js";import"./useEventCallback-S146GLX7.js";import"./SkeletonBar-rvURuLEV.js";import"./LoadingCell-BxwZLFGg.js";import"./ColumnConfigDialog-WuaK5VlN.js";import"./DraggableList-CSZ48Bvc.js";import"./search-Bx9ioHBB.js";import"./Input-CDM3tu-K.js";import"./useControlled-DP9gX7Yn.js";import"./Button-DQPjTYox.js";import"./small-cross-CSnrRgMJ.js";import"./ActionButton-BL72bfc_.js";import"./Checkbox-BvA02otE.js";import"./useValueChanged-BenORVWn.js";import"./CollapsiblePanel-CaX-I3uU.js";import"./MultiColumnSortDialog-DHvIDNS9.js";import"./MenuTrigger-BlICw_Sh.js";import"./CompositeItem-gO6CPQln.js";import"./ToolbarRootContext-C9pKuHkV.js";import"./getDisabledMountTransitionStyles-n4up3zHU.js";import"./getPseudoElementBounds-Dt0T_qF0.js";import"./chevron-down-hd2kSFPo.js";import"./index-BT_S32QN.js";import"./error-DAF972ng.js";import"./BaseCbacBanner-B8_ZpeGS.js";import"./makeExternalStore-mRetLKqP.js";import"./Tooltip-DI2aqz32.js";import"./PopoverPopup-CrFMP63L.js";import"./debounce-CK3d8RX5.js";import"./tick-CFOMyABR.js";import"./DropdownField-srPoQHQr.js";import"./isEqual-D6AHDfRS.js";import"./withOsdkMetrics-CQ4mIL1e.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
