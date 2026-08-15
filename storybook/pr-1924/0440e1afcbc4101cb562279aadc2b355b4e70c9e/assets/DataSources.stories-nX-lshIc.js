import{j as r}from"./iframe-DHWh16X0.js";import{O as b}from"./object-table-DAbsA5PW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CqzYWUXV.js";import{u as g}from"./useOsdkClient-BmUHRCNB.js";import"./preload-helper-CsMbAkrZ.js";import"./Table-B_H74Mo5.js";import"./index-EFIkBK0s.js";import"./Dialog-DOovsxfV.js";import"./cross-BclIt3wI.js";import"./svgIconContainer-QMaziiJ4.js";import"./useBaseUiId-CXEibAEQ.js";import"./InternalBackdrop-iZCd9FIB.js";import"./composite-tY4yE9Ik.js";import"./index-DZ3wCjjT.js";import"./index-BzT39WQ1.js";import"./index-OHk2TEvp.js";import"./useEventCallback-CFsJyHsQ.js";import"./SkeletonBar-BlJYFG81.js";import"./LoadingCell-Bz3wen_t.js";import"./ColumnConfigDialog-C2uZ7fP0.js";import"./DraggableList-D8z_FKqA.js";import"./search-CVsDG0lr.js";import"./Input-CErdghMM.js";import"./useControlled-Do1VjKsf.js";import"./Button-kRRLhT0h.js";import"./small-cross-BFNfkq-P.js";import"./ActionButton-GS4dBomP.js";import"./Checkbox-BAcXSDKE.js";import"./useValueChanged-B_yuBVxb.js";import"./CollapsiblePanel-C2dptN9G.js";import"./MultiColumnSortDialog-DzDXjAjN.js";import"./MenuTrigger-C8U6EMiR.js";import"./CompositeItem-DpZ7DPTP.js";import"./ToolbarRootContext-BomQbyQ9.js";import"./getDisabledMountTransitionStyles-CoX1zJYc.js";import"./getPseudoElementBounds-CvyqUhgM.js";import"./chevron-down-Co2wTi8S.js";import"./index-BrQ95iqV.js";import"./error-06ET36ME.js";import"./BaseCbacBanner-DhCUB6kw.js";import"./makeExternalStore-CRShQ3yp.js";import"./Tooltip-B04aXvOe.js";import"./PopoverPopup-X70xNO2C.js";import"./debounce-Db6BCj8m.js";import"./tick-D83m4_aJ.js";import"./DropdownField-Bak4Vaav.js";import"./isEqual-Bl3OYj3-.js";import"./withOsdkMetrics-C4DH-JGk.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
