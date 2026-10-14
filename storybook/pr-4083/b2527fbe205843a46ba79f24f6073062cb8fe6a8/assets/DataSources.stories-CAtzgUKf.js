import{j as r}from"./iframe-rmDWkA_9.js";import{O as b}from"./object-table-B8aHvZpY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bjc8FAQV.js";import{u as g}from"./useOsdkClient-BM6gicWm.js";import"./preload-helper-C9KhRoGp.js";import"./Table-CDkXqsoq.js";import"./index-BJm_TGuS.js";import"./Dialog-DJB2o2QQ.js";import"./cross-2JsEwOCU.js";import"./svgIconContainer-CMH5VHbE.js";import"./useBaseUiId-eTIPtAex.js";import"./InternalBackdrop-DzWBIKbq.js";import"./composite-CfWqZbx5.js";import"./index-H2c6m-1E.js";import"./index-DxDYposm.js";import"./index-De_UCKOS.js";import"./useEventCallback-D8hCo4Qr.js";import"./SkeletonBar-BKZCl3Vr.js";import"./LoadingCell-C9_6aYmb.js";import"./ColumnConfigDialog-DlL3YS6U.js";import"./DraggableList-BVf7hRf8.js";import"./search-C7TYX9ku.js";import"./Input-ByxvWbQj.js";import"./useControlled-J2jUgDlJ.js";import"./Button-CBc549Tl.js";import"./small-cross-Bj93jEWq.js";import"./ActionButton-fx9WgCVG.js";import"./Checkbox-D7Kuup1h.js";import"./useValueChanged-Cj7F5rYS.js";import"./CollapsiblePanel-BAWkr6_y.js";import"./MultiColumnSortDialog-QVlbyCZ0.js";import"./MenuTrigger-DHmlKjKL.js";import"./CompositeItem-CbLxl7fO.js";import"./ToolbarRootContext-BXp0BN9t.js";import"./getDisabledMountTransitionStyles-B9EO47QZ.js";import"./getPseudoElementBounds-2-r7YzfT.js";import"./chevron-down-BX-4AcWo.js";import"./index-DnhRAwMR.js";import"./error-xYNFBZUd.js";import"./BaseCbacBanner-BAA703FJ.js";import"./makeExternalStore-CTIqcnCN.js";import"./Tooltip-fR1RcwZF.js";import"./PopoverPopup-4q2X5f4w.js";import"./debounce-BvKRQopC.js";import"./tick-CuO5iyTL.js";import"./DropdownField-m3ZbFk-Q.js";import"./isEqual-DdDr95hp.js";import"./withOsdkMetrics-f5SdKW_u.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
