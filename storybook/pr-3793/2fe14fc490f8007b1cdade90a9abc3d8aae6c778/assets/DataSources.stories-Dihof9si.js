import{j as r}from"./iframe-Cw_qhF0N.js";import{O as b}from"./object-table-DjPGM6wa.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DAmXqyTA.js";import{u as g}from"./useOsdkClient-DoF29EO5.js";import"./preload-helper-BOMIoqbF.js";import"./Table-DSSm1fKK.js";import"./index-TvapIid3.js";import"./Dialog-CLJKeedb.js";import"./cross-D-XWoAQF.js";import"./svgIconContainer-BTHlx_Hh.js";import"./useBaseUiId-BNu8us2u.js";import"./InternalBackdrop-DHfQ_n5T.js";import"./composite-Cn4M-AS0.js";import"./index-lqLv8je1.js";import"./index-Di-hPO50.js";import"./index-w42VGXsS.js";import"./useEventCallback-Bj9dX_fk.js";import"./SkeletonBar-CUo2yd26.js";import"./LoadingCell-gfwDxef7.js";import"./ColumnConfigDialog-BlQkjEzx.js";import"./DraggableList-Bo3Tcy6E.js";import"./search-BrIW3_zE.js";import"./Input-Bfec5TXw.js";import"./useControlled-5GWIAJrV.js";import"./isEqual-8Gu1sET9.js";import"./isObject-CJz3e4Br.js";import"./Button-rFXve3X8.js";import"./ActionButton-CrbFv_hF.js";import"./Checkbox-BOh-AO8R.js";import"./useValueChanged-ZB7hU4o5.js";import"./CollapsiblePanel-BKTgJMbu.js";import"./MultiColumnSortDialog-wT10UvvH.js";import"./MenuTrigger-DUfNfRvP.js";import"./CompositeItem-Dxc3ZApE.js";import"./ToolbarRootContext-BIaEKKO2.js";import"./getDisabledMountTransitionStyles-ByhIP2yz.js";import"./getPseudoElementBounds-DgyzHOri.js";import"./chevron-down-IhPewwA3.js";import"./index-7blLQTYn.js";import"./error-qvLsAaDE.js";import"./BaseCbacBanner-mENaFGSF.js";import"./makeExternalStore-CcclNskg.js";import"./Tooltip-XdCb1jYX.js";import"./PopoverPopup-BdOGuII2.js";import"./toNumber-DU1_CO-_.js";import"./tick-BZ6PljLM.js";import"./DropdownField-CmpIuvUo.js";import"./withOsdkMetrics-C81Q0htC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
