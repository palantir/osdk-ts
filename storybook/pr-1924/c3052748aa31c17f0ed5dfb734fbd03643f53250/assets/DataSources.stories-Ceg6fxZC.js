import{j as r}from"./iframe-DM57FO0O.js";import{O as b}from"./object-table-BUncbmPw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-wTr2Iiac.js";import{u as g}from"./useOsdkClient-CMjaLpsJ.js";import"./preload-helper-CiDQt3z4.js";import"./Table-fAJkuYMM.js";import"./index-78xpG-CN.js";import"./Dialog-B0lIxBy0.js";import"./cross-C4FWi7U6.js";import"./svgIconContainer-M4pBKDc9.js";import"./useBaseUiId-LhiCCirY.js";import"./InternalBackdrop-B7cw_zj9.js";import"./composite-szsum3r3.js";import"./index-X1UuWlqK.js";import"./index-C9SVGTzI.js";import"./index-BDCm_GGT.js";import"./useEventCallback-CQNDnyq4.js";import"./SkeletonBar-BXNcPfxw.js";import"./LoadingCell-CCifMiw4.js";import"./ColumnConfigDialog-BeH1Bmdd.js";import"./DraggableList-B-6UJOIk.js";import"./search-Swo5uGHk.js";import"./Input-jbZr5DP-.js";import"./useControlled-DmurJkbB.js";import"./isEqual-Bpc4ZaBI.js";import"./isObject-B39z3wFu.js";import"./Button-BtR_Rgq_.js";import"./ActionButton-CuTsrFpF.js";import"./Checkbox-CxtuU-nw.js";import"./useValueChanged-B7JDyvaj.js";import"./CollapsiblePanel-7JaVin_2.js";import"./MultiColumnSortDialog-CTjKzaH_.js";import"./MenuTrigger-DLb09YCg.js";import"./CompositeItem-COr71cMo.js";import"./ToolbarRootContext-Dme1Nr8M.js";import"./getDisabledMountTransitionStyles-BNVUpdXb.js";import"./getPseudoElementBounds-DTdRK2OL.js";import"./chevron-down-Dy3xC1Qv.js";import"./index-CIEwid69.js";import"./error-B-7TqBpt.js";import"./BaseCbacBanner-DnBux0DR.js";import"./makeExternalStore-IjYBHzVF.js";import"./Tooltip-D9DM-LvZ.js";import"./PopoverPopup-DJ9h3nij.js";import"./toNumber-BcdoaNcr.js";import"./tick-D4_boYVT.js";import"./DropdownField-BHDZB30j.js";import"./withOsdkMetrics-U1ecBNOt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
