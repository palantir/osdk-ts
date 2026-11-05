import{j as r}from"./iframe-C0wU5abY.js";import{O as b}from"./object-table-Dhvjm-ye.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B8TBX6an.js";import{u as g}from"./useOsdkClient-pdCcjq0j.js";import"./preload-helper-DBF01-cG.js";import"./Table-Cs4nAklZ.js";import"./index-BLQzpxSF.js";import"./Dialog-H4eq0_bB.js";import"./cross-DjbVostP.js";import"./svgIconContainer-CMAKke71.js";import"./useBaseUiId-D1MC7GbA.js";import"./InternalBackdrop-BXvP6ib-.js";import"./composite-BoBrXPGo.js";import"./index-Ca4Lp3-b.js";import"./index-VDAEj1qs.js";import"./index-BwUmCcfv.js";import"./useEventCallback-eLcMhxZ3.js";import"./SkeletonBar-DtDAen1t.js";import"./LoadingCell-BwjVkPe8.js";import"./ColumnConfigDialog-Dkky9xjY.js";import"./DraggableList-BWlSR2rj.js";import"./search-Kac11RBU.js";import"./Input-CuYpucpk.js";import"./useControlled-jkUj0hrw.js";import"./Button-w-E8GgnT.js";import"./small-cross-Bvw5RS_6.js";import"./ActionButton-V_luHs6O.js";import"./Checkbox-CdSA0-13.js";import"./useValueChanged-1ACDE08l.js";import"./CollapsiblePanel-C7mj3pNQ.js";import"./MultiColumnSortDialog-CfkjEdsm.js";import"./MenuTrigger-DbXogBZY.js";import"./CompositeItem-Bqkqz40D.js";import"./ToolbarRootContext-CLHzdGXk.js";import"./getDisabledMountTransitionStyles-JrYbFoOK.js";import"./getPseudoElementBounds-DzWEJrnK.js";import"./chevron-down-BwqCCX_Z.js";import"./index-BPOkQniY.js";import"./error-B8Sv0Q4K.js";import"./BaseCbacBanner-D6FwOIx9.js";import"./makeExternalStore-DkrbDLqh.js";import"./Tooltip-BFq4U8nM.js";import"./isObject-D89gReL0.js";import"./debounce-_3Ys135D.js";import"./tick-Cow3RRx-.js";import"./DropdownField-CDiu5HIy.js";import"./isEqual-BuhfY4F8.js";import"./_baseIsEqual-u28xBK7e.js";import"./withOsdkMetrics-CY3k4xQQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
