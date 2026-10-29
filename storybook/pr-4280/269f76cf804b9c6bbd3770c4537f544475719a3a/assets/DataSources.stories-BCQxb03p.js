import{j as r}from"./iframe-CVTk1lj6.js";import{O as b}from"./object-table-DeY0TTvR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-8rq3ipNA.js";import{u as g}from"./useOsdkClient-BHkZYH7e.js";import"./preload-helper-Ch_NUblH.js";import"./Table-DjIqmaqB.js";import"./index-Ca2wp4d3.js";import"./Dialog-D6kqFDaT.js";import"./cross-Dl6Djxwv.js";import"./svgIconContainer-BlxLcGWd.js";import"./useBaseUiId-ChhYdebi.js";import"./InternalBackdrop-Bx1r6uX2.js";import"./composite-CaJc-JUa.js";import"./index-D-pc5yxy.js";import"./index-B2mOMAcR.js";import"./index-DqbUxBef.js";import"./useEventCallback-2fHMqE-X.js";import"./SkeletonBar-9hrTtidV.js";import"./LoadingCell-DbYz7K5S.js";import"./ColumnConfigDialog-DMAdkIvV.js";import"./DraggableList-DxwabyCC.js";import"./search-Cr_k9lr1.js";import"./Input-DUWZnL0B.js";import"./useControlled-7LT5KU92.js";import"./Button-B65aTlIJ.js";import"./small-cross-q8kmKQY9.js";import"./ActionButton-D9pZWND8.js";import"./Checkbox-CJIwABxG.js";import"./useValueChanged-D4uMe9lc.js";import"./CollapsiblePanel-DLLCHJa6.js";import"./MultiColumnSortDialog-CK_2OU68.js";import"./MenuTrigger-C6jc1bQz.js";import"./CompositeItem-CwoHKheb.js";import"./ToolbarRootContext-Bdz2jmkC.js";import"./getDisabledMountTransitionStyles-CrlG27jh.js";import"./getPseudoElementBounds-CexEIoIE.js";import"./chevron-down-DNy2-Jwx.js";import"./index-B9pgwjc0.js";import"./error-DD1GLIG6.js";import"./BaseCbacBanner-CvmD8xvD.js";import"./makeExternalStore-BoZqRL7K.js";import"./Tooltip-B6hZPcYj.js";import"./PopoverPopup-KhpH8XWr.js";import"./debounce-DgMBLlid.js";import"./tick-tvKtyq-H.js";import"./DropdownField-WGqgGQOQ.js";import"./isEqual-BXFDGQEx.js";import"./withOsdkMetrics-COaPxDqK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
