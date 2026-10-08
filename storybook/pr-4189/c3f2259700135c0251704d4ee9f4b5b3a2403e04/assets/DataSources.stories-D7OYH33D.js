import{j as r}from"./iframe-Cuh-yC9g.js";import{O as b}from"./object-table-wHVrjsXR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CXHa78SC.js";import{u as g}from"./useOsdkClient-0vYp7gi6.js";import"./preload-helper-Co1xc5DN.js";import"./Table-BOCORQWQ.js";import"./index-DWUob4WV.js";import"./Dialog-CLhnFK8s.js";import"./cross-BjB39GcZ.js";import"./svgIconContainer-GL6glClw.js";import"./useBaseUiId-Czk2OPtm.js";import"./InternalBackdrop-C4Ajfn1E.js";import"./composite-BCtP-Clm.js";import"./index-3lcaIBPr.js";import"./index-wPALhrfN.js";import"./index-JbFM852B.js";import"./useEventCallback-DUCHvBP3.js";import"./SkeletonBar-AJdj2On-.js";import"./LoadingCell-JuUg-bDY.js";import"./ColumnConfigDialog-B71UfVu_.js";import"./DraggableList-1zBnwzrY.js";import"./search-B0_wC5Cw.js";import"./Input-LmihMdos.js";import"./useControlled-7KsxQpTK.js";import"./Button-B6v4dcvN.js";import"./small-cross-DgWoWQa5.js";import"./ActionButton-DA-iy0n8.js";import"./Checkbox-B1OLVDGO.js";import"./useValueChanged-DOSJ9FDd.js";import"./CollapsiblePanel-DzmzUJIf.js";import"./MultiColumnSortDialog-CbojQAM1.js";import"./MenuTrigger-BHBZAP5o.js";import"./CompositeItem-BJ_X-ts8.js";import"./ToolbarRootContext-D0bBBUnA.js";import"./getDisabledMountTransitionStyles-Cia47Kmq.js";import"./getPseudoElementBounds-9rPRi8u7.js";import"./chevron-down-Bl1gRnzA.js";import"./index-EP_PqEfu.js";import"./error-0z2irTLT.js";import"./BaseCbacBanner-Bnl6rnI0.js";import"./makeExternalStore-BdhPqHms.js";import"./Tooltip-DSUYLnJr.js";import"./PopoverPopup-COd_DNnA.js";import"./debounce-CQG_FcjT.js";import"./tick-0nIkpLfk.js";import"./DropdownField-jqoPL6Hs.js";import"./isEqual-BzyRIl74.js";import"./withOsdkMetrics-2__WXqYS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
