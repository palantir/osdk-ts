import{j as r}from"./iframe-DV_FvNkW.js";import{O as b}from"./object-table-DBmCBesk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-bcdxIqJv.js";import{u as g}from"./useOsdkClient-D2BQ36-h.js";import"./preload-helper-BArELN5X.js";import"./Table-BcGKXj_n.js";import"./index-BLvj8uzS.js";import"./Dialog-C_TZGJh8.js";import"./cross-JLut_rtX.js";import"./svgIconContainer-CK52f1Bh.js";import"./useBaseUiId-DZEvNQMB.js";import"./InternalBackdrop-CJZRfENn.js";import"./composite-GUdKrYKt.js";import"./index-D2s-C-iU.js";import"./index-DUDZNy0X.js";import"./index-gtkvlodh.js";import"./useEventCallback-Cgmwy5UD.js";import"./SkeletonBar-Bi5m-WwI.js";import"./LoadingCell-CrYdp2fb.js";import"./ColumnConfigDialog-S-CuKGO1.js";import"./DraggableList-CWEVxQVF.js";import"./search-1jaslfQq.js";import"./Input-WondKUmM.js";import"./useControlled-CjcZvg90.js";import"./isEqual-DnamcrPx.js";import"./isObject-B1GZY_rQ.js";import"./Button-CDeNX6hI.js";import"./ActionButton-DIxaviUO.js";import"./Checkbox-Cg_iqv7P.js";import"./useValueChanged-MoTm1s5g.js";import"./CollapsiblePanel-DUEqKjo8.js";import"./MultiColumnSortDialog-oMxfvcXd.js";import"./MenuTrigger-B6nmWU4b.js";import"./CompositeItem-B9cGFmy6.js";import"./ToolbarRootContext-DhlEIOBQ.js";import"./getDisabledMountTransitionStyles-C3QZqvkg.js";import"./getPseudoElementBounds-BOWuNL3O.js";import"./chevron-down-CZeNdi1s.js";import"./index-DJXI62-C.js";import"./error-BkuU0fxo.js";import"./BaseCbacBanner-BzFkCYx7.js";import"./makeExternalStore-BAiQukHm.js";import"./Tooltip-BP-iOfCT.js";import"./PopoverPopup-KsgDK_Va.js";import"./toNumber-xsn9SK-M.js";import"./tick-Dc2VpgGC.js";import"./DropdownField-Dj7YH9Q-.js";import"./withOsdkMetrics-CaJhDKNf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
