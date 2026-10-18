import{j as r}from"./iframe-sYP-l0_a.js";import{O as b}from"./object-table-iZFECS6W.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dd5_GLYW.js";import{u as g}from"./useOsdkClient-D0mwHTqt.js";import"./preload-helper-IUxRucnJ.js";import"./Table-BUHzV8yp.js";import"./index-BQi0o8Ch.js";import"./Dialog-BFHYyj12.js";import"./cross-Bm2pwBEc.js";import"./svgIconContainer-BEJydEi7.js";import"./useBaseUiId-Btvm4iEK.js";import"./InternalBackdrop-DijQJX9k.js";import"./composite-C-aQf2ph.js";import"./index-C0H-vXi6.js";import"./index-mlL1YxFR.js";import"./index-xLQRXt-V.js";import"./useEventCallback-D6BPXVKE.js";import"./SkeletonBar-CVV4GeGn.js";import"./LoadingCell-CLgAP5VW.js";import"./ColumnConfigDialog-S0lCM_Th.js";import"./DraggableList-GiPYuzSS.js";import"./search-DLv6CrwK.js";import"./Input-CSh4Ffdb.js";import"./useControlled-BPCLqxL9.js";import"./Button-B9jbca7B.js";import"./small-cross-BNetlOJK.js";import"./ActionButton-Df-gBOsA.js";import"./Checkbox-CnEZTfwt.js";import"./useValueChanged-g9YxF3UY.js";import"./CollapsiblePanel-uVWOXX9u.js";import"./MultiColumnSortDialog-BMqK2Mpk.js";import"./MenuTrigger-Qyu7kn7x.js";import"./CompositeItem-7yi4DVr9.js";import"./ToolbarRootContext-BoQIBGO1.js";import"./getDisabledMountTransitionStyles-BeyRbu5X.js";import"./getPseudoElementBounds-Bi5n7pX-.js";import"./chevron-down-BmV5GZMn.js";import"./index-00-MRRTX.js";import"./error-DO2C4OtK.js";import"./BaseCbacBanner-kLI1EgfT.js";import"./makeExternalStore-CFZXdEl0.js";import"./Tooltip-C6Jo1h3u.js";import"./PopoverPopup-0_cMUPX-.js";import"./debounce-DXz0GdeZ.js";import"./tick-X4dvwp5-.js";import"./DropdownField-YTr0JAyw.js";import"./isEqual-Bf2UhZVY.js";import"./withOsdkMetrics-2D2ceNeO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
