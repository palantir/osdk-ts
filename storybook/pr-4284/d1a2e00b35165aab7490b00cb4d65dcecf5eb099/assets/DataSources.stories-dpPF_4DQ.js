import{j as r}from"./iframe-Cko_WFf-.js";import{O as b}from"./object-table-Ch529tBT.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-EbC2n91U.js";import{u as g}from"./useOsdkClient-BT_HUqnV.js";import"./preload-helper-Cs73q2ui.js";import"./Table-IeH6N1e1.js";import"./index-2T8Wwein.js";import"./Dialog-BR6pkPqn.js";import"./cross-CBXHEXHr.js";import"./svgIconContainer-DUJTWNCq.js";import"./useBaseUiId-DydFiAor.js";import"./InternalBackdrop-Be4bBso-.js";import"./composite-BgWWCC0G.js";import"./index-C5PQsA1_.js";import"./index-Ba2bjKcU.js";import"./index-C-alEbte.js";import"./useEventCallback-F2alGF6R.js";import"./SkeletonBar-wTcJ9b1g.js";import"./LoadingCell-B8WfG5Sx.js";import"./ColumnConfigDialog-8y7Tj8ex.js";import"./DraggableList-BTP6KGBD.js";import"./search-DlsTvmsp.js";import"./Input-CP5Ce819.js";import"./useControlled-D2dKgCSU.js";import"./Button-B8X7gllj.js";import"./small-cross-CBW8u4eS.js";import"./ActionButton-C4kdXe-J.js";import"./Checkbox-D-KYaXtb.js";import"./useValueChanged-BzJUwUky.js";import"./CollapsiblePanel-CmnzNIvq.js";import"./MultiColumnSortDialog-Cd_ag-W4.js";import"./MenuTrigger-BcxS-dsu.js";import"./CompositeItem-CFHidUeB.js";import"./ToolbarRootContext-BZHxz8Zf.js";import"./getDisabledMountTransitionStyles-CO6R2Nlo.js";import"./getPseudoElementBounds-DV7dVXJb.js";import"./chevron-down-tjDGGRSV.js";import"./index-gK3sTX7L.js";import"./error-iyVGDwHQ.js";import"./BaseCbacBanner-COWJ2yUY.js";import"./makeExternalStore-CEUQtvPO.js";import"./Tooltip-BDxS5uB9.js";import"./PopoverPopup-D5S6yAxs.js";import"./debounce-JLZVI0I7.js";import"./tick-BFsL_7kT.js";import"./DropdownField-C0-1Vjc_.js";import"./isEqual-BVP2R1OT.js";import"./withOsdkMetrics-jyd-_lK5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
