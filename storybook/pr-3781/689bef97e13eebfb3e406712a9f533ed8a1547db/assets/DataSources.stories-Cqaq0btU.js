import{j as r}from"./iframe-CVw8lT_p.js";import{O as b}from"./object-table-DX270X06.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CEOkjIeR.js";import{u as g}from"./useOsdkClient-lbkGBCiM.js";import"./preload-helper-39HDiriG.js";import"./Table-Cm1zmFBp.js";import"./index-seJCcwx0.js";import"./Dialog-DiLz0XQ4.js";import"./cross-CKjM0IJA.js";import"./svgIconContainer-j0iPz0xP.js";import"./useBaseUiId-DX7AvzL6.js";import"./InternalBackdrop-BjPX4DaQ.js";import"./composite-02otrQol.js";import"./index-DOrwx4ox.js";import"./index-BV9_SaTX.js";import"./index-fcZuwg4_.js";import"./useEventCallback-DqnyWBUG.js";import"./SkeletonBar-DTCVeuOr.js";import"./LoadingCell-Cxdnzx9B.js";import"./ColumnConfigDialog-DnyF6P4z.js";import"./DraggableList-4bPUmXfn.js";import"./search-B9c9IUJL.js";import"./Input-aUjsDD_S.js";import"./useControlled-BjfgiGuC.js";import"./isEqual-vos-yDjT.js";import"./isObject-BikITpyp.js";import"./Button-DDnd28Ua.js";import"./ActionButton-To3utIpL.js";import"./Checkbox-CEm1K9hX.js";import"./useValueChanged-DF2Ro_hc.js";import"./CollapsiblePanel-BkJVDq8v.js";import"./MultiColumnSortDialog-BvdVoeew.js";import"./MenuTrigger-BWSPLmCS.js";import"./CompositeItem-DWFZqP11.js";import"./ToolbarRootContext-CDJpuj06.js";import"./getDisabledMountTransitionStyles-BjM-q0Kj.js";import"./getPseudoElementBounds-CZc1qxZw.js";import"./chevron-down-BYHRqgTY.js";import"./index-B0nXunlt.js";import"./error-70eabRvD.js";import"./BaseCbacBanner-C42BTLFx.js";import"./makeExternalStore-DJnA5Pzt.js";import"./Tooltip-pXyO8Ory.js";import"./PopoverPopup-Cm-CCz32.js";import"./toNumber-CvHAYR8q.js";import"./tick-BBlHqKx_.js";import"./DropdownField-CibN-iRH.js";import"./withOsdkMetrics-B0amdy6Q.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
