import{j as r}from"./iframe-DyyhsHPN.js";import{O as b}from"./object-table-Cbpj0r1f.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B5nwnh9V.js";import{u as g}from"./useOsdkClient-oeSeXjY9.js";import"./preload-helper-TecF9w53.js";import"./Table-CNKLhBjA.js";import"./index-CvvBsxWW.js";import"./Dialog-DUBU3nXc.js";import"./cross-DpLnPIVs.js";import"./svgIconContainer-g2nhA_co.js";import"./useBaseUiId-BJ6PIN04.js";import"./InternalBackdrop-BngMdUq0.js";import"./composite-Bsp9V2TC.js";import"./index-BbJuL6dd.js";import"./index-CGUIbyJe.js";import"./index-Blnj9NS0.js";import"./useEventCallback-BxrNV8_m.js";import"./SkeletonBar-CFyXvkmW.js";import"./LoadingCell-DfavFaJ0.js";import"./ColumnConfigDialog-Byb5jzNj.js";import"./DraggableList-BcHgLABh.js";import"./search-CPGUiXny.js";import"./Input-DLcXZfv5.js";import"./useControlled-u76uhEJm.js";import"./Button-xW-9IrmO.js";import"./small-cross-CR1TDLwP.js";import"./ActionButton-BPWFDy9w.js";import"./Checkbox-DBJ2rOf5.js";import"./useValueChanged-DhqK6Cgu.js";import"./CollapsiblePanel-F0G2oMiY.js";import"./MultiColumnSortDialog-CFnl3gHS.js";import"./MenuTrigger-C4sLaFn-.js";import"./CompositeItem-COlnvMhp.js";import"./ToolbarRootContext-DTFkxjo1.js";import"./getDisabledMountTransitionStyles-B07p6-VI.js";import"./getPseudoElementBounds-CmtmchTY.js";import"./chevron-down-7VC2t8Hz.js";import"./index-Bb3R8qQ9.js";import"./error-CHS0y63D.js";import"./BaseCbacBanner-DwHDFIk2.js";import"./makeExternalStore-sflRCuNQ.js";import"./Tooltip-C6FTM4hx.js";import"./PopoverPopup-D4mGjEGR.js";import"./debounce-4BLi9EBr.js";import"./tick-3uXgu5u5.js";import"./DropdownField-CtXOtwg0.js";import"./isEqual-BoU7v8bO.js";import"./withOsdkMetrics-DkePQGfR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
