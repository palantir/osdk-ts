import{j as r}from"./iframe-B5lqcjqD.js";import{O as b}from"./object-table-CUi82Gz7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Duxorf9s.js";import{u as g}from"./useOsdkClient-mF5eaEzP.js";import"./preload-helper-CRQgFnVN.js";import"./Table-BIOpUksl.js";import"./index-CRsh17Vx.js";import"./Dialog-pNi0EjWd.js";import"./cross-DHsl6guL.js";import"./svgIconContainer-D6KCVgJj.js";import"./useBaseUiId-oknajK1z.js";import"./InternalBackdrop-BvHcPsAz.js";import"./composite-Cre9O_Y6.js";import"./index-yNr1-X6F.js";import"./index-C8V2J7Cn.js";import"./index-ClLOYYyH.js";import"./useEventCallback-C8huiUaV.js";import"./SkeletonBar-DQfYLsyN.js";import"./LoadingCell-D7B8f3z3.js";import"./ColumnConfigDialog-DTZTcXlo.js";import"./DraggableList-CP9FYccH.js";import"./search-Be9RJwWO.js";import"./Input-CZpiyJ1w.js";import"./useControlled-Dh0gZz2O.js";import"./Button-BS6My4W_.js";import"./small-cross-CYPA47ez.js";import"./ActionButton-QVbQttp6.js";import"./Checkbox-CidKTG-Z.js";import"./useValueChanged-ah5CBoLN.js";import"./CollapsiblePanel-rMdaxvYS.js";import"./MultiColumnSortDialog-Bv5mhlIZ.js";import"./MenuTrigger-VcmxL_4h.js";import"./CompositeItem-DEsHBn0r.js";import"./ToolbarRootContext-LzdOjhLO.js";import"./getDisabledMountTransitionStyles-BOwpTiKH.js";import"./getPseudoElementBounds-TZ-hmbJ3.js";import"./chevron-down-BAMUeMPH.js";import"./index-DBPktzPX.js";import"./error-hbt_Js5f.js";import"./BaseCbacBanner-B-UrZJ5M.js";import"./makeExternalStore-D04mQ5d-.js";import"./Tooltip-DSNJDxmy.js";import"./PopoverPopup-cEQUdM63.js";import"./debounce-BxC1HvQJ.js";import"./tick-Cz1YHSYQ.js";import"./DropdownField-dMvSytG-.js";import"./isEqual-BvOtC8Tw.js";import"./withOsdkMetrics-J94G_2em.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
