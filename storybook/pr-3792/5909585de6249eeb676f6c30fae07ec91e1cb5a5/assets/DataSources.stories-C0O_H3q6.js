import{j as r}from"./iframe-BW5KWTVf.js";import{O as b}from"./object-table-D_xScRXe.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ChhpczZZ.js";import{u as g}from"./useOsdkClient-DbcEbBVO.js";import"./preload-helper-wTJCuLa0.js";import"./Table-DVjVy5zQ.js";import"./index-DZuHGaZR.js";import"./Dialog-Bcgs7q0X.js";import"./cross-B9jHlUmC.js";import"./svgIconContainer-CGH_b5cs.js";import"./useBaseUiId-djKvr1Zf.js";import"./InternalBackdrop-rE9UXK7e.js";import"./composite-DMJpidK5.js";import"./index-CBnuzy09.js";import"./index-C9GjXNGu.js";import"./index-B3_s8STg.js";import"./useEventCallback-D3_8TWDL.js";import"./SkeletonBar-Dv8azkVh.js";import"./LoadingCell-CFK-23fD.js";import"./ColumnConfigDialog-908I2WCI.js";import"./DraggableList-DdS97684.js";import"./search-BxTonfjS.js";import"./Input-Cuj41dtm.js";import"./useControlled-Bd2lsHY1.js";import"./isEqual-CBzrqXli.js";import"./isObject-UDZU_4OQ.js";import"./Button-CRYDVXLK.js";import"./ActionButton-Buo_yQHB.js";import"./Checkbox-qKxs5cs6.js";import"./useValueChanged-WJiyss_6.js";import"./CollapsiblePanel-BdO59VuU.js";import"./MultiColumnSortDialog-3Z8xlHBg.js";import"./MenuTrigger-CPeUYOFK.js";import"./CompositeItem-BgohVmvL.js";import"./ToolbarRootContext-CiyKClQw.js";import"./getDisabledMountTransitionStyles-Bs-ypZSG.js";import"./getPseudoElementBounds-CJwidu3r.js";import"./chevron-down-cYHAHA60.js";import"./index-BnK0TffT.js";import"./error-BnZI7SXP.js";import"./BaseCbacBanner-2cZzxKzO.js";import"./makeExternalStore-DRWx7nce.js";import"./Tooltip-Ds6XRiL3.js";import"./PopoverPopup-0wn3_1oJ.js";import"./toNumber-BHuF1cBP.js";import"./tick-G9xbPlsl.js";import"./DropdownField-D4osHb18.js";import"./withOsdkMetrics-BeUX7xJv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
