import{j as r}from"./iframe-lVIo6mCc.js";import{O as b}from"./object-table-DXxQNff2.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bhl4WVXQ.js";import{u as g}from"./useOsdkClient-di6Xqfxh.js";import"./preload-helper-BPCknu7S.js";import"./Table-nSjaGULp.js";import"./index-sQKHJ0R4.js";import"./Dialog-BFgYJDCN.js";import"./cross-DDW7y3Rx.js";import"./svgIconContainer-KAJria2X.js";import"./useBaseUiId-Bb_Owoni.js";import"./InternalBackdrop-hjJtUdco.js";import"./composite-Dyu8jPHN.js";import"./index-BPLBY7PN.js";import"./index-KnI2DQbj.js";import"./index-Dxls_Rr8.js";import"./useEventCallback-B3tJ4PYp.js";import"./SkeletonBar-DSmQVQye.js";import"./LoadingCell-CQ4ITvhW.js";import"./ColumnConfigDialog-CHgO6Ibs.js";import"./DraggableList-jP9CGfbS.js";import"./search-5GVEDD9j.js";import"./Input-BC_GUukM.js";import"./useControlled-D2ATBKpk.js";import"./Button-HHhZVC20.js";import"./small-cross-DJ1ySZs1.js";import"./ActionButton-ClryqIds.js";import"./Checkbox-By8aDHHp.js";import"./useValueChanged-CA7KhCt6.js";import"./CollapsiblePanel-C8RDA-GN.js";import"./MultiColumnSortDialog-LsoG3i1d.js";import"./MenuTrigger-BPqfQFrm.js";import"./CompositeItem-KgTOqVUP.js";import"./ToolbarRootContext-BEDTSOO-.js";import"./getDisabledMountTransitionStyles-BeNJaj2_.js";import"./getPseudoElementBounds-ChYvstEB.js";import"./chevron-down-DQF1xsk8.js";import"./index-amUPlgmX.js";import"./error-CvWvuZvg.js";import"./BaseCbacBanner-8ONf2RQq.js";import"./makeExternalStore-D7Usbb1F.js";import"./Tooltip-9AFmCZ_D.js";import"./PopoverPopup-3MhqAYn3.js";import"./debounce-COYGEiqP.js";import"./tick-DzyNfBq0.js";import"./DropdownField-Bz3GxUH-.js";import"./isEqual-D4ajbd5M.js";import"./withOsdkMetrics-DSn6dU66.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
