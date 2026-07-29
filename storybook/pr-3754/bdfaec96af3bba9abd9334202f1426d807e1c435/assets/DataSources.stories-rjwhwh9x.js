import{j as r}from"./iframe-Cpo2Lb7Q.js";import{O as b}from"./object-table-5Jh_3dqt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-3NwkkZ3k.js";import{u as g}from"./useOsdkClient-DmZx15_x.js";import"./preload-helper-BTyBDeYw.js";import"./Table-DYI1bu7c.js";import"./index-DAIxb8lO.js";import"./Dialog-BcvgDMAE.js";import"./cross-CZFyZqXF.js";import"./svgIconContainer-CNBgUvgp.js";import"./useBaseUiId-C71UhqfB.js";import"./InternalBackdrop-BbBNeTmM.js";import"./composite-lg9O8pjM.js";import"./index-P8ZVWR7P.js";import"./index-BzSe1Ywi.js";import"./index-BbCiixnW.js";import"./useEventCallback-CXI_gnIi.js";import"./SkeletonBar-V58QqV18.js";import"./LoadingCell-CNLIcZ1_.js";import"./ColumnConfigDialog-CpBrKYB4.js";import"./DraggableList-D-hNhtrV.js";import"./search-81KRYPyx.js";import"./Input-Cq3cg5h0.js";import"./useControlled-Du4CUvuR.js";import"./isEqual-C-XNtB89.js";import"./isObject-DQzLRM1_.js";import"./Button-DvY2Q1-Z.js";import"./ActionButton-CEbVE-_9.js";import"./Checkbox-CmhKE0_L.js";import"./useValueChanged-wmiaDnHO.js";import"./CollapsiblePanel-DX31vVrS.js";import"./MultiColumnSortDialog-D0MoyL6S.js";import"./MenuTrigger-DjPrBlqb.js";import"./CompositeItem-Can9NOH7.js";import"./ToolbarRootContext-4YzqWCdW.js";import"./getDisabledMountTransitionStyles-CVyvKvVG.js";import"./getPseudoElementBounds-B1IEE38k.js";import"./chevron-down-BSTwpJrf.js";import"./index-DxrxQtdn.js";import"./error-C4NjMbrc.js";import"./BaseCbacBanner-BKoq64Pz.js";import"./makeExternalStore-Bmx7Tt0X.js";import"./Tooltip-BQBIdErB.js";import"./PopoverPopup-D5V5N6Lq.js";import"./toNumber-BK28PHzs.js";import"./tick-CLQ_tC5j.js";import"./DropdownField-BH_EsL1V.js";import"./withOsdkMetrics-j77wZ3nI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
