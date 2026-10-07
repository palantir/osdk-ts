import{j as r}from"./iframe-CDX-NTfD.js";import{O as b}from"./object-table-_hz3q5Et.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-pDpC7Gbb.js";import{u as g}from"./useOsdkClient-ZKN6ZGl4.js";import"./preload-helper-CSvLju02.js";import"./Table-D5yx9evC.js";import"./index-D6xAz9PB.js";import"./Dialog-G0b2VcwQ.js";import"./cross-CUWzhEFb.js";import"./svgIconContainer-99TPvqBc.js";import"./useBaseUiId-CM3Yhx5P.js";import"./InternalBackdrop-DiaJjHCs.js";import"./composite-CpWLo2c3.js";import"./index-qkQ_SGyl.js";import"./index-DmFJgdYe.js";import"./index-B2Z1_nfV.js";import"./useEventCallback-Cd_Dk0li.js";import"./SkeletonBar-Dt_qbNYC.js";import"./LoadingCell-GRxU-9a2.js";import"./ColumnConfigDialog-Dnjip8-F.js";import"./DraggableList-Dj-x_Sxv.js";import"./search-DvrI77MS.js";import"./Input-Dz-cSGCu.js";import"./useControlled-CLUlXrHb.js";import"./Button-CscfG-hh.js";import"./small-cross-5qXULdiz.js";import"./ActionButton-bEISj8yJ.js";import"./Checkbox-De-raZKJ.js";import"./useValueChanged-CsNJxGB2.js";import"./CollapsiblePanel-OIYRVxIj.js";import"./MultiColumnSortDialog-DMiLKeyK.js";import"./MenuTrigger-CabmK2Fj.js";import"./CompositeItem-nsBHK6f-.js";import"./ToolbarRootContext-BX6M6ShK.js";import"./getDisabledMountTransitionStyles-DJOApo6o.js";import"./getPseudoElementBounds-Dfao8WFR.js";import"./chevron-down-r7sEOhf_.js";import"./index-DTEUSjqo.js";import"./error-BplB6VbP.js";import"./BaseCbacBanner-P7JgUlKM.js";import"./makeExternalStore-DXrOIATy.js";import"./Tooltip-BVBB5Hov.js";import"./PopoverPopup-BLtOX9gX.js";import"./debounce-D1B6swv0.js";import"./tick-BHhyW78u.js";import"./DropdownField-CQBpCIOv.js";import"./isEqual-BdXiBc78.js";import"./withOsdkMetrics-CUdmlJda.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
