import{j as r}from"./iframe-CpHLFs-j.js";import{O as b}from"./object-table-BG29GeR4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-SX8lS6I8.js";import{u as g}from"./useOsdkClient-BbD9fywh.js";import"./preload-helper-Cx-Hj9ji.js";import"./Table-DHh5DJrx.js";import"./index-CW31sxVo.js";import"./Dialog-CjH99TMo.js";import"./cross-BMDhbGFA.js";import"./svgIconContainer-DJggAQ_8.js";import"./useBaseUiId-BBJe7HZ5.js";import"./InternalBackdrop-CHxyyeuy.js";import"./composite-Bb9xsxZ2.js";import"./index-BwGfwj9E.js";import"./index-D9rBAzJN.js";import"./index-B5E7rOF0.js";import"./useEventCallback-VriGb282.js";import"./SkeletonBar-w38sk0nV.js";import"./LoadingCell-B0zpyYf5.js";import"./ColumnConfigDialog-CaXzHV4W.js";import"./DraggableList-CdkW8wkH.js";import"./search-Dk5Mmea1.js";import"./Input-NmfJ6xcB.js";import"./useControlled-CU11-enl.js";import"./isEqual-CutVO7k5.js";import"./isObject-D2XlcjpL.js";import"./Button-DIETzomk.js";import"./ActionButton-ul0M5wXt.js";import"./Checkbox-BKaZSLRi.js";import"./useValueChanged-CFaYTh5g.js";import"./CollapsiblePanel-CJpYUV1y.js";import"./MultiColumnSortDialog-D_eBdYA3.js";import"./MenuTrigger-Bh2VvTmF.js";import"./CompositeItem-BCOuwNbL.js";import"./ToolbarRootContext-DLyGA8_p.js";import"./getDisabledMountTransitionStyles-DTudamhk.js";import"./getPseudoElementBounds-Rlm7eOUv.js";import"./chevron-down-BHWF8sCh.js";import"./index-DrQ_7o0H.js";import"./error-CJHQsKq8.js";import"./BaseCbacBanner-BIspY_8u.js";import"./makeExternalStore-qrCwPWzZ.js";import"./Tooltip-BrPhE4PX.js";import"./PopoverPopup-DDxX24TR.js";import"./toNumber-DvEoKfvv.js";import"./tick-DbZpgMGy.js";import"./DropdownField-CjbCjEN6.js";import"./withOsdkMetrics-dGfsU2Pa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
