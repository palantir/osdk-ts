import{j as r}from"./iframe-Dz-3bopY.js";import{O as b}from"./object-table-D8yR489M.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-tX5ZcVQD.js";import{u as g}from"./useOsdkClient-m_Y5l7qU.js";import"./preload-helper-DyKBZj2x.js";import"./Table-CahUibj9.js";import"./index-DXk5AkRu.js";import"./Dialog-FsvgbUkz.js";import"./cross-BV1ilYHG.js";import"./svgIconContainer-VUnqKTqj.js";import"./useBaseUiId-DdDMVRT4.js";import"./InternalBackdrop-CMlwDkvu.js";import"./composite-CeOULy3_.js";import"./index-Cd6ys6N0.js";import"./index-CESOHnLX.js";import"./index-uA0pARUc.js";import"./useEventCallback-D89So7L3.js";import"./SkeletonBar-3PFmjfxg.js";import"./LoadingCell-BEG0NZPw.js";import"./ColumnConfigDialog-WoGX3hDh.js";import"./DraggableList-9Fc1iUbs.js";import"./search-C0Oo-5ck.js";import"./Input-BShSfu0I.js";import"./useControlled-BicNl6JT.js";import"./Button-CYhmyUyk.js";import"./small-cross-DvfWpNC5.js";import"./ActionButton-BK1pZ0GM.js";import"./Checkbox-CBxFYnqJ.js";import"./useValueChanged-3FeBMYAh.js";import"./CollapsiblePanel-xME6KYQT.js";import"./MultiColumnSortDialog-Bne2UKW9.js";import"./MenuTrigger-rIcJUvoe.js";import"./CompositeItem-DkOqAvvV.js";import"./ToolbarRootContext-Bdn-bZ42.js";import"./getDisabledMountTransitionStyles-DMtKFpJM.js";import"./getPseudoElementBounds-D-oSHvkB.js";import"./chevron-down-CtwdWDe5.js";import"./index-DDGzWdyM.js";import"./error-DDZrlFGO.js";import"./BaseCbacBanner-DD0s4oL-.js";import"./makeExternalStore-BqALFL7i.js";import"./Tooltip-Bx-YTezY.js";import"./PopoverPopup-B8lHwqHR.js";import"./debounce-D45X2sYK.js";import"./tick-hX-gVzsC.js";import"./DropdownField-DM80qxvU.js";import"./isEqual-DiU5KFAT.js";import"./withOsdkMetrics-CGeg0cBL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
