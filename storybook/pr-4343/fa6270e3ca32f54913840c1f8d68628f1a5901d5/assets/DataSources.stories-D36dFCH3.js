import{j as r}from"./iframe-CDFbPseP.js";import{O as b}from"./object-table-DUOcSi8T.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dd2qZbeX.js";import{u as g}from"./useOsdkClient-DGrdJ83Z.js";import"./preload-helper-BKjsnnFk.js";import"./Table-DMQnRqi0.js";import"./index-CzYE_gFj.js";import"./Dialog-Dv0_z0ly.js";import"./cross-D1CsBnZQ.js";import"./svgIconContainer-BNgOwI7J.js";import"./useBaseUiId-BT9BKuc8.js";import"./InternalBackdrop-Dlq9iOxD.js";import"./composite-DoGjJBYp.js";import"./index-zCdxyZBm.js";import"./index-B9ZyEEfj.js";import"./index-DHvlVsA3.js";import"./useEventCallback-BV_0VhHt.js";import"./SkeletonBar-APOybFL0.js";import"./LoadingCell-2H_eFQDc.js";import"./ColumnConfigDialog-Crbpzmli.js";import"./DraggableList-BeB_zh_T.js";import"./search-B_GZiPBG.js";import"./Input-RJbqaFIV.js";import"./useControlled-DSth82Ot.js";import"./Button-adqe8TBe.js";import"./small-cross-Dij3KccF.js";import"./ActionButton-0OmN--Ya.js";import"./Checkbox-BPjU0jTJ.js";import"./useValueChanged-BKwGtryl.js";import"./CollapsiblePanel-B_EKx4xS.js";import"./MultiColumnSortDialog-ld-Yv8ju.js";import"./MenuTrigger-CxKvqDeW.js";import"./CompositeItem-CBWcSsRg.js";import"./ToolbarRootContext-B4N7QEkj.js";import"./getDisabledMountTransitionStyles-C4CA8fPv.js";import"./getPseudoElementBounds-3mroWXjI.js";import"./chevron-down-LTvAL7jy.js";import"./index-sMIecie8.js";import"./error-B-c6YY8H.js";import"./BaseCbacBanner-DQXK5STs.js";import"./makeExternalStore-CffN4Zs6.js";import"./Tooltip-kSDQRB-X.js";import"./PopoverPopup-Dx_YvUJO.js";import"./debounce-CP1jiFBE.js";import"./tick-dn_tR7od.js";import"./DropdownField-CSbOb56z.js";import"./isEqual-GJObA0dv.js";import"./withOsdkMetrics-C_TM08QX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
