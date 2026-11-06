import{j as r}from"./iframe-D8PhF-eH.js";import{O as b}from"./object-table-QJ3HK8Pr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C-dkSFYL.js";import{u as g}from"./useOsdkClient-Bm-QDIWM.js";import"./preload-helper-BAjhLXlD.js";import"./Table-CcECbzZu.js";import"./index-GeJSxn-b.js";import"./Dialog-C7slmPym.js";import"./cross-B-SWIjS0.js";import"./svgIconContainer-B9myFr8z.js";import"./useBaseUiId-B7vHmMIX.js";import"./InternalBackdrop-CDjt8EEZ.js";import"./composite-D3ANHq5C.js";import"./index-BjXCP1BI.js";import"./index-C2YCUhpZ.js";import"./index-2ug0u_LS.js";import"./useEventCallback-ajaCVaB8.js";import"./SkeletonBar-CAeyHB0y.js";import"./LoadingCell-D3HWPBCC.js";import"./ColumnConfigDialog-Ba_XCAXP.js";import"./DraggableList-DIfW0b4S.js";import"./search-CFo5JCpY.js";import"./Input-BVLD4pm0.js";import"./useControlled-Bb2LNbVb.js";import"./Button-DJIgkoJK.js";import"./small-cross-BD-mjh3z.js";import"./ActionButton-fOJ3EwAB.js";import"./Checkbox-bKsOVh7f.js";import"./useValueChanged-ByyRkrNk.js";import"./CollapsiblePanel-D_tXI55U.js";import"./MultiColumnSortDialog-CivCxfQ-.js";import"./MenuTrigger-CTHzCvWg.js";import"./CompositeItem-hs5t7L4r.js";import"./ToolbarRootContext-CfxpKT0G.js";import"./getDisabledMountTransitionStyles-CooKzbU3.js";import"./getPseudoElementBounds-BQakqMd3.js";import"./chevron-down-egnrEsvE.js";import"./index-3jm-2kpZ.js";import"./error-odhwE47h.js";import"./BaseCbacBanner-BLVhN8ZM.js";import"./makeExternalStore-XQeLMI6O.js";import"./Tooltip-BhGdix3S.js";import"./isObject-Ebfvx2IJ.js";import"./debounce-DR7aSozX.js";import"./tick-ChgibA9T.js";import"./DropdownField-D1QY-U9Y.js";import"./isEqual-C80WN2k0.js";import"./_baseIsEqual-3sETV58K.js";import"./withOsdkMetrics-BIKp0vOQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
