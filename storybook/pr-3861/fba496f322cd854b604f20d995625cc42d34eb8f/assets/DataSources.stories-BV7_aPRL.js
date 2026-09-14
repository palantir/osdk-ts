import{j as r}from"./iframe-Uo3dslN8.js";import{O as b}from"./object-table-xo8-ePPK.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-7bjLmtw6.js";import{u as g}from"./useOsdkClient-CZ5jAc54.js";import"./preload-helper-Di20YyVw.js";import"./Table-Bj185Q2M.js";import"./index-DM2i2mIv.js";import"./Dialog-DPSIYe0q.js";import"./cross-CtSgYx1A.js";import"./svgIconContainer-CCPA44UG.js";import"./useBaseUiId-BMW1tYuT.js";import"./InternalBackdrop-Cawem0xc.js";import"./composite-CJL7rGjP.js";import"./index-BjmUJLrE.js";import"./index-DNOgt9xG.js";import"./index-AMq3qfnV.js";import"./useEventCallback-DuKH2Kse.js";import"./SkeletonBar-hMMVmlwX.js";import"./LoadingCell-DbCXbulB.js";import"./ColumnConfigDialog-CJtYLyJh.js";import"./DraggableList-BOsu8b6O.js";import"./search-DMwUXAz4.js";import"./Input-COrEd_bS.js";import"./useControlled-DxDhJC_G.js";import"./Button-CVEJXnPN.js";import"./small-cross-23YS3Wdy.js";import"./ActionButton-C5Zbzrcj.js";import"./Checkbox-F4EIPJKJ.js";import"./useValueChanged-DKndpPjF.js";import"./CollapsiblePanel-BMUw2sen.js";import"./MultiColumnSortDialog-BhY76eSz.js";import"./MenuTrigger-DNYd3FuB.js";import"./CompositeItem-CwindMm_.js";import"./ToolbarRootContext-CpVoG4Hd.js";import"./getDisabledMountTransitionStyles-DjGcX-z1.js";import"./getPseudoElementBounds-B1qmsDI-.js";import"./chevron-down-CCfCID7b.js";import"./index-DmI8cFxT.js";import"./error-Suxt282O.js";import"./BaseCbacBanner-BTXRf756.js";import"./makeExternalStore-BoTJ6suj.js";import"./Tooltip-B4ethV14.js";import"./PopoverPopup-BHKbeMsS.js";import"./debounce-BaKAl05r.js";import"./tick-W4zHdn4i.js";import"./DropdownField-S1rKLw4k.js";import"./isEqual-1lbKKA-o.js";import"./withOsdkMetrics-BYDhROpI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
