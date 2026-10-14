import{j as r}from"./iframe-D-ZGqhox.js";import{O as b}from"./object-table-DjGi5wvU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CCfs0eat.js";import{u as g}from"./useOsdkClient-_IYUYQJJ.js";import"./preload-helper-BHmHhg6q.js";import"./Table-SgKDRKfa.js";import"./index-DMbZcvzJ.js";import"./Dialog-DjOrzyf2.js";import"./cross-C-5SE6cr.js";import"./svgIconContainer-DynaZTrl.js";import"./useBaseUiId-UHE7cq6V.js";import"./InternalBackdrop-C63SxHNb.js";import"./composite-BwjOgotZ.js";import"./index-LOlNiB8m.js";import"./index-BaNxBZm4.js";import"./index-DGIXwIHP.js";import"./useEventCallback-CBryEak9.js";import"./SkeletonBar-BP7hF3Zr.js";import"./LoadingCell-B8_ljK48.js";import"./ColumnConfigDialog-Wnv2YTUh.js";import"./DraggableList-Diafxmz7.js";import"./search-Df3zpGfV.js";import"./Input-Cb6mwwI7.js";import"./useControlled-DZViTlY6.js";import"./Button-BX_hSGAP.js";import"./small-cross-zLLYVOtd.js";import"./ActionButton-BTMY82P_.js";import"./Checkbox-Stmc3Nfw.js";import"./useValueChanged-B65vtIly.js";import"./CollapsiblePanel-DTrAe8QH.js";import"./MultiColumnSortDialog-dSGIxCbt.js";import"./MenuTrigger-D2cmTfVi.js";import"./CompositeItem-BUGdCkRP.js";import"./ToolbarRootContext-C0KaRFai.js";import"./getDisabledMountTransitionStyles-BrJtjLyN.js";import"./getPseudoElementBounds-Ds3bNVw-.js";import"./chevron-down-TA05iMki.js";import"./index-DtE8_iZZ.js";import"./error-I7Ps8uLh.js";import"./BaseCbacBanner-5SFPBYFJ.js";import"./makeExternalStore-BUNud_OP.js";import"./Tooltip-DsJKDnDl.js";import"./PopoverPopup-DmqcRuFP.js";import"./debounce-CEBh1i8u.js";import"./tick-Cm9W0Mqj.js";import"./DropdownField-WB5QGntE.js";import"./isEqual-DYkX0s92.js";import"./withOsdkMetrics-CNUwJgZ9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
