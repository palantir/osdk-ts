import{j as r}from"./iframe-EQYHZGCW.js";import{O as b}from"./object-table-D9hNiE1B.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-dpyD1To0.js";import{u as g}from"./useOsdkClient-CuIzd9gl.js";import"./preload-helper-D0iBIgcV.js";import"./Table-Cf4en3W7.js";import"./index-DcRUH42g.js";import"./Dialog-D9xIFL2n.js";import"./cross-C8-00d-y.js";import"./svgIconContainer-D1wDh7_l.js";import"./useBaseUiId-B-jRpzmU.js";import"./InternalBackdrop-eYIHjnQ3.js";import"./composite-CIqX99J4.js";import"./index-CKjEOO1w.js";import"./index-CIgaZG3c.js";import"./index-D0Wo5FO3.js";import"./useEventCallback-BSME_xf2.js";import"./SkeletonBar-3kB07n5e.js";import"./LoadingCell-lCcSsnES.js";import"./ColumnConfigDialog-DXmrsezo.js";import"./DraggableList-BL7JJ4PT.js";import"./search-BVTqMz5e.js";import"./Input-C4K0OIlf.js";import"./useControlled-D8_Vw_1O.js";import"./Button-DiwOmMcV.js";import"./small-cross-CbxvG1Lp.js";import"./ActionButton-3hxbNss0.js";import"./Checkbox-ERk9uuCO.js";import"./useValueChanged-DhKLyqGQ.js";import"./CollapsiblePanel-BfN11z03.js";import"./MultiColumnSortDialog-Cze2u-4H.js";import"./MenuTrigger-CEzznRiL.js";import"./CompositeItem-Bzt8qu7P.js";import"./ToolbarRootContext-DFyHSe1V.js";import"./getDisabledMountTransitionStyles-DstXpz2X.js";import"./getPseudoElementBounds-B45YCg5U.js";import"./chevron-down-HP5bea9D.js";import"./index-DVNPKMaj.js";import"./error-Cd2sdUKV.js";import"./BaseCbacBanner-B4yymivw.js";import"./makeExternalStore-CxRQlBs2.js";import"./Tooltip-D1rS0CVa.js";import"./PopoverPopup-wEOR7HLL.js";import"./debounce-EHAoHJMy.js";import"./tick-DTY36Y1v.js";import"./DropdownField-Dyd5qMS9.js";import"./isEqual-D4DzFFxH.js";import"./withOsdkMetrics-Dwt30EQ7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
