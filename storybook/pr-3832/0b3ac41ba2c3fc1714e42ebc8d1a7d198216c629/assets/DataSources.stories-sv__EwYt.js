import{j as r}from"./iframe-Bq08WkX6.js";import{O as b}from"./object-table-CBEEYibu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DnkfPNpb.js";import{u as g}from"./useOsdkClient-B6U8ncOQ.js";import"./preload-helper-CzbD-Dkq.js";import"./Table-BN4XpBnX.js";import"./index-15tgvzIh.js";import"./Dialog-DVLXkLrf.js";import"./cross-D7wZ2dNk.js";import"./svgIconContainer-BsfTAwTI.js";import"./useBaseUiId-D80yW2NB.js";import"./InternalBackdrop-Bm4mdBfi.js";import"./composite-DQ3jHuKN.js";import"./index-DM3xTDXQ.js";import"./index-CUtG1M-d.js";import"./index-CSliVaa9.js";import"./useEventCallback-DStUoWzh.js";import"./SkeletonBar-Bd0kxzdZ.js";import"./LoadingCell-BOxDb49A.js";import"./ColumnConfigDialog-DlaDcvzi.js";import"./DraggableList-DyCmlC_X.js";import"./search-CsWrT34i.js";import"./Input-BAP4LU5T.js";import"./useControlled-DZI1tbIH.js";import"./isEqual-B97z0_Vd.js";import"./isObject-Cynw8Plv.js";import"./Button-f9Giaknz.js";import"./ActionButton-BsBOT6Ps.js";import"./Checkbox-BvDCJt0H.js";import"./useValueChanged-Q78KmwEB.js";import"./CollapsiblePanel-DOlT5hzg.js";import"./MultiColumnSortDialog-jXZXIEnN.js";import"./MenuTrigger-t0nn8x8v.js";import"./CompositeItem-D9XKb7P8.js";import"./ToolbarRootContext-C36v0QgL.js";import"./getDisabledMountTransitionStyles-C_rTqAIJ.js";import"./getPseudoElementBounds-n7-i415r.js";import"./chevron-down-B3lt0Bn5.js";import"./index-DC9h8Vk1.js";import"./error-CJJkcl9r.js";import"./BaseCbacBanner-dDgY6GdX.js";import"./makeExternalStore-TiqtXy3q.js";import"./Tooltip-BrAy_wST.js";import"./PopoverPopup-D157sLef.js";import"./toNumber-VDnaXJ38.js";import"./tick-D_vzxwlx.js";import"./DropdownField-B-n_Gvm6.js";import"./withOsdkMetrics-C32CoUwf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
