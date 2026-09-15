import{j as r}from"./iframe-aV2EncWj.js";import{O as b}from"./object-table-C7sU_pMg.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BjJtADO9.js";import{u as g}from"./useOsdkClient-D27FNOXw.js";import"./preload-helper-BEXd_GfO.js";import"./Table-CQynln8M.js";import"./index-DAg7UqCb.js";import"./Dialog-DlVOlxsL.js";import"./cross-dxy14_5g.js";import"./svgIconContainer-BCVXBQ-1.js";import"./useBaseUiId-C7CCsH5x.js";import"./InternalBackdrop-kh4mgNPa.js";import"./composite-Dq2CI2j-.js";import"./index-hA2PEeQp.js";import"./index-BfjZxAF2.js";import"./index-DFQXRJJ6.js";import"./useEventCallback-D6xgPZYQ.js";import"./SkeletonBar-jVQq-MBX.js";import"./LoadingCell-_OHgwT2O.js";import"./ColumnConfigDialog-BEWGhcWr.js";import"./DraggableList-Bu6HBV3-.js";import"./search-eiqCYccO.js";import"./Input-DvwYRcaH.js";import"./useControlled-hdV7mmig.js";import"./Button-D_vltk0m.js";import"./small-cross-DA-oeMpB.js";import"./ActionButton-B1GQvJHP.js";import"./Checkbox-Dk_n3UR_.js";import"./useValueChanged-DvDRB8wM.js";import"./CollapsiblePanel-k7ZGWOLV.js";import"./MultiColumnSortDialog-CeHy5r4C.js";import"./MenuTrigger-CXD8O-es.js";import"./CompositeItem-DvEec9Z1.js";import"./ToolbarRootContext-C9SuiabC.js";import"./getDisabledMountTransitionStyles-bBx198Lm.js";import"./getPseudoElementBounds-DNc-4NGF.js";import"./chevron-down-ZHnmZ23u.js";import"./index-C659o23F.js";import"./error-Bsy631Mv.js";import"./BaseCbacBanner-DKBdpqXI.js";import"./makeExternalStore-DG-eMtQv.js";import"./Tooltip-DgN0O71v.js";import"./PopoverPopup-frampLhw.js";import"./debounce-NzCavBVE.js";import"./tick-3h3QxDrA.js";import"./DropdownField-Colx8jAu.js";import"./isEqual-WzC3eRgn.js";import"./withOsdkMetrics-DJdEIIDz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
