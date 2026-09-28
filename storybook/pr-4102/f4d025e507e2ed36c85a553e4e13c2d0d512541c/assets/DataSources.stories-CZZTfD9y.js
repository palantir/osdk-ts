import{j as r}from"./iframe-DzwZADhG.js";import{O as b}from"./object-table-Dwzpl75F.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C-tfZAC9.js";import{u as g}from"./useOsdkClient-Bcfw9ABs.js";import"./preload-helper-D4CIUPhb.js";import"./Table-6dLVRPa5.js";import"./index-bPezx-Jx.js";import"./Dialog-Du3oLVzS.js";import"./cross-CyC5zJCO.js";import"./svgIconContainer-BcCLnS_P.js";import"./useBaseUiId-DCeowPEc.js";import"./InternalBackdrop-7GfKZLnu.js";import"./composite-C5aR63In.js";import"./index-C3Zy7bdQ.js";import"./index-60H3em-G.js";import"./index-fs5uzBtp.js";import"./useEventCallback-BgizjaWh.js";import"./SkeletonBar-BqhJV5fe.js";import"./LoadingCell-C3mdCADn.js";import"./ColumnConfigDialog-BImV6QDz.js";import"./DraggableList-CL9k6jCW.js";import"./search-BQh3drJY.js";import"./Input-DGm0m1Rw.js";import"./useControlled-BKgOzc4N.js";import"./Button-C5a400vo.js";import"./small-cross-BntxIJHG.js";import"./ActionButton-C4IuHmgY.js";import"./Checkbox-lesEYiMr.js";import"./useValueChanged-DWY6JLGG.js";import"./CollapsiblePanel-B4Pk77Ax.js";import"./MultiColumnSortDialog-Er-0sFD2.js";import"./MenuTrigger-C-YFBDVp.js";import"./CompositeItem-Cis4rFWY.js";import"./ToolbarRootContext-DiUMk1ef.js";import"./getDisabledMountTransitionStyles-B_8U1y7w.js";import"./getPseudoElementBounds-7YMOYGeg.js";import"./chevron-down-CZ1AUZYm.js";import"./index-D8Hs_QlL.js";import"./error-CM-fSgTg.js";import"./BaseCbacBanner-CI6fVmW5.js";import"./makeExternalStore-BH_h44UZ.js";import"./Tooltip-Dz_U-nPI.js";import"./PopoverPopup-BYq4gPbC.js";import"./debounce-CBG8-OsC.js";import"./tick-cw0PuptU.js";import"./DropdownField-thhnnQzj.js";import"./isEqual-BfQd3P5k.js";import"./withOsdkMetrics-BnNJyFKx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
