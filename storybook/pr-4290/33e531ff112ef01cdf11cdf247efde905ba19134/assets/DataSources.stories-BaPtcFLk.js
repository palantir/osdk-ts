import{j as r}from"./iframe-D8AA8tZ5.js";import{O as b}from"./object-table-CUTwSbYW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ctsfPTyJ.js";import{u as g}from"./useOsdkClient-F0ZDWn2o.js";import"./preload-helper-BH6-9HD1.js";import"./Table-DjXGvDTg.js";import"./index-CukSKf6K.js";import"./Dialog-BSmb9RPZ.js";import"./cross-hRHI0Bet.js";import"./svgIconContainer-M2XD2W51.js";import"./useBaseUiId-DoN4Gm5G.js";import"./InternalBackdrop-Cf7I9NhM.js";import"./composite-BXcEZn4p.js";import"./index-BngeOfUA.js";import"./index-Beb-N8jB.js";import"./index-B03lQs5E.js";import"./useEventCallback-C9xuvvfm.js";import"./SkeletonBar-C33imfSE.js";import"./LoadingCell-CDMvjUON.js";import"./ColumnConfigDialog-X57iMmwI.js";import"./DraggableList-CFcAs5JA.js";import"./search-g_GQHQvF.js";import"./Input-CB7rgA9u.js";import"./useControlled-B43d18Tf.js";import"./Button-DM4RbJ0A.js";import"./small-cross-BPpJlDWz.js";import"./ActionButton-0Dyhpxhu.js";import"./Checkbox-BxtIZFPA.js";import"./useValueChanged-DNIrywMU.js";import"./CollapsiblePanel-BDhpShGL.js";import"./MultiColumnSortDialog-KIiGluw1.js";import"./MenuTrigger-CsnyxN3G.js";import"./CompositeItem-DyTH_2rH.js";import"./ToolbarRootContext-BfpPUsVU.js";import"./getDisabledMountTransitionStyles-tQXpWGZy.js";import"./getPseudoElementBounds-CD0IqPws.js";import"./chevron-down-CUVA2CdW.js";import"./index-DdNWZRPv.js";import"./error-CvnJxzc0.js";import"./BaseCbacBanner-BMTvQ5dO.js";import"./makeExternalStore-CuMj3UXB.js";import"./Tooltip-DaRA4zwN.js";import"./PopoverPopup-B5uG5joS.js";import"./debounce-DEqKAPEE.js";import"./tick-vp302nI_.js";import"./DropdownField-BB9zKVZW.js";import"./isEqual-CR-tYD22.js";import"./withOsdkMetrics-BRgNGg7P.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
