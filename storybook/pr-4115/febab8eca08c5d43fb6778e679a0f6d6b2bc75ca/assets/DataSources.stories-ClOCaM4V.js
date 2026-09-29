import{j as r}from"./iframe-DJpO_6mK.js";import{O as b}from"./object-table-B2dN-LCc.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C7apMZwr.js";import{u as g}from"./useOsdkClient-B5AQFXxh.js";import"./preload-helper-GI-tMhcV.js";import"./Table-Dg3D6S30.js";import"./index-Da0zq60o.js";import"./Dialog-SMe1UAwu.js";import"./cross-7wx910Yp.js";import"./svgIconContainer-BXariDMs.js";import"./useBaseUiId-V4YDTLU-.js";import"./InternalBackdrop-C73rlr0M.js";import"./composite-BF9Swh2Y.js";import"./index-Lks_ei54.js";import"./index-THQXJEcW.js";import"./index-CoNUXFpY.js";import"./useEventCallback-BqBJVn3L.js";import"./SkeletonBar-B9TWtrAf.js";import"./LoadingCell-D0pm2UJs.js";import"./ColumnConfigDialog-BXqg7A2E.js";import"./DraggableList-BupV1NOa.js";import"./search-yqKQokLr.js";import"./Input-DGLD7TKX.js";import"./useControlled-qKe1fmb3.js";import"./Button-CwysH2z4.js";import"./small-cross-BCt-wViZ.js";import"./ActionButton-wdIB-PMi.js";import"./Checkbox-D0UVX6R0.js";import"./useValueChanged-D5XUhKWQ.js";import"./CollapsiblePanel-BI6lLrWz.js";import"./MultiColumnSortDialog-UPP_Mqyi.js";import"./MenuTrigger-FkklsD17.js";import"./CompositeItem-9_63dtCO.js";import"./ToolbarRootContext-BlqCCViI.js";import"./getDisabledMountTransitionStyles-BVq8IuaH.js";import"./getPseudoElementBounds-DvuhtSAs.js";import"./chevron-down-BVx0EdZG.js";import"./index-DplCgUMJ.js";import"./error-xwSiXxIa.js";import"./BaseCbacBanner-lBQW8ZlB.js";import"./makeExternalStore-DoNjT8AE.js";import"./Tooltip-Df3DP3K9.js";import"./PopoverPopup-DsCmiqgE.js";import"./debounce-8z5zliAt.js";import"./tick-C6jkrubs.js";import"./DropdownField-QCgrRwcb.js";import"./isEqual-CUL7d5KT.js";import"./withOsdkMetrics-CaCBUU14.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
