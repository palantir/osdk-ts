import{j as r}from"./iframe-jYOV-b_F.js";import{O as b}from"./object-table-ER46Kqbv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CRpcx9mR.js";import{u as g}from"./useOsdkClient-vN6DzTqs.js";import"./preload-helper-DU4dp1aN.js";import"./Table-CXyVPfAi.js";import"./index-Dy8g3oXx.js";import"./Dialog-DpEqyY2P.js";import"./cross-CihzmSlG.js";import"./svgIconContainer-CA_JwY2G.js";import"./useBaseUiId-D96OAV6j.js";import"./InternalBackdrop-DVW8uuqD.js";import"./composite-BzmrUUlD.js";import"./index-BeEj2nqC.js";import"./index-ClDKgmxW.js";import"./index-CukOFad8.js";import"./useEventCallback-CNXNkFCl.js";import"./SkeletonBar-DqT3CGGg.js";import"./LoadingCell-ZjH9jQZw.js";import"./ColumnConfigDialog-Dg5oJQCG.js";import"./DraggableList-stnRBhBr.js";import"./search-D-KgauV4.js";import"./Input-BMUKzcaw.js";import"./useControlled-BTG7h9NE.js";import"./Button-CWhgA2iR.js";import"./small-cross-D0bLxDZ1.js";import"./ActionButton-Dpswcr4W.js";import"./Checkbox-CVZRyAn3.js";import"./useValueChanged-DnbYI7cR.js";import"./CollapsiblePanel-BdQ-xqqb.js";import"./MultiColumnSortDialog-JSm3rIAr.js";import"./MenuTrigger-DXF12vt5.js";import"./CompositeItem-kjf0evVY.js";import"./ToolbarRootContext-Cv9is8EX.js";import"./getDisabledMountTransitionStyles-cOn0IGzp.js";import"./getPseudoElementBounds-aXTAgs7l.js";import"./chevron-down-CXyzKCEE.js";import"./index-DpuVJhHU.js";import"./error-DuFL7DmE.js";import"./BaseCbacBanner-DmrBjJVa.js";import"./makeExternalStore-DApOP_f0.js";import"./Tooltip-DJD3gADX.js";import"./PopoverPopup-BPI3lODj.js";import"./debounce-Cc847J6k.js";import"./tick-DkNi67AQ.js";import"./DropdownField-Zx-CWRyR.js";import"./isEqual-l4wrNuCJ.js";import"./withOsdkMetrics-D5SCgg1V.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
