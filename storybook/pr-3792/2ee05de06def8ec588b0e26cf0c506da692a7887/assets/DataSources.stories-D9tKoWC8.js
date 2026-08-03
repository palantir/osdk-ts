import{j as r}from"./iframe-NH2TPfrt.js";import{O as b}from"./object-table-BK__0nSS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CNQ8-0CO.js";import{u as g}from"./useOsdkClient-CH4mFKyg.js";import"./preload-helper-DnfD210b.js";import"./Table-CuUO-8wd.js";import"./index-Dq4weQoF.js";import"./Dialog-BJy3217O.js";import"./cross-24tcUSkS.js";import"./svgIconContainer-BUKRs426.js";import"./useBaseUiId-4nRGSpr1.js";import"./InternalBackdrop-CyExLgCb.js";import"./composite-C2uwlMq3.js";import"./index-UEOUqQcW.js";import"./index-Cj-ZNFWv.js";import"./index-DK-HFNdc.js";import"./useEventCallback-BAyGh-mM.js";import"./SkeletonBar-D5-VroV9.js";import"./LoadingCell-Cd_w0Tes.js";import"./ColumnConfigDialog-DQUyct1S.js";import"./DraggableList-Bf5ssxLW.js";import"./search-3tww_Y-8.js";import"./Input-A00tbVb5.js";import"./useControlled-BF8AHFxI.js";import"./isEqual-0xRPSbep.js";import"./isObject-sRh_S4J1.js";import"./Button-BHf--f-c.js";import"./ActionButton-CaZsvwmy.js";import"./Checkbox-BsgnUcK_.js";import"./useValueChanged-Bu7iX5lg.js";import"./CollapsiblePanel-B45AwlAl.js";import"./MultiColumnSortDialog-NEhtrgyd.js";import"./MenuTrigger-1I8zp5W3.js";import"./CompositeItem-CVj27Z6H.js";import"./ToolbarRootContext-Pl3qLOs4.js";import"./getDisabledMountTransitionStyles-DxJl6O0G.js";import"./getPseudoElementBounds-gWx4w7cR.js";import"./chevron-down-BOaz_Rvj.js";import"./index-Ciy6Wj_i.js";import"./error-B94IGPmw.js";import"./BaseCbacBanner-BxJG3-8s.js";import"./makeExternalStore-CwBhR2PL.js";import"./Tooltip-DOM36q_X.js";import"./PopoverPopup-CONheFa9.js";import"./toNumber-Bw3pxWk0.js";import"./tick-Dzh3Ithd.js";import"./DropdownField-DEpsAiDX.js";import"./withOsdkMetrics-DL-MS1V5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
