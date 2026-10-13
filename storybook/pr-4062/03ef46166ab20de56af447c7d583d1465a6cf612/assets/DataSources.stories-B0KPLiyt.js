import{j as r}from"./iframe-DTTjhdqf.js";import{O as b}from"./object-table-uXbSHh1x.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BB_l_FZ0.js";import{u as g}from"./useOsdkClient-gEWansJz.js";import"./preload-helper-DLuwwicB.js";import"./Table-C6La8mwf.js";import"./index-C_u0ZD76.js";import"./Dialog-BH3cxv0J.js";import"./cross-Biqxkz0W.js";import"./svgIconContainer-BQTxrAHk.js";import"./useBaseUiId-DAXCLwKK.js";import"./InternalBackdrop-DfoV1fwg.js";import"./composite-DmV5qlv-.js";import"./index-BF1qraTR.js";import"./index-BZqSoOPp.js";import"./index-V7CuNiQt.js";import"./useEventCallback-D0JHLFLo.js";import"./SkeletonBar-CkQh5tX-.js";import"./LoadingCell-DRnc6ZbW.js";import"./ColumnConfigDialog-CrVc4g8l.js";import"./DraggableList-BqAME9U3.js";import"./search-DqqzOunc.js";import"./Input-DIq0Mf7R.js";import"./useControlled-DnFxapfF.js";import"./Button-CVsxv-I0.js";import"./small-cross-q1eH4ZRy.js";import"./ActionButton-Be-L3Hsv.js";import"./Checkbox-DmPGieXK.js";import"./useValueChanged-hEMYJH-e.js";import"./CollapsiblePanel-BLwcFyFu.js";import"./MultiColumnSortDialog-BH_7yvK9.js";import"./MenuTrigger-B2GTQxPn.js";import"./CompositeItem-NevsqKCs.js";import"./ToolbarRootContext-Dcs6ty2M.js";import"./getDisabledMountTransitionStyles-2dTRJBXv.js";import"./getPseudoElementBounds-Ddv_miud.js";import"./chevron-down-DMQn8YNS.js";import"./index-cabLRwho.js";import"./error-9LOJa28H.js";import"./BaseCbacBanner-BYlW8R_8.js";import"./makeExternalStore-FJoYAOnh.js";import"./Tooltip-CYAeZ-OK.js";import"./PopoverPopup-B67nRi_h.js";import"./debounce-DybENE3y.js";import"./tick-CjabrPw4.js";import"./DropdownField-7-WH0W2E.js";import"./isEqual-DZ8BxMaa.js";import"./withOsdkMetrics-BVdsAVYy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
